package com.fitness.aiservice.model;

import lombok.Builder;
import lombok.Data;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDateTime;
import java.util.List;

@Builder
@Data
@Document(collection = "recommendation")
public class Recommendation {
    @Id
    private String id;
    private String activityId;
    private String type;
    private String userId;
    private String recommendation;
    private List<String> improvement;
    private List<String> suggestion;
    private List<String> safety;

    @CreatedDate
    private LocalDateTime createdAt;
}
