import { Teacher } from './teacher';

export class Teachers {
  constructor(teacherList) {
    if(teacherList) {
      this.teachers = teacherList.map((teacher) => new Teacher(teacher));
    } else {
      this.teachers = [];
    }
  }
  toJS() {
    return this.teachers.map((teacher) => teacher.toObject());
  }
}