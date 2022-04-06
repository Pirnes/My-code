using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FunPage.Shared
{
    public class RandomOtherJoke
    {
        public string Type { get; set; }
        public SingleOtherJoke Value { get; set; }
    }

    public class SingleOtherJoke
    {
        public int Id { get; set; }
        public string Joke { get; set; }
        public string[] Categories { get; set; }
        public string Setup { get; set; }
    }
}
