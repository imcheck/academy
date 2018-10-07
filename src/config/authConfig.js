const SCOPE = "https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.profile";
const REDIRECT_URI = "http%3A%2F%2Flocalhost%3A8002%2Flogin"
const CLIENT_ID = "1049442395730-9ea8vevo1kod7sr4k8avffnb17ffo756.apps.googleusercontent.com"

export function getURL(state) {
  return (
    "https://accounts.google.com/o/oauth2/v2/auth?scope=" + SCOPE +
    "&include_granted_scopes=true&state=" + state +
    "&redirect_uri=" + REDIRECT_URI +
    "&response_type=token&client_id=" + CLIENT_ID
  )
}

export function getTokenAuthorizationURL(token) {
  return "https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=" + token;
}