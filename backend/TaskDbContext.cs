using Microsoft.EntityFrameworkCore;
using TaskApi.Entities;
using TaskStatus = TaskApi.Entities.TaskStatus;

namespace TaskApi;

public class TaskDbContext(DbContextOptions<TaskDbContext> options) : DbContext(options)
{
    public DbSet<TaskEntity> Tasks => Set<TaskEntity>();

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        var e = modelBuilder.Entity<TaskEntity>();
        e.HasKey(t => t.Id);
        e.Property(t => t.Title).IsRequired().HasMaxLength(200);
        e.Property(t => t.Description).HasMaxLength(1000);
        e.Property(t => t.Status)
            .HasConversion<string>()
            .HasDefaultValue(TaskStatus.PENDING)
            .IsRequired();
    }
}