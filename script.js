// Countdown Timer
function updateTimer() {
    const future = new Date("February 03, 2025 06:00:00").getTime();
    const now = new Date().getTime();
    const diff = future - now;
  
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);
  
    document.getElementById("timer").innerHTML = `
      <div>${days}<span>Days</span></div>
      <div>${hours}<span>Hours</span></div>
      <div>${minutes}<span>Minutes</span></div>
      <div>${seconds}<span>Seconds</span></div>
    `;
  }
  
  // Google Calendar Integration
  function updateCalendarLink() {
    const eventDate = new Date("February 03, 2025 06:00:00");
    const startTime = eventDate.toISOString().replace(/[-:]/g, "").split(".")[0];
    const endTime = new Date(eventDate.getTime() + 90 * 60 * 1000).toISOString().replace(/[-:]/g, "").split(".")[0]; // 90 minutes
  
    const calendarUrl = `https://www.google.com/calendar/render?action=TEMPLATE&text=Wedding+of+Sarathkumar+and+Kaviya&dates=${startTime}/${endTime}&details=Wedding+Ceremony&location=Siva+Pooja+Marriage+Hall&sf=true&output=xml`;
    document.getElementById("save-calendar").setAttribute("href", calendarUrl);
  }
  
  // Update every second
  setInterval(updateTimer, 1000);
  updateCalendarLink();
  