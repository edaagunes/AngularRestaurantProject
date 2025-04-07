namespace RestaurantServer.API.DataAccess.Entities
{
	public class FooterAddress
	{
		public int FooterAddressId { get; set; }
		public string Address { get; set; }
		public string Phone { get; set; }
		public string Mail { get; set; }
		public string WeekdayClosingTime { get; set; }
		public string WeekendClosingTime { get; set; }
	}
}
