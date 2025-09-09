package com.fitness.activityservice.dto;

import com.fitness.activityservice.model.activityType;
import com.fitness.activityservice.model.activityType;
import lombok.Data;

import java.time.LocalDateTime;
import java.util.Map;

@Data
public class ActivityResponse {
    private String id;
    private String userId;
    private activityType type;   // अब यह resolve होगा
    private Integer duration;
    private Integer caloriesBurned;
    private LocalDateTime startTime;
    private Map<String, Object> additionalMetrics;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
}
