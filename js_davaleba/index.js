let count = 10;

let interval = setInterval(() => {
    count--;
    document.body.style.backgroundColor = `rgb(${Math.random()*255}, ${Math.random()*255}, ${Math.random()*255})`;

    if (count == 0) {
        clearInterval(interval)
        setTimeout(() => {
            document.body.style.backgroundColor = "white";
            console.log("Finished");  
        }, 2000);
    }
}, 1000);