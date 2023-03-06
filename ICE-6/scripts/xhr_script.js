console.log("xhr_script.js loaded");

let btnXhr = $("#xhrJoke");

// create a url variable
let xhr_url = 'https://icanhazdadjoke.com/';
$(btnXhr).click(() => {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", xhr_url);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = function (){
        if(xhr.readyState === 4 && xhr.status === 200){
            let joke = xhr.responseText;
            let parsedJoke = JSON.parse(joke);
            // set the output
            console.log(parsedJoke['joke']);
            $("#output").text(parsedJoke['joke']);
        }

    }
        // send the request
        xhr.send();

})



