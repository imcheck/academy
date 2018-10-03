import { Class } from './class';

export class Classes {
  constructor(classList) {
    if(classList) {
      this.classes = classList.map((_class) => new Class(_class));
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
}