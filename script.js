// =========================================
// 1. DATABASE (Video + Book Content)
// =========================================
const courses = [
    {
        id: 1,
        title: "Full Stack Web Development",
        instructor: "Traversy Media",
        price: "Free",
        category: "Technology",
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&auto=format&fit=crop&q=60",
        description: "Learn web development from scratch. HTML, CSS, JS & Backend.",
        syllabus: [
            { 
                title: "Chapter 1: HTML Crash Course", 
                videoId: "qz0aGYrrlhU",
                // This is the BOOK content (HTML format supported)
                textContent: `
                    <h2>Introduction to HTML</h2>
                    <p>HTML stands for HyperText Markup Language. It is the standard markup language for creating Web pages.</p>
                    <h3>Basic Structure</h3>
                    <p>Every HTML document starts with a <code>&lt;!DOCTYPE html&gt;</code> declaration.</p>
                    <ul>
                        <li><b>&lt;html&gt;</b>: The root element.</li>
                        <li><b>&lt;head&gt;</b>: Contains meta information.</li>
                        <li><b>&lt;body&gt;</b>: Contains the visible page content.</li>
                    </ul>
                    <p>HTML describes the structure of a Web page. HTML elements tell the browser how to display the content.</p>
                `
            },
            { 
                title: "Chapter 2: CSS Crash Course", 
                videoId: "yfoY53QXEnI",
                textContent: `
                    <h2>What is CSS?</h2>
                    <p>CSS stands for Cascading Style Sheets. It describes how HTML elements are to be displayed on screen, paper, or in other media.</p>
                    <h3>Why use CSS?</h3>
                    <p>CSS saves a lot of work. It can control the layout of multiple web pages all at once.</p>
                    <ul>
                        <li><b>Color:</b> Change text and background colors.</li>
                        <li><b>Fonts:</b> Set fonts and text sizes.</li>
                        <li><b>Layout:</b> Arrange elements in grids or flexbox.</li>
                    </ul>
                `
            },
            { 
                title: "Chapter 3: JavaScript Logic", 
                videoId: "jS4aFq5-91M",
                textContent: `
                    <h2>JavaScript Basics</h2>
                    <p>JavaScript is the programming language of the Web. It allows you to make web pages interactive.</p>
                    <h3>Key Concepts</h3>
                    <ul>
                        <li><b>Variables:</b> Storing data (let, const, var).</li>
                        <li><b>Functions:</b> Blocks of code designed to perform a particular task.</li>
                        <li><b>Events:</b> Reacting to user clicks and inputs.</li>
                    </ul>
                    <p>With JavaScript, you can update and change both HTML and CSS.</p>
                `
            }
        ]
    },
    // You can add more courses following the same pattern...
    {
        id: 2,
        title: "Graphic Design Masterclass",
        instructor: "GFXMentor",
        price: "Free",
        category: "Design",
        image: "https://images.unsplash.com/photo-1626785774573-4b799314346d?w=600&auto=format&fit=crop&q=60",
        description: "Master Canva and Photoshop.",
        syllabus: [
            { 
                title: "Chapter 1: Design Theory", 
                videoId: "YqQx75OPRa0",
                textContent: `<h2>Design Theory</h2><p>Design is not just about how it looks, but how it works. Understanding color theory, typography, and layout is crucial.</p>` 
            },
            { 
                title: "Chapter 2: Photoshop Basics", 
                videoId: "IyR_uYsRdPs",
                textContent: `<h2>Photoshop Interface</h2><p>Learn about layers, tools, and the workspace. Photoshop is a raster-based image editor.</p>` 
            }
        ]
    }
];

// =========================================
// 2. LOGIC (Homepage & Details)
// =========================================

// A. Load Courses on Index Page
const courseContainer = document.getElementById("course-container");
if (courseContainer) {
    courseContainer.innerHTML = courses.map(course => `
        <div class="bg-white dark:bg-slate-800 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300 transform hover:-translate-y-1 border border-gray-100 dark:border-gray-700">
            <div class="relative">
                <img src="${course.image}" alt="${course.title}" class="w-full h-48 object-cover">
                <div class="absolute top-2 right-2 bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded-full shadow">${course.category}</div>
            </div>
            <div class="p-5">
                <h3 class="text-xl font-bold mt-1 mb-2 dark:text-white line-clamp-1">${course.title}</h3>
                <p class="text-sm text-gray-500 dark:text-gray-400 mb-4 line-clamp-2">${course.description}</p>
                <div class="flex justify-between items-center border-t border-gray-100 dark:border-gray-700 pt-4">
                    <span class="text-green-500 font-bold text-lg">${course.price}</span>
                    <a href="course-details.html?id=${course.id}" class="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg text-sm font-medium transition shadow-md">Start Learning</a>
                </div>
            </div>
        </div>
    `).join('');
}

// B. Classroom Logic (course-details.html)
const params = new URLSearchParams(window.location.search);
const courseId = params.get("id");

if (courseId) {
    const course = courses.find(c => c.id == courseId);
    
    if (course) {
        // Set Course Info
        const courseNameElem = document.getElementById("course-name");
        if(courseNameElem) courseNameElem.innerText = course.title;

        // Load Syllabus List
        const syllabusList = document.getElementById("c-syllabus");
        
        // Auto load first chapter
        if(course.syllabus.length > 0) {
            loadContent(0);
        }

        if(syllabusList) {
            syllabusList.innerHTML = course.syllabus.map((topic, index) => `
                <li onclick="loadContent(${index})" 
                    class="cursor-pointer group flex items-center gap-3 p-3 bg-gray-50 dark:bg-slate-700/50 rounded-lg hover:bg-blue-100 dark:hover:bg-slate-700 border border-transparent hover:border-blue-300 transition">
                    <div class="w-8 h-8 rounded-full bg-white dark:bg-slate-600 flex items-center justify-center text-blue-600 font-bold text-sm shadow-sm">
                        ${index + 1}
                    </div>
                    <div class="flex-1">
                        <h4 class="font-semibold text-sm text-gray-800 dark:text-gray-200 group-hover:text-blue-600 transition line-clamp-1">
                            ${topic.title}
                        </h4>
                    </div>
                    <i class="fas fa-play-circle text-gray-400 group-hover:text-blue-500"></i>
                </li>
            `).join('');
        }
    }
}

// FUNCTION: Load Both Video and Book Content
function loadContent(index) {
    const course = courses.find(c => c.id == courseId);
    const chapter = course.syllabus[index];

    // 1. Update Title
    const titleElem = document.getElementById("content-title");
    if(titleElem) titleElem.innerText = chapter.title;

    // 2. Update Video
    const player = document.getElementById("video-frame");
    if(player) player.src = `https://www.youtube.com/embed/${chapter.videoId}?rel=0`;

    // 3. Update Book Text
    const bookContent = document.getElementById("book-content");
    if(bookContent) {
        bookContent.innerHTML = chapter.textContent;
    }
}

// FUNCTION: Toggle between Video and Book Mode
function switchMode(mode) {
    const videoMode = document.getElementById("video-mode");
    const bookMode = document.getElementById("book-mode");
    const btnVideo = document.getElementById("btn-video");
    const btnBook = document.getElementById("btn-book");

    if (mode === 'video') {
        videoMode.classList.remove("hidden");
        bookMode.classList.add("hidden");
        
        // Button Styles
        btnVideo.classList.add("bg-blue-600", "text-white");
        btnVideo.classList.remove("text-gray-500");
        btnBook.classList.remove("bg-blue-600", "text-white");
        btnBook.classList.add("text-gray-500");
    } else {
        videoMode.classList.add("hidden");
        bookMode.classList.remove("hidden");
        bookMode.classList.add("flex"); // Ensure flex display

        // Button Styles
        btnBook.classList.add("bg-blue-600", "text-white");
        btnBook.classList.remove("text-gray-500");
        btnVideo.classList.remove("bg-blue-600", "text-white");
        btnVideo.classList.add("text-gray-500");
    }
}

// Dark Mode Logic (Global)
const themeToggle = document.getElementById('theme-toggle');
const html = document.documentElement;

if (localStorage.getItem('theme') === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    html.classList.add('dark');
} else {
    html.classList.remove('dark');
}

if(themeToggle) {
    themeToggle.addEventListener('click', () => {
        html.classList.toggle('dark');
        localStorage.setItem('theme', html.classList.contains('dark') ? 'dark' : 'light');
    });
}
