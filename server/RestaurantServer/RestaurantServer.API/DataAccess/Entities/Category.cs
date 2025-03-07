namespace RestaurantServer.API.DataAccess.Entities
{
	public class Category
	{
		public int Id { get; set; }
		public string CategoryName { get; set; }
		public virtual IList<Menu> Menus { get; set; }
	}
}
