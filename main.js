// --- Data for your Portfolio Sections ---

const portfolioData = {
    yourName: "Ananth S", // Replace with your actual name
    githubUsername: "ananth-techie", // Replace with your GitHub username
    linkedinProfile: "ananth-techie", // Replace with your LinkedIn profile ID
    emailAddress: "ananth.fullstack@gmail.com", // Replace with your email

    // --- YOUTUBE VIDEO CONFIGURATION FOR @sadeciphers ---
    // NOTE: These are actual video IDs from the @sadeciphers channel
    youtubeVideos: [
        {
            id: "GZYZxirelwY", // Big Buck Bunny test video
            title: "PS 1 FULL JUKEBOX TRANSLATION",
            journey: "video showcases the epic journey of Ponniyin Selvan: I, bringing the grandeur of the Chola dynasty to life through stunning visuals and mesmerizing music.",
            description: "From the majestic Ponni Nadhi to the intense Devaralan Aattam, each song is a window into the grandeur of the Chola dynasty. The film’s music, composed by A.R. Rahman, is not just a soundtrack—it’s a narrative woven in melody, bringing the characters and their journeys to life.I took great care in editing and presenting this video, ensuring that the visuals and translations complement each other seamlessly. This project is more than just a translation—it’s my way of celebrating Tamil heritage, cinematic brilliance, and musical storytelling."
        },
        {
            id: "zzr1LndF4bs", // Second video
            title: "Classical Ciphers: Caesar to Vigenère",
            journey: "Here I take you through the historical journey of classical ciphers, showing how each one built upon the previous to create more secure methods of communication. The evolution is truly fascinating!",
            description: "Explore the evolution of classical encryption techniques, from the simple Caesar cipher to the more sophisticated Vigenère cipher, with practical examples and breaking techniques."
        },
        {
            id: "bI_uqp-98qU", // Third video  
            title: "Modern Encryption: AES and RSA Explained",
            journey: "This was one of my most challenging videos to create, as I wanted to explain complex mathematical concepts in an accessible way. The goal was to demystify how modern encryption actually works under the hood.",
            description: "Deep dive into Advanced Encryption Standard (AES) and RSA encryption, explaining the mathematical principles and implementation details that secure most of our digital communications today."
        },
        {
            id: "u7qwgUKICEk", // Fourth video
            title: "Blockchain Cryptography and Digital Signatures",
            journey: "With the rise of cryptocurrencies, I felt it was important to explain how cryptography enables blockchain technology. This video connects traditional cryptographic concepts to modern applications.",
            description: "Understanding how cryptographic hash functions, digital signatures, and merkle trees work together to create the security backbone of blockchain technologies and cryptocurrencies."
        },
        {
            id: "XP-SWOokLzg", // Fifth video
            title: "Password Security and Hashing Algorithms",
            journey: "After seeing so many data breaches in the news, I wanted to create content that helps people understand why password security matters and how proper hashing can protect user data.",
            description: "Learn about password hashing, salting, and key derivation functions. Understand why plain text passwords are dangerous and how proper security practices protect user credentials."
        }
    ],

    // Replace with actual @sadeciphers channel playlist ID if available
    youtubePlaylistId: "PLWg6vOdoKgiINExBcL96H40WmG6PF-tSa",

    badges: [
        {
            name: "Google Cloud Cybersecurity Certificate",
            imageUrl: "https://images.credly.com/size/220x220/images/505080ad-3731-4b1d-98df-347655a45750/image.png",
            altText: "Google Cloud Cybersecurity Certificate",
            credlyUrl: "https://www.credly.com/badges/5c9b2c99-3194-4e34-98a0-8c0f8774f333/public_url",
        },
        {
            name: "Responsive Web Design",
            imageUrl: "https://via.placeholder.com/150/8A2BE2/FFFFFF?text=RWD",
            altText: "FreeCodeCamp Responsive Web Design Badge",
        },
        {
            name: "Front End Development Libraries",
            imageUrl: "https://via.placeholder.com/150/00CED1/FFFFFF?text=FE+Libs",
            altText: "FreeCodeCamp Front End Development Libraries Badge",
        },
        {
            name: "Full Stack Web Development",
            imageUrl: "https://via.placeholder.com/150/FF4500/FFFFFF?text=Full+Stack",
            altText: "Full Stack Web Development Badge",
        },
        {
            name: "AWS Certified Cloud Practitioner",
            imageUrl: "https://via.placeholder.com/150/FF9900/FFFFFF?text=AWS+CCP",
            altText: "AWS Certified Cloud Practitioner Badge",
        },
        {
            name: "Google Cloud Digital Leader",
            imageUrl: "https://via.placeholder.co/150/4285F4/FFFFFF?text=GCDL",
            altText: "Google Cloud Digital Leader Badge",
        },
        {
            name: "Machine Learning Fundamentals",
            imageUrl: "https://via.placeholder.co/150/32CD32/FFFFFF?text=ML+Fund",
            altText: "Coursera ML Specialization",
        },
        {
            name: "Python for Data Science",
            imageUrl: "https://via.placeholder.co/150/1E90FF/FFFFFF?text=Python+DS",
            altText: "IBM Data Science Professional Certificate",
        },
    ],

    deployments: [
        {
            title: "Interactive Quiz App",
            image: "https://placehold.co/400x200/F0F4C3/4A5568?text=Interactive+Quiz+App",
            description:
                "A dynamic quiz application built with React, featuring multiple question types and real-time feedback. It demonstrates client-side routing and state management.",
            githubRepoName: "interactive-quiz-app",
        },
        {
            title: "Task Management Dashboard",
            image: "https://placehold.co/400x200/E3F2FD/4A5568?text=Task+Manager",
            description:
                "A simple, responsive dashboard for managing daily tasks and projects, demonstrating efficient state management with Redux (or React Context).",
            githubRepoName: "task-management-dashboard",
        },
        {
            title: "Simple E-commerce Product Page",
            image: "https://placehold.co/400x200/FCE4EC/4A5568?text=E-commerce+Page",
            description:
                "A responsive product display page simulating an e-commerce experience, focusing on clean UI, user interaction, and basic cart functionality.",
            githubRepoName: "ecommerce-product-page",
        },
        {
            title: "Weather Forecast App",
            image: "https://placehold.co/400x200/D1C4E9/4A5568?text=Weather+App",
            description:
                "A sleek weather application fetching real-time data from an external API, displaying current conditions and a multi-day forecast with intuitive icons.",
            githubRepoName: "weather-forecast-app",
        },
    ],
};

// --- DOM Element References ---
const header = document.getElementById("header");
const navLinks = document.querySelectorAll(".nav-link");
const videosContainer = document.getElementById("videos-container");
const badgesScrollContainer = document.getElementById("badges-scroll");
const deploymentsContainer = document.querySelector("#deployments .grid");

// Video Modal Elements
const videoModal = document.getElementById("video-modal");
const modalVideoFrame = document.getElementById("modal-video-frame");
const modalVideoTitle = document.getElementById("modal-video-title");
const modalVideoJourney = document.getElementById("modal-video-journey");
const modalVideoDescription = document.getElementById("modal-video-description");

// --- Utility Functions ---

function updateTextContent(selector, text) {
    const element = document.querySelector(selector);
    if (element) {
        element.textContent = text;
    }
}

function updateHref(selector, href) {
    const element = document.querySelector(selector);
    if (element) {
        element.href = href;
    }
}

// --- Header and Navigation Logic ---

function setActiveNavLink() {
    const currentSection = [...document.querySelectorAll("section")]
        .filter((section) => {
            const rect = section.getBoundingClientRect();
            return rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2;
        })
        .map((section) => section.id);

    navLinks.forEach((link) => {
        link.classList.remove("active", "text-gray-900");
        link.classList.add("text-gray-600");
        if (currentSection.includes(link.dataset.section)) {
            link.classList.add("active", "text-gray-900");
            link.classList.remove("text-gray-600");
        }
    });
}

function handleScroll() {
    if (window.scrollY > 50) {
        header.classList.add("bg-white", "shadow-md");
    } else {
        header.classList.remove("bg-white", "shadow-md");
    }
    setActiveNavLink();
}

function scrollToSection(id) {
    const section = document.getElementById(id);
    if (section) {
        section.scrollIntoView({ behavior: "smooth" });
    }
}

// --- Video Modal Functions ---

function openVideoModal(video) {
    if (!videoModal || !modalVideoFrame) return;
    
    // Set up the video embed URL with autoplay
    const embedUrl = `https://www.youtube.com/embed/${video.id}?autoplay=1&rel=0&modestbranding=1`;
    
    modalVideoFrame.src = embedUrl;
    modalVideoTitle.textContent = video.title;
    modalVideoJourney.textContent = video.journey;
    modalVideoDescription.textContent = video.description;
    
    // Show modal with animation
    videoModal.classList.remove("hidden");
    videoModal.classList.add("show");
    document.body.classList.add("overflow-hidden");
    
    // Trigger animation after a brief delay
    setTimeout(() => {
        const modalContent = videoModal.querySelector(".bg-white");
        if (modalContent) {
            modalContent.style.transform = "scale(1)";
            modalContent.style.opacity = "1";
        }
    }, 50);
}

function closeVideoModal() {
    if (!videoModal || !modalVideoFrame) return;
    
    const modalContent = videoModal.querySelector(".bg-white");
    if (modalContent) {
        modalContent.style.transform = "scale(0.95)";
        modalContent.style.opacity = "0";
    }
    
    setTimeout(() => {
        videoModal.classList.add("hidden");
        videoModal.classList.remove("show");
        modalVideoFrame.src = "";
        document.body.classList.remove("overflow-hidden");
    }, 300);
}

// --- Video Section Logic ---

function populateVideos() {
    if (!videosContainer) return;

    videosContainer.innerHTML = '';

    portfolioData.youtubeVideos.forEach((video) => {
        const videoCard = document.createElement("div");
        videoCard.className = "bg-white rounded-xl shadow-lg overflow-hidden transition-transform transform hover:scale-[1.02] duration-300";

        // Create thumbnail URL - using multiple fallback options
        const thumbnailUrl = `https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`;
        const fallbackThumbnailUrl = `https://img.youtube.com/vi/${video.id}/hqdefault.jpg`;

        videoCard.innerHTML = `
            <div class="video-thumbnail cursor-pointer" onclick="openVideoModal(${JSON.stringify(video).replace(/"/g, '&quot;')})">
                <img
                    src="${thumbnailUrl}"
                    alt="${video.title} Thumbnail"
                    onerror="this.onerror=null;this.src='${fallbackThumbnailUrl}'; if (this.src === '${fallbackThumbnailUrl}') this.src='https://placehold.co/400x225/1f2937/ffffff?text=Video+Thumbnail';"
                    loading="lazy"
                />
                <div class="play-overlay">
                    <div class="play-button">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                            <polygon points="5,3 19,12 5,21"/>
                        </svg>
                    </div>
                </div>
            </div>
            <div class="p-6">
                <h3 class="text-xl font-semibold text-gray-900 mb-2">${video.title}</h3>
                <p class="text-gray-600 text-sm line-clamp-3">${video.description}</p>
            </div>
        `;
        
        videosContainer.appendChild(videoCard);
    });

    // Add "View Channel" button
    const viewChannelDiv = document.createElement("div");
    viewChannelDiv.className = "col-span-full text-center mt-8";
    viewChannelDiv.innerHTML = `
        <a href="https://www.youtube.com/@sadeciphers" target="_blank" rel="noopener noreferrer"
           class="inline-block px-8 py-3 bg-red-600 text-white text-lg font-semibold rounded-full hover:bg-red-700 transition-transform transform hover:scale-105 shadow-lg">
            Visit @sadeciphers Channel
        </a>
    `;
    videosContainer.appendChild(viewChannelDiv);
}

// --- Badges Section Logic ---

function populateBadges() {
    if (!badgesScrollContainer) return;

    badgesScrollContainer.innerHTML = '';

    portfolioData.badges.forEach((badge) => {
        const badgeElement = document.createElement("div");
        badgeElement.className =
            "flex-none w-40 p-4 bg-white rounded-xl shadow-md flex flex-col items-center text-center hover:scale-105 transition-transform duration-300";
        badgeElement.innerHTML = `
            innerHtmlContent = `
    <a href="${badge.credlyUrl}" target="_blank" rel="noopener noreferrer" class="flex flex-col items-center">
        <img src="${badge.imageUrl}" alt="${badge.altText}" class="w-24 h-24 object-contain mb-2">
        <p class="text-sm font-medium text-gray-800">${badge.name}</p>
    </a>
`;
        `;
        badgesScrollContainer.appendChild(badgeElement);
    });

    // Duplicate badges for infinite scroll effect
    if (portfolioData.badges.length > 3) {
        portfolioData.badges.forEach(badge => {
            const badgeElement = document.createElement("div");
            badgeElement.className =
                "flex-none w-40 p-4 bg-white rounded-xl shadow-md flex flex-col items-center text-center hover:scale-105 transition-transform duration-300";
            badgeElement.innerHTML = `
                <img
                    src="${badge.imageUrl}"
                    alt="${badge.altText}"
                    class="w-24 h-24 object-contain mb-3"
                />
                <p class="text-sm font-medium text-gray-800">${badge.name}</p>
            `;
            badgesScrollContainer.appendChild(badgeElement);
        });
    }
}

function scrollBadges(direction) {
    if (!badgesScrollContainer) return;
    const scrollAmount = 200;

    if (direction === "left") {
        badgesScrollContainer.scrollBy({
            left: -scrollAmount,
            behavior: "smooth"
        });
    } else {
        badgesScrollContainer.scrollBy({
            left: scrollAmount,
            behavior: "smooth"
        });
    }
}

// --- Deployments Section Logic ---

function populateDeployments() {
    if (!deploymentsContainer) return;

    deploymentsContainer.innerHTML = '';

    portfolioData.deployments.forEach((project, index) => {
        const deploymentCard = document.createElement("div");
        deploymentCard.className = "bg-gray-50 rounded-xl shadow-md p-6 flex flex-col transition-transform transform hover:scale-[1.02] duration-300";
        deploymentCard.style.animationDelay = `${index * 0.1}s`;
        deploymentCard.innerHTML = `
            <img
                src="${project.image}"
                alt="${project.title} Thumbnail"
                class="w-full h-auto rounded-lg mb-4 object-cover"
            />
            <h3 class="text-2xl font-semibold text-gray-900 mb-2">${project.title}</h3>
            <p class="text-gray-700 text-base mb-4 flex-grow">
                ${project.description}
            </p>
            <div class="flex justify-between items-center mt-auto">
                <a href="https://github.com/${portfolioData.githubUsername}/${project.githubRepoName}" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline text-sm font-medium">
                    View GitHub
                </a>
                <a href="https://${portfolioData.githubUsername}.github.io/${project.githubRepoName}/" target="_blank" rel="noopener noreferrer" class="px-4 py-2 bg-blue-500 text-white rounded-full text-sm font-medium hover:bg-blue-600 transition-colors duration-200">
                    Live Demo
                </a>
            </div>
        `;
        deploymentsContainer.appendChild(deploymentCard);
    });
}

// --- Event Listeners ---

document.addEventListener("DOMContentLoaded", () => {
    // Update dynamic content
    updateTextContent("div.text-xl.font-bold", portfolioData.yourName);
    const homeNameSpan = document.querySelector("#home h1 span");
    if (homeNameSpan) {
        homeNameSpan.textContent = portfolioData.yourName;
    }
    updateTextContent("#current-year", new Date().getFullYear());
    
    // Update social links
    const githubLink = document.querySelector('footer a[href*="github.com"]');
    const linkedinLink = document.querySelector('footer a[href*="linkedin.com"]');
    const emailLink = document.querySelector('footer a[href*="mailto:"]');
    
    if (githubLink) githubLink.href = `https://github.com/${portfolioData.githubUsername}`;
    if (linkedinLink) linkedinLink.href = `https://linkedin.com/in/${portfolioData.linkedinProfile}`;
    if (emailLink) emailLink.href = `mailto:${portfolioData.emailAddress}`;

    // Populate sections
    populateVideos();
    populateBadges();
    populateDeployments();

    // Set initial active nav link
    setActiveNavLink();
});

// Event listeners
window.addEventListener("scroll", handleScroll);

// Modal event listeners
document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && videoModal && !videoModal.classList.contains("hidden")) {
        closeVideoModal();
    }
});

if (videoModal) {
    videoModal.addEventListener("click", (event) => {
        if (event.target === videoModal) {
            closeVideoModal();
        }
    });
}

// Global functions for HTML onclick handlers
window.scrollToSection = scrollToSection;
window.scrollBadges = scrollBadges;
window.openVideoModal = openVideoModal;
window.closeVideoModal = closeVideoModal;
