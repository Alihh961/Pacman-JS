const map = document.querySelector(".map");

for( i = 1 ; i <= 1344 ; i++){
    const square = document.createElement("div");
    square.classList.add('square');
    square.setAttribute("id" , "sqaure"+i);
    map.appendChild(square);
}