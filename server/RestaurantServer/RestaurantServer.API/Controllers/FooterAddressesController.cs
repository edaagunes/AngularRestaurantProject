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
    public class FooterAddressesController : ControllerBase
    {
        private readonly AppDbContext _context;

        public FooterAddressesController(AppDbContext context)
        {
            _context = context;
        }

        // GET: api/FooterAddresses
        [HttpGet]
        public async Task<ActionResult<IEnumerable<FooterAddress>>> GetFooterAddresses()
        {
            return await _context.FooterAddresses.ToListAsync();
        }

        // GET: api/FooterAddresses/5
        [HttpGet("{id}")]
        public async Task<ActionResult<FooterAddress>> GetFooterAddress(int id)
        {
            var footerAddress = await _context.FooterAddresses.FindAsync(id);

            if (footerAddress == null)
            {
                return NotFound();
            }

            return footerAddress;
        }

        // PUT: api/FooterAddresses/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutFooterAddress(int id, FooterAddress footerAddress)
        {
            if (id != footerAddress.FooterAddressId)
            {
                return BadRequest();
            }

            _context.Entry(footerAddress).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!FooterAddressExists(id))
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

        // POST: api/FooterAddresses
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<FooterAddress>> PostFooterAddress(FooterAddress footerAddress)
        {
            _context.FooterAddresses.Add(footerAddress);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetFooterAddress", new { id = footerAddress.FooterAddressId }, footerAddress);
        }

        // DELETE: api/FooterAddresses/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteFooterAddress(int id)
        {
            var footerAddress = await _context.FooterAddresses.FindAsync(id);
            if (footerAddress == null)
            {
                return NotFound();
            }

            _context.FooterAddresses.Remove(footerAddress);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool FooterAddressExists(int id)
        {
            return _context.FooterAddresses.Any(e => e.FooterAddressId == id);
        }
    }
}
