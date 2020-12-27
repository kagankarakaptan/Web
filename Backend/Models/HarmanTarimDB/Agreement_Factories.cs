using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace WebApplication2.Models.HarmanTarimDB
{
    public class Agreement_Factories
    {
        [Key]
        public int id { get; set; }

        [ForeignKey("factories")]
        public int factory_id { get; set; }

        [ForeignKey("agreements")]
        public int agreement_id { get; set; }

        [ForeignKey("agreement_items")]
        public int agreement_items_id { get; set; }
    }
}
