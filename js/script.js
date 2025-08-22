 const hamburger = document.getElementById('hamburger');
    const sidebar = document.getElementById('sidebar');

    hamburger.addEventListener('click', () => {
      sidebar.classList.toggle('mobile-open');
    });

    // Fecha menu ao clicar em algum link
    document.querySelectorAll('.nav-menu a').forEach(link => {
      link.addEventListener('click', () => {
        sidebar.classList.remove('mobile-open');
      });
    });