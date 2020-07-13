package com.Rythmos.CourseManagement.resource;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import com.Rythmos.CourseManagement.model.ClassCourses;
import com.Rythmos.CourseManagement.model.CourseDetails;
import com.Rythmos.CourseManagement.model.CourseType;
import com.Rythmos.CourseManagement.model.VideoCourses;
import com.Rythmos.CourseManagement.repository.CourseDetailsRepository;

@RestController
@CrossOrigin
@RequestMapping(value = "/course")
public class CourseDetailResourses {
	
	@Autowired
	CourseDetailsRepository courseDetailsRepository;
	
	 //All courses with list of videos and classes.
	 @GetMapping(value = "/all")                                   
	 public List<CourseDetails> getAll() {
	    return courseDetailsRepository.findAll();
	 }
	 
	 //returns all video courses for particular courseid.
	 @GetMapping(value="/videos/{courseId}")                                   
	 public List<VideoCourses> getVideoCourses(@PathVariable Integer courseId){
		 CourseDetails courseDetails= courseDetailsRepository.findById(courseId).get();
		 if(courseDetails.getCourseType().equals(CourseType.Video)) {
			 return courseDetails.getVideoCourses();
		 }
		 return null;
	 }
	 
	 //returns all video courses for particular ids.
	 @GetMapping(value="/classes/{courseId}")                                   
	 public List<ClassCourses> getCoursesClasses(@PathVariable Integer courseId){
		 CourseDetails courseDetails= courseDetailsRepository.findById(courseId).get();
		 if(courseDetails.getCourseType().equals(CourseType.ClassRoom)) {
			 return courseDetails.getClassCourses();
		 }
		 return null;
	 }
	
	 //Add particular course
	 @PostMapping(value = "/addCourse")
	 public List<CourseDetails> addCourse(@RequestBody CourseDetails courseDetails) {
		 courseDetailsRepository.save(courseDetails);
		 return courseDetailsRepository.findAll();
	 }
	 
	 //add videos to particular course
	 @RequestMapping(value = "/addVideoToCourse/{courseId}", method = RequestMethod.PUT)                                            //put method to add new single videos to courses
	 public List<VideoCourses> addVideoToCourse (@RequestBody VideoCourses videoCourses,@PathVariable Integer courseId ) {          // if need to add list of videos implement list<videocourses> in requested body.                    
		 CourseDetails courseDetails= courseDetailsRepository.findById(courseId).get();
		 System.out.println("Done for now");
		 List<VideoCourses>ls=courseDetails.getVideoCourses();
		 ls.add(videoCourses);
		 courseDetailsRepository.save(courseDetails);
		return courseDetails.getVideoCourses();
		 
	 }
	 
}