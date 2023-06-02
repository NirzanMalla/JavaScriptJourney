let colors = ["Red", "Yellow", "Green", "White"];
let i = 0;

do{
    console.log(i, colors[i]);
    i++;
}while(i<colors.length);

// for(i+0, i<colors.length, i++){

// }
//for of
for (let v of colors){
    console.log(v)
}
//mapping
let newcolors = colors.map((value)=> `Color is ${value}`);
console.log(colors)
console.log(newcolors)

//filter
let newcolors1 = colors.filter(value => value.includes("w"));
console.log(newcolors1);