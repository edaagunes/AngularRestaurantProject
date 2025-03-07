namespace RestaurantServer.API.DataAccess.Entities
{
	public class Contact
	{
		public int Id { get; set; }
		public string NameSurname { get; set; }
		public string Email { get; set; }
		public string Subject { get; set; }
		public string MessageContent { get; set; }
		public bool IsRead { get; set; }
	}
}
