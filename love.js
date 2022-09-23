document.getElementById('yes').addEventListener('click', function(){
        document.body.style.backgroundColor = 'red';
        const heading = document.getElementById('head');
        heading.innerHTML = `আমিও তোমাকে অনেক ভালোবাসি বাবু। <img src="./icon/arrow-through-heart-fill.svg">`

})

document.getElementById('confused').addEventListener('click', function(){
    document.body.style.backgroundColor = 'red';
        const heading = document.getElementById('head');
        heading.innerHTML = `তুমি আমাকে ভালোবাসো আর নাই বাসো, আমি তোমাকে অনেক ভালোবাসি <img src="./icon/heartbreak-fill.svg" >`
})