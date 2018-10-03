import { Students, Classes } from '@models';

export class Teacher {
  constructor(props) {
    if (props) {
      const { name, tel, ptel, rdate, state, students, classes } = props;
      this.name = name;
      this.tel = tel;
      this.ptel = ptel;
      this.rdate = rdate;
      this.state = state;
      this.students = new Students(students);
      this.classes = new Classes(classes);
    } else {
      this.name = '';
      this.tel = '';
      this.ptel = '';
      this.rdate = '';
      this.state = '';
      this.students = new Students();
      this.classes = new Classes();
    }
  }
  toObject() {
    const { name, tel, ptel, rdate, state, students, classes } = this;
    return {
      name,
      tel,
      ptel,
      rdate,
      state,
      students: students.toJS(),
      classes: classes.toJS()
    };
  }
}
