using introduction_personal_phamtrungduc.Models;
using Microsoft.EntityFrameworkCore;

namespace introduction_personal_phamtrungduc.Persistence
{
    public static class DependencyInjections
    {
        public static IServiceCollection AddPersistence(this IServiceCollection services, IConfiguration configuration)
        {

            services.AddDbContext<LogsAccessContext>(options =>
                options.UseSqlServer(configuration["SQL"]));

            return services;

        }
    }
}
