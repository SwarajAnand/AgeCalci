const dateCol = document.getElementById("dateCol");
const calcBtn = document.getElementById("calcBtn");
const yearContainer = document.getElementById("year");
const monthsContainer = document.getElementById("months");
const daysContainer = document.getElementById("days");

calcBtn.addEventListener("click", () => {
  let value = dateCol.value;
  let year = parseInt(value.slice(0, 4));
  let month = parseInt(value.slice(5, 7));
  let date = parseInt(value.slice(8, 10));
  // console.log(year, month, date);

  let dateObject = new Date();
  let todayYear = dateObject.getFullYear();
  let todayMonth = dateObject.getMonth() + 1;
  let todayDate = dateObject.getDate();

  if (date > todayDate) {
    todayDate = todayDate + 30;
    todayMonth = todayMonth - 1;
  }
  if (month > todayMonth) {
    todayMonth = todayMonth + 12;
    todayYear = todayYear - 1;
  }

  let age = todayYear - year;
  let ageMonth = todayMonth - month;
  let ageDate = todayDate - date;

  // console.log(age, ageMonth, ageDate);

  // console.log(age);

  if (age < 0 || ageMonth < 0 || ageDate < 0) {
    alert("Please enter valid date");
  }
  if (isNaN(age)) {
    console.log("NaN working");
    yearContainer.innerHTML = `<p class="text">${age}</p>`;
    monthsContainer.innerHTML = `<p class="text">${ageMonth}</p>`;
    daysContainer.innerHTML = `<p class="text">${ageDate}</p>`;
  } else {
    print(age, ageMonth, ageDate);
  }
});

const print = (age, ageMonth, ageDate) => {
  yearContainer.innerText = "";
  monthsContainer.innerText = "";
  daysContainer.innerHTML = "";

  yearContainer.innerHTML = `<p class="text">${age}</p>
                              <p>Years</p>`;
  monthsContainer.innerHTML = `<p class="text">${ageMonth}</p>
  <p>Month</p>`;
  daysContainer.innerHTML = `<p class="text">${ageDate}</p>
  <p>Day</p>`;
};
