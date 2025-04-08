namespace RestaurantServer.API.DataAccess.Entities
{
	public class Reservation
	{
		public int ReservationId { get; set; }
		public string Name { get; set; }
		public string Email { get; set; }
		public DateTime Date { get; set; }
		public int PeopleCount { get; set; }
		public string Description { get; set; }
		public bool IsActive { get; set; } = true;
	}
}
