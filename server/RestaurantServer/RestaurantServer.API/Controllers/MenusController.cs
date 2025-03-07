using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using RestaurantServer.API.DataAccess.Context;
using RestaurantServer.API.DataAccess.Entities;
using RestaurantServer.API.Dtos;

namespace RestaurantServer.API.Controllers
{
	[Route("api/[controller]")]
	[ApiController]
	public class MenusController : ControllerBase
	{
		private readonly AppDbContext _context;

		public MenusController(AppDbContext context)
		{
			_context = context;
		}

		// GET: api/Menus
		[HttpGet]
		public async Task<ActionResult<IEnumerable<Menu>>> GetMenus()
		{
			return await _context.Menus.ToListAsync();
		}

		// GET: api/Menus/5
		[HttpGet("{id}")]
		public async Task<ActionResult<Menu>> GetMenu(int id)
		{
			var menu = await _context.Menus.FindAsync(id);

			if (menu == null)
			{
				return NotFound();
			}

			return menu;
		}

		// PUT: api/Menus/5
		// To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
		[HttpPut("{id}")]
		public async Task<IActionResult> PutMenu(int id, MenuDto menuDto)
		{
			if (id != menuDto.Id)
			{
				return BadRequest();
			}

			if (!ModelState.IsValid)
			{
				return BadRequest(ModelState);
			}

			var menu = new Menu
			{
				Id = menuDto.Id,
				Title = menuDto.Title,
				Description = menuDto.Description,
				Price = menuDto.Price,
				CategoryId = menuDto.CategoryId,
				ImageUrl = menuDto.ImageUrl
			};

			_context.Entry(menu).State = EntityState.Modified;

			try
			{
				await _context.SaveChangesAsync();
			}
			catch (DbUpdateConcurrencyException)
			{
				if (!MenuExists(id))
				{
					return NotFound();
				}
				else
				{
					throw;
				}
			}

			return NoContent();
		}

		// POST: api/Menus
		// To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
		[HttpPost]
		public async Task<ActionResult<Menu>> PostMenu(MenuDto menuDto)
		{
			if (!ModelState.IsValid)
			{
				return BadRequest(ModelState);
			}

			var menu = new Menu
			{
				Id = menuDto.Id,
				Title = menuDto.Title,
				Description = menuDto.Description,
				Price = menuDto.Price,
				CategoryId = menuDto.CategoryId,
				ImageUrl = menuDto.ImageUrl
			};

			_context.Menus.Add(menu);
			await _context.SaveChangesAsync();

			return CreatedAtAction("GetMenu", new { id = menuDto.Id }, menuDto);
		}

		// DELETE: api/Menus/5
		[HttpDelete("{id}")]
		public async Task<IActionResult> DeleteMenu(int id)
		{
			var menu = await _context.Menus.FindAsync(id);
			if (menu == null)
			{
				return NotFound();
			}

			_context.Menus.Remove(menu);
			await _context.SaveChangesAsync();

			return NoContent();
		}

		private bool MenuExists(int id)
		{
			return _context.Menus.Any(e => e.Id == id);
		}
	}
}
