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
            title: "Ponniyin Selvan Part-1 | Full Jukebox | English Translation",
            journey: "I translated the full jukebox of Ponniyin Selvan: Part 1 Tamil songs, carefully assigning one meticulously chosen image and providing English subtitles to ensure the essence of the lyrics is preserved.",
            description: "From the majestic Ponni Nadhi to the intense Devaralan Aattam, each song is a window into the grandeur of the Chola dynasty. The film’s music, composed by A.R. Rahman, is not just a soundtrack—it’s a narrative woven in melody, bringing the characters and their journeys to life.I took great care in editing and presenting this video, ensuring that the visuals and translations complement each other seamlessly. This project is more than just a translation—it’s my way of celebrating Tamil heritage, cinematic brilliance, and musical storytelling."
        },
        {
            id: "zzr1LndF4bs", // Second video
            title: "Veera Raja Veera | Ponniyin Selvan Part-2 | Video Song with English Translation",
            journey: "I spent over six hours compiling clips from both sequels to create a seamless visual flow that enhances the storytelling. Every subtitle segment was meticulously timed to match the film’s grandeur and the song’s emotional depth. Beyond just translation, this project is a tribute to the artistry, history, and cinematic brilliance of Ponniyin Selvan.",
            description: "This video is a passion project that took me over six hours to bring together, carefully compiling clips from both sequels of Ponniyin Selvan to create a visually rich tribute. Every scene was selected with intent, ensuring it complements the grandeur of Veera Raja Veera and enhances the storytelling. Beyond just translation, I meticulously segmented and synchronized the subtitles, making sure every word aligns with the emotion and rhythm of the song."
        },
        {
            id: "bI_uqp-98qU", // Third video  
            title: "Anbe Anbe | Jeans | Video Song with English Translation",
            journey: "This was one of my most challenging videos to create, as I wanted to include a missed clip in the remastered video.",
            description: "This video presents the song Anbe Anbe from the Tamil movie Jeans, enhanced with lossless audio for superior sound quality and better video resolution for a visually refined experience. I meticulously translated the lyrics into English, ensuring that the essence and emotion of the song are preserved for a wider audience. This project is a tribute to the beauty of Tamil music and storytelling, delivering a seamless blend of audio, visuals, and translation."
        },
        {
            id: "u7qwgUKICEk", // Fourth video
            title: "Aga Naga | Ponniyin Selvan Part-2 | English Translation",
            journey: "This video presents Aga Naga from Ponniyin Selvan Part-2, enhanced with static images taken from official lyric video carefully selected to complement the song’s essence. I applied fade-in and fade-out transitions to align with the lyrics, creating a seamless visual flow. The English translation ensures that the beauty and meaning of the lyrics reach a wider audience, preserving the depth of PS2's musical storytelling.",
            description: "With Aga Naga from Ponniyin Selvan: II, I wanted to create a visually immersive experience that complements the song’s essence. Using static images, I carefully selected visuals that resonate with the mood and emotion of the lyrics. The fade-in and fade-out transitions help maintain a smooth flow, aligning each moment with the song’s rhythm. Additionally, I provided a seamless English translation, ensuring that the beauty of the lyrics is accessible to a wider audience while preserving their depth and meaning."
        },
        {
            id: "XP-SWOokLzg", // Fifth video
            title: "Arabic Kuthu | Beast | English Translation",
            journey: "Translating Arabic Kuthu was a fast-paced challenge, and within ten days of its lyric video release, I became the first to deliver an unofficial English translation. Determined to capture every detail, I went beyond just the direct lyrics—I decoded even the gibberish sections, thinking from the lyricist’s perspective to maintain the song’s energy.",
            description: "This video presents my second version of the unofficial English translation of Arabic Kuthu, first delivered just ten days after its official lyric video release. I worked meticulously to refine my initial translation, ensuring every lyric, including gibberish sections, stayed true to the lyricist’s creative intent. My approach was more than just direct translation—it aimed to capture the rhythm and energy of the song. Having my work recognized on a website made this project a rewarding milestone in my dedication to precise and immersive musical translations."
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
    ],

    deployments: [
        {
            title: "Portfolio",
            image: "https://socialify.git.ci/ananth-techie/portfolio/image?language=1&owner=1&name=1&stargazers=1&theme=Light",
            description:
                "Welcome to my personal portfolio repository! This site serves as a dynamic showcase of my projects, skills, and journey as an aspiring full-stack developer. Here, you'll find a curated collection of my work, including web applications, technical certifications, and creative endeavors. This portfolio is built with modern web technologies, focusing on a clean, responsive design to provide an optimal viewing experience across all devices.",
            githubRepoName: "portfolio",
        },
{
            title: "C Programming Series Quiz, Feedback, & Leaderboard Application",
            image: "https://socialify.git.ci/ananth-techie/mindmash/image?language=1&owner=1&name=1&stargazers=1&theme=Light",
            description:
                "This repository showcases a C Programming Series web app I built as Secretary for The Coders Club, MCE. It features dynamic content, an interactive quiz, feedback form, and leaderboard, all integrated with Google Sheets. Created via VibeCoding using Microsoft Copilot and Google Gemini.",
            githubRepoName: "c-programming-series",
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

function populateBadges() {
    if (!badgesScrollContainer) return;

    badgesScrollContainer.innerHTML = '';

    portfolioData.badges.forEach((badge) => {
        const badgeElement = document.createElement("div");
        badgeElement.className =
            "flex-none w-40 p-4 bg-white rounded-xl shadow-md flex flex-col items-center text-center hover:scale-105 transition-transform duration-300";

        // Corrected innerHTML assignment
        badgeElement.innerHTML = `
            <a href="${badge.credlyUrl || '#'}" target="_blank" rel="noopener noreferrer" class="flex flex-col items-center">
                <img src="${badge.imageUrl}" alt="${badge.altText}" class="w-24 h-24 object-contain mb-2">
                <p class="text-sm font-medium text-gray-800">${badge.name}</p>
            </a>
        `;
        // Added a fallback for badge.credlyUrl in case it's missing,
        // making the link '#' if no URL is provided.

        badgesScrollContainer.appendChild(badgeElement);
    });

    // Duplicate badges for infinite scroll effect
    if (portfolioData.badges.length > 3) {
        portfolioData.badges.forEach(badge => {
            const badgeElement = document.createElement("div");
            badgeElement.className =
                "flex-none w-40 p-4 bg-white rounded-xl shadow-md flex flex-col items-center text-center hover:scale-105 transition-transform duration-300";
            badgeElement.innerHTML = `
                <a href="${badge.credlyUrl || '#'}" target="_blank" rel="noopener noreferrer" class="flex flex-col items-center">
                    <img src="${badge.imageUrl}" alt="${badge.altText}" class="w-24 h-24 object-contain mb-3">
                    <p class="text-sm font-medium text-gray-800">${badge.name}</p>
                </a>
            `;
            badgesScrollContainer.appendChild(badgeElement);
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
