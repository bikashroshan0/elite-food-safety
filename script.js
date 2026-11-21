
/* =====================================
   MOBILE NAVIGATION
===================================== */

const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');

if (menuButton && nav) {

    menuButton.addEventListener('click', () => {

        const open = nav.classList.toggle('open');

        menuButton.setAttribute('aria-expanded', open);

    });

    document.querySelectorAll('.nav a').forEach(link => {

        link.addEventListener('click', () => {
            nav.classList.remove('open');
            menuButton.setAttribute('aria-expanded', 'false');
        });

    });

}

/* =====================================
   OLD MAILTO FORM HANDLER REMOVED

   EmailJS submission is now handled
   exclusively by contact.js
===================================== */
