using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Tasks.Models
{
    /// <summary>
    /// Модель задачи
    /// </summary>
    public class Task
    {
        /// <summary>
        /// Идентификатор заддачи
        /// </summary>
        public int Id { get; set; }

        /// <summary>
        /// Название задачи
        /// </summary>
        public string Title { get; set; }

        /// <summary>
        /// Количество помидор
        /// </summary>
        public int PomodoroCount { get; set; }

        /// <summary>
        /// Количество выполненных помидор
        /// </summary>
        public int PomodoroExecuted{ get; set; }

        /// <summary>
        /// Дата создания задачи
        /// </summary>
        public DateTime CreatedAt { get; set; }

        /// <summary>
        /// Дата обновления задачи
        /// </summary>
        public DateTime UpdatedAt { get; set; }
    }
}
