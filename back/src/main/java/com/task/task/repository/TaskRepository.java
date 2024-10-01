package com.task.task.repository;

import com.task.task.models.Task;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface TaskRepository extends JpaRepository<Task, Long> {

    @Query(value = "SELECT * FROM TASKS WHERE title = :title", nativeQuery = true)
    Task getTaskByTitle(@Param("title") String title);

}
