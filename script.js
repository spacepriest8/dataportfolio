document.addEventListener('DOMContentLoaded', function () {
  
    const resumeLinks = document.querySelectorAll('a[download]');
    let hideTimeout;

    resumeLinks.forEach(link => {
        link.addEventListener('click', function () {
            showDownloadMessage();

            console.log(`Resume downloaded: ${this.href}`);

    
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


document.addEventListener('DOMContentLoaded', function() {
  
    document.querySelectorAll('.project-links a').forEach(link => {
        link.addEventListener('click', function(e) {
            const projectName = this.closest('.project-card').querySelector('h3').textContent;
            gtag('event', 'project_click', {
                'project_name': projectName,
                'link_type': this.classList.contains('btn-primary') ? 'case_study' : 'github',
                'event_category': 'Project Engagement'
            });
        });
    });
    
    // Track time spent on project pages
    let timeSpent = 0;
    setInterval(() => {
        timeSpent += 5;
        if (timeSpent % 30 === 0) { 
            gtag('event', 'time_spent', {
                'page_title': document.title,
                'time_seconds': timeSpent,
                'event_category': 'Engagement'
            });
        }
    }, 5000);
});
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
