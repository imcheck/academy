import { Student } from './student';

export class Students {
  constructor(studentList) {
    if(studentList) {
      if(studentList instanceof Students) this.students = studentList.students;
      else this.students = studentList.map((student) => new Student(student));
    } else {
      this.students = [];
    }
  }
  toJS() {
    return this.students.map((student) => student.toObject());
  }
  size() {
    return this.students.length;
  }
  getById(studentId) {
    const index = this.students.findIndex(student => student.studentId === studentId);
    if(index >= 0) return this.students[index];
    return index;
  }
}