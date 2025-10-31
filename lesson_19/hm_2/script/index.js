import {
  getData,
  renderTabs,
  showLoader,
  hideLoader,
  createHtmlElement,
} from "./utils/helpers.js";
import { renderList } from "./utils/render.js";
import { routes, getRoutes } from "./utils/routes.js";

const starWarsApp = async (appSelector) => {
  const appEl = document.querySelector(appSelector);
  const loader = document.querySelector(".loader");

  if (!appEl || !loader) {
    return;
  }

  showLoader(loader);

  const api = await getRoutes();

  if (!api) {
    hideLoader(loader);

    return;
  }

  const tabsInfo = Object.keys(api);
  const tabs = renderTabs(tabsInfo);
  const wrapper = createHtmlElement("div", "content");

  appEl.appendChild(tabs);
  appEl.appendChild(wrapper);

  hideLoader(loader);

  const cache = {};
  let activeCategory = null;
  let nextUrl = null;

  const handleTabs = async (event) => {
    const target = event?.target;
    const category = target?.dataset?.category;

    if (
      !(target.classList.contains("tabs__item") && category) ||
      activeCategory === category
    ) {
      return;
    }

    if (!cache[category]) {
      cache[category] = await getData(`${routes.api}/${category}`);
    }

    showLoader(loader);
    wrapper.innerHTML = "";
    const loadMore = createHtmlElement("div", "loadmore", "Load more");
    const data = cache[category];

    activeCategory = category;
    nextUrl = data.next;

    const html = renderList(data, category);

    wrapper.innerHTML = html;

    if (data.next) {
      const handleLoadMore = async () => {
        showLoader(loader);
        const moreData = await getData(nextUrl);
        const moreHtml = renderList(moreData, category);

        nextUrl = moreData.next;

        loadMore.insertAdjacentHTML("beforebegin", moreHtml);

        if (!moreData.next) {
          loadMore.remove();
        }

        hideLoader(loader);
      };

      loadMore.addEventListener("click", handleLoadMore);

      wrapper.appendChild(loadMore);
    }

    hideLoader(loader);
  };

  tabs.addEventListener("click", handleTabs);
};

starWarsApp(".app");
