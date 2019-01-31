// VARIABLES
const courses = document.querySelector('#courses-list');

// LISTENERS

loadEventListeneers();

function loadEventListeneers() {
    // Whe a new course is added
    courses.addEventListener('click',buyCourse);
}



// FUNCTIONS

function buyCourse(e) {
    e.preventDefault();
    // Use delegation to find the couse that was added
    if(e.target.classList.contains('add-to-cart')){
        //read the course values
        // console.log(e.target.parentElement);
        const course = e.target.parentElement.parentElement;

        //read values
        getCourseInfo(course);
    };
}

// Reads the HTML info of the selected course
function getCourseInfo(course) {
    console.log.(course);
}