const clockDate = document.querySelector(".clockDate");
const clockTime = document.querySelector(".clockTime");

function getClock() {
  const time = new Date();
  const date = String(time.getDate()).padStart(2, "0");
  const month = String(time.getMonth()+1).padStart(2, "0");
  const year = String(time.getFullYear()).padStart(2, "0");
  const hours = String(time.getHours()).padStart(2, "0");
  const minutes = String(time.getMinutes()).padStart(2, "0");
  clockDate.innerText = `${year}/${month}/${date}`
  clockTime.innerText = `${hours}:${minutes}`
}

getClock();
setInterval(getClock, 1000);
