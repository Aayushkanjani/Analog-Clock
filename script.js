// Get references to the hour, minute, and second hands of the clock
const hourHand = document.querySelector('.hour');
const minuteHand = document.querySelector('.min');
const secondHand = document.querySelector('.sec');

// Function to update the clock hands
function updateClock() {
  // Get the current time
  const now = new Date();

  // Get the current hour, minute, and second
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  // Calculate the rotation angles for each hand
  const hoursRotation = (hours * 30) + (minutes / 2); // 30 degrees per hour, 0.5 degrees per minute
  const minutesRotation = (minutes * 6) + (seconds / 10); // 6 degrees per minute, 0.1 degrees per second
  const secondsRotation = seconds * 6; // 6 degrees per second

  // Apply the rotation transformations to the clock hands
  hourHand.style.transform = `rotate(${hoursRotation}deg)`;
  minuteHand.style.transform = `rotate(${minutesRotation}deg)`;
  secondHand.style.transform = `rotate(${secondsRotation}deg)`;
}

// Call the updateClock function every second
setInterval(updateClock, 1000);

// Call the function initially to set the correct initial positions
updateClock();
