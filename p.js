const portfolioData = {
    skills: [
        {
            id: 1,
            category: "Langages de Programmation",
            items: [
                { name: "Python", level: 25 },
                { name: "JavaScript", level: 45 },
                { name: "Java", level: 30 },
                { name: "HTML/CSS", level: 70 }
            ]
        },
        {
            id: 2,
            category: "Outils & Technologies",
            items: [
                { name: "Git/GitHub", level: 30 },
                { name: "React", level: 15 },
                { name: "Excel", level: 90 },
                { name: "Word", level: 85 }
            ]
        },
        {
            id: 3,
            category: "Création de Contenu",
            items: [
                { name: "Montage Vidéo", level: 45 },
                { name: "capcut", level: 35 },
                { name: "After Effects", level: 50 },
                { name: "TikTok Content", level: 40 }
            ]
        }
    ],
    projects: [
        {
            id: 1,
            title: "Montage vidéo",
            description: "faire de belles vidéos avec des effets spéciaux qui les rendent encore plus beaux",
            technologies: ["capcut", "Appareil photo"],
            image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=600&h=400&fit=crop",
            
        },
        {
            id: 2,
            title: "Convertisseur de devices",
            description: "Un convertisseur de devices moderne  de métre en kilométre de gramme en kilogramme vis versa",
            technologies: ["Html", "Css", "Javascipt"],
            image: "C.jpg",
     githubUrl: "#",
            demoUrl: "conv.html"
        },
        {
            id: 3,
            title: "Agence de voyages",
            description: "Je monte une agence qui permet aux gens de découvrir certaines villes et une estimatio des prix des appartements",
            technologies: ["Appareil photo", "Capcut"],
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
            githubUrl: "#",
            demoUrl: "voy.html",
            featured: false
        },
        {
            id: 4,
            title: "Style mode ",
            description: "j'ai créé une plate-forme qui permet à chacun de mieux s'habiller",
            technologies: ["JavaScript", "capcut", "Canvas API,Pinterest"],
            image: "b.jpg",
            githubUrl: "#",
            demoUrl: "drip.html",
            featured: true
        }
    ],
    socialLinks: [
        { id: 1, platform: "TikTok", url: "https://tiktok.com/@username" },
        { id: 4, platform: "Email", url: "chrisvianney09@gmail.com" },
        { id: 5, platform: "Twitter/X", url: "https://twitter.com/username" }
    ]
};

function scrollToSection(sectionId) {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
}

function downloadCV() {
    alert('Téléchargement du CV en cours...\n\n');
   ;
}

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            
            if (entry.target.classList.contains('skill-card')) {
                const progressBars = entry.target.querySelectorAll('.skill-progress');
                progressBars.forEach((bar, index) => {
                    setTimeout(() => {
                        const level = bar.dataset.level;
                        bar.style.width = level + '%';
                    }, index * 100);
                });
            }
        }
    });
}, observerOptions);


function renderSkills() {
    const skillsGrid = document.getElementById('skillsGrid');
    
    portfolioData.skills.forEach((skillCategory, categoryIndex) => {
        const card = document.createElement('div');
        card.className = 'skill-card';
        card.style.transitionDelay = `${categoryIndex * 100}ms`;
        
        let itemsHtml = '';
        skillCategory.items.forEach((skill, skillIndex) => {
            itemsHtml += `
                <div class="skill-item">
                    <div class="skill-header">
                        <div class="skill-name">
                            <svg class="skill-icon" viewBox="0 0 24 24">
                                <polyline points="16 18 22 12 16 6"></polyline>
                                <polyline points="8 6 2 12 8 18"></polyline>
                            </svg>
                            <span>${skill.name}</span>
                        </div>
                        <span class="skill-level">${skill.level}%</span>
                    </div>
                    <div class="skill-bar">
                        <div class="skill-progress" data-level="${skill.level}"></div>
                    </div>
                </div>
            `;
        });
        
        card.innerHTML = `
            <h3>${skillCategory.category}</h3>
            ${itemsHtml}
        `;
        
        skillsGrid.appendChild(card);
        observer.observe(card);
    });
}
function renderProjects() {
    const projectsGrid = document.getElementById('projectsGrid');
    
    portfolioData.projects.forEach((project, index) => {
        const card = document.createElement('div');
        card.className = 'project-card';
        card.style.transitionDelay = `${index * 100}ms`;
        
        const tagsHtml = project.technologies.map(tech => 
            `<span class="tag">${tech}</span>`
        ).join('');
        
        card.innerHTML = `
            <div class="project-image-container">
                ${project.featured ? `
                    <div class="project-badge">
                        <svg class="icon" style="width: 0.75rem; height: 0.75rem; fill: currentColor;" viewBox="0 0 24 24">
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                        </svg>
                        Featured
                    </div>
                ` : ''}
                <img src="${project.image}" alt="${project.title}" class="project-image">
                <div class="project-overlay"></div>
            </div>
            <div class="project-content">
                <h3 class="project-title">${project.title}</h3>
                <p class="project-description">${project.description}</p>
                <div class="project-tags">${tagsHtml}</div>
                <div class="project-buttons">
                   
                    </a>
                    <a href="${project.demoUrl}" class="btn-small" target="_blank">
                        <svg class="icon" viewBox="0 0 24 24">
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                            <polyline points="15 3 21 3 21 9"></polyline>
                            <line x1="10" y1="14" x2="21" y2="3"></line>
                        </svg>
                        Demo
                    </a>
                </div>
            </div>
        `;
        
        projectsGrid.appendChild(card);
        observer.observe(card);
    });
}

function renderSocialLinks() {
    const socialLinksContainer = document.getElementById('socialLinks');
    
    const iconMap = {
        'TikTok': '<path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path>',
        'GitHub': '<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>',
        'LinkedIn': '<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle>',
        'Email': '<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline>',
        'Twitter/X': '<path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>'
    };
    
    portfolioData.socialLinks.forEach((social, index) => {
        const link = document.createElement('a');
        link.href = social.url;
        link.target = '_blank';
        link.className = 'social-link';
        link.style.transitionDelay = `${200 + (index * 50)}ms`;
        
        link.innerHTML = `
            <svg class="social-icon" viewBox="0 0 24 24">
                ${iconMap[social.platform] || iconMap['Email']}
            </svg>
            <span class="social-name">${social.platform}</span>
        `;
        
        socialLinksContainer.appendChild(link);
        observer.observe(link);
    });
}
function observeElements() {
    document.querySelectorAll('.section-title').forEach(el => observer.observe(el));
    document.querySelectorAll('.contact-info-card').forEach(el => observer.observe(el));
    document.querySelectorAll('.contact-footer-text').forEach(el => observer.observe(el));
}
document.addEventListener('DOMContentLoaded', () => {
    renderSkills();
    renderProjects();
    renderSocialLinks();
    observeElements();
});