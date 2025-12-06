// script.js

// --- 1. Course Data (Database) ---
const courses = [
    {
        id: 1,
        title: "Full Stack Web Development Bootcamp",
        instructor: "Manish Ghimire",
        rating: 4.9,
        students: 5400,
        price: 1500,
        category: "Web Development",
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Learn HTML, CSS, JavaScript, React, and Node.js from scratch. Build real-world websites and become a professional developer.",
        bestseller: true,
        live: true,
        videos: ["Intro to Web", "HTML Basics", "CSS Styling", "JavaScript Logic", "React Framework"]
    },
    {
        id: 2,
        title: "Python Programming for Beginners",
        instructor: "Dr. Angela Yu",
        rating: 4.8,
        students: 12000,
        price: 1200,
        category: "Programming",
        image: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Master Python programming language. Great for beginners who want to start their coding journey or learn Data Science.",
        bestseller: true,
        live: false,
        videos: ["Installing Python", "Variables & Loops", "Functions", "OOP Concepts", "Building a Game"]
    },
    {
        id: 3,
        title: "UI/UX Design Masterclass",
        instructor: "Sarah Jenkins",
        rating: 4.7,
        students: 8200,
        price: 1000,
        category: "Design",
        image: "https://images.unsplash.com/photo-1586717791821-3f44a5638d48?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Learn to design beautiful mobile apps and websites using Figma and Adobe XD. Understand user psychology and wireframing.",
        bestseller: false,
        live: true,
        videos: ["Design Principles", "Color Theory", "Typography", "Figma Basics", "Prototyping"]
    },
    {
        id: 4,
        title: "App Development with Flutter",
        instructor: "Rohan Sharma",
        rating: 4.6,
        students: 4500,
        price: 2000,
        category: "Mobile App",
        image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Build Android and iOS apps with a single codebase using Google's Flutter framework. Create beautiful native apps.",
        bestseller: false,
        live: false,
        videos: ["Setup Flutter", "Dart Basics", "Widgets", "State Management", "Publishing App"]
    },
    {
        id: 5,
        title: "Data Science & Machine Learning",
        instructor: "Kirill Eremenko",
        rating: 4.9,
        students: 9000,
        price: 2500,
        category: "Data Science",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Become a Data Scientist. Learn how to analyze data, create machine learning models, and use AI tools.",
        bestseller: true,
        live: true,
        videos: ["Data Analysis", "Pandas & NumPy", "Data Visualization", "Machine Learning Algorithms"]
    },
    {
        id: 6,
        title: "Ethical Hacking & Cyber Security",
        instructor: "Mr. Robot",
        rating: 4.8,
        students: 6700,
        price: 1800,
        category: "Security",
        image: "https://images.unsplash.com/photo-1563206767-5b1d97289374?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Learn how to secure networks and websites. Understand penetration testing and how hackers think.",
        bestseller: false,
        live: false,
        videos: ["Networking Basics", "Linux Commands", "Scanning Networks", "System Hacking"]
    },
    {
        id: 7,
        title: "Java Programming: Zero to Expert",
        instructor: "James Gosling Fan",
        rating: 4.5,
        students: 3000,
        price: 1100,
        category: "Programming",
        image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Comprehensive Java course for students. Covers Core Java, OOPs, Collections, and Multi-threading.",
        bestseller: false,
        live: false,
        videos: ["Java Syntax", "Control Flow", "OOPs Concepts", "Exception Handling"]
    },
    {
        id: 8,
        title: "C++ for Game Development",
        instructor: "Unreal Master",
        rating: 4.7,
        students: 2100,
        price: 1600,
        category: "Game Dev",
        image: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Learn C++ specifically for game development using Unreal Engine. Create 3D games from scratch.",
        bestseller: false,
        live: true,
        videos: ["C++ Basics", "Pointers", "Memory Management", "Unreal Engine Intro"]
    }
];

// --- 2. Dark Mode Logic ---
const themeToggle = document.getElementById('theme-toggle');
const htmlElement = document.documentElement;

if (localStorage.getItem('theme') === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    htmlElement.classList.add('dark');
} else {
    htmlElement.classList.remove('dark');
}

if(themeToggle){
    themeToggle.addEventListener('click', () => {
        htmlElement.classList.toggle('dark');
        localStorage.setItem('theme', htmlElement.classList.contains('dark') ? 'dark' : 'light');
    });
}

// --- 3. Render Courses ---
const courseContainer = document.getElementById('course-container');

function createCourseCard(course) {
    return `
        <div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover-scale border border-gray-100 dark:border-gray-700 flex flex-col h-full fade-in">
            <div class="relative">
                <img src="${course.image}" alt="${course.title}" class="w-full h-48 object-cover">
                ${course.bestseller ? '<span class="absolute top-2 left-2 bg-yellow-400 text-xs font-bold px-2 py-1 rounded text-gray-900">Bestseller</span>' : ''}
                ${course.live ? '<span class="absolute top-2 right-2 bg-red-500 text-xs font-bold px-2 py-1 rounded text-white animate-pulse">Live Class</span>' : ''}
            </div>
            <div class="p-5 flex flex-col flex-grow">
                <div class="flex justify-between items-center mb-2">
                    <span class="text-xs font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-wide">${course.category}</span>
                    <div class="flex items-center text-yellow-400 text-xs">
                        <i class="fas fa-star"></i>
                        <span class="ml-1 text-gray-600 dark:text-gray-300">${course.rating}</span>
                    </div>
                </div>
                <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-2 leading-tight flex-grow">
                    <a href="course-details.html?id=${course.id}" class="hover:text-indigo-500">${course.title}</a>
                </h3>
                <p class="text-sm text-gray-500 dark:text-gray-400 mb-4">by ${course.instructor}</p>
                <div class="flex justify-between items-center mt-auto border-t border-gray-100 dark:border-gray-700 pt-3">
                    <span class="text-xl font-bold text-gray-900 dark:text-white">Rs. ${course.price}</span>
                    <a href="course-details.html?id=${course.id}" class="text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:underline">View Details</a>
                </div>
            </div>
        </div>
    `;
}

if (courseContainer) {
    const isHomePage = window.location.pathname.endsWith('index.html') || window.location.pathname.endsWith('/');
    const displayCourses = isHomePage ? courses.slice(0, 3) : courses;
    courseContainer.innerHTML = displayCourses.map(createCourseCard).join('');
}

// --- 4. Search Filter ---
const searchInput = document.getElementById('search-input');
if(searchInput){
    searchInput.addEventListener('input', (e) => {
        const term = e.target.value.toLowerCase();
        const filtered = courses.filter(c => c.title.toLowerCase().includes(term) || c.category.toLowerCase().includes(term));
        
        if(courseContainer) {
            courseContainer.innerHTML = filtered.length > 0 
                ? filtered.map(createCourseCard).join('') 
                : `<p class="text-gray-500 dark:text-gray-400 col-span-full text-center py-10">No courses found matching "${term}"</p>`;
        }
    });
}

// --- 5. Dynamic Course Details Logic ---
if (window.location.pathname.includes('course-details.html')) {
    const urlParams = new URLSearchParams(window.location.search);
    const courseId = urlParams.get('id');
    
    const course = courses.find(c => c.id == courseId);

    if (course) {
        document.getElementById('c-category').innerText = course.category;
        document.getElementById('c-title').innerText = course.title;
        document.getElementById('c-desc').innerText = course.description;
        document.getElementById('c-rating').innerText = course.rating;
        document.getElementById('c-students').innerText = `${course.students} Students`;
        document.getElementById('c-instructor').innerText = course.instructor;
        document.getElementById('c-price').innerText = `Rs. ${course.price}`;
        document.getElementById('c-image').src = course.image;
        document.getElementById('c-instructor-name').innerText = course.instructor;

        const curriculumContainer = document.getElementById('c-curriculum-list');
        if(curriculumContainer) {
            curriculumContainer.innerHTML = course.videos.map((video, index) => `
                <div class="flex justify-between items-center text-sm text-gray-600 dark:text-gray-400 p-2 hover:bg-gray-50 dark:hover:bg-gray-800 rounded transition">
                    <span><i class="fas fa-play-circle mr-2 text-indigo-500"></i> ${index + 1}. ${video}</span>
                    <span>10:00</span>
                </div>
            `).join('');
        }
    }
}

// --- 6. Tab Logic ---
function switchTab(tabName) {
    const contents = document.querySelectorAll('.tab-content');
    const buttons = document.querySelectorAll('.tab-btn');
    contents.forEach(c => c.classList.add('hidden'));
    document.getElementById(tabName).classList.remove('hidden');
    buttons.forEach(b => {
        b.classList.remove('text-indigo-600', 'border-indigo-600', 'dark:text-indigo-400');
        b.classList.add('text-gray-500', 'border-transparent');
    });
    const activeBtn = document.querySelector(`[onclick="switchTab('${tabName}')"]`);
    activeBtn.classList.add('text-indigo-600', 'border-indigo-600', 'dark:text-indigo-400');
    activeBtn.classList.remove('text-gray-500', 'border-transparent');
}

// --- 7. Enroll ---
function enrollCourse() {
    Swal.fire({
        title: 'Enroll Now',
        text: "Redirecting to payment gateway...",
        icon: 'success',
        confirmButtonColor: '#4F46E5'
    }).then(() => {
        window.location.href = "dashboard.html";
    });
}
