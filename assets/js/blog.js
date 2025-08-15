   // Blog form functionality
        const blogFormModal = document.getElementById('blogFormModal');
        const addBlogBtn = document.getElementById('addBlogBtn');
        const closeForm = document.getElementById('closeForm');
        const cancelForm = document.getElementById('cancelForm');
        const blogForm = document.getElementById('blogForm');

        // Show form
        addBlogBtn.addEventListener('click', function() {
            blogFormModal.classList.add('active');
        });

        // Hide form
        function hideForm() {
            blogFormModal.classList.remove('active');
        }

        closeForm.addEventListener('click', hideForm);
        cancelForm.addEventListener('click', hideForm);

        // Submit form
        blogForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const blogTitle = document.getElementById('blogTitle').value;
            const blogCategory = document.getElementById('blogCategory').value;
            alert(`Blog post "${blogTitle}" added successfully!`);
            blogForm.reset();
            hideForm();
        });

        // Action buttons functionality
        document.querySelectorAll('.action-btn').forEach(button => {
            button.addEventListener('click', function() {
                const action = this.querySelector('i').className.includes('edit') ? 'Edit' : 'Delete';
                const blogRow = this.closest('tr') || this.closest('.blog-card');
                const blogTitle = blogRow.querySelector('.blog-title').textContent;

                if (action === 'Edit') {
                    document.getElementById('blogTitle').value = blogTitle;
                    blogFormModal.classList.add('active');
                } else {
                    if (confirm(`Are you sure you want to delete "${blogTitle}"?`)) {
                        blogRow.remove();
                    }
                }
            });
        });