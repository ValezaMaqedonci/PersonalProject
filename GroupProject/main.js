window.onload = function(){

    console.log("Welcome to NextStop!");

};

const searchBtn = document.getElementById("searchBtn");


if(searchBtn){

searchBtn.addEventListener("click", function(){

    let selects = document.querySelectorAll("select");

    let person = selects[0].value;
    let destination = selects[1].value;
    let season = selects[2].value;


    if(
        person === "Who is going?" ||
        destination === "Where are you going?" ||
        season === "When are you going?"
    ){

        alert("Please select all travel options!");

    }

    else{

        alert(
        `Perfect! Your ${season} trip to ${destination} for ${person} is ready!`
        );

    }


});

}

let cards = document.querySelectorAll(".card");


cards.forEach(function(card){


    card.addEventListener("click",function(){


        let place =
        card.querySelector("h3").innerText;


        let price =
        card.querySelectorAll("p")[1].innerText;


        alert(
        `🌍 ${place}\n\nPackage price: ${price}\n\nEnjoy your NextStop adventure!`
        );


    });


});

let links = document.querySelectorAll("nav a");


links.forEach(function(link){


    link.addEventListener("click",function(e){


        let target =
        this.getAttribute("href");


        if(target.startsWith("#")){


            e.preventDefault();


            document.querySelector(target)
            .scrollIntoView({

                behavior:"smooth"

            });


        }


    });


});

window.addEventListener("scroll",function(){


cards.forEach(function(card){


let position =
card.getBoundingClientRect().top;


let screen =
window.innerHeight;


if(position < screen - 100){


card.style.opacity="1";
card.style.transform="translateY(0)";


}


});


});

let year =
document.querySelector(".copyright");


if(year){


year.innerHTML =
`© ${new Date().getFullYear()} NextStop. All Rights Reserved.`;


}


let reportButton =
document.getElementById("reportBtn");


if(reportButton){


reportButton.addEventListener("click",function(){


let message =
document.getElementById("issue").value;


if(message === ""){


alert("Please describe the problem.");


}

else{


alert("Thank you! Your report has been submitted.");

document.getElementById("issue").value="";


}


});


}


let reviewBoxes =
document.querySelectorAll(".review-box");


reviewBoxes.forEach(function(review){


review.addEventListener("mouseenter",function(){


review.style.transform="scale(1.05)";


});


review.addEventListener("mouseleave",function(){


review.style.transform="scale(1)";


});


});