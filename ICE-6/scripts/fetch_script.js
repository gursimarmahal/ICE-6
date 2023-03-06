console.log("fetch_script.js loaded");
let btnFetch = $("#fetchJoke");
// create a url variable
let fetch_url = 'https://icanhazdadjoke.com/';
let myFetchHeaders = {"Accept": "application/json"}

$(btnFetch).click(() =>{
    fetch(fetch_url, {
        // give the necessary header data
        headers: myFetchHeaders
    })
        // first then() to recieve the promise
        .then((res) =>{
            return res.json();
        }).then((json) => {
            console.log(json['joke']);
            // set the output
            $("#output").text(json['joke']);
        })
})


