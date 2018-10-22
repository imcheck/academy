import Jwt from "jsonwebtoken";
import Axios from "axios";

export async function authIdToken() {
  const idToken = localStorage.getItem("id_token");
  const refreshCode = localStorage.getItem("refresh_code");
  if(!idToken || !refreshCode) return false;
  else {
    const result = Jwt.decode(idToken);
    if(new Date(result.exp*1000) < new Date()) { // expired
      const { data } = await Axios.post("http://localhost:8001/auth/refresh/idtoken", {
        idToken,
        refreshCode,
        academyCode: result.academyCode
      });
      if(data.status === 200) {
        localStorage.setItem("id_token", data.data);
        return true;
      } else {
        return false;
      }
    } else {
      return true;
    }
  }
}
