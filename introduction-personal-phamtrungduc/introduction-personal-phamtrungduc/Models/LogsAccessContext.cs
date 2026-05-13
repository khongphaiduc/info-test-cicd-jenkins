using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace introduction_personal_phamtrungduc.Models;

public partial class LogsAccessContext : DbContext
{
    public LogsAccessContext()
    {
    }

    public LogsAccessContext(DbContextOptions<LogsAccessContext> options)
        : base(options)
    {
    }

    public virtual DbSet<CheckLog> CheckLogs { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {

    }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<CheckLog>(entity =>
        {
            entity.HasKey(e => e.IdCheckLog).HasName("PK__CheckLog__8DA5EEF4CFE31715");

            entity.ToTable("CheckLog");

            entity.Property(e => e.IdCheckLog).ValueGeneratedNever();
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
