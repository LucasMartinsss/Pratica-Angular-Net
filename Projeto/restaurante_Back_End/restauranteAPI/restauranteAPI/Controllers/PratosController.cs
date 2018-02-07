using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using restauranteAPI.Data;
using restauranteAPI.Models;

namespace restauranteAPI.Controllers
{
    [Produces("application/json")]
    [Route("api/Pratos")]
    public class PratosController : Controller
    {
        private readonly Context _context;

        public PratosController(Context context)
        {
            _context = context;
        }

        // GET: api/Pratos
        [HttpGet]
        public IEnumerable<Prato> GetPratos()
        {
            //var restaurant = _context.Restaurantes.Where(p => p.ID == 1).FirstOrDefault();
            //return new Prato[] { new Prato { NomePrato = "teste", PrecoPrato = 10}, new Prato { NomePrato = "teste2" } };
            return _context.Pratos;
        }

        // GET: api/Pratos/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetPrato([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var prato = await _context.Pratos.SingleOrDefaultAsync(m => m.ID == id);

            if (prato == null)
            {
                return NotFound();
            }

            return Ok(prato);
        }

        // PUT: api/Pratos/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutPrato([FromRoute] int id, [FromBody] Prato prato)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != prato.ID)
            {
                return BadRequest();
            }

            _context.Entry(prato).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PratoExists(id))
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

        // POST: api/Pratos
        [HttpPost]
       // [ValidateAntiForgeryToken]
        public async Task<IActionResult> PostPrato([FromBody] Prato prato)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.Pratos.Add(prato);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetPrato", new { id = prato.ID }, prato);
        }

        // DELETE: api/Pratos/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeletePrato([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var prato = await _context.Pratos.SingleOrDefaultAsync(m => m.ID == id);
            if (prato == null)
            {
                return NotFound();
            }

            _context.Pratos.Remove(prato);
            await _context.SaveChangesAsync();

            return Ok(prato);
        }

        private bool PratoExists(int id)
        {
            return _context.Pratos.Any(e => e.ID == id);
        }
    }
}