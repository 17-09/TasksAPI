using HotChocolate.Subscriptions;
using Microsoft.EntityFrameworkCore;
using TaskApi.Entities;
using TaskStatus = TaskApi.Entities.TaskStatus;

namespace TaskApi.GraphQL;

public class Mutation
{
    public async Task<TaskEntity> CreateTask(
        string title,
        string? description,
        [Service] TaskDbContext db,
        [Service] ITopicEventSender sender,
        CancellationToken ct)
    {
        var cleanTitle = (title ?? "").Trim();
        if (string.IsNullOrWhiteSpace(cleanTitle))
        {
            throw new GraphQLException(ErrorBuilder.New()
                .SetMessage("Title is required.")
                .SetCode("VALIDATION_ERROR")
                .Build());
        }

        var cleanDescription = string.IsNullOrWhiteSpace(description) ? null : description!.Trim();

        var entity = new TaskEntity
        {
            Id = Guid.NewGuid(),
            Title = cleanTitle,
            Description = cleanDescription,
            Status = TaskStatus.PENDING
        };

        db.Tasks.Add(entity);
        await db.SaveChangesAsync(ct);

        await sender.SendAsync(nameof(Subscription.TaskCreated), entity, ct);

        return entity;
    }

    public async Task<TaskEntity> UpdateTaskStatus(
        Guid id,
        TaskStatus status,
        [Service] TaskDbContext db,
        [Service] ITopicEventSender sender,
        CancellationToken ct)
    {
        var entity = await db.Tasks.FirstOrDefaultAsync(t => t.Id == id, ct);
        if (entity is null)
        {
            throw new GraphQLException(ErrorBuilder.New()
                .SetMessage($"Task with id '{id}' not found.")
                .SetCode("NOT_FOUND")
                .Build());
        }

        entity.Status = status;
        await db.SaveChangesAsync(ct);

        await sender.SendAsync(nameof(Subscription.TaskUpdated), entity, ct);

        return entity;
    }
}