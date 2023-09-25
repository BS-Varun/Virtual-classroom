class VirtualClassroomManager {
    constructor() {
      this.classrooms = {};
      this.students = {};
      this.assignments = {};
    }
  
    addClassroom(className) {
      if (!(className in this.classrooms)) {
        this.classrooms[className] = [];
        return `Classroom ${className} has been created.`;
      } else {
        return `Classroom ${className} already exists.`;
      }
    }
  
    addStudent(studentId, className) {
      if (className in this.classrooms) {
        if (!(studentId in this.students)) {
          this.students[studentId] = className;
          this.classrooms[className].push(studentId);
          return `Student ${studentId} has been enrolled in ${className}.`;
        } else {
          return `Student ${studentId} is already enrolled in ${this.students[studentId]}.`;
        }
      } else {
        return `Classroom ${className} does not exist.`;
      }
    }
  
    scheduleAssignment(className, assignmentDetails) {
      if (className in this.classrooms) {
        if (!(className in this.assignments)) {
          this.assignments[className] = [];
        }
        this.assignments[className].push(assignmentDetails);
        return `Assignment for ${className} has been scheduled.`;
      } else {
        return `Classroom ${className} does not exist.`;
      }
    }
  
    submitAssignment(studentId, className, assignmentDetails) {
      if (studentId in this.students && this.students[studentId] === className) {
        if (className in this.assignments && this.assignments[className].includes(assignmentDetails)) {
          return `Assignment submitted by Student ${studentId} in ${className}.`;
        } else {
          return `Assignment ${assignmentDetails} not found in ${className}.`;
        }
      } else {
        return `Student ${studentId} is not enrolled in ${className}.`;
      }
    }
  
    listClassrooms() {
      return Object.keys(this.classrooms);
    }
  
    listStudentsInClass(className) {
      if (className in this.classrooms) {
        return this.classrooms[className];
      } else {
        return [];
      }
    }
  
    listAssignmentsInClass(className) {
      if (className in this.assignments) {
        return this.assignments[className];
      } else {
        return [];
      }
    }
  }
  
 export default VirtualClassroomManager;