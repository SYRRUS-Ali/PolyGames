document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const mobileNav = document.querySelector('.mobile-nav');
    
    menuToggle.addEventListener('click', function() {
        mobileNav.classList.toggle('active');
    });
    
    // Filter functionality
    const filters = document.querySelectorAll('.filter');
    const projectCards = document.querySelectorAll('.project-card');
    
    // Map filter text to category tags
    const filterMap = {
        'Все': 'Все',
        'Технология': '#Технология',
        'Информационные технологии': '#ИнформационныеТехнологии',
        'Социальные технологии': '#СоциальныеТехнологии',
        'Исследование и разработка': '#ИсследованиеИРазработка',
        'Стратегические проекты': '#СтратегическиеПроекты'
    };
    
    filters.forEach(filter => {
        filter.addEventListener('click', function() {
            // Remove active class from all filters
            filters.forEach(f => f.classList.remove('active'));
            
            // Add active class to clicked filter
            this.classList.add('active');
            
            const filterText = this.textContent.trim();
            const categoryToFilter = filterMap[filterText];
            
            // Show all projects if "Все" is selected
            if (filterText === 'Все') {
                projectCards.forEach(card => {
                    card.style.display = 'flex';
                });
                return;
            }
            
            // Filter projects based on category
            projectCards.forEach(card => {
                const cardCategory = card.querySelector('.project-category').textContent.trim();
                if (cardCategory === categoryToFilter) {
                    card.style.display = 'flex';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
    
    // Project link buttons
    const projectLinks = document.querySelectorAll('.project-link');
    
    projectLinks.forEach(link => {
        link.addEventListener('click', function() {
            // Here you would add navigation to the specific project page
            // For now, we'll just log which project was clicked
            const projectTitle = this.closest('.project-card').querySelector('.project-title').textContent;
            console.log(`Navigating to project: ${projectTitle}`);
            // window.location.href = 'project-details.html';
        });
    });
});