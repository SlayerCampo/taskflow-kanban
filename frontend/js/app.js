/*
  ======================================================================
  ARCHIVO: app.js
  TUTORIAL PARA EL EQUIPO (DEV FRONTEND 1 & 2):
  ======================================================================
  Este archivo manejará la lógica general de la aplicación, como:
  1. Cambio de Modo Claro/Oscuro.
  2. Simulación de Inicio de Sesión (mientras no haya backend).
  3. Cierre de sesión.
  
  Hemos dejado grandes espacios debajo de cada sección para que escriban 
  el código necesario. Guíense por los comentarios.
*/

document.addEventListener('DOMContentLoaded', () => {

    // ---------------------------------------------------------
    // 1. MODO OSCURO (DARK MODE)
    // ---------------------------------------------------------
    /*
      INSTRUCCIONES:
      Captura el botón con id "theme-toggle".
      Al hacer click, cambia las clases en <html> (agrega o quita la clase 'dark').
      Guarda la preferencia del usuario en localStorage ('color-theme', 'dark' o 'light').
    */
    const themeToggleBtn = document.getElementById('theme-toggle');
    const themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
    const themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');
    
    if (themeToggleBtn) {
        // Inicializar iconos
        if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            if(themeToggleLightIcon) themeToggleLightIcon.classList.remove('hidden');
        } else {
            if(themeToggleDarkIcon) themeToggleDarkIcon.classList.remove('hidden');
        }

        themeToggleBtn.addEventListener('click', () => {
            // ==========================================
            // ESPACIO PARA SU CÓDIGO (Modo Oscuro)
            // Alternar los íconos de luna/sol y cambiar la clase 'dark' en document.documentElement
            // ==========================================
            
            themeToggleDarkIcon.classList.toggle('hidden');
            themeToggleLightIcon.classList.toggle('hidden');
            
            if (document.documentElement.classList.contains('dark')) {
                document.documentElement.classList.remove('dark');
                localStorage.setItem('color-theme', 'light');
            } else {
                document.documentElement.classList.add('dark');
                localStorage.setItem('color-theme', 'dark');
            }

        });
    }


    // ---------------------------------------------------------
    // 2. SIMULACIÓN DE SESIÓN EN INDEX.HTML
    // ---------------------------------------------------------
    /*
      INSTRUCCIONES:
      Si estamos en la página del tablero (index.html), revisa si hay un usuario 
      en localStorage (ej. localStorage.getItem('usuarioActivo')).
      Si no lo hay, redirige a login.html (para que no vean las tareas sin loguearse).
      Si sí lo hay, muestra su nombre en la cabecera.
    */
    
    // Verifica si estamos en la página correcta (por ejemplo comprobando un elemento único)
    const userInfoDiv = document.getElementById('user-info');
    const logoutBtn = document.getElementById('logout-button');

    if (userInfoDiv) {
        
        // ==========================================
        // ESPACIO PARA SU CÓDIGO (Validar Sesión)
        // Ejemplo: const usuario = localStorage.getItem('usuarioActivo');
        // Si no hay usuario: window.location.href = 'login.html';
        // Si lo hay: userInfoDiv.textContent = `Hola, ${usuario}`;
        // ==========================================
        
        // Simulación temporal para que puedan ver la página:
        // userInfoDiv.textContent = 'Hola, Usuario (Mock)';
        if(logoutBtn) logoutBtn.classList.remove('hidden');
        
    }


    // ---------------------------------------------------------
    // 3. CIERRE DE SESIÓN
    // ---------------------------------------------------------
    /*
      INSTRUCCIONES:
      Al hacer click en el botón de cerrar sesión, eliminen el usuario de 
      localStorage y redirijan a landingPage.html.
    */
    if (logoutBtn) {
        logoutBtn.addEventListener('click', () => {
            
            // ==========================================
            // ESPACIO PARA SU CÓDIGO (Cerrar Sesión)
            // ==========================================
            
            alert('Cerrar sesión (Funcionalidad pendiente)');
            
        });
    }

});
