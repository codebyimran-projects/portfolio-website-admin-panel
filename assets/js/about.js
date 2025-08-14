

        // About form functionality
        const aboutFormModal = document.getElementById('aboutFormModal');
        const editAboutBtn = document.getElementById('editAboutBtn');
        const closeForm = document.getElementById('closeForm');
        const cancelForm = document.getElementById('cancelForm');
        const aboutForm = document.getElementById('aboutForm');

        // Show form
        editAboutBtn.addEventListener('click', function () {
            // Populate form with existing data
            document.getElementById('companyOverview').value = `We are a leading provider of innovative solutions, dedicated to delivering exceptional services in technology and consulting. Founded in 2010, our mission is to empower businesses through cutting-edge technology and unparalleled support.`;
            document.getElementById('missionStatement').value = `To transform businesses by providing innovative, reliable, and scalable solutions that drive success and growth.`;
            document.getElementById('contactInfo').value = `Email: contact@company.com\nPhone: (123) 456-7890\nAddress: 123 Innovation Drive, Tech City, TC 12345`;
            aboutFormModal.classList.add('active');
        });

        // Hide form
        function hideForm() {
            aboutFormModal.classList.remove('active');
        }

        closeForm.addEventListener('click', hideForm);
        cancelForm.addEventListener('click', hideForm);

        // Submit form
        aboutForm.addEventListener('submit', function (e) {
            e.preventDefault();

            // Get form values
            const companyOverview = document.getElementById('companyOverview').value;
            const missionStatement = document.getElementById('missionStatement').value;
            const contactInfo = document.getElementById('contactInfo').value;

            // Update the displayed content
            document.querySelectorAll('.about-info-section p')[0].textContent = companyOverview;
            document.querySelectorAll('.about-info-section p')[1].textContent = missionStatement;
            document.querySelectorAll('.about-info-section p')[2].innerHTML = contactInfo.replace(/\n/g, '<br>');

            // Reset form and hide modal
            aboutForm.reset();
            hideForm();

            // In a real app, send data to server
            alert(`About information updated successfully!`);
        });