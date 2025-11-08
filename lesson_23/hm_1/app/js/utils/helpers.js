export const PRIORITY_ORDER = {
  high: 3,
  medium: 2,
  low: 1,
};

export const STATUSES = ["pending", "in-progress", "done"];

export const isEmptyString = (string) => {
  return string.trim() === "";
};

export const getCurrentTime = (separator = "/") => {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");

  return `${hours}:${minutes}:${seconds} ${day}${separator}${month}${separator}${year}`;
};

export const generateId = () => {
  return Date.now().toString(36) + Math.random().toString(36).substring(2, 8);
};

// Подсмотрел как люди делают на стак оверфлоу, написал потом сам
export const debounce = (callback, time) => {
  let timer = null;
  return () => {
    clearTimeout(timer);
    timer = setTimeout(callback, time);
  };
};

export const capitalize = (str) => {
  if (typeof str !== "string" || str.length === 0) {
    return "";
  }

  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};

export const changeStatus = (status) => {
  let newIndexStatus = STATUSES.indexOf(status) + 1;

  if (newIndexStatus >= STATUSES.length) {
    newIndexStatus = 0;
  }

  return STATUSES[newIndexStatus];
};
