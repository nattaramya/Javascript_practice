 function setCookie() {
      const name = document.getElementById("cookieName").value.trim();
      if (name) {
        
        document.cookie = `${name}= ; max-age=3600; path=/`;
        document.getElementById("output").innerText = `Cookie "${name}" has been set.`;
      } else {
        document.getElementById("output").innerText = "Please enter a cookie name.";
      }
    }

    function getCookie() {
      const name = document.getElementById("cookieName").value.trim() + "=";
      const cookies = document.cookie.split(";");
      for (let cookie of cookies) {
        cookie = cookie.trim();
        if (cookie.startsWith(name)) {
          document.getElementById("output").innerText = `Cookie "${name.slice(0, -1)}" exists.`;
          return;
        }
      }
      document.getElementById("output").innerText = `Cookie "${name.slice(0, -1)}" not found.`;
    }