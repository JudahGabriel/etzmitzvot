using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Drawing;
using System.IO;
using System.Diagnostics;
using CmdMents.God;

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
            var imagePath = CreateImageFromDotInstructions(BuildCommandmentsHierarchy());
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
            var pctCommandmentsMapped = (double)totalCommandmentsMapped / (double)totalCommandmentCount;
            var pctWithAlternateReadings = FormattedStatistic(Matching(cmd => !string.IsNullOrEmpty(cmd.AlternateText)));
            var pctConcernedWithLovingGod = FormattedStatistic(Matching(cmd => typeof(LoveGodWithHeartSoulStrength).IsAssignableFrom(cmd.GetType())));
            var pctConcernedWithLovingOthers = FormattedStatistic(Matching(cmd => typeof(LoveNeighborAsSelf).IsAssignableFrom(cmd.GetType())));
            var pctInExodus = FormattedStatistic(Matching(cmd => cmd.Book == CommandmentBook.Exodus));
            var pctInLeviticus = FormattedStatistic(Matching(cmd => cmd.Book == CommandmentBook.Leviticus));
            var pctInNumbers = FormattedStatistic(Matching(cmd => cmd.Book == CommandmentBook.Numbers));
            var pctInDeuteronomy = FormattedStatistic(Matching(cmd => cmd.Book == CommandmentBook.Deuteronomy));
            var pctCanBeCarriedOutToday = FormattedStatistic(Matching(cmd => cmd.CanBeCarriedOutToday));
            var pctCanBeCarriedOutOnlyInIsrael = FormattedStatistic(Matching(cmd => cmd.CanBeCarriedOutOnlyInIsrael));
            var pctPositiveCommandments = FormattedStatistic(Matching(cmd => cmd.CommandmentType == CommandmentType.Positive));
            var pctNegativeCommandments = FormattedStatistic(Matching(cmd => cmd.CommandmentType == CommandmentType.Negative));

            var pctObeyedByChristians = FormattedPercentage(Matching(cmd => cmd.FollowedByChristians == CommandmentObedience.Obeyed), 5);
            var pctObeyedByMessianics = FormattedPercentage(Matching(cmd => cmd.FollowedByMessianics == CommandmentObedience.Obeyed), 5);
            var pctObeyedByObservantJews = FormattedPercentage(Matching(cmd => cmd.FollowedByObservantJews == CommandmentObedience.Obeyed), 5);
            var pctRecognizedByChristians = FormattedPercentage(Matching(cmd => cmd.FollowedByChristians == CommandmentObedience.Recognized), 5);
            var pctRecognizedByMessianics = FormattedPercentage(Matching(cmd => cmd.FollowedByMessianics == CommandmentObedience.Recognized), 5);
            var pctRecognizedByObservantJews = FormattedPercentage(Matching(cmd => cmd.FollowedByObservantJews == CommandmentObedience.Recognized), 5);
            var pctAttemptedByChristians = FormattedPercentage(Matching(cmd => cmd.FollowedByChristians == CommandmentObedience.Attempted), 5);
            var pctAttemptedByMessianics = FormattedPercentage(Matching(cmd => cmd.FollowedByMessianics == CommandmentObedience.Attempted), 5);
            var pctAttemptedByObservantJews = FormattedPercentage(Matching(cmd => cmd.FollowedByObservantJews == CommandmentObedience.Attempted), 5);
            var pctTotalObservedByChristians = FormattedPercentage(Matching(cmd => cmd.FollowedByChristians != CommandmentObedience.None), 5);
            var pctTotalObservedByMessianics = FormattedPercentage(Matching(cmd => cmd.FollowedByMessianics != CommandmentObedience.None), 5);
            var pctTotalObservedByObservantJews = FormattedPercentage(Matching(cmd => cmd.FollowedByObservantJews != CommandmentObedience.None), 5);

            var averageTextLengthInChars = (int)Math.Round(commandments.Average(cmd => cmd.Text.Length));
            var averageSummaryLengthInChars = (int)Math.Round(commandments.Average(cmd => cmd.ShortSummary.Length));

            Console.WriteLine("Commandment statistics:");
            Console.WriteLine("\t{0} commandments have been mapped; the project is {1} completed.", totalCommandmentsMapped, GetFormattedPercentage(pctCommandmentsMapped, 3, 5));
            Console.WriteLine("\t{0} are concerned with loving God.", pctConcernedWithLovingGod);
            Console.WriteLine("\t{0} are concerned with loving others.", pctConcernedWithLovingOthers);
            Console.WriteLine("\t{0} can be carried out in modern times.", pctCanBeCarriedOutToday);
            Console.WriteLine("\t{0} can be carried out only in Israel.", pctCanBeCarriedOutOnlyInIsrael);
            Console.WriteLine("\t{0} are positive commandments.", pctPositiveCommandments);
            Console.WriteLine("\t{0} are negative commandments.", pctNegativeCommandments);
            Console.WriteLine("\t{0} have alternate readings.", pctWithAlternateReadings);
            Console.WriteLine("\t{0} are from Exodus.", pctInExodus);
            Console.WriteLine("\t{0} are from Leviticus.", pctInLeviticus);
            Console.WriteLine("\t{0} are from Numbers.", pctInNumbers);
            Console.WriteLine("\t{0} are from Deuteronomy.", pctInDeuteronomy);

            Console.WriteLine("Christians observe {0} total (obey {1}, attempt {2}, recognize {3})", pctTotalObservedByChristians, pctObeyedByChristians, pctAttemptedByChristians, pctRecognizedByChristians);
            Console.WriteLine("Messianics observe {0} total (obey {1}, attempt {2}, recognize {3})", pctTotalObservedByMessianics, pctObeyedByMessianics, pctAttemptedByMessianics, pctRecognizedByMessianics);
            Console.WriteLine("Observant Jews observe {0} total (obey {1}, attempt {2}, recognize {3})", pctTotalObservedByObservantJews, pctObeyedByObservantJews, pctAttemptedByObservantJews, pctRecognizedByObservantJews);

            Console.WriteLine("\tThe average commandment length is {0} characters.", averageTextLengthInChars);
            Console.WriteLine("\tThe average summary length is {0} characters.", averageSummaryLengthInChars);
        }

        /// <summary>
        /// The number of commandments that match a given predicate condition.
        /// </summary>
        /// <param name="predicate">The condition commandments must match to be counted.</param>
        /// <returns>The number of commandments that match <paramref name="predicate"/>.</returns>
        private static int Matching(Func<CommandmentBase, bool> predicate)
        {
            return commandments.Where(predicate).Count();
        }

        /// <summary>
        /// Formatted statistics on commandments by count.
        /// </summary>
        /// <returns>A formatted <see cref="String"/> containing statistics 
        /// on the count of commandments given.</returns>
        /// <remarks>Currently returns a percentage with two decimal places, 
        /// along with a number in parentheses representing the actual count.</remarks>
        private static string FormattedStatistic(int numMatchingCommandments)
        {
            int totalCommandmentCount = commandments.Count();
            var percentageInDecimal = (double)numMatchingCommandments / (double)totalCommandmentCount;

            string format = "{0} ({1})";
            return String.Format(format, GetFormattedPercentage(percentageInDecimal), GetFormattedCount(numMatchingCommandments, totalCommandmentCount));
        }

        /// <summary>
        /// Formatted percentage of commandments by count.
        /// </summary>
        /// <returns>A formatted <see cref="String"/> containing the 
        /// percentage of commandments given.</returns>
        /// <remarks>Currently returns a percentage with two decimal places.</remarks>
        private static string FormattedPercentage(int numMatchingCommandments)
        {
            return FormattedPercentage(numMatchingCommandments, 6);
        }
        private static string FormattedPercentage(int numMatchingCommandments, int width)
        {
            var percentageInDecimal = (double)numMatchingCommandments / (double)commandments.Count();

            return GetFormattedPercentage(percentageInDecimal, 2, width);
        }

        private static string GetFormattedPercentage(double ratio)
        {
            return GetFormattedPercentage(ratio, 2);
        }
        private static string GetFormattedPercentage(double ratio, int decimalPlaces)
        {
            return GetFormattedPercentage(ratio, decimalPlaces, 5);
        }
        private static string GetFormattedPercentage(double ratio, int decimalPlaces, int width)
        {
            // Right-align and format to decimal places
            string format = "{0," + width.ToString() + ":F" + decimalPlaces.ToString() + "}%";
            return string.Format(format, ratio * 100);
        }

        private static string GetFormattedCount(int number, int max)
        {
            // Right-align with no decimal places
            string format = "{0," + max.ToString().Length.ToString() + ":F0}";
            return string.Format(format, number);
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
            var duplicateCommandments = from cmd in commandments
                                        let duplicate = commandments.FirstOrDefault(i => i.Number == cmd.Number && i.GetType() != cmd.GetType())
                                        where duplicate != null
                                        select Tuple.Create(cmd, duplicate);

            var duplicates = duplicateCommandments.FirstOrDefault();
            if (duplicates != null)
            {
                var errorMessage = string.Format("Duplicate commandment detected: {0} and {1} are both commandment #{2}.", duplicates.Item1, duplicates.Item2, duplicates.Item1.Number);
                throw new ApplicationException(errorMessage);
            }
        }

        /// <summary>
        /// Writes the image generated by the given graphing instructions to a file.
        /// </summary>
        /// <param name="dotInstructions">The <see cref="string"/> containing the DOT instructions that generate the desired graph.</param>
        /// <returns>The name of the image file that was output.</returns>
        private static string CreateImageFromDotInstructions(IEnumerable<string> dotInstructions)
        {
            var str = dotInstructions.Aggregate(new StringBuilder(), (builder, dotInstruction) => builder.AppendLine(dotInstruction)).ToString();
            using (var process = new Process())
            {
                var isX64 = IntPtr.Size == 8;

                var programFiles = Environment.GetFolderPath(Environment.SpecialFolder.ProgramFiles);
                if (isX64)
                {
                    programFiles += " (x86)";                // Always grab the 32-bit version
                }
                var graphVizFolder = Directory.GetDirectories(programFiles).FirstOrDefault(dir => dir.Contains("Graphviz"));
                if (graphVizFolder == null)
                {
                    throw new InvalidOperationException("Couldn't find GraphViz. Make sure you've installed GraphViz, and make sure it's installed in the program files directory.");
                }

                var dotRelativePath = Path.Combine(graphVizFolder, "bin\\dot.exe");
                var graphVizPath = Path.Combine(programFiles, dotRelativePath);

                process.StartInfo.FileName = graphVizPath;
                process.StartInfo.Arguments = "-Tpng -Gcharset=latin1";
                process.StartInfo.WindowStyle = ProcessWindowStyle.Minimized;
                process.StartInfo.RedirectStandardOutput = true;
                process.StartInfo.RedirectStandardInput = true;
                process.StartInfo.UseShellExecute = false;
                process.Start();

                PipeDotProcessOutputToImageFile(dotInstructions, process);
            }
            return "CmdMents.png";
        }

        private static void PipeDotProcessOutputToImageFile(IEnumerable<string> dotInstructions, Process process)
        {
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
                foreach (var item in dotInstructions)
                {
                    process.StandardInput.WriteLine(item);
                }
                process.StandardInput.Close();
                standardOutput.Flush();
                process.WaitForExit();
                evt.WaitOne();
            }
        }

        /// <summary>
        /// Emits the DOT instructions to render the entire graph, 
        /// based on subclassing metadata available through reflection.
        /// </summary>
        /// <returns>An <see cref="IEnumerable<string>"/> containing the emitted lines.</returns>
        private static IEnumerable<string> BuildCommandmentsHierarchy()
        {
            yield return " digraph Commandments {";
            yield return "ratio = fill";
            yield return "node[shape = rectangle, style = \"rounded, filled\", margin = \"0.05,0.05\"]";
            yield return "pad = \"0.1,0.1\"";

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
        /// <param name="type">The <see cref="Type"/> for which to generate a node definition.</param>
        /// <returns>The definition of the node.</returns>
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
