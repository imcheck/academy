export class Student {
  constructor({name, grade, school, tel, tel2}) {
    this.name = name;
    this.grade = grade;
    this.school = school;
    this.tel = tel;
    this.tel2 = tel2;
  }
  toObject() {
    const {name, grade, school, tel, tel2} = this;
    return {name, grade, school, tel, tel2};
  }
}
