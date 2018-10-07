import axios from 'axios';
import * as authConfig from "@config/authConfig";

export class Auth {
  static TOKEN_TYPE = "";
  static ACCESS_TOKENS = {};
  static async Authenticate() {
    if (!Auth.TOKEN_TYPE) {
      const tokenType = localStorage.getItem("token_type");
      const accessToken = localStorage.getItem("access_token");
      if (!tokenType || !accessToken) return false;
      Auth.TOKEN_TYPE = tokenType;
      Auth.ACCESS_TOKENS[tokenType] =accessToken;
    }
    const result = await Auth.Validate(Auth.TOKEN_TYPE);
    if(!result) return false;
    return true;
  }
  static async Validate(tokenType) {
    if(tokenType==="google") {
      const token = Auth.ACCESS_TOKENS[tokenType];
      // const token = "ya29.GlsvBqNywVXjv3eL_JjzVH9aGD989sWDRObxRES3rSik-ra_A00z15Z__aolysm2iXxBDIElIM6qrPY3C5PYGyjwBE3nv9bmBjqYTpjlIrjjKuLQOvN_9jYLP90b";
      try {
        const result = await axios.get(authConfig.getTokenAuthorizationURL(token));
        return true;
      } catch(e) {
        return false;
      }
    }
  }
  static async SaveAccessToken(tokenType, accessToken) {
    localStorage.setItem("token_type", tokenType);
    localStorage.setItem("access_token", accessToken);
  }
}

// https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=ya29.GlsvBqNywVXjv3eL_JjzVH9aGD989sWDRObxRES3rSik-ra_A00z15Z__aolysm2iXxBDIElIM6qrPY3C5PYGyjwBE3nv9bmBjqYTpjlIrjjKuLQOvN_9jYLP90b