using System.ComponentModel.DataAnnotations;

namespace TaskApi.Entities;

public enum TaskStatus
{
    PENDING,
    COMPLETED
}

public class TaskEntity
{
    public Guid Id { get; set; }

    [Required]
    [MaxLength(200)]
    public required string Title { get; set; }

    [MaxLength(1000)]
    public string? Description { get; set; }

    public TaskStatus Status { get; set; } = TaskStatus.PENDING;
}