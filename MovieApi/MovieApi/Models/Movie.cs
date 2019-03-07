using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace MovieApi.Models
{
    public class Movie
    {
      
       public int id { get; set; }

        string Titel { get; set; }
        string imagePath { get; set; }
        string releaseDate { get; set; }
        string Desc { get; set; }

    }
}
