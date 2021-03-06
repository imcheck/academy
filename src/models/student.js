import { Students, Lectures } from '@models';
import * as request from "@services/request";

export class Student {
  constructor(props) {
    if (props) {
      const { studentId="", name="", grade="", school="", phoneNumber="", parentPhoneNumber="", rdate="", state="", students="", lectures="" } = props;
      this.studentId = studentId;
      this.name = name;
      this.grade = grade;
      this.school = school;
      this.phoneNumber = phoneNumber;
      this.parentPhoneNumber = parentPhoneNumber;
      this.rdate = rdate;
      this.state = state;
      this.students = new Students(students);
      this.lectures = new Lectures(lectures);
    } else {
      this.studentId = "";
      this.name = "";
      this.grade = "";
      this.school = "";
      this.phoneNumber = "";
      this.parentPhoneNumber = "";
      this.rdate = "";
      this.state = "";
      this.students = new Students();
      this.lectures = new Lectures();
    }
  }
  toObject() {
    const { studentId, name, grade, school, phoneNumber, parentPhoneNumber, rdate, state, students, lectures } = this;
    return {
      studentId,
      name,
      grade,
      school,
      phoneNumber,
      parentPhoneNumber,
      rdate,
      state,
      students: students ? students.toJS() : [],
      lectures: lectures ? lectures.toJS() : []
    };
  }
  async getMoreInfo() {
    const path = "/student/" + this.studentId;
    const student = await request.get(path);
    return new Student(student);
  }
}
