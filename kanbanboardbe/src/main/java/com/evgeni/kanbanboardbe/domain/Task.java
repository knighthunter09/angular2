package com.evgeni.kanbanboardbe.domain;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

/**
 * Created by evgeni on 9/23/16.
 */
@Data
@Entity
public class Task {
    @Id
    @GeneratedValue
    private long id;
    private String title;
    private String description;
    private TaskStatus status;
}
