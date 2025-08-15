
        // Project form functionality
        const projectFormModal = document.getElementById('projectFormModal');
        const addProjectBtn = document.getElementById('addProjectBtn');
        const closeForm = document.getElementById('closeForm');
        const cancelForm = document.getElementById('cancelForm');
        const projectForm = document.getElementById('projectForm');

        // Show form
        addProjectBtn.addEventListener('click', function() {
            projectFormModal.classList.add('active');
        });

        // Hide form
        function hideForm() {
            projectFormModal.classList.remove('active');
        }

        closeForm.addEventListener('click', hideForm);
        cancelForm.addEventListener('click', hideForm);

        // Submit form
        projectForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const projectName = document.getElementById('projectName').value;
            const projectCategory = document.getElementById('projectCategory').value;
            alert(`Project "${projectName}" added successfully!`);
            projectForm.reset();
            hideForm();
        });

        // Action buttons functionality
        document.querySelectorAll('.action-btn').forEach(button => {
            button.addEventListener('click', function() {
                const action = this.querySelector('i').className.includes('edit') ? 'Edit' : 'Delete';
                const projectRow = this.closest('tr') || this.closest('.project-card');
                const projectName = projectRow.querySelector('.project-title').textContent;

                if (action === 'Edit') {
                    document.getElementById('projectName').value = projectName;
                    projectFormModal.classList.add('active');
                } else {
                    if (confirm(`Are you sure you want to delete "${projectName}"?`)) {
                        projectRow.remove();
                    }
                }
            });
        });