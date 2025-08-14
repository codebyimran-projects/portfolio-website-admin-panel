
        // Admin form functionality
        const adminFormModal = document.getElementById('adminFormModal');
        const addAdminBtn = document.getElementById('addAdminBtn');
        const closeForm = document.getElementById('closeForm');
        const cancelForm = document.getElementById('cancelForm');
        const adminForm = document.getElementById('adminForm');

        // Show form
        addAdminBtn.addEventListener('click', function () {
            adminFormModal.classList.add('active');
        });

        // Hide form
        function hideForm() {
            adminFormModal.classList.remove('active');
        }

        closeForm.addEventListener('click', hideForm);
        cancelForm.addEventListener('click', hideForm);

        // Submit form
        adminForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const adminName = document.getElementById('adminName').value;
            const adminEmail = document.getElementById('adminEmail').value;
            const adminRole = document.getElementById('adminRole').value;
            const adminStatus = document.getElementById('adminStatus').value;

            alert(`Admin "${adminName}" added successfully!`);

            // Add new admin to table
            const tbody = document.querySelector('.admins-table tbody');
            const newRow = document.createElement('tr');
            newRow.innerHTML = `
                <td>
                    <div class="admin-icon">
                        <i class="fas fa-user-shield"></i>
                    </div>
                </td>
                <td>
                    <div class="admin-name">${adminName}</div>
                    <div class="admin-email">${adminEmail}</div>
                </td>
                <td>${adminRole.replace('_', ' ').split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}</td>
                <td>
                    <span class="status-indicator status-${adminStatus}">${adminStatus.charAt(0).toUpperCase() + adminStatus.slice(1)}</span>
                </td>
                <td>
                    <div class="action-set">
                        <button class="action-icon" title="Edit">
                            <i class="fas fa-edit"></i>
                        </button>
                        <button class="action-icon delete" title="Delete">
                            <i class="fas fa-trash"></i>
                        </button>
                    </div>
                </td>
            `;
            tbody.appendChild(newRow);

            // Add new admin to card layout
            const cardContainer = document.querySelector('.admins-table-card');
            const newCard = document.createElement('div');
            newCard.className = 'admin-card';
            newCard.innerHTML = `
                <div class="admin-card-header">
                    <div class="admin-icon">
                        <i class="fas fa-user-shield"></i>
                    </div>
                    <div class="admin-name">${adminName}</div>
                </div>
                <div class="admin-card-content">
                    <div><strong>Email:</strong> ${adminEmail}</div>
                    <div><strong>Role:</strong> ${adminRole.replace('_', ' ').split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}</div>
                    <div><strong>Status:</strong> <span class="status-indicator status-${adminStatus}">${adminStatus.charAt(0).toUpperCase() + adminStatus.slice(1)}</span></div>
                </div>
                <div class="action-set">
                    <button class="action-icon" title="Edit">
                        <i class="fas fa-edit"></i>
                    </button>
                    <button class="action-icon delete" title="Delete">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            `;
            cardContainer.appendChild(newCard);

            // Reset form and hide modal
            adminForm.reset();
            hideForm();

            // Add event listeners to new action buttons
            newRow.querySelectorAll('.action-icon').forEach(button => {
                button.addEventListener('click', handleAction);
            });
            newCard.querySelectorAll('.action-icon').forEach(button => {
                button.addEventListener('click', handleAction);
            });
        });

        // Action buttons functionality
        function handleAction() {
            const action = this.querySelector('i').className.includes('edit') ? 'Edit' : 'Delete';
            const adminRow = this.closest('tr') || this.closest('.admin-card');
            const adminName = adminRow.querySelector('.admin-name').textContent;

            if (action === 'Edit') {
                document.getElementById('adminName').value = adminName;
                document.getElementById('adminEmail').value = adminRow.querySelector('.admin-email').textContent;
                document.getElementById('adminRole').value = adminRow.querySelector('.admin-card-content div:nth-child(2)')?.textContent?.replace('Role: ', '').toLowerCase().replace(' ', '_') || adminRow.cells[2].textContent.toLowerCase().replace(' ', '_');
                document.getElementById('adminStatus').value = adminRow.querySelector('.status-indicator').textContent.toLowerCase();
                document.getElementById('adminPassword').value = '';
                adminFormModal.classList.add('active');
            } else {
                if (confirm(`Are you sure you want to delete "${adminName}"?`)) {
                    adminRow.remove();
                    // In a real app, you would also delete from the database
                }
            }
        }

        document.querySelectorAll('.action-icon').forEach(button => {
            button.addEventListener('click', handleAction);
        });