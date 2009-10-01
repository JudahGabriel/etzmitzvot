using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Drawing;
using System.IO;
using System.Diagnostics;

namespace CmdMents
{
    class Program
    {
        const string quote = "\"";
        static IEnumerable<Type> commandmentTypes;

        static void Main(string[] args)
        {
            commandmentTypes = (from type in typeof(CommandmentBase).Assembly.GetTypes()
                               where typeof(CommandmentBase).IsAssignableFrom(type) && !type.IsAbstract
                               select type).ToArray();

            var builder = new StringBuilder();
            foreach (var item in BuildCommandmentsHierarchy())
            {
                builder.AppendLine(item);
                Console.WriteLine(item);
            }

            var imagePath = CreateImageFromDotInstructions(builder.ToString());
            Process.Start(imagePath);
        }

        private static string CreateImageFromDotInstructions(string dotInstructions)
        {
            using (var process = new Process())
            {
                var isX64 = IntPtr.Size == 8;

                var programFiles = isX64 ? Environment.GetFolderPath(Environment.SpecialFolder.ProgramFiles) + " (x86)" : Environment.GetFolderPath(Environment.SpecialFolder.ProgramFiles);
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
                var imageOutputStream = File.Open("CmdMents.png", FileMode.Create);
                AsyncCallback callback = null;
                callback = result =>
                {
                    int numberOfBytesRead = standardOutput.EndRead(result);
                    imageOutputStream.Write(buffer, 0, numberOfBytesRead);

                    // Read next bytes.   
                    standardOutput.BeginRead(buffer, 0, buffer.Length, callback, null);
                };
                standardOutput.BeginRead(buffer, 0, buffer.Length, callback, null);
                process.StandardInput.Write(dotInstructions);
                process.StandardInput.Close();
                standardOutput.Flush();
                process.WaitForExit();
            }
            return "CmdMents.png";
        }

        private static IEnumerable<string> BuildCommandmentsHierarchy()
        {
            yield return (" digraph Commandments {");
            yield return "ratio = fill";
            yield return "node[style = filled]";

            var lineStrings = BuildDescendantTree(typeof(CommandmentBase));
            foreach (var line in lineStrings)
            {
                yield return line + ";";
            }
            
            yield return "}";
        }

        private static IEnumerable<string> BuildDescendantTree(Type type)
        {
            foreach (var derived in GetAllTypesDerivingFrom(type))
            {
                yield return CommandmentBase.CreateInstance(derived).GetDotHierarchyString();
                foreach (var childOfDerivedString in BuildDescendantTree(derived))
                {
                    yield return childOfDerivedString;
                }
            }
        }

        private static string BuildLineFrom(Type type)
        {
            var instance = (CommandmentBase)Activator.CreateInstance(type);
            return instance.GetDotHierarchyString();
        }

        static IEnumerable<Type> GetAllTypesDerivingFrom(Type t)
        {
            return from type in commandmentTypes
                   where type.BaseType == t
                   select type;
        }
    }
}
