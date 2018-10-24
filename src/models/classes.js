import { Class } from './class';

export class Classes {
  constructor(classList) {
    if(classList) {
      if(classList instanceof Classes) this.classes = classList.classes;
      else this.classes = classList.map((_class) => new Class(_class));
    } else {
      this.classes = [];
    }
  }
  toJS() {
    return this.classes.map((_class) => _class.toObject());
  }
  size() {
    return this.classes.length;
  }
  getById(classId) {
    const index = this.classes.findIndex(_class => _class.classId === classId);
    if(index >= 0) return this.classes[index];
    return index;
  }
}
