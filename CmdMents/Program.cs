using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Drawing;

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
                yield return CommandmentBase.CreateInstance(derived).GetDotHiearchyString();
                foreach (var childOfDerivedString in BuildDescendantTree(derived))
                {
                    yield return childOfDerivedString;
                }
            }
        }

        private static string BuildLineFrom(Type type)
        {
            var instance = (CommandmentBase)Activator.CreateInstance(type);
            return instance.GetDotHiearchyString();
        }

        static IEnumerable<Type> GetAllTypesDerivingFrom(Type t)
        {
            return from type in commandmentTypes
                   where type.BaseType == t
                   select type;
        }
    }
}
