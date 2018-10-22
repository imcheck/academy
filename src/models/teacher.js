import { Students, Classes, Teachers } from "@models";
import { getClassData } from "@services/class";
import { getTeacherData } from "@services/teacher";
import * as request from "@services/request";

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
        teachers
      } = props;
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
      teachers
    } = this;
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
    const data = await request.get("/class");
    if(data) {
      return new Classes(data);
    } else {
      alert("학생들 정보를 가져오는데 문제가 발생했습니다.");
    }
  }

  getStudents = async () => {
    const data = await request.get("/student");
    if (data) {
      return new Students(data);
    } else {
      alert("학생들 정보를 가져오는데 문제가 발생했습니다.");
    }
  }

  getTeachers = async () => {
    if (this.teachers.size()) return this.teachers;
    else {
      const teachers = await getTeacherData(this);
      return teachers;
    }
  }
}
