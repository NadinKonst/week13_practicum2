const messageDate = document.querySelector("#messageDate");
const resultInput = document.querySelector("#result");

function calculateDaysLeft() {
  const messageBirthday = messageDate.value;
  const messageBirthdayTimestamp = Date.parse(messageBirthday);
  const currentTimestamp = Date.now();
  const dayDiff = messageBirthdayTimestamp - currentTimestamp;
  const daysLeft = Math.floor(dayDiff / (1000 * 60 * 60 * 24));
  resultInput.textContent =
    "Осталось " + daysLeft + " дня/дней до дня рождения";
  if (messageDate.value == "") {
    resultInput.textContent = "введите дату";
    resultInput.style.color = "red";
  } else {
    resultInput.textContent =
      "Осталось " + daysLeft + " дня/дней до дня рождения";
    resultInput.style.color = "black";
  }
}
