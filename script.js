let xhr = new XMLHttpRequest();
console.log(xhr);
xhr.open("GET", "https://restcountries.com/v3.1/all"); 
xhr.send();
xhr.onload = function () {
    const data = JSON.parse(xhr.response)
    for(var i=0; i<250; i++){
    console.log(data[i].flag);
    }
}

