let cats = function() { 
    let fist = document.createElement("H1");
    fist.innerHTML="Kyle's 'Big Time' Restaurant";
    document.getElementById("content").appendChild(fist);
};

let image = function() {
    let pic = document.createElement("IMG");
    pic.src = "/images/restaurant.jpeg";
    pic.id="pic"
    document.getElementById("content").appendChild(pic);
};

let statement = function() { 
    let last = document.createElement("P");
    last.innerHTML= "This is the nicest place I've ever been! -A Real Michelin Star Giver";
    document.getElementById("content").appendChild(last);
};

export {cats, image, statement};