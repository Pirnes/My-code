using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FunPage.Shared
{
    public class RandomDadJoke
    {
        public string Type { get; set; }
        public SingleDadJoke Value { get; set; }
    }

    public class SingleDadJoke
    {
        public int Id { get; set; }
        public string Joke { get; set; }
        public string[] Categories { get; set; }
    }
}
