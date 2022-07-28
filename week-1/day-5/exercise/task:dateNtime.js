/* source= https://javascript.info/date
Create a date

Create a Date object for the date: Feb 20, 2012, 3:12am. The time zone is local.

Show it using alert.

The new Date constructor uses the local time zone. So the only important thing to remember is that months start from zero.

So February has number 1.

Here’s an example with numbers as date components:
*/
// new Date (year, month, date, hour, minute, second, millisecond)
let d1 = new Date(2012, 1, 20, 3, 12);
console.log(d1);
// We could also create a date from a string, like this:
// new Date(datastring)
let d2 = new Date("2012-02-20T03:12");
console.log(d2);
/*
Show a weekday

Write a function getWeekDay(date) to show the weekday in short format: ‘MO’, ‘TU’, ‘WE’, ‘TH’, ‘FR’, ‘SA’, ‘SU’.

let date = new Date(2012, 0, 3);  // 3 Jan 2012
alert( getWeekDay(date) );        // should output "TU"

The method date.getDay() returns the number of the weekday, starting from sunday.

Let’s make an array of weekdays, so that we can get the proper day name by its number:
*/
function getWeekDay(date) {
  let days = ["SU", "MO", "TU", "WE", "TH", "FR", "SA"];
  return days[date.getDay()];
}

let date = new Date(1995, 10, 17); // 3 jan 2014
console.log(getWeekDay(date)); // FR
/*
European weekday

European countries have days of week starting with Monday (number 1), then Tuesday (number 2) and till Sunday (number 7). Write a function getLocalDay(date) that returns the “European” day of week for date.
*/
let tanggal = new Date(2012, 0, 3); // 3 jan 2012
console.log(getLocalDay(tanggal)); // tuesday, should show 2

function getLocalDay(date) {
  let day = date.getDay();
  if (day == 0) {
    // weekday 0 (sunday) is 7 in european
    day = 7;
  }
  return day;
}

console.log(getLocalDay(date));
/*
Which day of month was many days ago?

Create a function getDateAgo(date, days) to return the day of month days ago from the date.

For instance, if today is 20th, then getDateAgo(new Date(), 1) should be 19th and getDateAgo(new Date(), 2) should be 18th.

Should work reliably for days=365 or more:
*/
let date1 = new Date(2015, 0, 2);

console.log(getDateAgo(date1, 1)); // 1, (1 Jan 2015)
console.log(getDateAgo(date1, 2)); // 31, (31 Dec 2014)
console.log(getDateAgo(date1, 365)); // 2, (2 Jan 2014)
/*
P.S. The function should not modify the given date.

The idea is simple: to substract given number of days from date:

function getDateAgo(date, days) {
  date.setDate(date.getDate() - days);
  return date.getDate();
}

…But the function should not change date. That’s an important thing, because the outer code which gives us the date does not expect it to change.

To implement it let’s clone the date, like this:
*/
function getDateAgo(date2, days) {
  let dateCopy = new Date(date2);
  dateCopy.setDate(date2.getDate() - days);
  return dateCopy.getDate();
}

let date2 = new Date(2015, 0, 2);
console.log(getDateAgo(date2, 1)); // 1 (1 jan 2015)
console.log(getDateAgo(date2, 2)); // 31 (31 dec 2014)
console.log(getDateAgo(date2, 365)); // 2 (2 jan 2014)
/*
Last day of month?

Write a function getLastDayOfMonth(year, month) that returns the last day of month. Sometimes it is 30th, 31st or even 28/29th for Feb.

Parameters:

year – four-digits year, for instance 2012.
month – month, from 0 to 11.
For instance, getLastDayOfMonth(2012, 1) = 29 (leap year, Feb).

Let’s create a date using the next month, but pass zero as the day:
*/
function getLastDayOfMonth(year, month) {
  let date3 = new Date(year, month + 1, 0);
  return date3.getDate();
}
console.log(getLastDayOfMonth(2012, 0)); // 31
console.log(getLastDayOfMonth(2012, 1)); // 29
console.log(getLastDayOfMonth(2013, 1)); // 28
// Normally, dates start from 1, but technically we can pass any number, the date will autoadjust itself. So when we pass 0, then it means “one day before 1st day of the month”, in other words: “the last day of the previous month”.
/*
How many seconds have passed today?

Write a function getSecondsToday() that returns the number of seconds from the beginning of today.

For instance, if now were 10:00 am, and there was no daylight savings shift, then:

getSecondsToday() == 36000 // (3600 * 10)

The function should work in any day. That is, it should not have a hard-coded value of “today”.

To get the number of seconds, we can generate a date using the current day and time 00:00:00, then substract it from “now”.

The difference is the number of milliseconds from the beginning of the day, that we should divide by 1000 to get seconds:
*/
function getSecondsToday() {
  let now = new Date();

  // create an object using the current day/month/year
  let today = new Date(now.getDate(), now.getMonth(), now.getDate());
  let diff = now - today; // ms difference
  return Math.round(diff / 1000); // make seconds
}
console.log(getSecondsToday());

// An alternative solution would be to get hours/minutes/seconds and convert them to seconds:

function getSecondsToday() {
  let d = new Date();
  return d.getHours() * 3600 + d.getMinutes() * 60 + d.getSeconds();
}
console.log(getSecondsToday());
/*
How many seconds till tomorrow?

Create a function getSecondsToTomorrow() that returns the number of seconds till tomorrow.

For instance, if now is 23:00, then:

getSecondsToTomorrow() == 3600

P.S. The function should work at any day, the “today” is not hardcoded.

To get the number of milliseconds till tomorrow, we can from “tomorrow 00:00:00” substract the current date.

First, we generate that “tomorrow”, and then do it:
*/
function getSecondsToTomorrow() {
  let now = new Date();
  // tomorrow date
  let tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
  let diff1 = tomorrow - now; // difference in ms
  return Math.round(diff1 / 1000); // convert to seconds
}
console.log(getSecondsToTomorrow());
/*
Alternative solution:

function getSecondsToTomorrow() {
  let now = new Date();
  let hour = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();
  let totalSecondsToday = (hour * 60 + minutes) * 60 + seconds;
  let totalSecondsInADay = 86400;

  return totalSecondsInADay - totalSecondsToday;
}
Please note that many countries have Daylight Savings Time (DST), so there may be days with 23 or 25 hours. We may want to treat such days separately.

Format the relative date

Write a function formatDate(date) that should format date as follows:

If since date passed less than 1 second, then "right now".
Otherwise, if since date passed less than 1 minute, then "n sec. ago".
Otherwise, if less than an hour, then "m min. ago".
Otherwise, the full date in the format "DD.MM.YY HH:mm". That is: "day.month.year hours:minutes", all in 2-digit format, e.g. 31.12.16 10:00.

To get the time from date till now – let’s substract the dates.
*/
function formatDate(date) {
  let diff2 = new Date() - date; // the difference in milliseconds

  if (diff2 < 1000) {
    // less than 1 second
    return "right now";
  }

  let sec = Math.floor(diff2 / 1000); // convert diff to seconds

  if (sec < 60) {
    return sec + " sec. ago";
  }

  let min = Math.floor(diff2 / 60000); // convert diff to minutes
  if (min < 60) {
    return min + " min. ago";
  }

  // format the date
  // add leading zeroes to single-digit day/month/hours/minutes
  let d3 = date;
  d3 = [
    "0" + d3.getDate(),
    "0" + d3.getMonth() + 1,
    "" + d3.getFullYear(),
    "0" + d3.getHours(),
    "0" + d3.getMinutes(),
  ].map(component => component.slice(-2)); // take last 2 digits of every component

  // join the components into date
  return d3.slice(0, 3).join(".") + " " + d3.slice(3).join(":");
}

console.log(formatDate(new Date(new Date() - 1))); // "right now"

console.log(formatDate(new Date(new Date() - 30 * 1000))); // "30 sec. ago"

console.log(formatDate(new Date(new Date() - 5 * 60 * 1000))); // "5 min. ago"

// yesterday's date like 31.12.2016 20:00
console.log(formatDate(new Date(new Date() - 86400 * 1000)));
/*
Alternative solution:

function formatDate(date) {
  let dayOfMonth = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  let hour = date.getHours();
  let minutes = date.getMinutes();
  let diffMs = new Date() - date;
  let diffSec = Math.round(diffMs / 1000);
  let diffMin = diffSec / 60;
  let diffHour = diffMin / 60;

  // formatting
  year = year.toString().slice(-2);
  month = month < 10 ? '0' + month : month;
  dayOfMonth = dayOfMonth < 10 ? '0' + dayOfMonth : dayOfMonth;
  hour = hour < 10 ? '0' + hour : hour;
  minutes = minutes < 10 ? '0' + minutes : minutes;

  if (diffSec < 1) {
    return 'right now';
  } else if (diffMin < 1) {
    return `${diffSec} sec. ago`
  } else if (diffHour < 1) {
    return `${diffMin} min. ago`
  } else {
    return `${dayOfMonth}.${month}.${year} ${hour}:${minutes}`
  }
}
*/