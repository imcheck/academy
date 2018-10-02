export class Student {
  constructor(props) {
    if(props) {
      const {name='', grade='', school='', tel='', ptel=''} = props;
      this.name = name;
      this.grade = grade;
      this.school = school;
      this.tel = tel;
      this.ptel = ptel;
    }
  }
  toObject() {
    const {name, grade, school, tel, ptel} = this;
    return {name, grade, school, tel, ptel};
  }
}
