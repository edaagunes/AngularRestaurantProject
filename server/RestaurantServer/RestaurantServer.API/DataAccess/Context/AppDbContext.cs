using Microsoft.EntityFrameworkCore;
using RestaurantServer.API.DataAccess.Entities;

namespace RestaurantServer.API.DataAccess.Context
{
	public class AppDbContext : DbContext
	{
		public AppDbContext(DbContextOptions options) : base(options)
		{
		}

		public DbSet<About> Abouts { get; set; }
		public DbSet<Category> Categories { get; set; }
		public DbSet<Contact> Contacts { get; set; }
		public DbSet<Menu> Menus { get; set; }
		public DbSet<Service> Services { get; set; }
		public DbSet<Chef> Chefs { get; set; }
		public DbSet<FooterAddress> FooterAddresses { get; set; }
		public DbSet<Reservation> Reservations { get; set; }
	}
}
