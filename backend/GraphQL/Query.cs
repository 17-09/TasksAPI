using Microsoft.EntityFrameworkCore;
using TaskApi.Entities;

namespace TaskApi.GraphQL;

public class Query
{
    public async Task<List<TaskEntity>> GetAllTasks([Service] TaskDbContext db, CancellationToken ct)
    {
        return await db.Tasks
            .AsNoTracking()
            .OrderBy(t => t.Title)
            .ToListAsync(ct);
    }
}