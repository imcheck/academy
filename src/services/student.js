import { Students, Teacher } from '@models';
export async function getStudentData(by) {
  if( by instanceof Teacher) {
    return new Students([{
      studentId: 1,
      name: "Alex",
      grade: "중1",
      school: "반포중",
      phoneNumber: "010-5231-2313",
      parentPhoneNumber: "010-2131-1231",
      state: "휴원"
    }, {
      studentId: 2,
      name: "Mina",
      grade: "중1",
      school: "풍무중",
      phoneNumber: "010-5231-2313",
      parentPhoneNumber: "010-2131-1231",
      state: "재원"
    }, {
      studentId: 3,
      name: "Julia",
      grade: "중1",
      school: "영덕중",
      phoneNumber: "010-5231-2313",
      parentPhoneNumber: "010-2131-1231",
      state: "휴원"
    }, {
      studentId: 4,
      name: "Ryan",
      grade: "중3",
      school: "성신중",
      phoneNumber: "010-5231-2313",
      parentPhoneNumber: "010-2131-1231",
      state: "재원"
    }]);
  }
}
