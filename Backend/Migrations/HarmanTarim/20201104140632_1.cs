using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace WebApplication2.Migrations.HarmanTarim
{
    public partial class _1 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "agreement_factories",
                columns: table => new
                {
                    id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    factory_id = table.Column<int>(nullable: false),
                    agreement_id = table.Column<int>(nullable: false),
                    agreement_items_id = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_agreement_factories", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "agreement_items",
                columns: table => new
                {
                    id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    agreement_id = table.Column<int>(nullable: false),
                    product_id = table.Column<int>(nullable: false),
                    field_id = table.Column<int>(nullable: false),
                    quantity = table.Column<int>(nullable: false),
                    price = table.Column<int>(nullable: false),
                    total_price = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_agreement_items", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "agreements",
                columns: table => new
                {
                    id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    created_at = table.Column<DateTime>(type: "Date", nullable: false),
                    grower_id = table.Column<int>(nullable: false),
                    status = table.Column<string>(type: "nvarchar(100)", nullable: true),
                    fr_certificate = table.Column<bool>(type: "Bit", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_agreements", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "declarations",
                columns: table => new
                {
                    id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    created_at = table.Column<DateTime>(type: "Date", nullable: false),
                    agreement_id = table.Column<int>(nullable: false),
                    declaration_id = table.Column<string>(type: "nvarchar(100)", nullable: true),
                    fr_certificate = table.Column<bool>(type: "Bit", nullable: false),
                    total_area = table.Column<int>(nullable: false),
                    date1 = table.Column<DateTime>(type: "datetime", nullable: false),
                    date2 = table.Column<DateTime>(type: "datetime", nullable: false),
                    harvest_start = table.Column<DateTime>(type: "Date", nullable: false),
                    harvest_end = table.Column<DateTime>(type: "Date", nullable: false),
                    average_efficiency = table.Column<double>(type: "Float", nullable: false),
                    efficiency = table.Column<double>(type: "Float", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_declarations", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "factories",
                columns: table => new
                {
                    id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    created_at = table.Column<DateTime>(type: "Date", nullable: false),
                    name = table.Column<string>(type: "nvarchar(100)", nullable: true),
                    country_code = table.Column<int>(nullable: false),
                    address = table.Column<string>(type: "nvarchar(100)", nullable: true),
                    email = table.Column<string>(type: "nvarchar(100)", nullable: true),
                    mobile = table.Column<string>(type: "nvarchar(100)", nullable: true),
                    landline = table.Column<string>(type: "nvarchar(100)", nullable: true),
                    fax = table.Column<string>(type: "nvarchar(100)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_factories", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "fields",
                columns: table => new
                {
                    id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    grower_id = table.Column<int>(nullable: false),
                    code = table.Column<int>(nullable: false),
                    lot = table.Column<int>(nullable: false),
                    parcel = table.Column<int>(nullable: false),
                    area = table.Column<int>(nullable: false),
                    address = table.Column<string>(type: "nvarchar(100)", nullable: true),
                    continent = table.Column<string>(type: "nvarchar(100)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_fields", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "growers",
                columns: table => new
                {
                    id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    created_at = table.Column<DateTime>(type: "Date", nullable: false),
                    full_name = table.Column<string>(type: "nvarchar(100)", nullable: true),
                    GovermentID = table.Column<string>(type: "nvarchar(100)", nullable: true),
                    country_code = table.Column<int>(nullable: false),
                    coa_number = table.Column<int>(nullable: false),
                    mobile = table.Column<string>(type: "nvarchar(100)", nullable: true),
                    mobile2 = table.Column<string>(type: "nvarchar(100)", nullable: true),
                    address = table.Column<string>(type: "nvarchar(100)", nullable: true),
                    address2 = table.Column<string>(type: "nvarchar(100)", nullable: true),
                    email = table.Column<string>(type: "nvarchar(100)", nullable: true),
                    email2 = table.Column<string>(type: "nvarchar(100)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_growers", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "products",
                columns: table => new
                {
                    id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    kind = table.Column<string>(type: "nvarchar(100)", nullable: true),
                    variety = table.Column<string>(type: "nvarchar(100)", nullable: true),
                    production_year = table.Column<DateTime>(type: "Date", nullable: false),
                    diagnosis = table.Column<bool>(type: "Bit", nullable: false),
                    wet_amount = table.Column<double>(type: "Float", nullable: false),
                    dry_amount = table.Column<double>(type: "Float", nullable: false),
                    accounted_amount = table.Column<double>(type: "Float", nullable: false),
                    not_accounted_amount = table.Column<double>(type: "Float", nullable: false),
                    total_amount = table.Column<double>(type: "Float", nullable: false),
                    average_price = table.Column<double>(type: "Float", nullable: false),
                    estimated_cert_amount = table.Column<double>(type: "Float", nullable: false),
                    efficiency_weight = table.Column<double>(type: "Float", nullable: false),
                    average_efficiency = table.Column<double>(type: "Float", nullable: false),
                    total_red_amount = table.Column<double>(type: "Float", nullable: false),
                    average_red_amount = table.Column<double>(type: "Float", nullable: false),
                    average_grams = table.Column<double>(type: "Float", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_products", x => x.id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "agreement_factories");

            migrationBuilder.DropTable(
                name: "agreement_items");

            migrationBuilder.DropTable(
                name: "agreements");

            migrationBuilder.DropTable(
                name: "declarations");

            migrationBuilder.DropTable(
                name: "factories");

            migrationBuilder.DropTable(
                name: "fields");

            migrationBuilder.DropTable(
                name: "growers");

            migrationBuilder.DropTable(
                name: "products");
        }
    }
}
