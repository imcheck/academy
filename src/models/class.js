export class Class {
  constructor(props) {
    if(props) {
      const {classId, name, teacher, sdate, times} = props;
      this.classId = classId;
      this.name = name;
      this.teacher = teacher;
      this.sdate = sdate;
      if(!Array.isArray(times)) this.times = JSON.parse(times);
      else this.times = times;
    } else {
      this.classId = '';
      this.name = '';
      this.teacher = '';
      this.sdate = "";
      this.times = [];
    }
  }
  toObject() {
    const { classId, name, teacher, sdate, times } = this;
    return {
      classId,
      name,
      teacher,
      sdate,
      times
    };
  }
}
