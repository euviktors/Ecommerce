const darkModeToggle = document.getElementById("darkmode");

darkModeToggle.addEventListener("click", toggleDarkMode);

// Verifica se o modo escuro está ativado
if (localStorage.getItem('darkMode') === 'true') {
    document.body.classList.add('dark-mode');
}

// Função para alternar entre os modos claro e escuro
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    // Salva a preferência do modo escuro no armazenamento local
    localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
}

function slider(anything) {
    document.querySelector('.one').src = anything;
  }
  
  let menu = document.getElementById('menu');
  let navbar = document.querySelector('.navegação');
  
  menu.addEventListener('click', () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
  });