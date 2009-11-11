using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Drawing;
using System.IO;
using System.Diagnostics;

namespace CmdMents
{
    static class Program
    {
        private const string quote = "\"";
        private static IEnumerable<Type> commandmentTypes;
        private static IEnumerable<CommandmentBase> commandments;

        /// <summary>
        /// Generates and displays the current commandment graph, along with basic statistics and next steps.
        /// </summary>
        /// <param name="args">Unused.</param>
        private static void Main(string[] args)
        {
            commandmentTypes = (from type in typeof(CommandmentBase).Assembly.GetTypes()
                                where typeof(CommandmentBase).IsAssignableFrom(type) && !type.IsAbstract
                                select type).ToArray();
            commandments = commandmentTypes.Select(cmdType => CommandmentBase.CreateInstance(cmdType));

            EnsureNoDuplicates();
            PrintStatistics();
            PrintNextCommandmentsToBeMapped();
            GenerateCommandmentsHierarchyImage();

            Console.WriteLine();
            Console.WriteLine("Press any key to exit.");
            Console.ReadKey(true);
        }

        /// <summary>
        /// Generates the internal graph, outputs it for rendering, and displays the rendered image.
        /// </summary>
        private static void GenerateCommandmentsHierarchyImage()
        {
            var builder = new StringBuilder();
            foreach (var item in BuildCommandmentsHierarchy())
            {
                builder.AppendLine(item);
            }

            var imagePath = CreateImageFromDotInstructions(builder.ToString());
            Process.Start(imagePath);
        }

        /// <summary>
        /// Displays some basic statistics relative to the commandments currently entered.
        /// </summary>
        /// <remarks>
        /// Currently displays the total number of commandments, 
        /// the average length of a commandment's text and summary, 
        /// and percentages of commandments by location, presence of alternate 
        /// readings, nature and possibility of modern fulfillment, and (approximately)
        /// obedience by group (Christian, Messianic, observant Jews).
        /// </remarks>
        private static void PrintStatistics()
        {
            const int totalCommandmentCount = 613;
            var totalCommandmentsMapped = commandments.Count();
            var percentageCommandmentsMapped = Math.Round(((double)totalCommandmentsMapped / (double)totalCommandmentCount) * 100, 1);
            var percentageWithAlternateReadings = GetStatisticOfCommandmentsMatching(cmd => !string.IsNullOrEmpty(cmd.AlternateText));
            var percentageInExodus = GetStatisticOfCommandmentsMatching(cmd => cmd.Book == CommandmentBook.Exodus);
            var percentageInLeviticus = GetStatisticOfCommandmentsMatching(cmd => cmd.Book == CommandmentBook.Leviticus);
            var percentageInNumbers = GetStatisticOfCommandmentsMatching(cmd => cmd.Book == CommandmentBook.Numbers);
            var percentageInDeuteronomy = GetStatisticOfCommandmentsMatching(cmd => cmd.Book == CommandmentBook.Deuteronomy);
            var percentageCanBeCarriedOutToday = GetStatisticOfCommandmentsMatching(cmd => cmd.CanBeCarriedOutToday);
            var percentagePositiveCommandments = GetStatisticOfCommandmentsMatching(cmd => cmd.CommandmentType == CommandmentType.Positive);
            var percentageNegativeCommandments = GetStatisticOfCommandmentsMatching(cmd => cmd.CommandmentType == CommandmentType.Negative);
            var percentageFollowedByChristians = GetStatisticOfCommandmentsMatching(cmd => cmd.FollowedByChristians);
            var percentageFollowedByMessianics = GetStatisticOfCommandmentsMatching(cmd => cmd.FollowedByMessianics);
            var percentageFollowedByObservantJews = GetStatisticOfCommandmentsMatching(cmd => cmd.FollowedByObservantJews);
            var averageTextLengthInChars = (int)Math.Round(commandments.Average(cmd => cmd.Text.Length));
            var averageSummaryLengthInChars = (int)Math.Round(commandments.Average(cmd => cmd.ShortSummary.Length));

            Console.WriteLine("Commandment statistics:");
            Console.WriteLine("\t{0} commandments have been mapped, the project is {1}% completed.", totalCommandmentsMapped, percentageCommandmentsMapped);
            Console.WriteLine("\t{0} have alternate readings.", percentageWithAlternateReadings);
            Console.WriteLine("\t{0} are from Exodus.", percentageInExodus);
            Console.WriteLine("\t{0} are from Leviticus.", percentageInLeviticus);
            Console.WriteLine("\t{0} are from Numbers.", percentageInNumbers);
            Console.WriteLine("\t{0} are from Deuteronomy.", percentageInDeuteronomy);
            Console.WriteLine("\t{0} can be carried out in modern times.", percentageCanBeCarriedOutToday);
            Console.WriteLine("\t{0} are positive commandments.", percentagePositiveCommandments);
            Console.WriteLine("\t{0} are negative commandments.", percentageNegativeCommandments);
            Console.WriteLine("\t{0} are observed by Christians.", percentageFollowedByChristians);
            Console.WriteLine("\t{0} are observed by Messianics.", percentageFollowedByMessianics);
            Console.WriteLine("\t{0} are observed by Jews.", percentageFollowedByObservantJews);
            Console.WriteLine("\tThe average commandment length is {0} characters.", averageTextLengthInChars);
            Console.WriteLine("\tThe average summary length is {0} characters.", averageSummaryLengthInChars);
        }

        /// <summary>
        /// Statistics on commandments that match a given predicate condition.
        /// </summary>
        /// <param name="predicate">The condition commandments must match to be counted.</param>
        /// <returns>A formatted <see cref="String"/> containing statistics 
        /// on the commandments that match <paramref name="predicate"/>.</returns>
        /// <remarks>Currently returns a percentage with two decimal places, 
        /// along with a number in parentheses representing the count.</remarks>
        private static string GetStatisticOfCommandmentsMatching(Func<CommandmentBase, bool> predicate)
        {
            var numMatchingCommandments = commandments.Where(predicate).Count();
            int totalCommandmentCount = commandments.Count();
            var percentageInDecimal = (double)numMatchingCommandments / (double)commandments.Count();
            const int decimalPlaces = 2;

            // Right-align percentages and counts to the minimum sizes possible
            string format = "{0,7:F" + decimalPlaces.ToString() + "}% ({1," + totalCommandmentCount.ToString().Length + ":F0})";
            return String.Format(format, percentageInDecimal * 100, numMatchingCommandments);
        }

        /// <summary>
        /// Displays the next few commandments to be mapped.
        /// </summary>
        private static void PrintNextCommandmentsToBeMapped()
        {
            const int commandmentPrintCount = 5;        // TODO?: Parameterize
            int totalCommandmentCount = commandments.Count();
            var nextCommandmentNumbersToMap = Enumerable.Range(1, totalCommandmentCount).Except(commandments.Select(cmd => cmd.Number)).Take(commandmentPrintCount);
            Console.WriteLine();
            Console.WriteLine("Next commandments that need mapping: ");
            foreach (var cmdNumber in nextCommandmentNumbersToMap)
            {
                Console.WriteLine("\t{0}", cmdNumber);
            }
        }

        /// <summary>
        /// Sanity check to prevent accidental duplication of commandments by number.
        /// </summary>
        private static void EnsureNoDuplicates()
        {
            foreach (var cmd in commandments)
            {
                var commandmentsWithSameNumber = commandments.Where(input => input.Number == cmd.Number && input.GetType() != cmd.GetType());
                if (commandmentsWithSameNumber.Count() > 1)
                {
                    var errorMessage = string.Format("Duplicate commandment detected: {0} and {1} are both commandment #{2}.", commandmentsWithSameNumber.First(), commandmentsWithSameNumber.Last(), cmd.Number);
                    throw new ApplicationException(errorMessage);
                }
            }
        }

        /// <summary>
        /// Writes the image generated by the given graphing instructions to a file.
        /// </summary>
        /// <param name="dotInstructions">The <see cref="string"/> containing the DOT instructions that generate the desired graph.</param>
        /// <returns>The name of the image file that was output.</returns>
        private static string CreateImageFromDotInstructions(string dotInstructions)
        {
            using (var process = new Process())
            {
                var isX64 = IntPtr.Size == 8;

                var programFiles = Environment.GetFolderPath(Environment.SpecialFolder.ProgramFiles);
                if (isX64) programFiles += " (x86)";                // Always grab the 32-bit version
                var graphVizPath = Path.Combine(programFiles, @"Graphviz2.24\bin\dot.exe");

                process.StartInfo.FileName = graphVizPath;
                process.StartInfo.Arguments = "-Tpng -Gcharset=latin1";
                process.StartInfo.WindowStyle = ProcessWindowStyle.Minimized;
                process.StartInfo.RedirectStandardOutput = true;
                process.StartInfo.RedirectStandardInput = true;
                process.StartInfo.UseShellExecute = false;
                process.Start();

                byte[] buffer = new byte[4096];
                var standardOutput = process.StandardOutput.BaseStream;
                using (var imageOutputStream = File.Open("CmdMents.png", FileMode.Create))
                {
                    AsyncCallback callback = null;
                    IAsyncResult asyncResult = null;
                    var evt = new System.Threading.AutoResetEvent(false);
                    callback = result =>
                    {
                        int numberOfBytesRead = standardOutput.EndRead(result);
                        imageOutputStream.Write(buffer, 0, numberOfBytesRead);

                        if (numberOfBytesRead > 0)
                        {
                            // Read next bytes.   
                            asyncResult = standardOutput.BeginRead(buffer, 0, buffer.Length, callback, null);
                        }
                        else
                        {
                            // Signal that we're done.
                            evt.Set();
                        }
                    };
                    asyncResult = standardOutput.BeginRead(buffer, 0, buffer.Length, callback, null);
                    process.StandardInput.Write(dotInstructions);
                    process.StandardInput.Close();
                    standardOutput.Flush();
                    process.WaitForExit();
                    evt.WaitOne();
                }
            }
            return "CmdMents.png";
        }

        /// <summary>
        /// Emits the DOT instructions to render the entire graph, 
        /// based on subclassing metadata available through reflection.
        /// </summary>
        /// <returns>An <see cref="IEnumerable<string>"/> containing the emitted lines.</returns>
        private static IEnumerable<string> BuildCommandmentsHierarchy()
        {
            yield return (" digraph Commandments {");
            yield return "ratio = fill";
            yield return "node[style = filled]";

            foreach (var line in BuildNodeTree(typeof(CommandmentBase)))
            {
                yield return line + ";";
            }

            foreach (var line in BuildDescendantTree(typeof(CommandmentBase)))
            {
                yield return line + ";";
            }

            yield return "}";
        }

        /// <summary>
        /// Emits the DOT instructions to render the current subtree of the graph, 
        /// based on subclassing metadata available through reflection.
        /// </summary>
        /// <param name="type">The <see cref="Type"/> representing the subtree to emit a graph for.</param>
        /// <returns>An <see cref="IEnumerable&lt;string&gt;"/> containing the emitted lines.</returns>
        /// <remarks>Does not emit the definitions of nodes, but only their relationships.
        /// Use <seealso cref="BuildNodeTree"/> to emit node definitions.</remarks>
        private static IEnumerable<string> BuildDescendantTree(Type type)
        {
            foreach (var derived in GetAllTypesDerivingFrom(type))
            {
                var edgeLine = BuildDescendantEdgeLineFrom(derived);
                if (!string.IsNullOrEmpty(edgeLine))
                {
                    yield return edgeLine;
                }

                foreach (var childOfDerivedString in BuildDescendantTree(derived))
                {
                    yield return childOfDerivedString;
                }
            }
        }

        /// <summary>
        /// Emits a single parent -> descendant directed edge.
        /// </summary>
        /// <param name="type">The <see cref="Type"/> for which to generate a directed edge.</param>
        /// <returns>The DOT instruction line corresponding to a parent -> descendant relationship.</returns>
        /// <remarks>Does not emit the definition of either node.
        /// Use <seealso cref="BuildNodeLineFrom"/> to emit node definitions.</remarks>
        private static string BuildDescendantEdgeLineFrom(Type type)
        {
            var instance = (CommandmentBase)Activator.CreateInstance(type);
            return instance.GetDotHierarchyString();
        }

        /// <summary>
        /// Emits the DOT instructions to render the current subtree of the graph, 
        /// based on subclassing metadata available through reflection.
        /// </summary>
        /// <param name="type">The <see cref="Type"/> representing the subtree to emit a graph for.</param>
        /// <returns>An <see cref="IEnumerable&lt;string&gt;"/> containing the emitted lines.</returns>
        /// <remarks>Does not emit the relationships between nodes, but only their definitions.
        /// Use <seealso cref="BuildDescendantTree"/> to emit node definitions.</remarks>
        private static IEnumerable<string> BuildNodeTree(Type type)
        {
            foreach (var derived in GetAllTypesDerivingFrom(type))
            {
                yield return BuildNodeLineFrom(derived);
                foreach (var nodeDefinitionString in BuildNodeTree(derived))
                {
                    yield return nodeDefinitionString;
                }
            }
        }

        /// <summary>
        /// Emits a single node definition.
        /// </summary>
        /// <param name="type">The <see cref="Type"/> for which to generate a directed edge.</param>
        /// <returns>The DOT instruction line corresponding to a parent -> descendant relationship.</returns>
        /// <remarks>Does not emit the definition of either node.
        /// Use <seealso cref="BuildNodeLineFrom"/> to emit node definitions.</remarks>
        private static string BuildNodeLineFrom(Type type)
        {
            var instance = (CommandmentBase)Activator.CreateInstance(type);
            return instance.GetDotNodeDefinitionString();
        }

        /// <summary>
        /// Returns all descendants of a given commandment.
        /// </summary>
        /// <param name="t">The parent <see cref="Type"/>.</param>
        /// <returns>All subclasses of <paramref name="t"/> from the cached types collection.</returns>
        static IEnumerable<Type> GetAllTypesDerivingFrom(Type t)
        {
            return from type in commandmentTypes
                   where type.BaseType == t
                   select type;
        }
    }
}
