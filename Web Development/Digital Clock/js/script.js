/* =========================================================
   DIGITAL CLOCK - MAIN JAVASCRIPT
   ========================================================= */

/*
 * The application uses the browser's Date object to read
 * the user's current local date and time.
 *
 * The clock is refreshed once every second so the displayed
 * time stays synchronized with the system clock.
 */

/* -------------------------
   1. DOM ELEMENT REFERENCES
   ------------------------- */

// Time elements
const hoursElement = document.getElementById("hours");
const minutesElement = document.getElementById("minutes");
const secondsElement = document.getElementById("seconds");

// Period and date elements
const periodElement = document.getElementById("period");
const dayNameElement = document.getElementById("dayName");
const fullDateElement = document.getElementById("fullDate");

/* -------------------------
   2. CONSTANTS
   ------------------------- */

const DAYS = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];

const MONTHS = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];

/* -------------------------
   3. HELPER FUNCTION
   ------------------------- */

/**
 * Adds a leading zero to a single-digit number.
 *
 * Example:
 * formatTimeUnit(7) -> "07"
 * formatTimeUnit(12) -> "12"
 *
 * @param {number} value - Number to format.
 * @returns {string} Two-digit formatted number.
 */
function formatTimeUnit(value) {
    return String(value).padStart(2, "0");
}

/* -------------------------
   4. UPDATE CLOCK
   ------------------------- */

/**
 * Reads the current date/time and updates every
 * visible part of the digital clock.
 */
function updateClock() {
    const now = new Date();

    // Get current 24-hour values.
    const currentHours = now.getHours();
    const currentMinutes = now.getMinutes();
    const currentSeconds = now.getSeconds();

    // Convert 24-hour time to 12-hour time.
    const displayHours = currentHours % 12 || 12;

    // Determine AM / PM.
    const period = currentHours >= 12 ? "PM" : "AM";

    // Get date information.
    const dayName = DAYS[now.getDay()];
    const monthName = MONTHS[now.getMonth()];
    const dayNumber = now.getDate();
    const year = now.getFullYear();

    // Update the time display.
    hoursElement.textContent = formatTimeUnit(displayHours);
    minutesElement.textContent = formatTimeUnit(currentMinutes);
    secondsElement.textContent = formatTimeUnit(currentSeconds);

    // Update AM / PM.
    periodElement.textContent = period;

    // Update date.
    dayNameElement.textContent = dayName;
    fullDateElement.textContent =
        `${monthName} ${dayNumber}, ${year}`;
}

/* -------------------------
   5. INITIALIZE APPLICATION
   ------------------------- */

// Run immediately so the page never starts with stale values.
updateClock();

// Refresh the clock every 1 second.
setInterval(updateClock, 1000);
