const picture = document.getElementById("picture");
const preview = document.getElementById("previewImage");

picture.addEventListener("change", function () {

    const file = this.files[0];

    if (file){

        const reader = new FileReader();

        reader.onload = function(e){

            preview.src = e.target.result;

        };

        reader.readAsDataURL(file);

    }

});

document.getElementById("addCourse").addEventListener("click", function () {

    const container = document.getElementById("courses");

    const div = document.createElement("div");

    div.className = "course";

    div.innerHTML = `
        <input class="department" placeholder="Department">
        <input class="number" placeholder="Number">
        <input class="courseName" placeholder="Course Name">
        <input class="reason" placeholder="Reason">
        <button type="button" class="deleteCourse">Delete</button>
    `;

    div.querySelector(".deleteCourse").addEventListener("click", function () {
        div.remove();
    });

    container.appendChild(div);
});

document.getElementById("clearButton")
.addEventListener("click", function(){

document.querySelectorAll("#form input, #form textarea").forEach((field) => {

    if (field.type === "file") {

        field.value = "";


    } else {

        field.value = "";

        }

});

});

document.getElementById("form").addEventListener("submit", function (e) {
    e.preventDefault();

    // Get form values
    const firstName = document.getElementById("firstName").value;
    const middleName = document.getElementById("middleName").value;
    const preferredName = document.getElementById("preferredName").value;
    const lastName = document.getElementById("lastName").value;

    const mascotAdjective = document.getElementById("mascotAdjective").value;
    const mascotAnimal = document.getElementById("mascotAnimal").value;
    const divider = document.getElementById("divider").value;

    const pictureCaption = document.getElementById("pictureCaption").value;

    const personalStatement = document.getElementById("personalStatement").value;
    const professionalBackground = document.getElementById("professionalBackground").value;
    const academicBackground = document.getElementById("academicBackground").value;
    const subjectBackground = document.getElementById("subjectBackground").value;
    const platform = document.getElementById("platform").value;

    const funnyThing = document.getElementById("funnyThing").value;
    const share = document.getElementById("share").value;
    const quote = document.getElementById("quote").value;
    const quoteAuthor = document.getElementById("quoteAuthor").value;

    // Build course list
    let coursesHTML = "<ul>";

document.querySelectorAll("#courses .course").forEach((course) => {        const inputs = course.querySelectorAll("input");

        coursesHTML += `
            <li>
                <strong>${inputs[0].value} ${inputs[1].value}</strong> -
                ${inputs[2].value}<br>
                ${inputs[3].value}
            </li>
        `;
    });

    coursesHTML += "</ul>";

    // Use uploaded image if one exists, otherwise use the default image
    const imageSrc = document.getElementById("previewImage").src;

    // Hide the form
    document.getElementById("form").style.display = "none";

    // Display introduction page
    document.getElementById("output").innerHTML = `
        <h2>Introduction Form</h2>

        <h3>
            ${firstName}
            ${middleName}
            ${preferredName}
            ${lastName}
        </h3>

        <h4>${mascotAdjective} ${mascotAnimal}</h4>

        <img src="${imageSrc}" alt="Profile Picture" width="250">

        <p><em>${pictureCaption}</em></p>

        <p><strong>Personal Statement:</strong> ${personalStatement}</p>

        <ul>
            <li><strong>Professional Background:</strong> ${professionalBackground}</li>
            <li><strong>Academic Background:</strong> ${academicBackground}</li>
            <li><strong>Background in this Subject:</strong> ${subjectBackground}</li>
            <li><strong>Primary Computer Platform:</strong> ${platform}</li>
        </ul>

        <h3>Courses</h3>

        ${coursesHTML}

        <p><strong>Favorite Quote:</strong> "${quote}" — ${quoteAuthor}</p>

        ${funnyThing ? `<p><strong>Funny Thing:</strong> ${funnyThing}</p>` : ""}

        ${share ? `<p><strong>Something I'd Like to Share:</strong> ${share}</p>` : ""}

        <hr>

        <p>${divider} ${firstName} ${lastName} ${divider}</p>

        <p><a href="introduction_form.html">Reset Form</a></p>
    `;
});