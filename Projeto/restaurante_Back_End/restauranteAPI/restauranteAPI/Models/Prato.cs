using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace restauranteAPI.Models
{
    public class Prato
    {
        public int ID { get; set; }

        public int RestauranteID { get; set; }

        [Required(ErrorMessage = "O nome do Prato é obrigatório.")]
        public string NomePrato { get; set; }

        [Required(ErrorMessage = "O preço do Prato é obrigatório.")]
        public double PrecoPrato { get; set; }
        
        //[DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        //public virtual Restaurante Restaurantes { get; set; }
    }
}
