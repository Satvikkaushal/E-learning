package com.Rythmos.CourseManagement.model;

import java.util.List;

import javax.persistence.ElementCollection;
import javax.persistence.Embedded;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import org.hibernate.annotations.LazyCollection;
import org.hibernate.annotations.LazyCollectionOption;

@Entity
public class EmployeeCourses {
	@Id
	private Integer empId;
	private String empName;

	@ElementCollection
	@LazyCollection(LazyCollectionOption.FALSE)
	@Embedded
	private List<String> empAddedCoursesIds;

	@ElementCollection
	@LazyCollection(LazyCollectionOption.FALSE)
	@Embedded
	private List<EmployeeReqCourses> empSugCourse;

	public List<EmployeeReqCourses> getEmpSugCourse() {
		return empSugCourse;
	}
	public List<String> getEmpAddedCoursesIds() {
		return empAddedCoursesIds;
	}
	public void setEmpAddedCoursesIds(List<String> empAddedCoursesIds) {
		this.empAddedCoursesIds = empAddedCoursesIds;
	}
	public void setEmpSugCourse(List<EmployeeReqCourses> empSugCourse) {
		this.empSugCourse = empSugCourse;
	}

	public Integer getEmpId() {
		return empId;
	}

	public void setEmpId(Integer empId) {
		this.empId = empId;
	}

	public String getEmpName() {
		return empName;
	}

	public void setEmpName(String empName) {
		this.empName = empName;
	}
}
