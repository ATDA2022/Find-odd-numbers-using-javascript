const allNumberstxt = document.querySelector(".all-nums");
const oddNumberstxt = document.querySelector(".odd-nums");

var allNumbers = [34,445,77,53,24,56];
var oddNumbers =[];

var i=0;

function findOdds(array){
    while(i < array.length){
        allNumberstxt.textContent += array[i] + " ";
        if(array[i]%2){
            oddNumberstxt.textContent += array[i]+ " ";
        }
        i++;
    }
}
findOdds(allNumbers);
