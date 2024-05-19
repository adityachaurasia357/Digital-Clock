function updateClock() {
    // Get the current date and time
    const now = new Date();
    
    // Get hours, convert to string, and pad with leading zeros if needed
    let hours = now.getHours().toString().padStart(2, '0');
    
    // Determine if it's AM or PM
    const meridiem = hours >= 12 ? "PM" : "AM";
    
    // Convert hours to 12-hour format
    hours = hours % 12 || 12;
    
    // Convert hours to string and pad with leading zeros if needed
    hours = hours.toString().padStart(2, '0');
    
    // Get minutes, convert to string, and pad with leading zeros if needed
    const minutes = now.getMinutes().toString().padStart(2, '0');
    
    // Get seconds, convert to string, and pad with leading zeros if needed
    const seconds = now.getSeconds().toString().padStart(2, '0');
    
    // Create the time string in the format "HH:MM:SS AM/PM"
    const timeString = `${hours}:${minutes}:${seconds} ${meridiem}`;
    
    // Update the text content of the element with id "clock"
    document.getElementById("clock").textContent = timeString;
}

// Initial call to update the clock immediately
updateClock();

// Set interval to update the clock every second (1000 milliseconds)
setInterval(updateClock, 1000);
