export class Class {
  constructor({name, teacher, sdate, pdate}) {
    this.name = name;
    this.teacher = teacher;
    this.sdate = sdate;
    this.pdate = pdate;
  }
  toObject() {
    const { name, teacher, sdate, pdate } = this;
    return { name, teacher, sdate, pdate };
  }
}
