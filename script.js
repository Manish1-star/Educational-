// Database of Courses (English Content with Real YouTube Videos)
const courses = [
    {
        id: 1,
        title: "Full Stack Web Development",
        instructor: "Traversy Media / FreeCodeCamp",
        price: "Free",
        category: "Technology",
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&auto=format&fit=crop&q=60",
        description: "Learn web development from scratch. From HTML, CSS to JavaScript and Backend technologies.",
        // Format: { title: "Topic Name", videoId: "YouTube_ID" }
        syllabus: [
            { title: "Chapter 1: HTML Crash Course for Beginners", videoId: "qz0aGYrrlhU" },
            { title: "Chapter 2: CSS Crash Course", videoId: "yfoY53QXEnI" },
            { title: "Chapter 3: JavaScript Programming - Full Course", videoId: "jS4aFq5-91M" },
            { title: "Chapter 4: Responsive Web Design", videoId: "srvsP47KsME" },
            { title: "Chapter 5: Backend & Database Intro", videoId: "7S_tz1z_5bA" },
            { title: "Final Project: Build a Personal Portfolio", videoId: "0YFrVkQbfXw" }
        ]
    },
    {
        id: 2,
        title: "Graphic Design Masterclass",
        instructor: "GFXMentor",
        price: "Free",
        category: "Design",
        image: "https://images.unsplash.com/photo-1626785774573-4b799314346d?w=600&auto=format&fit=crop&q=60",
        description: "Master Canva and Photoshop to create stunning logos, banners, and social media posts.",
        syllabus: [
            { title: "Chapter 1: Graphic Design Theory", videoId: "YqQx75OPRa0" },
            { title: "Chapter 2: Canva for Beginners", videoId: "un50Bs4BvZ8" },
            { title: "Chapter 3: Photoshop Tools Overview", videoId: "IyR_uYsRdPs" },
            { title: "Chapter 4: Logo Design Principles", videoId: "Mh7i_jQ5t9Q" },
            { title: "Chapter 5: Social Media Post Design", videoId: "SnOp3pM6S5I" },
            { title: "Final Project: Full Brand Identity Design", videoId: "J1jYlP6Yy1o" }
        ]
    },
    {
        id: 3,
        title: "Digital Marketing & SEO",
        instructor: "Neil Patel / HubSpot",
        price: "Free",
        category: "Marketing",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&auto=format&fit=crop&q=60",
        description: "Learn how to market products online using Social Media, SEO, and Content Strategy.",
        syllabus: [
            { title: "Chapter 1: Digital Marketing 101", videoId: "bixR-KIJKYM" },
            { title: "Chapter 2: Social Media Marketing Strategy", videoId: "H4pg0842eQA" },
            { title: "Chapter 3: SEO (Search Engine Optimization)", videoId: "DvwS7cV9GmQ" },
            { title: "Chapter 4: Content Writing Masterclass", videoId: "Hnd7R-gWJ8A" },
            { title: "Chapter 5: Google Ads & Analytics", videoId: "0lqG8t3z8-k" },
            { title: "Final Project: Creating a Marketing Plan", videoId: "nU-IIXWTWTs" }
        ]
    },
    {
        id: 4,
        title: "Video Editing (Premiere Pro/CapCut)",
        instructor: "Premiere Gal",
        price: "Free",
        category: "Multimedia",
        image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44c?w=600&auto=format&fit=crop&q=60",
        description: "Edit cinematic videos using mobile and PC software. Perfect for aspiring YouTubers.",
        syllabus: [
            { title: "Chapter 1: Basics of Video Editing", videoId: "wEqC_3d9csk" },
            { title: "Chapter 2: Cuts, Transitions & Effects", videoId: "O9q9f3s5_h8" },
            { title: "Chapter 3: Color Grading Basics", videoId: "L9f9gZ9g9g8" },
            { title: "Chapter 4: Audio Mixing & Sound Design", videoId: "p5t5t5t5t5" }, // Placeholder ID
            { title: "Chapter 5: Exporting High Quality Video", videoId: "Hh1t1t1t1t" }, // Placeholder ID
            { title: "Final Project: Edit a Travel Vlog", videoId: "Vlog123" } // Placeholder
        ]
    },
    {
        id: 5,
        title: "Python for AI & Beginners",
        instructor: "Programming with Mosh",
        price: "Free",
        category: "Technology",
        image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&auto=format&fit=crop&q=60",
        description: "Enter the world of Artificial Intelligence by learning Python programming from basics.",
        syllabus: [
            { title: "Chapter 1: Python Tutorial for Beginners", videoId: "_uQrJ0TkZlc" },
            { title: "Chapter 2: Variables & Data Types", videoId: "khMwjo_d8Yw" },
            { title: "Chapter 3: Loops & Functions", videoId: "rfscVS0vtbw" },
            { title: "Chapter 4: Object Oriented Programming (OOP)", videoId: "JeznW_7DlB0" },
            { title: "Chapter 5: Intro to AI & Machine Learning", videoId: "7eh4d6sabA0" },
            { title: "Final Project: Build a Simple AI Tool", videoId: "XIrOM9oP3pA" }
        ]
    }
];

// --- Main Logic ---

// 1. Load Courses on Homepage (index.html)
const courseContainer = document.getElementById("course-container");
if (courseContainer) {
    courseContainer.innerHTML = courses.map(course => `
        <div class="bg-white dark:bg-slate-800 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300 transform hover:-translate-y-1 border border-gray-100 dark:border-gray-700">
            <div class="relative">
                <img src="${course.image}" alt="${course.title}" class="w-full h-48 object-cover">
                <div class="absolute top-2 right-2 bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded-full shadow">
                    ${course.category}
                </div>
            </div>
            <div class="p-5">
                <h3 class="text-xl font-bold mt-1 mb-2 dark:text-white line-clamp-1">${course.title}</h3>
                <p class="text-sm text-gray-500 dark:text-gray-400 mb-4 line-clamp-2">${course.description}</p>
                
                <div class="flex items-center gap-2 mb-4 text-xs text-gray-500 dark:text-gray-400">
                    <i class="fas fa-user-circle text-blue-500"></i> ${course.instructor}
                </div>

                <div class="flex justify-between items-center border-t border-gray-100 dark:border-gray-700 pt-4">
                    <span class="text-green-500 font-bold text-lg">${course.price}</span>
                    <a href="course-details.html?id=${course.id}" class="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-5 py-2 rounded-lg text-sm font-medium transition shadow-md">
                        Start Learning
                    </a>
                </div>
            </div>
        </div>
    `).join('');
}

// 2. Load Course Details & Player (course-details.html)
const params = new URLSearchParams(window.location.search);
const courseId = params.get("id");

if (courseId) {
    const course = courses.find(c => c.id == courseId);
    
    if (course) {
        // Basic Info
        document.getElementById("c-title").innerText = course.title;
        document.getElementById("c-category").innerText = course.category;
        document.getElementById("c-instructor").innerText = course.instructor;
        
        // Load Syllabus (The Classroom Feature)
        const syllabusList = document.getElementById("c-syllabus");
        const videoPlayer = document.getElementById("video-player");
        const videoTitle = document.getElementById("video-title");

        // Set Default Video (Chapter 1)
        if(course.syllabus.length > 0) {
            updateVideo(course.syllabus[0].videoId, course.syllabus[0].title);
        }

        if(syllabusList && course.syllabus) {
            syllabusList.innerHTML = course.syllabus.map((topic, index) => `
                <li onclick="updateVideo('${topic.videoId}', '${topic.title}')" 
                    class="cursor-pointer group flex items-center gap-4 p-4 bg-white dark:bg-slate-800 rounded-xl hover:bg-blue-50 dark:hover:bg-slate-700 border border-gray-100 dark:border-slate-700 transition shadow-sm hover:shadow-md">
                    
                    <div class="w-10 h-10 rounded-full bg-blue-100 dark:bg-slate-600 flex items-center justify-center text-blue-600 dark:text-blue-300 font-bold group-hover:bg-blue-600 group-hover:text-white transition">
                        ${index + 1}
                    </div>
                    
                    <div class="flex-1">
                        <h4 class="font-bold text-gray-800 dark:text-gray-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition">
                            ${topic.title}
                        </h4>
                        <span class="text-xs text-gray-500 flex items-center gap-1 mt-1">
                            <i class="fas fa-play-circle"></i> Video Lecture
                        </span>
                    </div>

                    <i class="fas fa-chevron-right text-gray-300 group-hover:text-blue-500"></i>
                </li>
            `).join('');
        }
    }
}

// Function to Change Video
function updateVideo(videoId, title) {
    const player = document.getElementById("video-frame");
    const titleLabel = document.getElementById("video-title");
    
    if(player) {
        player.src = `https://www.youtube.com/embed/${videoId}?rel=0&autoplay=1`;
    }
    if(titleLabel) {
        titleLabel.innerText = "Now Playing: " + title;
    }
    
    // Scroll to player on mobile
    if(window.innerWidth < 768) {
        document.getElementById("video-container").scrollIntoView({behavior: "smooth"});
    }
}
