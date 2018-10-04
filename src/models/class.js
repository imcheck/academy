export class Class {
  constructor(props) {
    if(props) {
      const {classId, name, teacher, sdate, pdate} = props;
      this.classId = classId;
      this.name = name;
      this.teacher = teacher;
      this.sdate = sdate;
      this.pdate = pdate;
    } else {
      this.classId = '';
      this.name = '';
      this.teacher = '';
      this.sdate = sdate;
      this.pdate = pdate;
    }
  }
  toObject() {
    const { classId, name, teacher, sdate, pdate } = this;
    return {
      classId,
      name,
      teacher,
      sdate,
      pdate
    };
  }
}
