// VARIABLES
const courses = document.querySelector('#courses-list'),
    shoppingCartContent = document.querySelector('#cart-content tbody');

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
    //Create an Object w/ Course Data
    const courseInfo = {
        image: course.querySelector('img').src,
        title: course.querySelector('h4').textContent,
        price: course.querySelector('.price span').textContent,
        id: course.querySelector('a').getAttribute('data-id')
    }

    // Insert to Shopping Cart
    addIntoCart(courseInfo);
}

function addIntoCart(course) {
// Create a <tr>
const row = document.createElement('tr');

    //Build the template
    row.innerHTML = `
        <tr>
            <td>
                <img src="${course.image}" width = 100></img>
            </td>
            <td>${course.title}</td>
            <td>${course.price}</td>
            <td>
                <a href="#" class="remove" data-id="${course.id}">X</a>
            </td>
        </tr>
    `;

    // Add into the shopping cart
    shoppingCartContent.appendChild(row);
}