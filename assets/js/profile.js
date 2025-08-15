        // Toggle sidebar on mobile
        document.getElementById('menuTrigger').addEventListener('click', function () {
            document.getElementById('sidebar').classList.toggle('active');
        });

        // Profile form functionality
        const profileFormModal = document.getElementById('profileFormModal');
        const editProfileBtn = document.getElementById('editProfileBtn');
        const closeForm = document.getElementById('closeForm');
        const cancelForm = document.getElementById('cancelForm');
        const profileForm = document.getElementById('profileForm');
        const nameInput = document.getElementById('profileNameInput');
        const emailInput = document.getElementById('profileEmailInput');
        const passwordInput = document.getElementById('profilePasswordInput');
        const saveProfileBtn = document.getElementById('saveProfileBtn');
        const nameError = document.getElementById('nameError');
        const emailError = document.getElementById('emailError');
        const passwordError = document.getElementById('passwordError');

        function validateForm() {
            const name = nameInput.value.trim();
            const email = emailInput.value.trim();
            const password = passwordInput.value.trim();
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            let isValid = true;

            // Name validation
            if (!name || name.length < 2) {
                nameError.style.display = 'block';
                isValid = false;
            } else {
                nameError.style.display = 'none';
            }

            // Email validation
            if (!email || !emailRegex.test(email)) {
                emailError.style.display = 'block';
                isValid = false;
            } else {
                emailError.style.display = 'none';
            }

            // Password validation (optional)
            if (password && password.length < 8) {
                passwordError.style.display = 'block';
                isValid = false;
            } else {
                passwordError.style.display = 'none';
            }

            saveProfileBtn.disabled = !isValid;
        }

        nameInput.addEventListener('input', validateForm);
        emailInput.addEventListener('input', validateForm);
        passwordInput.addEventListener('input', validateForm);

        // Show form with current data
        editProfileBtn.addEventListener('click', function () {
            nameInput.value = document.getElementById('profileName').textContent;
            emailInput.value = document.getElementById('profileEmail').textContent;
            passwordInput.value = '';
            validateForm();
            profileFormModal.classList.add('active');
        });

        // Hide form
        function hideForm() {
            profileFormModal.classList.remove('active');
        }

        closeForm.addEventListener('click', hideForm);
        cancelForm.addEventListener('click', hideForm);

        // Submit form
        profileForm.addEventListener('submit', function (e) {
            e.preventDefault();

            const name = nameInput.value.trim();
            const email = emailInput.value.trim();
            const password = passwordInput.value.trim();

            // Update displayed profile info
            document.getElementById('profileName').textContent = name;
            document.getElementById('profileEmail').textContent = email;
            document.querySelector('.profile-avatar').textContent = name.split(' ').map(word => word[0]).join('').toUpperCase();
            document.querySelector('.admin-username').textContent = name;

            // In a real app, send updated data to a server
            alert(`Profile updated successfully for ${name}!${password ? ' Password changed.' : ''}`);

            // Reset form and hide modal
            profileForm.reset();
            hideForm();
            saveProfileBtn.disabled = true;
        });