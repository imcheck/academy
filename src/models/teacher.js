import { Students, Lectures, Teachers } from "@models";
import { getLectureData } from "@services/lecture";
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
        lectures,
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
      this.lectures = new Lectures(lectures);
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
      this.lectures = new Lectures();
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
      lectures,
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
      lectures: lectures.toJS(),
      teachers: teachers.toJS()
    };
  }

  getLectures = async () => {
    const data = await request.get("/lecture");
    if(data) {
      return new Lectures(data);
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
  createStudent = async(student) => {
    const result = await request.put("/student", student);
    if(result) {
      return true;
    } else {
      alert("학생을 만드는데 문제가 발생했습니다.");
    }
  }
  updateStudent = async(student) => {
    const path = "/student/" + student.studentId;
    const result = await request.post(path, student);
    if(result) {
      return true;
    } else {
      return false;
    }
  }
}
