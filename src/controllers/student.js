import { Students } from '@models';
export async function getStudentData(action) {
  return new Students([{
    name: "Alex",
    grade: "중1",
    school: "반포중",
    tel: "010-5231-2313",
    ptel: "010-2131-1231"
  },{
    name: "Mina",
    grade: "중1",
    school: "풍무중",
    tel: "010-5231-2313",
    ptel: "010-2131-1231"
  },{
    name: "Julia",
    grade: "중1",
    school: "영덕중",
    tel: "010-5231-2313",
    ptel: "010-2131-1231"
  },{
    name: "Ryan",
    grade: "중3",
    school: "성신중",
    tel: "010-5231-2313",
    ptel: "010-2131-1231"
  }])
}