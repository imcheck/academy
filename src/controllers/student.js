import { Students, Teacher } from '@models';
export async function getStudentData(by) {
  if( by instanceof Teacher) {
    return new Students([{
      name: "Alex",
      grade: "중1",
      school: "반포중",
      tel: "010-5231-2313",
      ptel: "010-2131-1231",
      state: "휴원"
    }, {
      name: "Mina",
      grade: "중1",
      school: "풍무중",
      tel: "010-5231-2313",
      ptel: "010-2131-1231",
      state: "재원"
    }, {
      name: "Julia",
      grade: "중1",
      school: "영덕중",
      tel: "010-5231-2313",
      ptel: "010-2131-1231",
      state: "휴원"
    }, {
      name: "Ryan",
      grade: "중3",
      school: "성신중",
      tel: "010-5231-2313",
      ptel: "010-2131-1231",
      state: "재원"
    }]);
  }
}