import { Students, Classes } from '@models';

export class Student {
  constructor(props) {
    if (props) {
      const { studentId, name, grade, school, tel, ptel, rdate, state, students, classes } = props;
      this.studentId = studentId;
      this.name = name;
      this.grade = grade;
      this.school = school;
      this.tel = tel;
      this.ptel = ptel;
      this.rdate = rdate;
      this.state = state;
      this.students = new Students(students);
      this.classes = new Classes(classes);
    } else {
      this.studentId = '';
      this.name = '';
      this.grade = '';
      this.school = '';
      this.tel = '';
      this.ptel = '';
      this.rdate = '';
      this.state = '';
      this.students = new Students();
      this.classes = new Classes();
    }
  }
  toObject() {
    const { studentId, name, grade, school, tel, ptel, rdate, state, students, classes } = this;
    return {
      studentId,
      name,
      grade,
      school,
      tel,
      ptel,
      rdate,
      state,
      students: students.toJS(),
      classes: classes.toJS()
    };
  }
  static async Update(student) {
    alert("업데이트")
  }
  static async Insert(student) {
    alert("추가")
  }
}
