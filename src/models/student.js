export class Student {
  constructor(props) {
    if(props) {
      const {name, grade, school, tel, ptel, rdate} = props;
      this.name = name;
      this.grade = grade;
      this.school = school;
      this.tel = tel;
      this.ptel = ptel;
      this.rdate = rdate;
    } else {
      this.name = '';
      this.grade = '';
      this.school = '';
      this.tel = '';
      this.ptel = '';
      this.rdate = '';
    }
  }
  toObject() {
    const {name, grade, school, tel, ptel, rdate} = this;
    return {name, grade, school, tel, ptel, rdate};
  }
}
