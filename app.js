// Accessing input value entered by user & storing it in query

let query = document.querySelector(".query");

//Accessing button with class .searchBtn and storing its value in query_btn
let query_btn = document.querySelector(".searchBtn");

//Writing a function in order to make the queries of user functional and it will give the result to the user's query
query_btn.onclick = function(){
    let url = 'https://www.google.com/search?q=' + query.value;
    window.open(url);
}

//Modifying our code so that when the user presses Enter the results will also be displayed as it happens in the real web page of google

query.addEventListener("keypress", function(e){
    if(e.key == "Enter"){
        e.preventDefault();
        let url = 'https://www.google.com/search?q=' + query.value;
        window.open(url);
    }
})


//Accessing the button with id cross and storing it in cross_btn
let cross_btn = document.querySelector('#cross');


//Below function is written so that the user can delete its query by simply clicking on the cross button as it happens in real google page
cross_btn.onclick = function(){
    query.value = "";
}


//Accessing the button with id lucky
let lucky_btn = document.querySelector("#lucky");


//Clicking the I'm feeling Lucky button will be re-directed the user to doodle page
lucky_btn.onclick = function(){
    lucky_url = "https://doodles.google/";
    window.open(lucky_url);
}