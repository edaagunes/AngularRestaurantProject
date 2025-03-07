namespace RestaurantServer.API.DataAccess.Entities
{
	public class Menu
	{
		public int Id { get; set; }
		public string Title { get; set; }
		public string ImageUrl { get; set; }
		public decimal Price { get; set; }
		public string Description { get; set; }
		public int CategoryId { get; set; }
		public virtual Category Category { get; set; }
	}
}
