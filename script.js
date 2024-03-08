let container = document.querySelector('#container');
let blocks;
let number = document.querySelector('button');
let n;

function myFunction(item){
    item.addEventListener("mouseenter",function(){
        this.style.backgroundColor = "blue";
    });
}

number.addEventListener('click',function(){
    n = prompt("Enter number of rows (limit is 100)");
    if(n>=1 && n<=100){
        while(container.firstChild){
            container.removeChild(container.firstChild);
        }
        for(let j=0; j<n*n; j++){
            let div2 = document.createElement('div');
            div2.setAttribute("class","blocks");
            div2.style.width = `${800/n - 2}px`;
            div2.style.height = `${800/n -2}px`;
            div2.style.border = "1px solid black";
            container.appendChild(div2);
        }
        blocks = document.querySelectorAll('.blocks');
        blocks.forEach(myFunction);
    }
    else{
        alert("Enter number in valid range");
    }
});