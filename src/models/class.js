export class Class {
  constructor({classId='', name, teacher, sdate, pdate}) {
    this.classId = classId;
    this.name = name;
    this.teacher = teacher;
    this.sdate = sdate;
    this.pdate = pdate;
  }
  toObject() {
    const { classId, name, teacher, sdate, pdate } = this;
    return { classId, name, teacher, sdate, pdate };
  }
}
