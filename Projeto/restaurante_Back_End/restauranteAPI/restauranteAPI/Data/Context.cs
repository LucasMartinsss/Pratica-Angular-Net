using Microsoft.EntityFrameworkCore;
using restauranteAPI.Models;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace restauranteAPI.Data
{
    public class Context : DbContext
    {
        public Context(DbContextOptions<Context> options) : base(options)
        {

        }
        
        public DbSet<Prato> Pratos { get; set; }
        
        public DbSet<Restaurante> Restaurantes { get; set; }

        
    }
}
