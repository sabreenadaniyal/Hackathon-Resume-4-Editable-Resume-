window.addEventListener("load",()=>{

//collect input values
 
    let Name1=localStorage.getItem("Name")
    let profess = localStorage.getItem("Profession")
    let mobile=localStorage.getItem("Phone")
    let Email=localStorage.getItem("Email")
    let Address=localStorage.getItem("Address")
    let Skills=localStorage.getItem("skills")
    let languages=localStorage.getItem("languages")
    let About=localStorage.getItem("aboutMe")
    let Experience=localStorage.getItem("Experience")
    let uniYear=localStorage.getItem("uniYear")
    let uniName=localStorage.getItem("uniName") 
    let collYear=localStorage.getItem ("collYear") 
    let collName=localStorage.getItem("collName") 
    let schoolYear=localStorage.getItem ("schYear") 
    let schoolName=localStorage.getItem ("schName") 
    let Hobby=localStorage.getItem ("Hobbies") 
    let profilepicture=localStorage.getItem ("profilepicture") 


    let firstName:any=document.getElementById("firstName")
    firstName.textContent=Name1
    
    let profession:any=document.getElementById("profession")
    profession.textContent=profess
    
    let resumeTel:any=document.getElementById("resumeTel")
    resumeTel.textContent=mobile

    let resumeMail:any=document.getElementById("resumeMail")
    resumeMail.textContent=Email

    let resumeHome:any=document.getElementById("resumeHome")
    resumeHome.textContent=Address

    let resumeSkills:any=document.getElementById("resumeSkills")
    resumeSkills.textContent=Skills

    let resumeLang:any=document.getElementById("resumeLang")
    resumeLang.textContent=languages

    let resumeAbout:any=document.getElementById("resumeAbout")
    resumeAbout.textContent=About

    let resumeExp:any=document.getElementById("resumeExp")
    resumeExp.textContent=Experience

    let uniYear1:any=document.getElementById("uniYear1")
    uniYear1.textContent=uniYear

    let uniName1:any=document.getElementById("uniName1")
    uniName1.textContent=uniName

    let collYear2:any=document.getElementById("collYear2")
    collYear2.textContent=collYear
    
    let collName2:any=document.getElementById("collName2")
    collName2.textContent=collName

    let schYear3:any=document.getElementById("schYear3")
    schYear3.textContent=schoolYear
    
    let schName3:any=document.getElementById("schName3")
    schName3.textContent=schoolName

    let resmeHobby:any=document.getElementById("resumeHobby")
    resmeHobby.textContent=Hobby 
    
    let profile_picture:any=document.getElementById("profile-picture")
    profile_picture.src=profilepicture 
})


let button_Skills:any = document.getElementById("toggle-skills") 
let Skills:any = document.getElementById("SKILLS") 

button_Skills.addEventListener('click',() => {
    Skills.classList.toggle("hide")

});
let edit:any=document.getElementById("editable-resume")
edit.addEventListener('click',()=>{
    window.history.back()
    
})