// Resume Download Tracking
document.addEventListener('DOMContentLoaded', function() {
    // Get all resume download links
    const resumeLinks = document.querySelectorAll('a[download]');
    
    resumeLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Show download confirmation
            showDownloadMessage();
            
            // You can add analytics here
            console.log(`Resume downloaded: ${this.href}`);
            
            // Optional: Track with Google Analytics
            // gtag('event', 'resume_download', {
            //     'event_category': 'engagement',
            //     'event_label': 'Resume Download'
            // });
        });
    });
    
    // Show download success message
    function showDownloadMessage() {
        // Create or show message
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
        
        // Hide after 3 seconds
        setTimeout(() => {
            message.style.display = 'none';
        }, 3000);
    }
    
    // Update current date in footer
    const currentDate = new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    document.getElementById('current-date').textContent = currentDate;
});