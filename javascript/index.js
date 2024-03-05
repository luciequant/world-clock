function updateTime() {
  //Vancouver
  let vancouverElement = document.querySelector("#vancouver");
  if (vancouverElement) {
    let vancouverDataElement = vancouverElement.querySelector(".date");
    let vancouverTimeElement = vancouverElement.querySelector(".time");
    let vancouverTime = moment().tz("America/Vancouver");

    vancouverDataElement.innerHTML = vancouverTime.format("MMMM Do YYYY");
    vancouverTimeElement.innerHTML = vancouverTime.format(
      "h:mm:ss [<small>]A[<small>]"
    );
  }
  //Buenos Aires
  let buenosAiresElement = document.querySelector("#buenos-aires");
  if (buenosAiresElement) {
    let buenosAiresDataElement = buenosAiresElement.querySelector(".date");
    let buenosAiresTimeElement = buenosAiresElement.querySelector(".time");
    let buenosAiresTime = moment().tz("America/Argentina/Buenos_Aires");

    buenosAiresDataElement.innerHTML = buenosAiresTime.format("MMMM Do YYYY");
    buenosAiresTimeElement.innerHTML = buenosAiresTime.format(
      "h:mm:ss [<small>]A[<small>]"
    );
  }
  //London
  let londonElement = document.querySelector("#london");
  if (londonElement) {
    let londonDataElement = londonElement.querySelector(".date");
    let londonTimeElement = londonElement.querySelector(".time");
    let londonTime = moment().tz("Europe/London");

    londonDataElement.innerHTML = londonTime.format("MMMM Do YYYY");
    londonTimeElement.innerHTML = londonTime.format(
      "h:mm:ss [<small>]A[<small>]"
    );
  }

  //Tokyo
  let tokyoElement = document.querySelector("#tokyo");
  if (tokyoElement) {
    let tokyoDataElement = tokyoElement.querySelector(".date");
    let tokyoTimeElement = tokyoElement.querySelector(".time");
    let tokyoTime = moment().tz("Asia/Tokyo");

    tokyoDataElement.innerHTML = tokyoTime.format("MMMM Do YYYY");
    tokyoTimeElement.innerHTML = tokyoTime.format(
      "h:mm:ss [<small>]A[<small>]"
    );
  }
}
let intervalId;

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
  <div class="city">
    <div>
      <h2>${cityName}</h2>
      <div class="date">${cityTime.format("MMMM	Do YYYY")}</div>
    </div>
    <div class="time">${cityTime.format("h:mm:ss")} <small>${cityTime.format(
    "A"
  )}</small></div>
  </div>
  <a href="/" class="go-back">Go back</a>`;

  clearInterval(intervalId);
  intervalId = setInterval(() => {
    cityTime = moment().tz(cityTimeZone);
    let timeElement = document.querySelector(".time");
    timeElement.innerHTML = `${cityTime.format(
      "h:mm:ss"
    )} <small>${cityTime.format("A")}</small>`;
  }, 1000);
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
