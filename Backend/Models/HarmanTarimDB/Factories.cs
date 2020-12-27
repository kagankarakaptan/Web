using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace WebApplication2.Models.HarmanTarimDB

{
    public class Factories
    {
        [Key]
        public int id { get; set; }

        [Column(TypeName = "Date")]
        public DateTime created_at { get; set; }

        [Column(TypeName = "nvarchar(100)")]
        public string name { get; set; }

        public int country_code { get; set; }

        [Column(TypeName = "nvarchar(100)")]
        public string address { get; set; }

        [Column(TypeName = "nvarchar(100)")]
        public string email { get; set; }

        [Column(TypeName = "nvarchar(100)")]
        public string mobile { get; set; }

        [Column(TypeName = "nvarchar(100)")]
        public string landline { get; set; }

        [Column(TypeName = "nvarchar(100)")]
        public string fax { get; set; }
    }
}
