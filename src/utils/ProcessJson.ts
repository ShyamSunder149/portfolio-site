import data from "../data/projects.json";

export function ProjectCount() {
  return Object.keys(data).length;
}

export function ProjectData() {
  return JSON.parse(JSON.stringify(data));
}
