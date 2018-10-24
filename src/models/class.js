import { Teachers } from "@models";

export class Class {
  constructor(props) {
    if(props) {
      const {classId, name, teachers, sdate, times} = props;
      this.classId = classId;
      this.name = name;
      this.teachers = new Teachers(teachers);
      this.sdate = sdate;
      if(!Array.isArray(times)) this.times = JSON.parse(times);
      else this.times = times;
    } else {
      this.classId = '';
      this.name = '';
      this.teachers = new Teachers();
      this.sdate = "";
      this.times = [];
    }
  }
  toObject() {
    const { classId, name, teachers, sdate, times } = this;
    return {
      classId,
      name,
      teachers: teachers ? teachers.toJS() : [],
      sdate,
      times
    };
  }
}
