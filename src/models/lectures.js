import { Lecture } from './lecture';

export class Lectures {
  constructor(lectureList) {
    if(lectureList) {
      if(lectureList instanceof Lectures) this.lectures = lectureList.lectures;
      else this.lectures = lectureList.map((lecture) => new Lecture(lecture));
    } else {
      this.lectures = [];
    }
  }
  toJS() {
    return this.lectures.map((lecture) => lecture.toObject());
  }
  size() {
    return this.lectures.length;
  }
  getById(lectureId) {
    const index = this.lectures.findIndex(lecture => lecture.lectureId === lectureId);
    if(index >= 0) return this.lectures[index];
    return index;
  }
}
