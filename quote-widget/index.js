let request = require('request');

getQuote = () => {
    request("http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&_jsonp=mycallback",
        (err, response, body)=>{
            let jsonBody = JSON.parse(body.substring("/**/mycallback(".length, body.length - 1));
            let randQuote = jsonBody[0]["content"];
            document.getElementById("quote").innerHTML = randQuote;
        });
};

setInterval(getQuote, 15000);
