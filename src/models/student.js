import { Students, Classes } from '@models';

export class Student {
  constructor(props) {
    if (props) {
      const { studentId="", name="", grade="", school="", phoneNumber="", parentPhoneNumber="", rdate="", state="", students="", classes="" } = props;
      this.studentId = studentId;
      this.name = name;
      this.grade = grade;
      this.school = school;
      this.phoneNumber = phoneNumber;
      this.parentPhoneNumber = parentPhoneNumber;
      this.rdate = rdate;
      this.state = state;
      this.students = new Students(students);
      this.classes = new Classes(classes);
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
      this.classes = new Classes();
    }
  }
  toObject() {
    const { studentId, name, grade, school, phoneNumber, parentPhoneNumber, rdate, state, students, classes } = this;
    return {
      studentId,
      name,
      grade,
      school,
      phoneNumber,
      parentPhoneNumber,
      rdate,
      state,
      students: students.toJS(),
      classes: classes.toJS()
    };
  }
  async update() {
    console.log("Update", this);
  }
  async insert() {
    console.log("Insert", this);
  }
}
