import { Teachers, Students } from "@models";

export class Class {
  constructor(props) {
    if(props) {
      const {classId, name, teachers, sdate, edate, times, students, tuition} = props;
      this.classId = classId;
      this.name = name;
      this.teachers = new Teachers(teachers);
      this.sdate = sdate;
      this.edate = edate;
      this.tuition = tuition;
      if(!Array.isArray(times)) this.times = JSON.parse(times);
      else this.times = times;
      this.students = students;
    } else {
      this.classId = '';
      this.name = '';
      this.teachers = new Teachers();
      this.sdate = "";
      this.edate = "";
      this.times = [];
      this.tuition = '';
      this.students = new Students();
    }
  }
  toObject() {
    const { classId, name, teachers, sdate, edate, times, students, tuition } = this;
    return {
      classId,
      name,
      teachers: teachers.toJS(),
      sdate,
      edate,
      times,
      tuition,
      students: students.toJS()
    };
  }
}
