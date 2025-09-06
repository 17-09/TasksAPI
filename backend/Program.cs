using HotChocolate.AspNetCore;
using Microsoft.EntityFrameworkCore;
using TaskApi;
using TaskApi.GraphQL;
using Path = System.IO.Path;

var builder = WebApplication.CreateBuilder(args);

// Resolve connection string (env override > appsettings)
var conn = builder.Configuration.GetConnectionString("Default");
if (string.IsNullOrWhiteSpace(conn))
{
    var dataDir = Path.Combine(builder.Environment.ContentRootPath, "data");
    Directory.CreateDirectory(dataDir);
    conn = $"Data Source={Path.Combine(dataDir, "tasks.db")}";
}

// Services
builder.Services.AddDbContext<TaskDbContext>(options => { options.UseSqlite(conn); });

builder.Services
    .AddGraphQLServer()
    .AddQueryType<Query>()
    .AddMutationType<Mutation>()
    .AddSubscriptionType<Subscription>()
    .AddInMemorySubscriptions();

builder.Services.AddCors(options =>
{
    options.AddPolicy("DevCors", p =>
    {
        p.AllowAnyOrigin()
            .AllowAnyHeader()
            .AllowAnyMethod();
    });
});

var app = builder.Build();

// Ensure data directory and DB
var dataPath = Path.Combine(app.Environment.ContentRootPath, "data");
Directory.CreateDirectory(dataPath);
using (var scope = app.Services.CreateScope())
{
    var db = scope.ServiceProvider.GetRequiredService<TaskDbContext>();
    await db.Database.EnsureCreatedAsync();
}

// Middleware
app.UseWebSockets();
app.UseCors("DevCors");

// GraphQL HTTP + WS on /graphql
app.MapGraphQL()
    .WithOptions(new GraphQLServerOptions
    {
        Tool = { Enable = app.Environment.IsDevelopment() }
    });

app.Run();