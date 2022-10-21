import apiFetch from "./api-fetch";

export function getPosts() {
  return apiFetch("/blogposts").then((data) => {
    return data;
  });
}

export function showPost(id) {
  return apiFetch("/blogposts/"+id).then((data) => {
    return data;
  });
}

export function createPost(postData) {
  return apiFetch("/blogposts", { body: postData }).then((data) => {
    return data;
  });
}

export function deletePost(id) {
  return apiFetch("/blogposts/"+id, { method:"DELETE"}).then((data) => {
    return data;
  });
}