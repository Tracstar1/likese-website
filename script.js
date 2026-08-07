document.getElementById("year").textContent =
  new Date().getFullYear();const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');

menuButton.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
});

document.querySelectorAll('.main-nav a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
  });
});

document.getElementById('year').textContent = new Date().getFullYear();

const form = document.getElementById('contactForm');
const status = document.querySelector('.form-status');

form.addEventListener('submit', event => {
  event.preventDefault();

  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }

  const data = new FormData(form);
  const firstName = data.get('firstName');
  const reason = data.get('reason');

  status.textContent = `Thank you, ${firstName}. Your ${String(reason).toLowerCase()} request is ready. Please call or text (405) 210-7053 to send it directly to Likese.`;
  form.reset();
});
