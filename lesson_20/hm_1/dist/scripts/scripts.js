"use strict";

var createTooltip = function createTooltip(selector, options) {
  var tooltipButton = document.querySelector(selector);
  return new bootstrap.Tooltip(tooltipButton, options);
};
var tooltip = createTooltip('.btn[data-bs-target="#staticBackdrop"]', {
  placement: "bottom",
  customClass: "tooltip",
  title: "This is cutom tooltip!!",
});
var createAlertElement = function createAlertElement(content, className) {
  if (!content && !className) {
    return;
  }
  var alertEl = document.createElement("div");
  alertEl.className = className;
  alertEl.textContent = content;
  alertEl.setAttribute("role", "alert");
  return alertEl;
};
var createAlert = function createAlert(
  buttonSelector,
  alertSelector,
  content,
  className
) {
  var button = document.querySelector(buttonSelector);
  var alertContainer = document.querySelector(alertSelector);
  if (!button && !alertContainer && !content && !className.length) {
    return;
  }
  var alertEl = null;
  button.addEventListener("click", function () {
    if (!alertEl) {
      var alert = createAlertElement(content, className);
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
var createMoment = function createMoment() {
  var myBirtday = "08-03-1999";
  var myBirtdayContainer = document.querySelector("#my-birtday");
  var input = document.querySelector("#input");
  var buttonInput = document.querySelector("#form-button");
  var result = document.querySelector(".result");
  if (!myBirtdayContainer && !input && !buttonInput && !result && !moment) {
    return;
  }
  moment.locale("uk");
  myBirtdayContainer.innerHTML = moment(myBirtday).format("DD MMMM YYYY (dd)");
  var regex = /\d{1,2}[.-/]\d{1,2}[.-/]\d{4}/;
  buttonInput.addEventListener("click", function () {
    var val = input.value.trim();
    result.innerHTML = "";
    if (!regex.test(val)) {
      result.innerHTML =
        '\n          <div class="alert alert-danger alert-dismissible fade show" role="alert">\n            \u041D\u0435\u0432\u0435\u0440\u043D\u044B\u0439 \u0444\u043E\u0440\u043C\u0430\u0442, \u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0432 \u0444\u043E\u0440\u043C\u0430\u0442\u0435 \u0414\u0414/\u041C\u041C/\u0420\u0420\u0420\u0420.\n          </div>\n        ';
      return;
    }
    result.innerHTML = moment(val).format("YYYY-MM-DD");
  });
};
createMoment();
