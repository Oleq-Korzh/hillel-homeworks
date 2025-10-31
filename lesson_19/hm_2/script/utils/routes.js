import { getData } from "./helpers.js";

export const routes = {
  api: "https://swapi.dev/api/",
};

export const getRoutes = async () => {
  return getData(routes.api);
};

export const getAllData = async (data, array = []) => {
  const res = await getData(data);

  if (!res.next) {
    return [...res.results, ...array];
  }

  return getAllData(res.next, [...res.results, ...array]);
};
