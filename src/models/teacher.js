import { Students, Classes, Teachers } from '@models';
import { getClassData } from '@controllers/class';
import { getStudentData } from '@controllers/student';
import { getTeacherData } from '@controllers/teacher';

export class Teacher {
  constructor(props) {
    if (props) {
      const { name, tel, ptel, rdate, state, students, classes, teachers } = props;
      this.name = name;
      this.tel = tel;
      this.ptel = ptel;
      this.rdate = rdate;
      this.state = state;
      this.students = new Students(students);
      this.classes = new Classes(classes);
      this.teachers = new Teachers(teachers);
    } else {
      this.name = '';
      this.tel = '';
      this.ptel = '';
      this.rdate = '';
      this.state = '';
      this.students = new Students();
      this.classes = new Classes();
      this.teachers = new Teachers();
    }
  }
  toObject() {
    const { name, tel, ptel, rdate, state, students, classes, teachers } = this;
    return {
      name,
      tel,
      ptel,
      rdate,
      state,
      students: students.toJS(),
      classes: classes.toJS(),
      teachers: teachers.toJS()
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

  getTeachers = async () => {
    if(this.teachers.size()) return this.teachers;
    else {
      const teachers = await getTeacherData(this);
      this.teachers = teachers;
      return teachers;
    }
  }
}
