function updateClock() {
      const now = new Date();
      let hours = now.getHours();
      const minutes = String(now.getMinutes()).padStart(2, '0');
      const seconds = String(now.getSeconds()).padStart(2, '0');
      const amPm = hours >= 12 ? 'PM' : 'AM';

      hours = hours % 12;
      hours = hours ? hours : 12; // convert 0 to 12
      hours = String(hours).padStart(2, '0');

      const timeString = `${hours}:${minutes}:${seconds} ${amPm}`;
      document.getElementById('digitalClock').textContent = timeString;
    }

    setInterval(updateClock, 1000);
    updateClock();