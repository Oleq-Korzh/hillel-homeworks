export const createHtmlElement = (el = "div", content, className) => {
  const element = document.createElement(el);

  if (content && el !== "img") {
    element.textContent = content;
  }

  if (el === "img") {
    element.src = content;
    element.alt = "Weather Icon";
  }

  if (className) {
    element.classList.add(className);
  }

  return element;
};

export const addZero = (num) => {
  return num < 10 ? `0${num}` : num;
};

export const getContentDate = () => {
  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString("en-EN", {
    day: "numeric",
    month: "long",
  });
  const time = `${addZero(currentDate.getHours())}:${addZero(
    currentDate.getMinutes()
  )}`;

  return { formattedDate, time };
};

export const getOnlyCurrentTime = (el) => {
  const currentTime = new Date();

  // Взял формулу с ГПТ
  const msToNextMinute =
    60000 - (currentTime.getSeconds() * 1000 + currentTime.getMilliseconds());

  setInterval(() => {
    el.textContent = getContentDate().time;
  }, msToNextMinute);
};
