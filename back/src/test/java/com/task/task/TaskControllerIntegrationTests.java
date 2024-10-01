package com.task.task;

import com.task.task.controller.TaskController;
import com.task.task.dto.TaskDto;
import com.task.task.models.Task;
import com.task.task.repository.TaskRepository;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.BDDMockito.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;

import javax.swing.*;

import java.util.Arrays;
import java.util.List;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;


@RunWith(SpringRunner.class)
@WebMvcTest(value = TaskController.class, excludeAutoConfiguration = SecurityAutoConfiguration.class)
public class TaskControllerIntegrationTests {

    @Autowired
    private MockMvc mvc;

    @MockBean
    private TaskRepository taskRepository;

    @Before
    public void setUp() throws Exception
    {

    }


    @Test
    public void whenPostTask_thenSaveTask() throws Exception {
        TaskDto testTask = new TaskDto("teste task", "teste description", false);
        Task savedTask = new Task(testTask);


        when(taskRepository.save(any(Task.class))).thenReturn(savedTask);

        mvc.perform(post("/tasks")
                .contentType(MediaType.APPLICATION_JSON)
                .content("{\"title\": \"teste task\", \"description\": \"teste description\", \"completed\": false}"))
                .andExpect(status().isCreated())
                .andExpect(jsonPath("$.title").value("teste task"))
                .andExpect(jsonPath("$.description").value("teste description"))
                .andExpect(jsonPath("$.completed").value(false));

        verify(taskRepository, times(1)).save(any(Task.class));



    }

    @Test
    public void getAllTasks() throws Exception {

        Task task1 = new Task(new TaskDto("Task 1", "Description 1", false));
        Task task2 = new Task(new TaskDto("Task 2", "Description 2", true));
        List<Task> allTasks = Arrays.asList(task1, task2);


        when(taskRepository.findAll()).thenReturn(allTasks);


        mvc.perform(get("/tasks")
                        .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$[0].title").value("Task 1"))
                .andExpect(jsonPath("$[0].description").value("Description 1"))
                .andExpect(jsonPath("$[0].completed").value(false))
                .andExpect(jsonPath("$[1].title").value("Task 2"))
                .andExpect(jsonPath("$[1].description").value("Description 2"))
                .andExpect(jsonPath("$[1].completed").value(true));


        verify(taskRepository, times(1)).findAll();

    }



}
























