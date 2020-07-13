package com.Rythmos.CourseManagement.resource;

import java.util.ArrayList;
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

import com.Rythmos.CourseManagement.model.CourseDetails;
import com.Rythmos.CourseManagement.model.EmployeeCourses;
import com.Rythmos.CourseManagement.model.EmployeeReqCourses;
import com.Rythmos.CourseManagement.repository.CourseDetailsRepository;
import com.Rythmos.CourseManagement.repository.EmployeeCoursesRepository;

@RestController
@CrossOrigin
@RequestMapping(value = "/Empcourse")
public class EmployeeCourseResources {
	private static Integer empId;
	
	public static Integer getEmpId() {
		return empId;
	}
	@Autowired
	EmployeeCoursesRepository employeeCoursesRepository;
	@Autowired
	CourseDetailsRepository courseDetailsRepository;
	
	
	//Login request
	@RequestMapping(method = RequestMethod.POST,value="/name/{empId}")
	public EmployeeCourses setEmpId(@PathVariable Integer empId) {
		EmployeeCourseResources.empId=empId;
		if(!employeeCoursesRepository.existsById(empId)) {
		EmployeeCourses employeeCourses=new EmployeeCourses();
		employeeCourses.setEmpId(empId);
		employeeCoursesRepository.save(employeeCourses);
		System.out.println("Successfully created");
		return employeeCoursesRepository.findById(empId).get();
		}
	  return employeeCoursesRepository.findById(empId).get();
	}
	
	//returns all employees with details for manager
	 @GetMapping(value = "/all")
     public List<EmployeeCourses> getAllEmp() {
         return employeeCoursesRepository.findAll();
     }
	 
	 //adding course to employee by courseId
	 @PostMapping(value = "/addingCourseToEmp/{courseId}")
	 public  List<CourseDetails>  addCoursetoEmp(@PathVariable Integer courseId) {
		 String str=""+courseId;
		 String s1=courseDetailsRepository.findById(courseId).get().getCourseType().toString();
		 List<String> ls=employeeCoursesRepository.findById(empId).get().getEmpAddedCoursesIds();
		 if((!ls.contains(str)) && s1.equalsIgnoreCase("Video")) {
		 ls.add(str);
		 }
		 else if(!ls.contains(str) && s1.equalsIgnoreCase("ClassRoom")) {
			 int i=courseDetailsRepository.findById(courseId).get().getClassCourses().get(0).getClassAvailableCount();
			 if(i>0) {
				 i=i-1;
				 courseDetailsRepository.findById(courseId).get().getClassCourses().get(0).setClassAvailableCount(i);
				 ls.add(str);
			 }
			 else {
				 courseDetailsRepository.findById(courseId).get().setCourseAvailable("ClassRoom Filled");
			 }
			 
		 }
		 employeeCoursesRepository.save(employeeCoursesRepository.findById(empId).get());
		 System.out.print(courseId);
		 List<String> courses=new ArrayList<>();
		List<CourseDetails> courseDetails=new ArrayList<>();
		courses= employeeCoursesRepository.findById(empId).get().getEmpAddedCoursesIds();
		for(int i=0;i<courses.size();i++) {
				courseDetails.add(courseDetailsRepository.findById(Integer.parseInt(courses.get(i))).get());
		}
			return courseDetails;
	 }
	 
	// All employee courses with empId
	 @GetMapping(value="/courses")                                      
	 public List<CourseDetails> getAllEmpCourses() {
		List<String> courses=new ArrayList<>();
		List<CourseDetails> courseDetails=new ArrayList<>();
		courses= employeeCoursesRepository.findById(getEmpId()).get().getEmpAddedCoursesIds();
		for(int i=0;i<courses.size();i++) {
			courseDetails.add(courseDetailsRepository.findById(Integer.parseInt(courses.get(i))).get());
		}
		return courseDetails;
	 }
	 
	 //returns all suggested courses by employeee
	 @GetMapping(value="/course/suggestcourse/")                      
	 public List<EmployeeReqCourses> getAllEmpReqCourses(){
		return employeeCoursesRepository.findById(getEmpId()).get().getEmpSugCourse();
		
	 }
	 
	//Add new suggest courses by employeee
	 @RequestMapping(method = RequestMethod.POST,value="/course/addSuggestcourse/")                       
	 public List<EmployeeReqCourses> setEmpReqCourses(@RequestBody EmployeeReqCourses employeeReqCourses){
		 List<EmployeeReqCourses> pemployeeReqCourses=employeeCoursesRepository.findById(getEmpId()).get().getEmpSugCourse();
		 pemployeeReqCourses.add(employeeReqCourses);
		 employeeCoursesRepository.save(employeeCoursesRepository.findById(getEmpId()).get());
		 return employeeCoursesRepository.findById(getEmpId()).get().getEmpSugCourse(); 
	 }
//	 
//	 
//	 @RequestMapping(value = "/addSuggestCourse/{empId}", method = RequestMethod.PUT)         
//	 public List<EmployeeReqCourses> addSuggestCourse(@RequestBody EmployeeReqCourses employeeReqCourses,@PathVariable Integer empId) {
//		 EmployeeCourses employeeCourses= employeeCoursesRepository.findById(empId).get();
//		 List<EmployeeReqCourses>ls=employeeCourses.getEmpSugCourse();
//		 ls.add(employeeReqCourses);
//		 employeeCoursesRepository.save(employeeCourses);
//		return employeeCourses.getEmpSugCourse(); 
//	 }
//	 @RequestMapping(value = "/addCoursetoEmp/{empId}", method = RequestMethod.PUT)         //put method to add new single videos to courses
//	 public List<EmployeeCourses> addCoursetoEmp(@PathVariable Integer empId, courseId) {
//		 EmployeeCourses employeeCourses= employeeCoursesRepository.findById(empId).get();
//		 List<String>ls=employeeCourses.getEmpAddedCoursesIds();
//		 ls.add(courseId);
//		 employeeCoursesRepository.save(employeeCourses);
//		return employeeCoursesRepository.findAll(); 
//	 }
//	 @RequestMapping(value = "/delete/{empId}", method = RequestMethod.DELETE)         //put method to add new single videos to courses
//	 public List<EmployeeCourses> deleteEmp(@PathVariable Integer empId) {
//	    employeeCoursesRepository.deleteById(empId);
//	    return employeeCoursesRepository.findAll();
//	 }
}
