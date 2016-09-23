package com.evgeni.kanbanboardbe.repository;

import com.evgeni.kanbanboardbe.domain.Task;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

/**
 * Created by evgeni on 9/23/16.
 */
@RepositoryRestResource(collectionResourceRel = "tasks", path = "tasks")
public interface TaskRepository extends PagingAndSortingRepository<Task, Long> {
}
