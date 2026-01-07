
const themeToggle = document.getElementById('themeToggle');
const body = document.body;
const icon = themeToggle.querySelector('i');

const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    body.classList.add('dark');
    icon.className = 'fas fa-sun';
}

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark');
    const isDark = body.classList.contains('dark');
    
    icon.className = isDark ? 'fas fa-sun' : 'fas fa-moon';
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
});


const downloadBtn = document.getElementById('downloadBtn');

downloadBtn.addEventListener('click', () => {
    const vcard = `BEGIN:VCARD
VERSION:3.0
FN:Ayush Dhanawade
TITLE:Full Stack Developer
TEL:+91 9322022740
EMAIL:717ayush@gmail.com
URL:https://ayshu717.github.io/p1-virtual-business-card/
NOTE:Passionate software engineer with expertise in web technologies
END:VCARD`;

    const blob = new Blob([vcard], { type: 'text/vcard' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Ayush_Dhanawade.vcf';
    link.click();
    window.URL.revokeObjectURL(url);
    
  
    const original = downloadBtn.innerHTML;
    downloadBtn.innerHTML = '<i class="fas fa-check"></i> Downloaded!';
    downloadBtn.style.background = '#10b981';
    setTimeout(() => {
        downloadBtn.innerHTML = original;
        downloadBtn.style.background = '';
    }, 2000);
});


const links = document.querySelectorAll('.contact-link');
links.forEach(link => {
    link.addEventListener('mouseenter', function() {
        this.style.transform = 'translateX(5px) scale(1.02)';
    });
    link.addEventListener('mouseleave', function() {
        this.style.transform = 'translateX(0) scale(1)';
    });

});
