// Espera o documento HTML ser completamente carregado
document.addEventListener('DOMContentLoaded', function() {
    
    // 1. DADOS (JSON) PARA OS BLOCOS
    const topicData = [
        { title: "Governança", icon: "fas fa-landmark" },
        { title: "Contabilidade", icon: "fas fa-coins" },
        { title: "Controladoria", icon: "fas fa-chart-pie" },
        { title: "Licitações e Contratos", icon: "fas fa-shopping-cart" },
        { title: "Tributário e Fiscal", icon: "fas fa-file-invoice-dollar" },
        { title: "Planejamento", icon: "fas fa-chart-line" },
        { title: "Departamento Pessoal", icon: "fas fa-users" },
        { title: "Lei Geral de Proteção de Dados", icon: "fas fa-lock" },
        { title: "Tesouraria", icon: "fas fa-calculator" },
        { title: "Capacitações", icon: "fas fa-headset" }
    ];

    // ==========================================================
    // PARTE 1: GERAR OS BLOCOS DINAMICAMENTE
    // ==========================================================

    const topicsGrid = document.querySelector('.topics-grid');
    
    // Verifica se o elemento .topics-grid existe na página
    if (topicsGrid) {
      let allTopicsHTML = '';

      // Loop para criar o HTML de cada bloco
      topicData.forEach(topic => {
          const topicHTML = `
              <div class="topic-item"> 
                  <span class="saiba-mais-text">Saiba Mais</span>
                  <div class="topic-content">
                      <i class="${topic.icon}"></i>
                      <h3>${topic.title}</h3>
                  </div>
              </div>
          `;
          allTopicsHTML += topicHTML;
      });

      // Insere todo o HTML no grid de uma só vez
      topicsGrid.innerHTML = allTopicsHTML;
    }

    // ==========================================================
    // PARTE 2: CÓDIGO DO MENU MOBILE (HAMBURGER)
    // ==========================================================
    
    const menuToggle = document.getElementById('mobile-menu-toggle');
    const mainNav = document.querySelector('.main-navigation'); // Seleciona o <nav>
    const navMenu = document.querySelector('.nav-menu'); // Seleciona o <div> interno

    if (menuToggle && mainNav && navMenu) {
      
      menuToggle.addEventListener('click', function() {
        // Adiciona/remove a classe 'active' no menu
        navMenu.classList.toggle('active');
        
        // Adiciona/remove 'active' no <nav> para mostrá-lo
        mainNav.classList.toggle('active'); 

        // Troca o ícone de "hamburger" (barras) para "X" (fechar)
        const icon = menuToggle.querySelector('i');
        if (navMenu.classList.contains('active')) {
          icon.classList.remove('fa-bars');
          icon.classList.add('fa-times');
        } else {
          icon.classList.remove('fa-times');
          icon.classList.add('fa-bars');
        }
      });
    }
});