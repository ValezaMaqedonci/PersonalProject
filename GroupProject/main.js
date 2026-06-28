window.onload = function () {
    console.log("Welcome to NextStop!");
};

const searchBtn = document.getElementById("searchBtn");

if (searchBtn) {

    searchBtn.addEventListener("click", function () {

        const person =
            document.getElementById("personSelect").value;

        const destination =
            document.getElementById("destinationSelect").value;

        const season =
            document.getElementById("seasonSelect").value;

        if (
            person === "Who is going?" ||
            destination === "Where are you going?" ||
            season === "When are you going?"
        ) {

            alert("Please select all travel options!");
            return;

        }

        const cards =
            document.querySelectorAll(".card");

        let count = 0;

        cards.forEach(function (card) {

            const city =
                card.dataset.city;

if (
    destination === "All Destinations" ||
    city === destination
) {

    card.style.display = "";
    count++;

} else {

    card.style.display = "none";

}

        });

        const resultCount =
            document.getElementById("resultCount");

        if (resultCount) {

            resultCount.textContent =
                count + " trips found";

        }

        alert(
            `Perfect! Your ${season} trip to ${destination} for ${person} is ready!`
        );

    });

}

const cards = document.querySelectorAll(".card");

cards.forEach(function (card) {

    card.addEventListener("click", function () {

        const place =
            card.querySelector("h3").innerText;

        const price =
            card.querySelectorAll("p")[1].innerText;

        alert(
            `🌍 ${place}\n\nPackage Price: ${price}\n\nEnjoy your NextStop adventure!`
        );

    });

});

cards.forEach(function (card) {

    card.style.opacity = "0";
    card.style.transform = "translateY(40px)";
    card.style.transition = "0.5s ease";

});

window.addEventListener("scroll", function () {

    cards.forEach(function (card) {

        const position =
            card.getBoundingClientRect().top;

        const screenHeight =
            window.innerHeight;

        if (position < screenHeight - 100) {

            card.style.opacity = "1";
            card.style.transform = "translateY(0)";

        }

    });

});

const links = document.querySelectorAll("nav a");

links.forEach(function (link) {

    link.addEventListener("click", function (e) {

        const target =
            this.getAttribute("href");

        if (target.startsWith("#")) {

            e.preventDefault();

            document
                .querySelector(target)
                .scrollIntoView({
                    behavior: "smooth"
                });

        }

    });

});

const copyright =
    document.querySelector(".copyright");

if (copyright) {

    copyright.innerHTML =
        `© ${new Date().getFullYear()} NextStop. All Rights Reserved.`;

}

const reportBtn =
    document.getElementById("reportBtn");

if (reportBtn) {

    reportBtn.addEventListener("click", function () {

        const message =
            document.getElementById("issue").value;

        if (message.trim() === "") {

            alert("Please describe the problem.");

        } else {

            alert("Thank you! Your report has been submitted.");

            document.getElementById("issue").value = "";

        }

    });

}

const reviews =
    document.querySelectorAll(".review-box");

reviews.forEach(function (review) {

    review.style.transition = "0.3s";

    review.addEventListener("mouseenter", function () {

        review.style.transform = "scale(1.05)";

    });

    review.addEventListener("mouseleave", function () {

        review.style.transform = "scale(1)";

    });

});

$(document).ready(function () {

    $("body").hide().fadeIn(1000);

});

$(".card").hover(

    function () {

        $(this).stop().animate({
            marginTop: "-10px"
        }, 200);

    },

    function () {

        $(this).stop().animate({
            marginTop: "0px"
        }, 200);

    }

);

$("#destinationSelect").change(function () {

    let city = $(this).val();

    if(city !== "Where are you going?"){

        $("h1").first().text("Trips to " + city);

    }else{

        $("h1").first().text("Your Next Adventure Starts Here");

    }

});

$(window).scroll(function(){

    if($(this).scrollTop() > 300){

        $("#topBtn").fadeIn();

    }else{

        $("#topBtn").fadeOut();

    }

});

$("#topBtn").click(function(){

    $("html, body").animate({
        scrollTop:0
    },800);

});

const quotes = [

"Travel is the only thing you buy that makes you richer.",
"Adventure awaits.",
"Collect moments, not things.",
"Life is short, see the world.",
"Travel far enough to meet yourself."

];

$("#travelQuote").text(

quotes[Math.floor(Math.random() * quotes.length)]

);

setInterval(function(){

    let now = new Date();

    $("#clock").text(
        now.toLocaleTimeString()
    );

},1000);

let count = 1248;

const counter =
document.getElementById("reviewCounter");

if(counter){

    let interval = setInterval(function(){

        counter.innerText = count;
        count++;

        if(count > 1300){

            clearInterval(interval);

        }

    },20);

}

const feedbackBtn =
document.getElementById("feedbackBtn");

if (feedbackBtn) {

    feedbackBtn.addEventListener("click", function () {

        const feedback =
        document.getElementById("feedback").value;

        if (feedback.trim() === "") {

            alert("Please write your feedback.");

        } else {

            const ticket =
            Math.floor(Math.random() * 100000);


            document.getElementById("feedback").value = "";

            const reviewCounter =
            document.getElementById("reviewCounter");

            if (reviewCounter) {

                reviewCounter.innerText =
                parseInt(reviewCounter.innerText) + 1;

            }

        }

    });

}