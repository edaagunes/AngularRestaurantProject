using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace RestaurantServer.API.Migrations
{
    /// <inheritdoc />
    public partial class mig_add_footeraddress : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "FooterAddresses",
                columns: table => new
                {
                    FooterAddressId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Address = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Phone = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Mail = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    WeekdayClosingTime = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    WeekendClosingTime = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_FooterAddresses", x => x.FooterAddressId);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "FooterAddresses");
        }
    }
}
