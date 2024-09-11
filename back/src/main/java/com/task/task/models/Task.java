package com.task.task.models;


import com.task.task.dto.TaskDto;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "tasks_tb")
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Task {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;

    private String description;

    private boolean completed;

    public Task(TaskDto taskDto){
        this.title = taskDto.title();
        this.description = taskDto.description();
        this.completed = taskDto.completed();
    }
}
