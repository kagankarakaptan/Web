using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace WebApplication2.Models.DHarmanTarimDBevDB

{
    public class Declarations
    {
        [Key]
        public int id { get; set; }

        [Column(TypeName = "Date")]
        public DateTime created_at { get; set; }

        [ForeignKey("agreements")]
        public int agreement_id { get; set; }

        [Column(TypeName = "nvarchar(100)")]
        public string declaration_id { get; set; }

        [Column(TypeName = "Bit")]
        public bool fr_certificate { get; set; }

        public int total_area { get; set; }

        [Column(TypeName = "datetime")]
        public DateTime date1 { get; set; }

        [Column(TypeName = "datetime")]
        public DateTime date2 { get; set; }

        [Column(TypeName = "Date")]
        public DateTime harvest_start { get; set; }

        [Column(TypeName = "Date")]
        public DateTime harvest_end { get; set; }

        [Column(TypeName = "Float")]
        public float average_efficiency { get; set; }

        [Column(TypeName = "Float")]
        public float efficiency { get; set; }

    }
}
