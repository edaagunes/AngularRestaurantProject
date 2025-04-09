using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using RestaurantServer.API.DataAccess.Context;
using RestaurantServer.API.DataAccess.Entities;

namespace RestaurantServer.API.Controllers
{
	[Route("api/[controller]")]
    [ApiController]
    public class AboutsController : ControllerBase
    {
        private readonly AppDbContext _context;

        public AboutsController(AppDbContext context)
        {
            _context = context;
        }

        // GET: api/Abouts
        [HttpGet]
        public async Task<ActionResult<IEnumerable<About>>> GetAbouts()
        {
            return await _context.Abouts.ToListAsync();
        }

        // GET: api/Abouts/5
        [HttpGet("{id}")]
        public async Task<ActionResult<About>> GetAbout(int id)
        {
            var about = await _context.Abouts.FindAsync(id);

            if (about == null)
            {
                return NotFound();
            }

            return about;
        }

        // PUT: api/Abouts/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutAbout(int id, About about)
        { 
			if (id != about.Id)
            {
                return BadRequest();
            }

			if (!ModelState.IsValid)
			{
				return BadRequest(ModelState);
			}

			_context.Entry(about).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!AboutExists(id))
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

        // POST: api/Abouts
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<About>> PostAbout(About about)
        {
			if (!ModelState.IsValid)
			{
				return BadRequest(ModelState);
			}

			_context.Abouts.Add(about);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetAbout", new { id = about.Id }, about);
        }

        // DELETE: api/Abouts/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteAbout(int id)
        {
            var about = await _context.Abouts.FindAsync(id);
            if (about == null)
            {
                return NotFound();
            }

            _context.Abouts.Remove(about);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool AboutExists(int id)
        {
            return _context.Abouts.Any(e => e.Id == id);
        }
    }
}
