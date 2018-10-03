import { Student } from './student';

export class Students {
  constructor(studentList) {
    if(studentList) {
      this.students = studentList.map((student) => new Student(student));
    } else {
      this.students = [];
    }
  }
  toJS() {
    return this.students.map((student) => student.toObject());
  }
}