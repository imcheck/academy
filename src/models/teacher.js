import { Students, Classes, Teachers } from "@models";
import { getClassData } from "@services/class";
import { getStudentData } from "@services/student";
import { getTeacherData } from "@services/teacher";

export class Teacher {
  constructor(props) {
    if (props) {
      const {
        name,
        phoneNumber,
        parentPhoneNumber,
        rdate,
        state,
        email,
        bankingAccount,
        academyCode,
        students,
        classes,
        teachers } = props;
      this.name = name;
      this.phoneNumber = phoneNumber;
      this.parentPhoneNumber = parentPhoneNumber;
      this.rdate = rdate;
      this.state = state;
      this.email = email;
      this.bankingAccount = bankingAccount;
      this.academyCode = academyCode;
      this.students = new Students(students);
      this.classes = new Classes(classes);
      this.teachers = new Teachers(teachers);
    } else {
      this.name = "";
      this.phoneNumber = "";
      this.parentPhoneNumber = "";
      this.rdate = "";
      this.state = "";
      this.email = "";
      this.bankingAccount = "";
      this.academyCode = "";
      this.students = new Students();
      this.classes = new Classes();
      this.teachers = new Teachers();
    }
  }
  toObject() {
    const {
      name,
      phoneNumber,
      parentPhoneNumber,
      rdate,
      state,
      email,
      bankingAccount,
      academyCode,
      students,
      classes,
      teachers } = this;
    return {
      name,
      phoneNumber,
      parentPhoneNumber,
      rdate,
      state,
      email,
      bankingAccount,
      academyCode,
      students: students.toJS(),
      classes: classes.toJS(),
      teachers: teachers.toJS()
    };
  }
  getClasses = async () => {
    if (this.classes.size()) return this.classes;
    else {
      const classes = await getClassData(this);
      this.classes = classes;
      return classes;
    }
  }

  getStudents = async () => {
    if (this.students.size()) return this.students;
    else {
      const students = await getStudentData(this);
      this.students = students;
      return students;
    }
  }

  getTeachers = async () => {
    if (this.teachers.size()) return this.teachers;
    else {
      const teachers = await getTeacherData(this);
      this.teachers = teachers;
      return teachers;
    }
  }
}
