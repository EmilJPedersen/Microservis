using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace BookApi.Models
{
    public class Book
    {
        
        public int Id { get; set; }
        public string titel { get; set; }
        public string imagePath { get; set; }
        public int pages { get; set; }
        public string desc { get; set; }

    }
}
