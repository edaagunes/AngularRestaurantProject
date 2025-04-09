using FluentValidation;
using RestaurantServer.API.DataAccess.Entities;

namespace RestaurantServer.API.Validations
{
	public class ChefValidator : AbstractValidator<Chef>
	{
		public ChefValidator()
		{
			RuleFor(x => x.FullName).NotEmpty().WithMessage("Şef Adı Boş Bırakılamaz")
									.MinimumLength(3).WithMessage("Şef Adı en az 3 karakter olmalıdır.");
			RuleFor(x => x.Title).NotEmpty().WithMessage("Şef Ünvanı Boş Bırakılamaz")
									.MinimumLength(5).WithMessage("Ünvanı En Az 5 Karakter Olmalıdır")
									.MaximumLength(100).WithMessage("Ünvanı En Fazla 100 Karakter Olmalıdır");
			RuleFor(x => x.ImageUrl).NotEmpty().WithMessage("Görsel Yolu Boş Geçilemez");
		}
	}
}
