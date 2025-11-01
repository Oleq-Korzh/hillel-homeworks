const createTooltip = (selector, options) => {
  const tooltipButton = document.querySelector(selector);

  return new bootstrap.Tooltip(tooltipButton, options);
};

const tooltip = createTooltip('.btn[data-bs-target="#staticBackdrop"]', {
  placement: "bottom",
  customClass: "tooltip",
  title: "This is cutom tooltip!!",
});

const createAlertElement = (content, className) => {
  if (!content && !className) {
    return;
  }

  const alertEl = document.createElement("div");

  alertEl.className = className;
  alertEl.textContent = content;
  alertEl.setAttribute("role", "alert");

  return alertEl;
};

const createAlert = (buttonSelector, alertSelector, content, className) => {
  const button = document.querySelector(buttonSelector);
  const alertContainer = document.querySelector(alertSelector);

  if (!button && !alertContainer && !content && !className.length) {
    return;
  }

  let alertEl = null;

  button.addEventListener("click", () => {
    if (!alertEl) {
      const alert = createAlertElement(content, className);

      alertContainer.appendChild(alert);

      alertEl = new bootstrap.Alert(alert);

      return;
    }

    alertEl.close();
    alertEl = null;
  });
};

createAlert(
  "#button",
  "#alert-container",
  "Внимание!!! Что-то не так!!!",
  "alert alert-warning fade show"
);

const createMoment = () => {
  const myBirtday = "08-03-1999";
  const myBirtdayContainer = document.querySelector("#my-birtday");
  const input = document.querySelector("#input");
  const buttonInput = document.querySelector("#form-button");
  const result = document.querySelector(".result");

  if (!myBirtdayContainer && !input && !buttonInput && !result && !moment) {
    return;
  }

  moment.locale("uk");

  myBirtdayContainer.innerHTML = moment(myBirtday).format("DD MMMM YYYY (dd)");
  const regex = /\d{1,2}[.-/]\d{1,2}[.-/]\d{4}/;

  buttonInput.addEventListener("click", () => {
    const val = input.value.trim();

    result.innerHTML = "";

    if (!regex.test(val)) {
      result.innerHTML = `
          <div class="alert alert-danger alert-dismissible fade show" role="alert">
            Неверный формат, введите в формате ДД/ММ/РРРР.
          </div>
        `;

      return;
    }

    result.innerHTML = moment(val).format("YYYY-MM-DD");
  });
};

createMoment();
