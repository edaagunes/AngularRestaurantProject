using FluentValidation;
using RestaurantServer.API.DataAccess.Entities;
using RestaurantServer.API.Dtos;

namespace RestaurantServer.API.Validations
{
	public class AboutValidator : AbstractValidator<About>
	{
		public AboutValidator()
		{
			RuleFor(x => x.Title).NotEmpty().WithMessage("Başlık Boş Bırakılamaz")
								 .MinimumLength(3).WithMessage("Başlık en az 3 karakter olmalıdır.");
			RuleFor(x => x.Description).NotEmpty().WithMessage("Açıklama Boş Bırakılamaz")
										.MinimumLength(5).WithMessage("Açıklama En Az 5 Karakter Olmalıdır")
									   .MaximumLength(500).WithMessage("Açıklama En Fazla 500 Karakter Olmalıdır");
		}
	}
}
