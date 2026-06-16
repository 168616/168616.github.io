const elemSelect = document.querySelector('#selectModo');

if (elemSelect) {
  const storedMode = localStorage.getItem('modo-light-dark');

  if (storedMode === 'light' || storedMode === 'dark') {
    document.documentElement.setAttribute('modo-light-dark', storedMode);
    elemSelect.value = storedMode;
  } else if (storedMode === 'Sistema') {
    document.documentElement.removeAttribute('modo-light-dark');
    elemSelect.value = 'Sistema';
  }

  elemSelect.addEventListener('change', function() {
    if (elemSelect.value === 'light') {
      document.documentElement.setAttribute('modo-light-dark', 'light');
      localStorage.setItem('modo-light-dark', 'light');
    } else if (elemSelect.value === 'dark') {
      document.documentElement.setAttribute('modo-light-dark', 'dark');
      localStorage.setItem('modo-light-dark', 'dark');
    } else {
      document.documentElement.removeAttribute('modo-light-dark');
      localStorage.setItem('modo-light-dark', 'Sistema');
    }
  });
}

function increaseFont() {
  const root = document.documentElement;
  const current = parseInt(getComputedStyle(root).fontSize, 10);
  if (current < 32) {
    root.style.fontSize = `${current + 2}px`;
  }
}

function decreaseFont() {
  const root = document.documentElement;
  const current = parseInt(getComputedStyle(root).fontSize, 10);
  if (current > 8) {
    root.style.fontSize = `${current - 2}px`;
  }
}

const contactForm = document.querySelector('#contactForm');
const contactFeedback = document.querySelector('#contactFeedback');

if (contactForm) {
  contactForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const name = contactForm.querySelector('#name').value.trim();
    const email = contactForm.querySelector('#email').value.trim();
    const message = contactForm.querySelector('#message').value.trim();

    if (!name || !email || !message) {
      contactFeedback.textContent = 'Por favor, preencha todos os campos antes de enviar.';
      contactFeedback.style.color = 'red';
      return;
    }

    contactFeedback.textContent = 'Mensagem enviada com sucesso!';
    contactFeedback.style.color = 'green';
    contactForm.reset();
  });
}
