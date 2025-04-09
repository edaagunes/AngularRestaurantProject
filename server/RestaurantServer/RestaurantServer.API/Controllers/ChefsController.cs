using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using RestaurantServer.API.DataAccess.Context;
using RestaurantServer.API.DataAccess.Entities;

namespace RestaurantServer.API.Controllers
{
	[Route("api/[controller]")]
	[ApiController]
	public class ChefsController : ControllerBase
	{
		private readonly AppDbContext _context;

		public ChefsController(AppDbContext context)
		{
			_context = context;
		}

		// GET: api/Chefs
		[HttpGet]
		public async Task<ActionResult<IEnumerable<Chef>>> GetChefs()
		{
			return await _context.Chefs.ToListAsync();
		}

		// GET: api/Chefs/5
		[HttpGet("{id}")]
		public async Task<ActionResult<Chef>> GetChef(int id)
		{
			var chef = await _context.Chefs.FindAsync(id);

			if (chef == null)
			{
				return NotFound();
			}

			return chef;
		}

		// PUT: api/Chefs/5
		// To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
		[HttpPut("{id}")]
		public async Task<IActionResult> PutChef(int id, Chef chef)
		{		
			if (id != chef.ChefId)
			{
				return BadRequest();
			}

			if (!ModelState.IsValid)
			{
				return BadRequest(ModelState);
			}

			_context.Entry(chef).State = EntityState.Modified;

			try
			{
				await _context.SaveChangesAsync();
			}
			catch (DbUpdateConcurrencyException)
			{
				if (!ChefExists(id))
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

		// POST: api/Chefs
		// To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
		[HttpPost]
		public async Task<ActionResult<Chef>> PostChef(Chef chef)
		{
			if (!ModelState.IsValid)
			{
				return BadRequest(ModelState);
			}

			_context.Chefs.Add(chef);
			await _context.SaveChangesAsync();

			return CreatedAtAction("GetChef", new { id = chef.ChefId }, chef);
		}

		// DELETE: api/Chefs/5
		[HttpDelete("{id}")]
		public async Task<IActionResult> DeleteChef(int id)
		{
			var chef = await _context.Chefs.FindAsync(id);
			if (chef == null)
			{
				return NotFound();
			}

			_context.Chefs.Remove(chef);
			await _context.SaveChangesAsync();

			return NoContent();
		}

		private bool ChefExists(int id)
		{
			return _context.Chefs.Any(e => e.ChefId == id);
		}
	}
}
