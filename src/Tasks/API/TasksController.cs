using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNet.Mvc;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace Tasks.API
{
    [Route("api/[controller]")]
    public class TasksController : Controller
    {
        // GET: api/values
        [HttpGet]
        public IEnumerable<Models.Task> Get()
        {
            return new List<Models.Task> {
                new Models.Task { Id = 1, CreatedAt = DateTime.Now, Title = "Задача 1", PomodoroCount = 3, PomodoroExecuted = 1 },
                new Models.Task { Id = 2, CreatedAt = DateTime.Now, Title = "Задача 2", PomodoroCount = 5 }
            };
        }
    }
}
