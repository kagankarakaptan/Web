using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace WebApplication2.Models.HarmanTarimDB

{
    public class Products
    {
        [Key]
        public int id { get; set; }

        [Column(TypeName = "nvarchar(100)")]
        public string kind { get; set; }

        [Column(TypeName = "nvarchar(100)")]
        public string variety { get; set; }

        [Column(TypeName = "Date")]
        public DateTime production_year { get; set; }

        [Column(TypeName = "Bit")]
        public bool diagnosis { get; set; }

        [Column(TypeName = "Float")]
        public float wet_amount { get; set; }

        [Column(TypeName = "Float")]
        public float dry_amount { get; set; }

        [Column(TypeName = "Float")]
        public float accounted_amount { get; set; }

        [Column(TypeName = "Float")]
        public float not_accounted_amount { get; set; }

        [Column(TypeName = "Float")]
        public float total_amount { get; set; }

        [Column(TypeName = "Float")]
        public float average_price { get; set; }

        [Column(TypeName = "Float")]
        public float estimated_cert_amount { get; set; }

        [Column(TypeName = "Float")]
        public float efficiency_weight { get; set; }

        [Column(TypeName = "Float")]
        public float average_efficiency { get; set; }

        [Column(TypeName = "Float")]
        public float total_red_amount { get; set; }

        [Column(TypeName = "Float")]
        public float average_red_amount { get; set; }

        [Column(TypeName = "Float")]
        public float average_grams { get; set; }
    }
}
