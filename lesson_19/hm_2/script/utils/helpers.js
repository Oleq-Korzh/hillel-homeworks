export const toUpperCaseFirstLetter = (string = "") => {
  if (!string) {
    return string;
  }

  return string.charAt(0).toUpperCase() + string.slice(1);
};

export const createHtmlElement = (
  tag = "div",
  className,
  content,
  attr = {}
) => {
  const element = document.createElement(tag);

  if (className) {
    element.classList.add(className);
  }

  if (content) {
    element.textContent = content;
  }

  const attrs = Object.entries(attr);
  if (attrs) {
    attrs.forEach(([key, value]) => {
      element.setAttribute(key, value);
    });
  }

  return element;
};

export const renderTabs = (tabs = []) => {
  if (!tabs.length) {
    return;
  }

  const tabsContainer = createHtmlElement("ul", "tabs");

  tabs.forEach((tab) => {
    const el = createHtmlElement(
      "li",
      "tabs__item",
      toUpperCaseFirstLetter(tab),
      {
        "data-category": tab,
      }
    );

    tabsContainer.appendChild(el);
  });

  return tabsContainer;
};

export const getData = async (route) => {
  try {
    const req = await fetch(route);

    if (!req.ok) {
      throw new Error("error SWAPI request");
    }

    return req.json();
  } catch (error) {
    console.log(error);
  }
};

export const showLoader = (loader) => {
  loader.style.display = "flex";
};

export const hideLoader = (loader) => {
  loader.style.display = "none";
};
