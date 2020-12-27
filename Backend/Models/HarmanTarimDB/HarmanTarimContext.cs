using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApplication2.Models.DHarmanTarimDBevDB;

namespace WebApplication2.Models.HarmanTarimDB
{
    public class HarmanTarimContext : DbContext
    {

        public HarmanTarimContext(DbContextOptions<HarmanTarimContext> options) : base(options)
        {

        }

        public DbSet<Products> products { get; set; }
        public DbSet<Agreement_Factories> agreement_factories { get; set; }
        public DbSet<Agreement_Items> agreement_items { get; set; }
        public DbSet<Agreements> agreements { get; set; }
        public DbSet<Declarations> declarations { get; set; }
        public DbSet<Factories> factories { get; set; }
        public DbSet<Fields> fields { get; set; }
        public DbSet<Growers> growers { get; set; }



    }
}
