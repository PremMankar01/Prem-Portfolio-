/*
document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.section');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        observer.observe(section);
    });
});
*/
document.addEventListener('DOMContentLoaded', function() {
    // Section Observer Code
    const sections = document.querySelectorAll('.section');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        observer.observe(section);
    });

    // Skill Animation Code
    const skills = document.querySelectorAll('.skill-item');
    let currentSkill = 0;

    function showNextSkill() {
        // Hide all skills
        skills.forEach(skill => skill.style.opacity = '0');

        // Show the next skill
        skills[currentSkill].style.opacity = '1';

        // Move to the next skill
        currentSkill = (currentSkill + 1) % skills.length;
    }

    // Initial display
    showNextSkill();

    // Change skill every second
    setInterval(showNextSkill, 2000);

    // Project Animation Code
    // Swipe Animation for Projects
    let currentProjectIndex = 0;
    const projects = document.querySelectorAll('.projects .project');
    const nextButton = document.getElementById('nextProject');
    const prevButton = document.getElementById('prevProject');

    function updateButtons() {
        nextButton.disabled = currentProjectIndex === projects.length - 1;
        prevButton.disabled = currentProjectIndex === 0;
    }

    function showNextProject() {
        if (currentProjectIndex < projects.length - 1) {
            projects[currentProjectIndex].classList.remove('active');
            projects[currentProjectIndex].classList.add('exiting');
        
            currentProjectIndex++;

            projects[currentProjectIndex].classList.remove('exiting');
            projects[currentProjectIndex].classList.add('active');

            updateButtons();
        }
    }

    function showPrevProject() {
        if (currentProjectIndex > 0) {
            projects[currentProjectIndex].classList.remove('active');
            projects[currentProjectIndex].classList.add('exiting');

            currentProjectIndex--;

            projects[currentProjectIndex].classList.remove('exiting');
            projects[currentProjectIndex].classList.add('active');

            updateButtons();
        }
    }

    nextButton.addEventListener('click', showNextProject);
    prevButton.addEventListener('click', showPrevProject);

    // Initialize button states
    updateButtons();
});

