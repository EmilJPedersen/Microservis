using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ReceiverAPI.Models;

namespace ReceiverAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ReceiveModelsController : ControllerBase
    {
        private readonly ReceiverAPIContext _context;

        public ReceiveModelsController(ReceiverAPIContext context)
        {
            _context = context;
        }

        // GET: api/ReceiveModels
        [HttpGet]
        public async Task<ActionResult<IEnumerable<ReceiveModel>>> GetReceiveModel()
        {
            return await _context.ReceiveModel.ToListAsync();
        }

        // GET: api/ReceiveModels/5
        [HttpGet("{id}")]
        public async Task<ActionResult<ReceiveModel>> GetReceiveModel(string id)
        {
            var receiveModel = await _context.ReceiveModel.FindAsync(id);

            if (receiveModel == null)
            {
                return NotFound();
            }

            return receiveModel;
        }

        // PUT: api/ReceiveModels/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutReceiveModel(string id, ReceiveModel receiveModel)
        {
            if (id != receiveModel.titel)
            {
                return BadRequest();
            }

            _context.Entry(receiveModel).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ReceiveModelExists(id))
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

        // POST: api/ReceiveModels
        [HttpPost]
        public async Task<ActionResult<ReceiveModel>> PostReceiveModel(string titel)
        {
            ReceiveModel receiveModel = new ReceiveModel();
            receiveModel.titel = titel;
            receiveModel.date = DateTime.Now.ToString();
            _context.ReceiveModel.Add(receiveModel);
            await _context.SaveChangesAsync();
            return CreatedAtAction("GetReceiveModel", new { id = receiveModel.titel }, receiveModel);
        }

        // DELETE: api/ReceiveModels/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<ReceiveModel>> DeleteReceiveModel(string id)
        {
            var receiveModel = await _context.ReceiveModel.FindAsync(id);
            if (receiveModel == null)
            {
                return NotFound();
            }

            _context.ReceiveModel.Remove(receiveModel);
            await _context.SaveChangesAsync();

            return receiveModel;
        }

        private bool ReceiveModelExists(string id)
        {
            return _context.ReceiveModel.Any(e => e.titel == id);
        }
    }
}
