using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Tasks.Models
{
    /// <summary>
    /// Модель карточки
    /// </summary>
    public class Card
    {
        /// <summary>
        /// Идентификатор карточки
        /// </summary>
        public int Id { get; set; }

        /// <summary>
        /// Заголовок карточки
        /// </summary>
        public string Title { get; set; }

        /// <summary>
        /// Находится ли карточка в архиве
        /// </summary>
        public bool IsInArchive { get; set; }

        /// <summary>
        /// Задачи карточки
        /// </summary>
        public List<Task> Tasks { get; set; }
    }
}
