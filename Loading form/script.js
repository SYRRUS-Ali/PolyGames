document.addEventListener('DOMContentLoaded', function() {
    // Theme Toggle
    const themeButtons = document.querySelectorAll('.btn-theme');
    const body = document.body;
    
    // Check for saved theme preference
    const currentTheme = localStorage.getItem('theme') || 'light';
    setTheme(currentTheme);
    
    themeButtons.forEach(button => {
        button.addEventListener('click', () => {
            const theme = button.dataset.theme;
            setTheme(theme);
            localStorage.setItem('theme', theme);
        });
    });
    
    function setTheme(theme) {
        body.classList.toggle('dark-mode', theme === 'dark');
        
        themeButtons.forEach(btn => {
            btn.classList.toggle('active', btn.dataset.theme === theme);
        });
    }
    
    // Sidebar Navigation
    const sidebarLinks = document.querySelectorAll('.sidebar-link');
    const pages = document.querySelectorAll('.content-area');
    
    sidebarLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Remove active class from all links
            sidebarLinks.forEach(l => l.classList.remove('active'));
            
            // Add active class to clicked link
            link.classList.add('active');
            
            // Hide all pages
            pages.forEach(page => {
                page.style.display = 'none';
            });
            
            // Show selected page
            const pageId = link.getAttribute('data-page');
            if (pageId) {
                document.getElementById(pageId).style.display = 'block';
            }
        });
    });
    
    // Menu Toggle for Desktop
    const menuToggle = document.getElementById('menu-toggle');
    const sidebar = document.getElementById('sidebar');
    
    menuToggle?.addEventListener('click', () => {
        sidebar.classList.toggle('hidden');
    });
    
    // Mobile Menu Toggle
    const mobileMenuIcon = document.querySelector('.mobile-menu-icon');
    
    mobileMenuIcon?.addEventListener('click', () => {
        sidebar.classList.toggle('active');
    });
    
    // Initialize first page
    document.getElementById('main-info').style.display = 'block';
    
    // Custom radio buttons for player count
    const radioGroups = document.querySelectorAll('.radio-group');
    
    radioGroups.forEach(group => {
        const radios = group.querySelectorAll('.radio-input');
        
        radios.forEach(radio => {
            radio.addEventListener('change', function() {
                if (this.checked) {
                    radios.forEach(r => {
                        r.nextElementSibling.style.fontWeight = r === this ? '600' : '400';
                    });
                }
            });
        });
    });
});