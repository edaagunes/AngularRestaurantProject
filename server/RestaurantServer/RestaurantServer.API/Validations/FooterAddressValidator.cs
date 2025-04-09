using FluentValidation;
using RestaurantServer.API.DataAccess.Entities;

namespace RestaurantServer.API.Validations
{
	public class FooterAddressValidator : AbstractValidator<FooterAddress>
	{
		public FooterAddressValidator()
		{
			RuleFor(x => x.Address)
				.NotEmpty().WithMessage("Adres Boş Bırakılamaz")
				.MinimumLength(5).WithMessage("Adres En Az 5 Karakter Olmalıdır")
				.MaximumLength(100).WithMessage("Adres En Fazla 100 Karakter Olmalıdır");

			RuleFor(x => x.Phone)
				.NotEmpty().WithMessage("Telefon Boş Bırakılamaz")
				.Matches(@"^\+?[0-9\s\-()]{5,20}$").WithMessage("Telefon formatı geçersizdir");

			RuleFor(x => x.Mail)
				.NotEmpty().WithMessage("Mail Boş Bırakılamaz")
				.EmailAddress().WithMessage("Geçerli bir mail adresi giriniz");

			RuleFor(x => x.WeekdayClosingTime)
				.NotEmpty().WithMessage("Hafta içi Kapanış Boş Bırakılamaz")
				.MinimumLength(5).WithMessage("Hafta içi Kapanış En Az 5 Karakter Olmalıdır")
				.MaximumLength(100).WithMessage("Hafta içi Kapanış En Fazla 100 Karakter Olmalıdır");

			RuleFor(x => x.WeekendClosingTime)
				.NotEmpty().WithMessage("Hafta sonu Kapanış Boş Bırakılamaz")
				.MinimumLength(5).WithMessage("Hafta sonu Kapanış En Az 5 Karakter Olmalıdır")
				.MaximumLength(100).WithMessage("Hafta sonu Kapanış En Fazla 100 Karakter Olmalıdır");
		}
	}
}
