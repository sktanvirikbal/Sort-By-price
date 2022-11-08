const courses = [
    {
        name: "Complete React js Course",
        price: "3000",
    },
    {
        name: "Complete Angular Course",
        price: "2500",
    },
    {
        name: "Complete MERN Course",
        price: "3700",
    },
    {
        name: "Complete C++ Course",
        price: "2000",
    },
    {
        name: "Django Course",
        price: "2300",
    },

];

function generateList() {
    //first grab the unordered list
    const ul = document.querySelector(".list-group");
    //reset ul for every click
    ul.innerHTML = "";

    courses.forEach((course) => {

        //create a list 
        const li = document.createElement("li");
        //add a class to the list
        li.classList.add("list-group-item");

        const name = document.createTextNode(course.name);

        li.appendChild(name);
        //create the span
        const span = document.createElement("span");
        span.classList.add("float-right");

        const price = document.createTextNode(course.price);
        span.appendChild(price);

        //inject the span inside the list
        li.appendChild(span);


        //inject this list to ul
        ul.appendChild(li);








    })
}

// 
window.addEventListener("load", generateList);


const button = document.querySelector(".sort-btn");

button.addEventListener("click", () => {
    courses.sort((a, b) => a.price - b.price      /*use a callback here */);
    generateList();
})


//make this button sort in ascending order 
const button2 = document.querySelector(".sort-btn2");

button2.addEventListener("click", () => {
    courses.sort((a, b) => b.price - a.price      /*use a callback here */);
    generateList();
})