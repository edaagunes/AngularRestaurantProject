using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace RestaurantServer.API.Migrations
{
    /// <inheritdoc />
    public partial class mig_add_isactive_reservation : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<bool>(
                name: "IsActive",
                table: "Reservations",
                type: "bit",
                nullable: false,
                defaultValue: false);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "IsActive",
                table: "Reservations");
        }
    }
}
