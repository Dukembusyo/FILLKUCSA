const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  menuToggle.classList.toggle("open");
});




// Highlight active link based on current page
const navItems = document.querySelectorAll('nav ul li a');
navItems.forEach(link => {
  if (link.href === window.location.href) {
    link.classList.add('active');
  }
});



// Counter animation for stats
const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {
  const updateCount = () => {
    const target = +counter.getAttribute('data-target');
    const count = +counter.innerText;
    const increment = target / 200; // Adjust speed

    if (count < target) {
      counter.innerText = Math.ceil(count + increment);
      setTimeout(updateCount, 15);
    } else {
      counter.innerText = target + (target >= 1000 ? '+' : '');
    }
  };

  updateCount();
});

