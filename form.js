var Name = document.getElementById("name");
var profession = document.getElementById("Profession");
var phone = document.getElementById("phone");
var email = document.getElementById("email");
var Address = document.getElementById("address");
var skills = document.getElementById("skills");
var languages = document.getElementById("languages");
var aboutMe = document.getElementById("aboutMe");
var experience = document.getElementById("experience");
var uniYear = document.getElementById("uniYear");
var uniName = document.getElementById("uniName");
var collYear = document.getElementById("collYear");
var collName = document.getElementById("collName");
var schoolYear = document.getElementById("schoolYear");
var schoolName = document.getElementById("schoolName");
var Hobbies = document.getElementById("Hobbies");
var image = document.getElementById("image");
var resumeForm = document.getElementById("resume-form");
var button = document.getElementById("button");
resumeForm.addEventListener("submit", function (event) {
    event.preventDefault();
    localStorage.setItem("Name", Name.value);
    localStorage.setItem("Profession", profession.value);
    localStorage.setItem("Phone", phone.value);
    localStorage.setItem("Email", email.value);
    localStorage.setItem("Address", Address.value);
    localStorage.setItem("skills", skills.value);
    localStorage.setItem("languages", languages.value);
    localStorage.setItem("aboutMe", aboutMe.value);
    localStorage.setItem("Experience", experience.value);
    localStorage.setItem("uniYear", uniYear.value);
    localStorage.setItem("uniName", uniName.value);
    localStorage.setItem("collYear", collYear.value);
    localStorage.setItem("collName", collName.value);
    localStorage.setItem("schYear", schoolYear.value);
    localStorage.setItem("schName", schoolName.value);
    localStorage.setItem("Hobbies", Hobbies.value);
    if (image.files && image.files[0]) {
        var readImage_1 = new FileReader();
        readImage_1.addEventListener('load', function () {
            var image_text = readImage_1.result;
            localStorage.setItem("profilepicture", image_text);
        });
        readImage_1.readAsDataURL(image.files[0]);
    }
    window.location.href = "./main.html";
});
