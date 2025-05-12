window.addEventListener("load", function () {
    if (!localStorage.getItem("cookieConsent")) {
      const popup = document.createElement("div");
      popup.id = "cookie-popup";
      popup.innerHTML = `
        This site uses cookies to improve your experience. See our <a href="cookies.html">Cookie Policy</a>.
        <button id="accept-cookies">Got it!</button>
      `;
      document.body.appendChild(popup);
  
      document.getElementById("accept-cookies").addEventListener("click", function () {
        localStorage.setItem("cookieConsent", "true");
        popup.remove();
      });
    }
  });
  