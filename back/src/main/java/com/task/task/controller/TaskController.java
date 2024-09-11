package com.task.task.controller;


import com.task.task.dto.TaskDto;
import com.task.task.models.Task;
import com.task.task.repository.TaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/tasks")
@CrossOrigin(origins = "*")
public class TaskController {

    @Autowired
    private TaskRepository taskRepository;

    @PostMapping("")
    public ResponseEntity<Task> create(@RequestBody TaskDto taskDto){
        var newTask = new Task(taskDto);



        return ResponseEntity.status(HttpStatus.CREATED).body(taskRepository.save(newTask));
    }

    @GetMapping("")
    public List<Task> getTasks() {
        return taskRepository.findAll();
    }


}
