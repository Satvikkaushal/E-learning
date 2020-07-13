package com.Rythmos.CourseManagement.model;

public class EmployeeReqCourses {
	private String reqCourse;
	private String reqCJustification;
	private String reqCourseStatus="Waiting for Approval";
	public String getReqCourseStatus() {
		return reqCourseStatus;
	}
	public void setReqCourseStatus(String reqCourseStatus) {
		this.reqCourseStatus = reqCourseStatus;
	}
	public String getReqCourse() {
		return reqCourse;
	}
	public void setReqCourse(String reqCourse) {
		this.reqCourse = reqCourse;
	}
	public String getReqCJustification() {
		return reqCJustification;
	}
	public void setReqCJustification(String reqCJustification) {
		this.reqCJustification = reqCJustification;
	}
}
