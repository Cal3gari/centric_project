document.addEventListener('DOMContentLoaded', () => {
    // 1. Navbar Scroll Effect (Home Page mainly)
    const navbar = document.getElementById('navbar');
    if (navbar && !navbar.classList.contains('bg-darkblue')) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('bg-darkblue', 'shadow-md');
                navbar.classList.remove('bg-transparent');
            } else {
                navbar.classList.remove('bg-darkblue', 'shadow-md');
                navbar.classList.add('bg-transparent');
            }
        });
    }

    // 2. Reveal on Scroll Animation
    const reveals = document.querySelectorAll('.reveal');
    const revealOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const revealOnScroll = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, revealOptions);

    reveals.forEach(reveal => {
        revealOnScroll.observe(reveal);
    });

    // 3. FAQ Accordion Logic
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const btn = item.querySelector('.faq-btn');
        const content = item.querySelector('.faq-content');
        const icon = item.querySelector('i');

        btn.addEventListener('click', () => {
            const isOpen = !content.classList.contains('hidden');
            
            // Close all
            faqItems.forEach(otherItem => {
                otherItem.querySelector('.faq-content').classList.add('hidden');
                otherItem.querySelector('i').style.transform = 'rotate(0deg)';
            });

            // Open clicked if it was closed
            if (!isOpen) {
                content.classList.remove('hidden');
                icon.style.transform = 'rotate(180deg)';
            }
        });
    });
});