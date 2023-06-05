function sum(a,b){
    console.log("This is the sum");
    return a + b;
    //return vanda muni kunai kaam hudaina
}

console.log(sum(5, 7));

function sum1(n1, n2){
    console.log(n1 + n2);
}

sum1(100, 22);
sum(22, 55);
sum1(35)

function sum3(c, d = 20){
    console.log(c + d)
} //d ko value input nagarya bela 20 linxa
sum3(20)
sum3(20, 30)

function sum2(e=10, f){
    console.log(e + f)
}
sum2(19)


const sum4  = function (g,h){
    return g + h;
}
console.log(sum4(5, 8)); //yesari pani banauna milxa tara most of the time const use garney var and let mah banauna miley pani


//Arrow function
const multiplytwonumbersafteraddition = (h1, h2 = 20)=>{
    let sum = h1 + h2;
    let h3 = sum *5
    return h3;
}
console.log(multiplytwonumbersafteraddition(3,4));
//body vitra eeuta matra kaam vairaxa vaney yoh shortcut use garna paiyo return pani lekhiraknu pardaina
const sum6 = (h3, h4)=> h3 + h4