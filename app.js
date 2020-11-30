 const filmbutton = document.getElementById("film-button");
 const filmcontent = document.querySelectorAll(".season");
 const left = document.getElementById("left")
const right = document.getElementById("right")
const frame = document.getElementById("frame");
const story = document.getElementById("story-section")
const title = document.getElementById("title")


//Episodes

const ep0 = document.getElementById("ep0");
const ep1 = document.getElementById("ep1");
const ep2 = document.getElementById("ep2");
const ep3 = document.getElementById("ep3");
const ep4 = document.getElementById("ep4");
const ep5 = document.getElementById("ep5");
const ep6 = document.getElementById("ep6");



 filmbutton.addEventListener('click' , function(){
     
     right.classList.add("comein")
     left.classList.add("comein")
 })


ep0.addEventListener('click', function(){
    frame.src = "https://www.youtube.com/embed/fOqTBGIvnEo"
    title.innerHTML = "Sezon 0 Odcinek 1 - Wasaty Mag Ognia"
    story.scrollIntoView();
})
ep1.addEventListener('click', function(){
    frame.src = "https://www.youtube.com/embed/r1o8pHk3H2Q" 
    title.innerHTML = "Sezon 1 Odcinek 1 - Poczatek part 1"
    story.scrollIntoView();
})
ep2.addEventListener('click', function(){
    frame.src = "https://www.youtube.com/embed/IfdyP2NqA_I"
    title.innerHTML = "Sezon 1 Odcinek 2 - Poczatek part 2"
    story.scrollIntoView();
})
ep3.addEventListener('click', function(){
    frame.src = "https://www.youtube.com/embed/rnpF-2SNPWU" 
    title.innerHTML = "Sezon 1 Odcinek 3 - Chrzest ognia"
    story.scrollIntoView();
})
ep4.addEventListener('click', function(){
    frame.src = "https://www.youtube.com/embed/Elrz-awfszA" 
    title.innerHTML = "Sezon 1 Odcinek 4 - Legowisko zuli"
    story.scrollIntoView();
})
ep5.addEventListener('click', function(){
    frame.src = "https://www.youtube.com/embed/MVIDhXR4RmM"
    title.innerHTML = "Sezon 1 Odcinek 5 - Pani Jeziora"
    story.scrollIntoView();
})
ep6.addEventListener('click', function(){
    frame.src = "https://www.youtube.com/embed/rfhzkUfQdMg" 
    title.innerHTML = "Sezon 1 Odcinek 5 - Final"
    story.scrollIntoView();
})
