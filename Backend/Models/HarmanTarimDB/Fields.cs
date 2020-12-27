using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace WebApplication2.Models.HarmanTarimDB

{
    public class Fields
    {
        [Key]
        public int id { get; set; }

        [ForeignKey("growers")]
        public int grower_id { get; set; }

        public int code { get; set; }

        public int lot { get; set; }

        public int parcel { get; set; }

        public int area { get; set; }

        [Column(TypeName = "nvarchar(100)")]
        public string address { get; set; }

        [Column(TypeName = "nvarchar(100)")]
        public string continent { get; set; }
    }
}
