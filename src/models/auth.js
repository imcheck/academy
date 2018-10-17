import axios from 'axios';
import * as authConfig from "@config/authConfig";

export class Auth {
  static TOKEN_TYPE = "";
  static ID_TOKENS = {};
  static async Authenticate() {
    if (!Auth.TOKEN_TYPE) {
      const tokenType = localStorage.getItem("token_type");
      const idToken = localStorage.getItem("id_token");
      if (!tokenType || !idToken) return false;
      Auth.TOKEN_TYPE = tokenType;
      Auth.ID_TOKENS[tokenType] =idToken;
    }
    const result = await Auth.Validate(Auth.TOKEN_TYPE);
    if(!result) return false;
    return true;
  }
  static async SaveAccessToken(tokenType, idToken) {
    localStorage.setItem("token_type", tokenType);
    localStorage.setItem("id_token", idToken);
  }
}