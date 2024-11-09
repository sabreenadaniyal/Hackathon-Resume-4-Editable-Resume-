
let Name:any=document.getElementById("name")
let profession:any=document.getElementById("Profession")
let phone:any=document.getElementById("phone")
let email:any=document.getElementById("email")
let Address:any=document.getElementById("address")
let skills:any=document.getElementById("skills")
let languages:any=document.getElementById("languages")
let aboutMe:any=document.getElementById("aboutMe")
let experience:any=document.getElementById("experience")
let uniYear:any=document.getElementById("uniYear")
let uniName:any=document.getElementById("uniName")
let collYear:any=document.getElementById("collYear")
let collName:any=document.getElementById("collName")
let schoolYear:any=document.getElementById("schoolYear")
let schoolName:any=document.getElementById("schoolName")
let Hobbies:any=document.getElementById("Hobbies")
let image:any=document.getElementById("image")




let resumeForm:any=document.getElementById("resume-form")
let button = document.getElementById("button")


resumeForm.addEventListener("submit",(event) => {
    event.preventDefault()


localStorage.setItem("Name",Name.value)
localStorage.setItem("Profession",profession.value)
localStorage.setItem("Phone",phone.value)
localStorage.setItem("Email",email.value)
localStorage.setItem("Address",Address.value)
localStorage.setItem("skills",skills.value)
localStorage.setItem("languages",languages.value)
localStorage.setItem("aboutMe",aboutMe.value)
localStorage.setItem("Experience",experience.value)
localStorage.setItem("uniYear",uniYear.value)
localStorage.setItem("uniName",uniName.value)
localStorage.setItem("collYear",collYear.value)
localStorage.setItem("collName",collName.value)
localStorage.setItem("schYear",schoolYear.value)
localStorage.setItem("schName",schoolName.value)
localStorage.setItem("Hobbies",Hobbies.value)


if (image.files && image.files[0]){
    let readImage=new FileReader()
    readImage.addEventListener('load',()=>{
        let image_text:any=readImage.result
        localStorage.setItem("profilepicture",image_text)
        
        
    })
    readImage.readAsDataURL(image.files[0])
}


window.location.href="./main.html"

})
