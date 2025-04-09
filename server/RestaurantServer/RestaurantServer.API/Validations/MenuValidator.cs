using FluentValidation;
using RestaurantServer.API.Dtos;

namespace RestaurantServer.API.Validations
{
	public class MenuValidator : AbstractValidator<MenuDto>
	{
		public MenuValidator()
		{
			RuleFor(x => x.Title).NotEmpty().WithMessage("Başlık Boş Bırakılamaz")
								 .MinimumLength(3).WithMessage("Başlık En Az 3 karakter olmalıdır.");
			RuleFor(x => x.Price).NotEmpty().WithMessage("Fiyat Boş Bırakılamaz");
			RuleFor(x => x.Description).NotEmpty().WithMessage("Açıklama Boş Bırakılamaz")
									   .MaximumLength(100).WithMessage("Açıklama En Fazla 100 Karakter Olmalıdır");

			RuleFor(x => x.CategoryId).NotEmpty().WithMessage("Kategori Boş Bırakılamaz");
			RuleFor(x => x.ImageUrl).NotEmpty().WithMessage("Ürün Görseli Boş Bırakılamaz");
		}
	}
}
