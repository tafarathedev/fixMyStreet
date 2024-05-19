export default function authHeader() {
    const user = JSON.parse(GetCookie("user"));
    if (user && user.token) {
      // return { Authorization: 'Bearer ' + user.accessToken };
      return { "authCookies": user.token };
    } else {
      return {};
    }
  }