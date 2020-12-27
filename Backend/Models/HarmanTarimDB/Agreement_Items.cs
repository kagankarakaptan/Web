using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace WebApplication2.Models.HarmanTarimDB

{
    public class Agreement_Items
    {
        [Key]
        public int id { get; set; }

        [ForeignKey("agreements")]
        public int agreement_id { get; set; }

        [ForeignKey("products")]
        public int product_id { get; set; }

        [ForeignKey("fields")]
        public int field_id { get; set; }

        public int quantity { get; set; }

        public int price { get; set; }

        public int total_price { get; set; }
    }
}
