using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace CmdMents
{
    public static class CommandmentExtensions
    {
        private static Dictionary<Type, CommandmentMeta> commandmentTypeMeta = new Dictionary<Type, CommandmentMeta>();

        /// <summary>
        /// Sets meta information on the commandment.
        /// </summary>
        /// <typeparam name="T"></typeparam>
        /// <param name="commandment">The commandment.</param>
        /// <param name="type">The type.</param>
        /// <param name="value">The value.</param>
        public static void Meta<T>(this CommandmentBase commandment, CommandmentMetaType type, T value)
        {
            commandmentTypeMeta[commandment.GetType()] = new CommandmentMeta { Type = type, Value = value };
        }

        /// <summary>
        /// Gets the meta information of the commandment.
        /// </summary>
        /// <typeparam name="T"></typeparam>
        /// <param name="commandment">The commandment.</param>
        /// <param name="metaType">Type of the meta.</param>
        /// <returns></returns>
        public static T Meta<T>(this CommandmentBase commandment, CommandmentMetaType metaType)
        {
            CommandmentMeta meta;
            commandmentTypeMeta.TryGetValue(commandment.GetType(), out meta);
            return meta != null ? (T)meta.Value : default(T);
        }
    }

    public class CommandmentMeta
    {
        public CommandmentMetaType Type { get; set; }
        public object Value { get; set; }
    }

    public enum CommandmentMetaType
    {
        Commentary,
        MaimonidesInterpretation
    }
}
