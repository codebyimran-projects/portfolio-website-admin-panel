     // Toggle sidebar on mobile
        document.getElementById('menuToggle').addEventListener('click', function () {
            document.getElementById('sidebar').classList.toggle('active');
        });

        // Dropdown toggle functionality
        const dropBtn = document.getElementById('adminDropBtn');
        const dropdownContent = document.getElementById('adminDropdownContent');

        dropBtn.addEventListener('click', function (e) {
            e.stopPropagation();
            dropdownContent.classList.toggle('show');
            dropBtn.classList.toggle('active');
        });

        // Close dropdown when clicking outside
        document.addEventListener('click', function (e) {
            if (!dropBtn.contains(e.target) && !dropdownContent.contains(e.target)) {
                dropdownContent.classList.remove('show');
                dropBtn.classList.remove('active');
            }
        });
