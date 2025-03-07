namespace RestaurantServer.API.Dtos
{
	public class MenuDto
	{
		public int Id { get; set; }
		public string? Title { get; set; }
		public string? ImageUrl { get; set; }
		public decimal Price { get; set; }
		public string? Description { get; set; }
		public int CategoryId { get; set; }
	}
}
