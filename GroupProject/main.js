document.getElementById("searchBtn").addEventListener("click", () => {

    const destination =
    document.querySelectorAll("select")[1].value;

    if(destination === "Where are you going?"){
        alert("Please choose a destination!");
    }
    else{
        alert(`Great choice! Let's explore ${destination}.`);
    }

});
