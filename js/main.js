// Inicializa o AOS
AOS.init();

// Função para alternar os cards de cargos (utilizado em index.html)
function toggleCard(card) {
  const body = card.querySelector('.card-body');
  const allCards = document.querySelectorAll('.card-body');
  allCards.forEach(el => {
    if (el !== body) el.style.display = 'none';
  });
  body.style.display = body.style.display === 'block' ? 'none' : 'block';
}

// FAQ Accordion (index.html)
const faqQuestions = document.querySelectorAll('.faq-question');
faqQuestions.forEach(q => {
  q.addEventListener('click', function() {
    const answer = this.nextElementSibling;
    answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
  });
});

// Formulário de Contato - Feedback (index.html)
document.getElementById('contactForm')?.addEventListener('submit', function(e) {
  e.preventDefault();
  document.getElementById('formFeedback').style.display = 'block';
  this.reset();
});

// Modal Newsletter (index.html)
const newsletterModal = document.getElementById('newsletterModal');
const newsletterBtn = document.getElementById('newsletterBtn');
const newsletterClose = document.getElementById('newsletterClose');
newsletterBtn?.addEventListener('click', function(e) {
  e.preventDefault();
  newsletterModal.style.display = 'flex';
});
newsletterClose?.addEventListener('click', function() {
  newsletterModal.style.display = 'none';
});
document.getElementById('newsletterForm')?.addEventListener('submit', function(e) {
  e.preventDefault();
  document.getElementById('newsletterFeedback').style.display = 'block';
  this.reset();
});

// Modal Área do Colaborador (Login) - (index.html)
const loginModal = document.getElementById('loginModal');
const loginLink = document.getElementById('loginLink');
const loginClose = document.getElementById('loginClose');
loginLink?.addEventListener('click', function(e) {
  e.preventDefault();
  loginModal.style.display = 'flex';
});
loginClose?.addEventListener('click', function() {
  loginModal.style.display = 'none';
});
document.getElementById('loginForm')?.addEventListener('submit', function(e) {
  e.preventDefault();
  document.getElementById('loginFeedback').style.display = 'block';
  this.reset();
});

// Fechar modais ao clicar fora do conteúdo (index.html)
window.addEventListener('click', function(event) {
  if (event.target === newsletterModal) {
    newsletterModal.style.display = 'none';
  }
  if (event.target === loginModal) {
    loginModal.style.display = 'none';
  }
});

// 4: Dropdown no Header
const userMenuBtn = document.getElementById('userMenuBtn');
const userMenuDropdown = document.getElementById('userMenuDropdown');

if (userMenuBtn) {
  userMenuBtn.addEventListener('click', () => {
    userMenuDropdown.style.display =
      userMenuDropdown.style.display === 'block' ? 'none' : 'block';
  });
}

// Fechar dropdown do header ao clicar fora
window.addEventListener('click', (e) => {
  if (!userMenuBtn.contains(e.target) && !userMenuDropdown.contains(e.target)) {
    userMenuDropdown.style.display = 'none';
  }
});

// 10: Botão Dropdown Extra
const extraDropdownBtn = document.getElementById('extraDropdownBtn');
const extraDropdownContent = document.getElementById('extraDropdownContent');

if (extraDropdownBtn) {
  extraDropdownBtn.addEventListener('click', () => {
    extraDropdownContent.style.display =
      extraDropdownContent.style.display === 'block' ? 'none' : 'block';
  });
}

// Fechar dropdown extra ao clicar fora
window.addEventListener('click', (e) => {
  if (
    extraDropdownBtn &&
    !extraDropdownBtn.contains(e.target) &&
    extraDropdownContent &&
    !extraDropdownContent.contains(e.target)
  ) {
    extraDropdownContent.style.display = 'none';
  }
});

// 12: Sidebar Dropdown (submenus)
const sidebarDropdowns = document.querySelectorAll('.sidebar-dropdown > a');
sidebarDropdowns.forEach((dropdownLink) => {
  dropdownLink.addEventListener('click', (e) => {
    e.preventDefault();
    const submenu = dropdownLink.parentElement.querySelector('.sidebar-submenu');
    if (submenu) {
      submenu.style.display =
        submenu.style.display === 'block' ? 'none' : 'block';

      // Alternar ícone de seta
      const arrow = dropdownLink.querySelector('.drop-arrow');
      if (arrow) {
        arrow.classList.toggle('fa-chevron-down');
        arrow.classList.toggle('fa-chevron-up');
      }
    }
  });
});

