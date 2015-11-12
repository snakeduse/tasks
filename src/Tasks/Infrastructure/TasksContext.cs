using Microsoft.Data.Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Tasks.Infrastructure
{
    public class TasksContext : DbContext
    {
        public DbSet<Task> Tasks { get; set; }
    }
}
