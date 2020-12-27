using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebApplication2.Models.HarmanTarimDB;

namespace WebApplication2.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class GrowersController : ControllerBase
    {
        private readonly HarmanTarimContext _context;

        public GrowersController(HarmanTarimContext context)
        {
            _context = context;
        }

        // GET: api/Growers
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Growers>>> Getgrowers()
        {
            return await _context.growers.ToListAsync();
        }

        // GET: api/Growers/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Growers>> GetGrowers(int id)
        {
            var growers = await _context.growers.FindAsync(id);

            if (growers == null)
            {
                return NotFound();
            }

            return growers;
        }

        // PUT: api/Growers/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutGrowers(int id, Growers growers)
        {
            if (id != growers.id)
            {
                return BadRequest();
            }

            _context.Entry(growers).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!GrowersExists(id))
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

        // POST: api/Growers
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<Growers>> PostGrowers(Growers growers)
        {
            _context.growers.Add(growers);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetGrowers", new { id = growers.id }, growers);
        }

        // DELETE: api/Growers/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Growers>> DeleteGrowers(int id)
        {
            var growers = await _context.growers.FindAsync(id);
            if (growers == null)
            {
                return NotFound();
            }

            _context.growers.Remove(growers);
            await _context.SaveChangesAsync();

            return growers;
        }

        private bool GrowersExists(int id)
        {
            return _context.growers.Any(e => e.id == id);
        }
    }
}
