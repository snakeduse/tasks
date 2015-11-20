using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNet.Builder;
using Microsoft.AspNet.Http;
using Microsoft.Framework.DependencyInjection;
//using Tasks.Infrastructure;
//using Microsoft.Data.Entity;

namespace Tasks
{
    public class Startup
    {
        // For more information on how to configure your application, visit http://go.microsoft.com/fwlink/?LinkID=398940
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddMvc();

            //var connection = @"data source=;initial catalog=Tasks;persist security info=True;user id=;password=;multipleactiveresultsets=True";
            //services.AddEntityFramework()
            //    .AddSqlServer()
            //    .AddDbContext<TasksContext>(options => options.UseSqlServer(connection));
        }

        public void Configure(IApplicationBuilder app)
        {
            app.UseMvc();
        }
    }
}
