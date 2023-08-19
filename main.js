// Get Variables 
// const getJob = document.getElementById("getJob");
const getJob = document.querySelector("#getJob");
const slideBtns = document.querySelectorAll(".btn");
const container = document.querySelectorAll(".container");

getJob.addEventListener("click", function(){
    container.forEach(function(container){
        container.style.display = "grid";
    });
    getJob.style.display = "none";
});

slideBtns.forEach(function (slideBtn) {
    slideBtn.addEventListener("click", function(e){
        const input = e.target.nextElementSibling;
        // console.log(e.target.nextElementSibling);
       slide(input);
        function slide(){
            if(input.classList.contains("slide-in")) {
                input.classList.remove("slide-in");
                input.classList.add("slide-out");
                setTimeout(function(){
                    e.target.style.borderRadius = "50%"
                    e.target.style.backgroundColor = "#f18d38"
                }, 500);
            } else {
                input.classList.remove("slide-out");
                input.classList.add("slide-in");
                e.target.style.borderRadius = "50% 0 0 50%"
                e.target.style.backgroundColor = "#6e46ea"
            }
        }
    });
});

// Refractor

// document.getElementById("getJob").onclick = () => {
//     document.querySelectorAll(".container").forEach(container) => {
//         container
//     }
// }