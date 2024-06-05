function evenOrOdd(number) {
    if(number % 2 === 0){
    return "Even";
    }
    else{
        return "Odd";
    }
}



function evenOrOddModified(number){
    return  number % 2 ===0 ? "Even" : "Odd";
}

console.log(evenOrOdd(150))
console.log(evenOrOddModified(150))
