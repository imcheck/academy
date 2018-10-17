import { Teachers, Teacher } from '@models';
export async function getTeacherData(by) {
  if( by instanceof Teacher) {
    return new Teachers([{
      name: "Alex",
      email: "example1@gmail.com",
      tel: "010-5231-2313",
      ptel: "010-2131-1231",
      rdate: "2018-08-94",
      state: "휴원",
      students: [],
      classes: []
    }]);
  }
}