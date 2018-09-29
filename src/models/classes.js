import { CommonData } from './common';
import { Class } from './class';

export class Classes extends CommonData {
  constructor(classList) {
    super();
    this.classes = classList.map((_class) => new Class(_class));
  }
  toJS() {
    return this.classes.map((_class) => _class.toObject());
  }
}