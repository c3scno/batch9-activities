// get updated time
const getTime = () => {
// declare DOM variables
const newTime = new Date();
const greeting = document.querySelector("#greeting");
  
// Get hours, minutes, seconds
let hour = newTime.getHours();
let minutes = newTime.getMinutes();
  
//  Adds zero if number less than 10
    function checkTime(time) {
      if (time < 10) {
        return `0${time}`;
      }
      return time;
    }
    hour = checkTime(hour);
    minutes = checkTime(minutes);
  
//   display updated time
    const displayTime = document.querySelector("#time");
    displayTime.textContent = `${hour}:${minutes}`;
  
//   check & update greetings
    if (hour < 12) {
    greeting.textContent = "Good Morning";
    } else if (hour < 18) {
      greeting.textContent = "Good Afternoon";
    } else {
      greeting.textContent = "Good Evening";
    }
  };
  
// getTime initializer
const initGetTime = () => {
    setInterval(() => {
        getTime();
    }, 1000);
};

// initialize getTime
initGetTime();

//12 hour format

const get12 = () => {
  const newTime = new Date();
  let hour = newTime.getHours();
  let minutes = newTime.getMinutes();
  let hour12 = hour%12 ? hour%12 : 12;
  let hour_single_digit = hour12 < 10 ? `0${hour12}` : hour12;
  let minutes_single_digit = minutes < 10 ?`0${minutes}` : minutes;
  let am_pm = hour < 13 ? `AM` : `PM`;

  time12.textContent = `${hour_single_digit}:${minutes_single_digit} ${am_pm}`
}
get12();

// getTime initializer
const getTime12 = () => {
  setInterval(() => {
      get12();
  }, 1000);
};

// initialize getTime
getTime12();


const getDate = () => {
//add day of the week
let text;
    switch (new Date().getDay()) {
    case 2:
    text="Tuesday";
    break;
        
    case 3:
    text = "Wednesday";
    break;

    case 4:
    text="Thursday";
    break;

    case 5:
    text = "Friday";
    break;

    case 6:
    text = "Saturday";
    break;

    case 0:
    text = "Sunday";
    break;

    default:
    text = "Monday";
}
document.getElementById("day").innerHTML = text;

//add current month
let d = new Date();
let months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
document.getElementById("month").innerHTML = months[d.getMonth()];

//add current date
d = new Date();
document.getElementById("date").innerHTML = d.getDate();

//add current year
d = new Date();
let n = d.getFullYear();
document.getElementById("year").innerHTML = n;
}

getDate();


const dateRefresh = () => {
  setInterval(() => {
      getDate();
  }, 60000);
};