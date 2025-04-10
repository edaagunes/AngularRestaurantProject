using FluentValidation;
using FluentValidation.AspNetCore;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using RestaurantServer.API.DataAccess.Context;
using RestaurantServer.API.DataAccess.Entities;
using System.Globalization;
using System.Reflection;
using System.Text.Json.Serialization;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers().AddJsonOptions(opt=>
{
    opt.JsonSerializerOptions.ReferenceHandler=ReferenceHandler.IgnoreCycles;
});

builder.Services.AddDbContext<AppDbContext>(opt=>
{
    var connectionString = builder.Configuration.GetConnectionString("SqlConnection");
    opt.UseSqlServer(connectionString);
    opt.UseLazyLoadingProxies();
});

builder.Services.AddCors(options =>
{
	options.AddPolicy("AllowSpecificOrigin",
		builder =>
		{
			builder.WithOrigins("http://localhost:4200")
				   .AllowAnyMethod()
				   .AllowAnyHeader();
		});
});

builder.Services.AddFluentValidationAutoValidation().AddValidatorsFromAssembly(Assembly.GetExecutingAssembly());


// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseCors("AllowSpecificOrigin");

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
