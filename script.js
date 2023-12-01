document.addEventListener("DOMContentLoaded", function() {
    const canvas = document.getElementById("zeichnenCanvas");
    const ctx = canvas.getContext("2d");
    let malen = false;

    function startPosition(e) {
        malen = true;
        zeichnen(e);
    }

    function endPosition() {
        malen = false;
        ctx.beginPath();
    }

    function zeichnen(e) {
        if (!malen) return;

        e.preventDefault(); // Verhindert zusätzliche Ereignisse wie Touch-Scroll

        // Koordinaten bekommen
        const rect = canvas.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        // Zeichnen
        ctx.lineWidth = 13; // Dicke des Stiftes
        ctx.lineCap = "round"; // Runde Linienenden

        ctx.lineTo(x, y);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(x, y);
    }

    // Event-Listener
    canvas.addEventListener("mouseenter", startPosition);
    canvas.addEventListener("mouseleave", endPosition);
    canvas.addEventListener("mousemove", zeichnen);

    // Optional: Unterstützung für Touch-Geräte
    canvas.addEventListener("touchmove", (e) => {
        if (e.touches.length == 1) { // Nur bei einem Finger
            const touch = e.touches[0];
            const mouseEvent = new MouseEvent("mousemove", {
                clientX: touch.clientX,
                clientY: touch.clientY
            });
            zeichnen(mouseEvent);
        }
    });
});



//Background Scrolling

window.addEventListener('scroll', function() {
    var scrollPercent = window.scrollY / (document.body.scrollHeight - window.innerHeight);
    var colorPercent = scrollPercent * 80;
  
    document.body.style.background = `linear-gradient(to bottom, lightyellow ${colorPercent}%, darkred, black)`;
  });

  // JavaScript, um den Button anzuzeigen/auszublenden, wenn der Benutzer scrollt
  var scrollToTopButton = document.getElementById("scrollToTopButton");

  // Diese Funktion wird aufgerufen, wenn der Benutzer auf den Button klickt
  function scrollToTop() {
      window.scrollTo({
          top: 0,
          behavior: "smooth" // Scrollen erfolgt animiert
      });
  }

// JavaScript, um den Button anzuzeigen/auszublenden, wenn der Benutzer scrollt
var scrollToTopButton = document.getElementById("scrollToTopButton");

// Diese Funktion wird aufgerufen, wenn der Benutzer auf den Button klickt
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth" // Scrollen erfolgt animiert
    });
}

// Diese Funktion überprüft die Scrollposition, um den Button anzuzeigen/auszublenden
function toggleScrollToTopButton() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopButton.style.display = "block";
    } else {
        scrollToTopButton.style.display = "none";
    }
}

// Fügen Sie einen Event-Listener hinzu, um die Scroll-Position zu überwachen
window.onscroll = function() {
    toggleScrollToTopButton();
};

// Fügen Sie einen Event-Listener hinzu, um den Button-Klick zu verarbeiten
scrollToTopButton.addEventListener("click", scrollToTop);


document.getElementById('headline').addEventListener('mouseover', function() {
    this.classList.add('disappear');
});

document.getElementById('headline').addEventListener('mouseleave', function() {
    this.classList.remove('disappear');
});

const line = document.querySelector('.vertical-line');

window.addEventListener('scroll', () => {
    const scrollPercentage = window.scrollY / (document.body.scrollHeight - window.innerHeight);
    const newWidth = Math.min(100, 1 + scrollPercentage * 100); // Maximalbreite auf 100px beschränken
    line.style.borderLeftWidth = newWidth + 'px';
});


// Funktion Animation der Linien

let observerOptions = {
    rootMargin: '0px',
    threshold: 0.5 // Element ist zu 50% sichtbar
};

var observer = new IntersectionObserver(observerCallback, observerOptions);

function observerCallback(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        } else {
            entry.target.classList.remove('animate');
        }
    });
};

let target = '.vertical-line';
document.querySelectorAll(target).forEach((i) => {
    observer.observe(i);
});


document.getElementById("meinElement").addEventListener("mouseover", function() {
    this.classList.add("custom-cursor");
});

document.getElementById("meinElement").addEventListener("mouseout", function() {
    this.classList.remove("custom-cursor");
});


// Dieses Skript fügt die `custom-cursor`-Klasse zu einem Element hinzu, wenn der Mauszeiger darüber schwebt, und entfernt sie wieder, wenn der Mauszeiger das Element verlässt.

