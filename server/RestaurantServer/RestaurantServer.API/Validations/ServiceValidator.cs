using FluentValidation;
using RestaurantServer.API.DataAccess.Entities;

namespace RestaurantServer.API.Validations
{
	public class ServiceValidator : AbstractValidator<Service>
	{
		public ServiceValidator()
		{
			RuleFor(x => x.Icon).NotEmpty().WithMessage("İkon Boş Bırakılamaz")
									.MinimumLength(3).WithMessage("İkon En Az 3 karakter olmalıdır.");
			RuleFor(x => x.Title).NotEmpty().WithMessage("Servis Adı Boş Bırakılamaz")
									.MinimumLength(5).WithMessage("Servis Adı En Az 5 Karakter Olmalıdır")
									.MaximumLength(100).WithMessage("Servis Adı En Fazla 100 Karakter Olmalıdır");
			RuleFor(x => x.Description).NotEmpty().WithMessage("Açıklama Boş Geçilemez")
									.MinimumLength(5).WithMessage("Servis Açıklaması En Az 5 Karakter Olmalıdır")
									.MaximumLength(100).WithMessage("Servis Açıklaması En Fazla 100 Karakter Olmalıdır");
		}
	}
}
