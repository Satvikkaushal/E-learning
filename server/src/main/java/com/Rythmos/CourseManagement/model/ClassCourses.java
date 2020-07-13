package com.Rythmos.CourseManagement.model;

public class ClassCourses {

	private Integer classId;
	private String className;
	private String classDescription;
	private Integer classCount;
	private Integer classAvailableCount;
	private String classDate;

	public Integer getClassId() {
		return classId;
	}
	public void setClassId(Integer classId) {
		this.classId = classId;
	}
	public String getClassName() {
		return className;
	}
	public void setClassName(String className) {
		this.className = className;
	}
	public String getClassDescription() {
		return classDescription;
	}
	public void setClassDescription(String classDescription) {
		this.classDescription = classDescription;
	}
	public Integer getClassCount() {
		return classCount;
	}
	public void setClassCount(Integer classCount) {
		this.classCount = classCount;
	}
	public Integer getClassAvailableCount() {
		return classAvailableCount;
	}
	public void setClassAvailableCount(Integer classAvailableCount) {
		this.classAvailableCount = classAvailableCount;
	}
	public String getClassDate() {
		return classDate;
	}
	public void setClassDate(String classDate) {
		this.classDate = classDate;
	}
}
