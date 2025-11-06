document.addEventListener('DOMContentLoaded', function () {
    // Initialize tooltips
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl)
    });

    // Close alerts after 5 seconds
    var alerts = document.querySelectorAll('.alert');
    alerts.forEach(function (alert) {
        setTimeout(function () {
            bootstrap.Alert.getInstance(alert).close();
        }, 5000);
    });

    // Handle form submissions with confirmation
    var deleteForms = document.querySelectorAll('form[data-confirm]');
    deleteForms.forEach(function (form) {
        form.addEventListener('submit', function (e) {
            var message = this.getAttribute('data-confirm');
            if (!confirm(message)) {
                e.preventDefault();
            }
        });
    });

    // Inventory status highlighting
    var statusCells = document.querySelectorAll('td .badge');
    statusCells.forEach(function (cell) {
        if (cell.textContent.includes('Out of Stock')) {
            cell.classList.add('bg-danger');
        } else if (cell.textContent.includes('Low Stock')) {
            cell.classList.add('bg-warning', 'text-dark');
        } else {
            cell.classList.add('bg-success');
        }
    });
});