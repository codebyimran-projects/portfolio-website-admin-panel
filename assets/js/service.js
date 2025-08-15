
        // Service form functionality
        const serviceFormModal = document.getElementById('serviceFormModal');
        const addServiceBtn = document.getElementById('addServiceBtn');
        const closeForm = document.getElementById('closeForm');
        const cancelForm = document.getElementById('cancelForm');
        const serviceForm = document.getElementById('serviceForm');

        // Show form
        addServiceBtn.addEventListener('click', function () {
            serviceFormModal.classList.add('active');
        });

        // Hide form
        function hideForm() {
            serviceFormModal.classList.remove('active');
        }

        closeForm.addEventListener('click', hideForm);
        cancelForm.addEventListener('click', hideForm);

        // Submit form
        serviceForm.addEventListener('submit', function (e) {
            e.preventDefault();

            // Get form values
            const serviceName = document.getElementById('serviceName').value;
            const serviceCategory = document.getElementById('serviceCategory').value;

            // In a real app, you would send this data to a server
            alert(`Service "${serviceName}" added successfully!`);

            // Reset form and hide modal
            serviceForm.reset();
            hideForm();
        });

        // Action buttons functionality
        document.querySelectorAll('.action-icon').forEach(button => {
            button.addEventListener('click', function () {
                const action = this.querySelector('i').className.includes('edit') ? 'Edit' : 'Delete';
                const serviceRow = this.closest('tr') || this.closest('.service-card');
                const serviceName = serviceRow.querySelector('.service-title').textContent;

                if (action === 'Edit') {
                    // Populate the form with existing data
                    document.getElementById('serviceName').value = serviceName;
                    serviceFormModal.classList.add('active');
                } else {
                    if (confirm(`Are you sure you want to delete "${serviceName}"?`)) {
                        serviceRow.remove();
                        // In a real app, you would also delete from the database
                    }
                }
            });
        });