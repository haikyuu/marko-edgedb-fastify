import fetch from "node-fetch";
console.log("herr")
const mapStories = {
  top: "news",
  new: "newest",
  show: "show",
  ask: "ask",
  job: "jobs",
};

const get = (path) =>
  fetch(path, {
    headers: { "User-Agent": "chrome" },
  }).then((r) => r.json());

export function getStory(id) {
  return get(`https://node-hnapi.herokuapp.com/item/${id}`);
}
export function getUser(id) {
  return get(`https://hacker-news.firebaseio.com/v0/user/${id}.json`);
}
export function getStories(type, page) {
  console.log("storuies", {type, page})
  const l = mapStories[type];
  console.log("s")
  if (!l) return [];
  return get(`https://node-hnapi.herokuapp.com/${l}?page=${page}`);
}
