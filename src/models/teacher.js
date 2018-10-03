import { Students, Classes } from '@models';
import { getClassData } from '@controllers/class';
import { getStudentData } from '@controllers/student';

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
  getClasses = async () => {
    if(this.classes.size()) return this.classes;
    else {
      const classes = await getClassData(this);
      this.classes = classes;
      return classes;
    }
  }

  getStudents = async () => {
    if(this.students.size()) return this.students;
    else {
      const students = await getStudentData(this);
      this.students = students;
      return students;
    }
  }
}
