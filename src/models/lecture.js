import { Teachers, Students } from "@models";

export class Lecture {
  constructor(props) {
    if(props) {
      const {lectureId, name, teachers, sdate, edate, times, students, tuition} = props;
      this.lectureId = lectureId;
      this.name = name;
      this.teachers = new Teachers(teachers);
      this.sdate = sdate;
      this.edate = edate;
      this.tuition = tuition;
      if(!Array.isArray(times)) this.times = JSON.parse(times);
      else this.times = times;
      this.students = students;
    } else {
      this.lectureId = '';
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
    const { lectureId, name, teachers, sdate, edate, times, students, tuition } = this;
    return {
      lectureId,
      name,
      teachers: teachers ? teachers.toJS() : [],
      sdate,
      edate,
      times,
      tuition,
      students: students ? students.toJS() : []
    };
  }
}
