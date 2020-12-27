using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace WebApplication2.Models.HarmanTarimDB

{
    public class Growers
    {
        [Key]
        public int id { get; set; }

        [Column(TypeName = "Date")]
        public DateTime created_at { get; set; }

        [Column(TypeName = "nvarchar(100)")]
        public string full_name { get; set; }

        [Column(TypeName = "nvarchar(100)")]
        public string GovermentID { get; set; }

        public int country_code { get; set; }

        public int coa_number { get; set; }

        [Column(TypeName = "nvarchar(100)")]
        public string mobile { get; set; }

        [Column(TypeName = "nvarchar(100)")]
        public string mobile2 { get; set; }

        [Column(TypeName = "nvarchar(100)")]
        public string address { get; set; }

        [Column(TypeName = "nvarchar(100)")]
        public string address2 { get; set; }

        [Column(TypeName = "nvarchar(100)")]
        public string email { get; set; }

        [Column(TypeName = "nvarchar(100)")]
        public string email2 { get; set; }
    }
}
