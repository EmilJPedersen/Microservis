using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace ReceiverAPI.Models
{
    public class ReceiveModel
    {
        [Key]
        public string titel { get; set; }
        public string date { get; set; }
    }
}
