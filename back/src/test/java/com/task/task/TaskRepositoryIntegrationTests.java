package com.task.task;

import com.task.task.dto.TaskDto;
import com.task.task.models.Task;
import com.task.task.repository.TaskRepository;
import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;

@DataJpaTest
public class TaskRepositoryIntegrationTests {

    @Autowired
    private TestEntityManager entityManager;

    @Autowired
    private TaskRepository taskRepository;


    @Test
    public void whenFindTitle_thenReturnTask() {

        Task task = new Task(new TaskDto("Test Task", "Description", false));
        entityManager.persistAndFlush(task);

        Task taskFound = taskRepository.getTaskByTitle(task);

    }




}
