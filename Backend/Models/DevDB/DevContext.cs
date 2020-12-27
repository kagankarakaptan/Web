using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApplication2.Models.DevDB
{
    public class DevContext : DbContext
    {
        public DevContext(DbContextOptions<DevContext> options) : base(options)
        {

        }

        public DbSet<Users> users { get; set; }
        public DbSet<Companies> companies { get; set; }

    }
}
