const themeBtn = document.querySelector('.nav_theme-btn');

document.body.className = localStorage.getItem('currentTheme') || '';
updateThemeIcon();

themeBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');
  const currentTheme = document.body.classList.contains('dark-theme') ? 'dark-theme' : '';
  localStorage.setItem('currentTheme', currentTheme);
  updateThemeIcon();
});

function updateThemeIcon() {
  if (document.body.classList.contains('dark-theme')) {
    themeBtn.innerHTML = '<i class="uil uil-sun"></i>';
  } else {
    themeBtn.innerHTML = '<i class="uil uil-moon"></i>';
  }
}

const darkModeToggle = document.getElementById("darkModeToggle");
if (darkModeToggle) {
  darkModeToggle.addEventListener("change", () => {
    document.body.classList.toggle("dark-theme", darkModeToggle.checked);
    localStorage.setItem('currentTheme', darkModeToggle.checked ? 'dark-theme' : '');
    updateThemeIcon();
  });

  darkModeToggle.checked = document.body.classList.contains("dark-theme");
}

const twoFactorToggle = document.getElementById("twoFactorToggle");
if (twoFactorToggle) {
  twoFactorToggle.addEventListener("change", () => {
    alert(twoFactorToggle.checked 
      ? "Two-Factor Authentication Enabled" 
      : "Two-Factor Authentication Disabled"
    );
  });
}

document.querySelectorAll(".btn-primary").forEach(btn => {
  btn.addEventListener("click", e => {
    e.preventDefault();
    alert("Settings saved successfully!");
  });
});

const faqItems = document.querySelectorAll('.faq_item');
faqItems.forEach(item => {
  const question = item.querySelector('.faq_question');
  const toggle = item.querySelector('.faq_toggle');
  question.addEventListener('click', () => {
    item.classList.toggle('active');
    if (toggle) toggle.textContent = item.classList.contains('active') ? '-' : '+';
  });
});

const sidebar = document.querySelector('.sidebar');
const closeSidebarBtn = document.querySelector('.sidebar-close-btn');
const openSidebarBtn = document.querySelector('.nav_menu-btn');

if (openSidebarBtn && sidebar) {
  openSidebarBtn.addEventListener('click', () => {
    sidebar.style.display = 'flex';
  });
}
if (closeSidebarBtn && sidebar) {
  closeSidebarBtn.addEventListener('click', () => {
    sidebar.style.display = 'none';
  });
}

const chartCanvas = document.querySelector('#chart');
if (chartCanvas) {
  const ctx = chartCanvas.getContext('2d');

  new Chart(ctx, {
    type: 'line',
    data: {
      labels: [
        'January', 'February', 'March', 'April', 'May',
        'June', 'July', 'August', 'September'
      ],
      datasets: [
        {
          label: 'BTC',
          data: [29374, 33537, 49631, 59828, 36684, 39974, 48847, 48116, 61004],
          borderColor: 'red',
          borderWidth: 2,
          fill: false
        },
        {
          label: 'ETH',
          data: [1000, 1200, 1500, 1800, 1400, 1600, 2000, 2200, 2500],
          borderColor: 'blue',
          borderWidth: 2,
          fill: false
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: true,
          position: 'top'
        }
      }
    }
  });
}
