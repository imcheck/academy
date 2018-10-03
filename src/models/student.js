import { Students, Classes } from '@models';

export class Student {
  constructor(props) {
    if (props) {
      const { name, grade, school, tel, ptel, rdate, state, students, classes } = props;
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
    const { name, grade, school, tel, ptel, rdate, state, students, classes } = this;
    return {
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
}
