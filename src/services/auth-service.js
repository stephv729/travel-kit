import { tokenKey } from "../config";
import apiFetch from "./api-fetch";

export function login(credentials) {
  return apiFetch("/login", { body: credentials }).then((u) => {
    const { token, ...user } = u;
    sessionStorage.setItem(tokenKey, JSON.stringify(token));

    return user;
  });
}

export function logout() {
  return apiFetch("/logout", { method: "DELETE" }).then(
    sessionStorage.removeItem(tokenKey)
  );
}

export function signup(newUserData) {
  return apiFetch("/signup", { body: newUserData }).then((u) => {
    const { token, ...user } = u;
    sessionStorage.setItem(tokenKey, JSON.stringify(token));

    return user;
  });
}
