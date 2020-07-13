package com.Rythmos.CourseManagement.model;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.ElementCollection;
import javax.persistence.Embedded;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.validation.constraints.NotNull;

import org.hibernate.annotations.LazyCollection;
import org.hibernate.annotations.LazyCollectionOption;

@Entity
public class CourseDetails {
	@Id
	@GeneratedValue
	@Column(name = "courseId")
	private int courseId;

	@Column(name = "courseName")
	private String courseName;

	@Column(name = "courseDescription")
	private String courseDescription;

	@Column(name = "courseDuration")
	private String courseDuration;
	

	@Column(name = "courseAvailable")
	private String courseAvailable="Available";


	@Column(name = "courseImage")
	private String courseImage; // Course Image which is different for video images.

	@NotNull
	@Enumerated(EnumType.STRING)
	private CourseType courseType;

	// Each course has list of videos or one class room
	@ElementCollection
	@LazyCollection(LazyCollectionOption.FALSE)
	@Embedded
	private List<VideoCourses> videoCourses;
	
	@ElementCollection
	@LazyCollection(LazyCollectionOption.FALSE)
	@Embedded
	private List<ClassCourses> classCourses;
	
	// Getters and setters for all variables
	
	public String getCourseAvailable() {
		return courseAvailable;
	}

	public void setCourseAvailable(String courseAvailable) {
		this.courseAvailable = courseAvailable;
	}
	
	public List<VideoCourses> getVideoCourses() {
		return videoCourses;
	}

	public void setVideoCourses(List<VideoCourses> videoCourses) {
		this.videoCourses = videoCourses;
	}

	public List<ClassCourses> getClassCourses() {
		return classCourses;
	}

	public void setClassCourses(List<ClassCourses> classCourses) {
		this.classCourses = classCourses;
	}

	
	public int getCourseId() {
		return courseId;
	}

	public void setCourseId(int courseId) {
		this.courseId = courseId;
	}

	public String getCourseName() {
		return courseName;
	}

	public void setCourseName(String courseName) {
		this.courseName = courseName;
	}

	public String getCourseDescription() {
		return courseDescription;
	}

	public void setCourseDescription(String courseDescription) {
		this.courseDescription = courseDescription;
	}

	public String getCourseDuration() {
		return courseDuration;
	}

	public void setCourseDuration(String courseDuration) {
		this.courseDuration = courseDuration;
	}

	public String getCourseImage() {
		return courseImage;
	}

	public void setCourseImage(String courseImage) {
		this.courseImage = courseImage;
	}

	public CourseType getCourseType() {
		return courseType;
	}

	public void setCourseType(CourseType courseType) {
		this.courseType = courseType;
	}

}
