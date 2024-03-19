
// Claude 3 - To Calculate Passed Time from my Birthday
const targetDate = new Date('2001-05-31');
// Function to update the date runner
function updateDateRunner() {
    // Calculate the time difference in milliseconds
    const timeDiff = new Date().getTime() - targetDate.getTime();

    // Convert the time difference to days, hours, minutes, and seconds
    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

    // Update the date runner element
    document.getElementById('bdayrem').textContent = `${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`;
}

// Call the updateDateRunner function every second
setInterval(updateDateRunner, 1000);