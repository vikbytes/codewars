function humanReadable(seconds) {
  let hours = 0;
  let mins = 0;
  let secs = 0;

  while (seconds >= 3600) {
    hours += 1;
    seconds = seconds - 3600;
  }
  while (seconds >= 60) {
    mins += 1;
    seconds = seconds - 60;
  }
  secs = seconds;
  if (hours < 10) {
    hours = "0" + hours;
  }
  if (mins < 10) {
    mins = "0" + mins;
  }
  if (secs < 10) {
    secs = "0" + secs;
  }

  return `${hours}:${mins}:${secs}`;
}
