// STUDENT DATABASE (TEMPORARY DEMO DATA)

const students = [

    {
        name: "Rahul Sharma",
        college: "BCA Student",
        avatar: "👨🏻‍💻",
        teach: ["Python", "Java"],
        learn: ["Photoshop"],
        category: "Technology"
    },

    {
        name: "Aman Verma",
        college: "BCA Student",
        avatar: "👨🏻",
        teach: ["Photoshop", "UI Design"],
        learn: ["Python"],
        category: "Design"
    },

    {
        name: "Priya Singh",
        college: "BBA Student",
        avatar: "👩🏻",
        teach: ["Digital Marketing"],
        learn: ["Video Editing"],
        category: "Business"
    },

    {
        name: "Karan Mehta",
        college: "BCA Student",
        avatar: "👨🏻‍🎨",
        teach: ["HTML", "CSS", "JavaScript"],
        learn: ["Guitar"],
        category: "Technology"
    },

    {
        name: "Sneha Kapoor",
        college: "BA Student",
        avatar: "👩🏻‍🎤",
        teach: ["Guitar", "Singing"],
        learn: ["Photography"],
        category: "Music"
    },

    {
        name: "Arjun Malhotra",
        college: "BCA Student",
        avatar: "👨🏻",
        teach: ["Video Editing", "Photography"],
        learn: ["Java"],
        category: "Design"
    }

];


// DISPLAY STUDENT CARDS

const studentsContainer = document.getElementById("studentsContainer");


function displayStudents(data) {

    studentsContainer.innerHTML = "";

    if (data.length === 0) {

        studentsContainer.innerHTML =
            `<div class="no-results">
                <h3>No students found!</h3>
                <p>Try searching for another skill.</p>
            </div>`;

        return;

    }


    data.forEach((student, index) => {

        const card = document.createElement("div");

        card.className = "student-card";


        const teachSkills = student.teach.map(skill => {

            return `<span class="skill-tag">${skill}</span>`;

        }).join("");


        const learnSkills = student.learn.map(skill => {

            return `<span class="skill-tag wanted-tag">${skill}</span>`;

        }).join("");


        card.innerHTML = `

            <div class="student-top">

                <div class="student-avatar">
                    ${student.avatar}
                </div>

                <div class="student-info">

                    <h3>${student.name}</h3>

                    <p>${student.college}</p>

                </div>

            </div>


            <span class="skill-label">
                CAN TEACH
            </span>

            <div class="skill-tags">
                ${teachSkills}
            </div>


            <span class="skill-label">
                WANTS TO LEARN
            </span>

            <div class="skill-tags">
                ${learnSkills}
            </div>


            <p class="match-text">
                ✨ Open to skill exchange
            </p>


            <button class="exchange-btn"
                onclick="sendRequest(${index})">

                Send Exchange Request →

            </button>

        `;


        studentsContainer.appendChild(card);

    });

}


// SEARCH FUNCTION

function searchSkills() {

    const searchValue = document
        .getElementById("searchInput")
        .value
        .toLowerCase()
        .trim();


    const filteredStudents = students.filter(student => {

        const allSkills = [
            ...student.teach,
            ...student.learn,
            student.name,
            student.college
        ];

        return allSkills.some(skill =>
            skill.toLowerCase().includes(searchValue)
        );

    });


    displayStudents(filteredStudents);

}


// SEARCH WHILE TYPING

document.getElementById("searchInput")
    .addEventListener("input", searchSkills);


// CATEGORY FILTER

function filterSkills(category, button) {

    const buttons = document.querySelectorAll(".category-btn");


    buttons.forEach(btn => {

        btn.classList.remove("active");

    });


    button.classList.add("active");


    if (category === "All") {

        displayStudents(students);

        return;

    }


    const filteredStudents = students.filter(student => {

        return student.category === category;

    });


    displayStudents(filteredStudents);

}


// SEND EXCHANGE REQUEST

function sendRequest(index) {

    const student = students[index];


    showMessage(
        "Exchange request sent to " + student.name +
        "! (Demo only)"
    );

}


// CUSTOM MESSAGE

function showMessage(message) {

    const messageBox = document.getElementById("messageBox");

    messageBox.innerText = message;

    messageBox.classList.add("show");


    setTimeout(() => {

        messageBox.classList.remove("show");

    }, 3000);

}


// MOBILE MENU

function toggleMenu() {

    const navLinks = document.getElementById("navLinks");

    navLinks.classList.toggle("show");

}


// CLOSE MOBILE MENU AFTER CLICKING LINK

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        document.getElementById("navLinks")
            .classList.remove("show");

    });

});


// LOAD STUDENTS WHEN WEBSITE OPENS

displayStudents(students);