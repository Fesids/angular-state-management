package com.task.task.dto;

public record TaskDto(
        String title,
        String description,
        Boolean completed
) {
}
