using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FunPage.Shared
{
        public class RandomJoke
        {
            public string Type { get; set; }
            public SingleJoke Value { get; set; }
        }

        public class SingleJoke
        {
            public int Id { get; set; }
            public string Joke { get; set; }
            public string[] Categories { get; set; }
        }
    
}
