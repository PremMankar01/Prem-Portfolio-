<script>
    document.addEventListener('DOMContentLoaded', function() {
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
        setInterval(showNextSkill, 1000);
    });
</script>
