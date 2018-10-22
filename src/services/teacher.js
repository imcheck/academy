import { Teachers, Teacher } from '@models';
import Axios from "axios";


export async function getTeacherData(by) {
  if (by instanceof Teacher) {
    return new Teachers([{
      name: "Alex",
      email: "example1@gmail.com",
      phoneNumber: "010-5231-2313",
      parentPhoneNumber: "010-2131-1231",
      rdate: "2018-08-94",
      state: "휴원",
      students: [],
      classes: []
    }]);
  }
}

export async function getTeachers(email) {
  const idToken = localStorage.getItem("id_token");
  const result = await Axios.get("http://localhost:8001/teacher/" + email, {
    headers: {
      Authorization: idToken
    }
  });
  if (result.status === 200) return result.data;
  else return null;
}
