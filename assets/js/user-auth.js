/**
 * User Authentication and Modal Handler
 */

document.addEventListener('DOMContentLoaded', function() {
    const userBtn = document.getElementById('user-menu-toggle');
    const userDropdown = document.getElementById('user-dropdown');
    const loginModal = document.getElementById('login-modal');
    const signupModal = document.getElementById('signup-modal');
    const loginLink = document.getElementById('show-login');
    const signupLink = document.getElementById('show-signup');
    const closeBtns = document.querySelectorAll('.close-modal');
    const switchLogin = document.getElementById('switch-to-login');
    const switchSignup = document.getElementById('switch-to-signup');

    // Toggle Dropdown
    if (userBtn) {
        userBtn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            userDropdown.classList.toggle('active');
        });
    }

    // Close dropdown on outside click
    window.addEventListener('click', function() {
        if (userDropdown && userDropdown.classList.contains('active')) {
            userDropdown.classList.remove('active');
        }
    });

    // Prevent closing when clicking inside dropdown
    if (userDropdown) {
        userDropdown.addEventListener('click', function(e) {
            e.stopPropagation();
        });
    }

    // Show Login Modal
    if (loginLink) {
        loginLink.addEventListener('click', function(e) {
            e.preventDefault();
            userDropdown.classList.remove('active');
            loginModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    }

    // Show Signup Modal
    if (signupLink) {
        signupLink.addEventListener('click', function(e) {
            e.preventDefault();
            userDropdown.classList.remove('active');
            signupModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    }

    // Close Modals
    closeBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            loginModal.classList.remove('active');
            signupModal.classList.remove('active');
            document.body.style.overflow = 'auto';
        });
    });

    // Close on overlay click
    [loginModal, signupModal].forEach(modal => {
        if (modal) {
            modal.addEventListener('click', function(e) {
                if (e.target === modal) {
                    modal.classList.remove('active');
                    document.body.style.overflow = 'auto';
                }
            });
        }
    });

    // Switch between modals
    if (switchLogin) {
        switchLogin.addEventListener('click', function(e) {
            e.preventDefault();
            signupModal.classList.remove('active');
            loginModal.classList.add('active');
        });
    }

    if (switchSignup) {
        switchSignup.addEventListener('click', function(e) {
            e.preventDefault();
            loginModal.classList.remove('active');
            signupModal.classList.add('active');
        });
    }

    // Form Submissions (Demo)
    const forms = document.querySelectorAll('.auth-form');
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('This is a demo. Integration with backend is required for real user management.');
        });
    });
});
