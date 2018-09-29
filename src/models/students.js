import { CommonData } from './common';
import { Student } from './student';

export class Students extends CommonData {
  constructor(studentList) {
    super();
    this.students = studentList.map((student) => new Student(student));
  }
  toJS() {
    return this.students.map((student) => student.toObject());
  }
}