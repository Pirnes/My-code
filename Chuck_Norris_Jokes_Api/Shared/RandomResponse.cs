using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Text;

namespace Chuck_Norris_Jokes_Api.Shared
{
    public class RandomResponse
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
