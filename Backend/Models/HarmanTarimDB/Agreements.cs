using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace WebApplication2.Models.DHarmanTarimDBevDB

{
    public class Agreements
    {
        [Key]
        public int id { get; set; }

        [Column(TypeName = "Date")]
        public DateTime created_at { get; set; }

        [ForeignKey("growers")]
        public int grower_id { get; set; }

        [Column(TypeName = "nvarchar(100)")]
        public string status { get; set; }

        [Column(TypeName = "Bit")]
        public bool fr_certificate { get; set; }
    }
}
