import { Teacher } from './teacher';

export class Teachers {
  constructor(teacherList) {
    if(teacherList) {
      if(teacherList instanceof Teachers) this.teachers = teacherList.teachers;
      else this.teachers = teacherList.map((teacher) => new Teacher(teacher));
    } else {
      this.teachers = [];
    }
  }
  toJS() {
    return this.teachers.map((teacher) => teacher.toObject());
  }
  size() {
    return this.teachers.length;
  }
  getByIndex(index) {
    if(index < 0 || this.teachers.length <= index) return -1;
    return this.teachers[index];
  }
  getTeachers() {
    return this.teachers.map(teacher => teacher.name).join(",");
  }
}
