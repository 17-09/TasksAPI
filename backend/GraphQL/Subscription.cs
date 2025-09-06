using TaskApi.Entities;

namespace TaskApi.GraphQL;

public class Subscription
{
    [Subscribe]
    [Topic(nameof(TaskCreated))]
    public TaskEntity TaskCreated([EventMessage] TaskEntity task) => task;

    [Subscribe]
    [Topic(nameof(TaskUpdated))]
    public TaskEntity TaskUpdated([EventMessage] TaskEntity task) => task;
}