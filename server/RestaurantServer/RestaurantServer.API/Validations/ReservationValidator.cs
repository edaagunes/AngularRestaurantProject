using FluentValidation;
using RestaurantServer.API.DataAccess.Entities;

namespace RestaurantServer.API.Validations
{
	public class ReservationValidator : AbstractValidator<Reservation>
	{
		public ReservationValidator()
		{
			RuleFor(x => x.Name).NotEmpty().WithMessage("Rezervasyon Sahibi Boş Bırakılamaz")
									.MinimumLength(3).WithMessage("Rezervasyon Sahibi En Az 3 karakter olmalıdır.");

			RuleFor(x => x.Email).NotEmpty().WithMessage("Email Boş Bırakılamaz")
									.EmailAddress().WithMessage("Geçerli bir mail adresi giriniz")
									.MinimumLength(5).WithMessage("Email En Az 5 Karakter Olmalıdır")
									.MaximumLength(100).WithMessage("Servis Adı En Fazla 100 Karakter Olmalıdır");

			RuleFor(x => x.PeopleCount).NotEmpty().WithMessage("Kişi Sayısı Boş Geçilemez");

			//RuleFor(x => x.Description).NotEmpty().WithMessage("Açıklama Boş Geçilemez");
		}
	}
}
