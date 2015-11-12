using Microsoft.Data.Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using Tasks.Models;

namespace Tasks.Infrastructure
{
    public class TasksContext : DbContext
    {
        public DbSet<Task> Tasks { get; set; }
        public DbSet<Card> Cards { get; set; }
    }
}
