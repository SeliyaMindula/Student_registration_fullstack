using Fullstack.API.Data;
using Fullstack.API.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Fullstack.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class StudentsController : Controller
    {
        private readonly FullstackDbContext _fullstackDbContext;

        public StudentsController(FullstackDbContext fullstackDbContext)
        {
            _fullstackDbContext = fullstackDbContext;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllStudents()
        {
            var students = await _fullstackDbContext.Students.ToListAsync();

            return Ok(students);
        }

        [HttpPost]

        public async Task<IActionResult> AddStudent([FromBody] Student studenRequest)
        {
            studenRequest.Id = Guid.NewGuid();
            await _fullstackDbContext.Students.AddAsync(studenRequest);
            await _fullstackDbContext.SaveChangesAsync();

            return Ok(studenRequest);
        }

        [HttpGet]
        [Route("{id:Guid}")]

        public async Task<IActionResult> GetStudent([FromRoute] Guid id)
        {
            var students =
                await _fullstackDbContext.Students.FirstOrDefaultAsync(x => x.Id == id);

            if (students == null)
            {
                return NotFound();
            }
            return Ok(students);
        }

        [HttpPut]
        [Route("{id:Guid}")]
        public async Task<IActionResult> UpdateStudent([FromRoute] Guid id, Student updateStudentRequest)
        {
            var students =
                   await _fullstackDbContext.Students.FindAsync(id);

            if (students == null)
            {
                return NotFound();
            }
            students.FirstName = updateStudentRequest.FirstName;
            students.LastName = updateStudentRequest.LastName;
            students.Mobile = updateStudentRequest.Mobile;
            students.Email = updateStudentRequest.Email;
            students.NIC = updateStudentRequest.NIC;
            students.DateOfBirth = updateStudentRequest.DateOfBirth;
            students.Address = updateStudentRequest.Address;

            await _fullstackDbContext.SaveChangesAsync();

            return Ok(students);
        }

        [HttpDelete]
        [Route("{id:Guid}")]
        public async Task<IActionResult> DeleteStudent([FromRoute] Guid id)
        {
            var students =
                  await _fullstackDbContext.Students.FindAsync(id);

            if (students == null)
            {
                return NotFound();
            }

            _fullstackDbContext.Students.Remove(students);
            await _fullstackDbContext.SaveChangesAsync();

            return Ok(students);
        }



    }
}
