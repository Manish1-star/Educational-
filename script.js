// script.js

// --- 1. Mock Data (Simulating a Database) ---
const courses = [
    {
        id: 1,
        title: "Complete Python Bootcamp: From Zero to Hero",
        instructor: "Dr. Angela Yu",
        rating: 4.8,
        students: 15400,
        price: 49.99,
        category: "Development",
        image: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        bestseller: true,
        live: false
    },
    {
        id: 2,
        title: "The Ultimate Graphic Design Masterclass",
        instructor: "Lindsay Marsh",
        rating: 4.7,
        students: 8200,
        price: 34.99,
        category: "Design",
        image: "https://images.unsplash.com/photo-1626785774573-4b799314346d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        bestseller: false,
        live: true
    },
    {
        id: 3,
        title: "Digital Marketing Strategy 2025",
        instructor: "Seth Godin",
        rating: 4.9,
        students: 22000,
        price: 89.99,
        category: "Marketing",
        image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        bestseller: true,
        live: true
    },
    {
        id: 4,
        title: "Machine Learning A-Z: Hands-On Python",
        instructor: "Kirill Eremenko",
        rating: 4.6,
        students: 12000,
        price: 59.99,
        category: "Data Science",
        image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        bestseller: false,
        live: false
    }
];

// --- 2. Dark Mode Logic ---
const themeToggle = document.getElementById('theme-toggle');
const htmlElement = document.documentElement;

// Check Local Storage
if (localStorage.getItem('theme') === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    htmlElement.classList.add('dark');
} else {
    htmlElement.classList.remove('dark');
}

if(themeToggle){
    themeToggle.addEventListener('click', () => {
        htmlElement.classList.toggle('dark');
        if (htmlElement.classList.contains('dark')) {
            localStorage.setItem('theme', 'dark');
        } else {
            localStorage.setItem('theme', 'light');
        }
    });
}

// --- 3. Render Courses (Home & Courses Page) ---
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
                <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-2 leading-tight flex-grow"><a href="course-details.html" class="hover:text-indigo-500">${course.title}</a></h3>
                <p class="text-sm text-gray-500 dark:text-gray-400 mb-4">by ${course.instructor}</p>
                <div class="flex justify-between items-center mt-auto border-t border-gray-100 dark:border-gray-700 pt-3">
                    <span class="text-xl font-bold text-gray-900 dark:text-white">$${course.price}</span>
                    <a href="course-details.html" class="text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:underline">View Details</a>
                </div>
            </div>
        </div>
    `;
}

if (courseContainer) {
    const isHomePage = window.location.pathname.endsWith('index.html') || window.location.pathname === '/';
    // If Home page, show only 3. If Courses page, show all.
    const displayCourses = isHomePage ? courses.slice(0, 3) : courses;
    courseContainer.innerHTML = displayCourses.map(createCourseCard).join('');
}

// --- 4. Search & Filter Simulation ---
const searchInput = document.getElementById('search-input');
if(searchInput){
    searchInput.addEventListener('input', (e) => {
        const term = e.target.value.toLowerCase();
        const filtered = courses.filter(c => c.title.toLowerCase().includes(term) || c.category.toLowerCase().includes(term));
        
        if(courseContainer) {
            if(filtered.length > 0){
                courseContainer.innerHTML = filtered.map(createCourseCard).join('');
            } else {
                courseContainer.innerHTML = `<p class="text-gray-500 dark:text-gray-400 col-span-full text-center py-10">No courses found matching "${term}"</p>`;
            }
        }
    });
}

// --- 5. Course Details Tab Logic ---
function switchTab(tabName) {
    const contents = document.querySelectorAll('.tab-content');
    const buttons = document.querySelectorAll('.tab-btn');
    
    contents.forEach(content => content.classList.add('hidden'));
    document.getElementById(tabName).classList.remove('hidden');
    
    buttons.forEach(btn => {
        btn.classList.remove('text-indigo-600', 'border-indigo-600', 'dark:text-indigo-400', 'dark:border-indigo-400');
        btn.classList.add('text-gray-500', 'border-transparent');
    });
    
    const activeBtn = document.querySelector(`[onclick="switchTab('${tabName}')"]`);
    activeBtn.classList.remove('text-gray-500', 'border-transparent');
    activeBtn.classList.add('text-indigo-600', 'border-indigo-600', 'dark:text-indigo-400', 'dark:border-indigo-400');
}

// --- 6. Payment Simulation ---
function enrollCourse() {
    // Requires SweetAlert2 library (included in HTML)
    Swal.fire({
        title: 'Enroll in Course?',
        text: "You will be redirected to the secure payment gateway.",
        icon: 'info',
        showCancelButton: true,
        confirmButtonColor: '#4F46E5',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, Proceed to Payment'
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire(
                'Enrolled!',
                'Welcome to the class. Redirecting to dashboard...',
                'success'
            ).then(() => {
                window.location.href = "dashboard.html";
            });
        }
    })
}

// --- 7. AI Recommendation Logic (Simple Randomizer) ---
const aiContainer = document.getElementById('ai-recommendations');
if(aiContainer && courses.length > 0){
    const randomCourses = courses.sort(() => 0.5 - Math.random()).slice(0, 2);
    aiContainer.innerHTML = randomCourses.map(c => `
        <div class="flex items-center gap-4 mb-4 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition cursor-pointer">
            <img src="${c.image}" class="w-16 h-16 rounded object-cover">
            <div>
                <h4 class="font-bold text-sm text-gray-900 dark:text-white">${c.title}</h4>
                <p class="text-xs text-gray-500">${c.category}</p>
            </div>
        </div>
    `).join('');
}
