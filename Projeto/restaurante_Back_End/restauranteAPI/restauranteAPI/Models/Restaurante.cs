using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace restauranteAPI.Models
{
    public class Restaurante
    {
        public int ID { get; set; }

        [Required(ErrorMessage = "O nome do Restaurante é obrigatório.")]
        public string NomeRestaurante { get; set; }

        //public virtual ICollection<Prato> Pratos { get; set; }
    }
}
