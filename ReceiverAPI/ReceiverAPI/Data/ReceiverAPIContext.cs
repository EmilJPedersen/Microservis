using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace ReceiverAPI.Models
{
    public class ReceiverAPIContext : DbContext
    {
        public ReceiverAPIContext (DbContextOptions<ReceiverAPIContext> options)
            : base(options)
        {
        }

        public DbSet<ReceiverAPI.Models.ReceiveModel> ReceiveModel { get; set; }
    }
}
