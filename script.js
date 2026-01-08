document.addEventListener('DOMContentLoaded', function () {
    // Get all resume download links
    const resumeLinks = document.querySelectorAll('a[download]');
    let hideTimeout;

    resumeLinks.forEach(link => {
        link.addEventListener('click', function () {
            showDownloadMessage();

            console.log(`Resume downloaded: ${this.href}`);

            // Google Analytics event
            if (typeof gtag === 'function') {
                gtag('event', 'resume_download', {
                    event_category: 'engagement',
                    event_label: 'Resume PDF',
                    value: 1,
                    transport_type: 'beacon'
                });
            }
        });
    });

    // Show download success message
    function showDownloadMessage() {
        let message = document.querySelector('.download-success');

        if (!message) {
            message = document.createElement('div');
            message.className = 'download-success';
            message.innerHTML = `
                <i class="fas fa-check-circle"></i>
                <span>Resume download started!</span>
            `;
            document.body.appendChild(message);
        }

        message.style.display = 'flex';
        message.style.alignItems = 'center';
        message.style.gap = '10px';

        clearTimeout(hideTimeout);
        hideTimeout = setTimeout(() => {
            message.style.display = 'none';
        }, 3000);
    }

    // Update current date in footer
    const currentDate = new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    const dateElement = document.getElementById('current-date');
    if (dateElement) {
        dateElement.textContent = currentDate;
    }
});
