package com.Rythmos.CourseManagement.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.Rythmos.CourseManagement.model.CourseDetails;

public interface CourseDetailsRepository extends JpaRepository<CourseDetails, Integer>{
	
}
