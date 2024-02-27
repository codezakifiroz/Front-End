var count = 1;

function printCount(){
    // console.clear()
    // console.log(count);
    count = count + 1;
    return count;
   
}

var output = document.getElementById("output");

output. = setInterval(printCount,1000)