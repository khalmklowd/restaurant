const menus = function() { 
    let fist = document.createElement("H1");
    let cast = document.createElement("P")
    cast.innerHTML="All of the food's you could ever want to eat are here, yo! Just come one in, sit down, and order as soon as you ready!"
    cast.style.textAlign = 'center';
    fist.innerHTML="My 'BIG TIME' menu!";
    document.getElementById("content").appendChild(fist);
    document.getElementById("content").appendChild(cast);
};


export{menus};