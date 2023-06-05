let a = [1, 2, 3, "Nirajan", "Tokyo",];
console.log(a);
console.log(typeof a);

//changing datatype of array from object to string
let b = a.toString();
console.log(b, typeof b);

//join 
let c = a.join(" and ");
console.log(c)  //joing elements of array using and or anything

//pop
let d = a.pop();
console.log(a);// last ko element remove gardinxa ani print garxa
console.log(d); //pop gareko element dekhauxa

//push
let e = a.push(" 56 ");
console.log(e); //new  array ko length dinxa
console.log(a); // 56 last mah add vayera print hunxa

//Shift
let f = a.shift();
console.log(f); // remove vako element print garxa
console.log(a); // first ko element remove garxa ani baki print hunxa

//unshift
let g = a.unshift(1, 5);
console.log(a); // first mah elemets add garera print garxa
console.log(g); // new array ko length dinxa

//delete
let h = ["Jan", "Feb", "March", "April", "May", "June"];
delete h[2];
console.log(h); // delete garera print hunxa array tara array ko length change hunna 

//concat
let i = ["July", "Aug", "Sep"];
let j = ["Oct", "Nov", "Dec"];
let k = h.concat(i, j);
console.log(k); // arrays haru add gardinxa

//sort
let l = i.sort();
console.log(l);
console.log(i); //ascending order mah sort garxa elements lai

let m = [1, 2, 120, 220, 115, 560, 3, 250];
m.sort();
console.log(m); //first ko digit ko basis mah alphabetical order mah sorting gardinxa element lai
let compare = (a, b) => {

  return a - b;
}
m.sort(compare)
console.log(m); // compare function create garera ascending order mah nih rakhna sakinxa

//splice
let n = [1, 2, 3, 4, 5];
n.splice(1, 0, "Nirajan"); // expected outcome: [1, "Nirajan", 2, 3, 4, 5] outcome herere logic bujh Nirajan
console.log(n);
let o = n.splice(2, 1, "Malla");
console.log(o); // remove vako element print garxa
console.log(n);// expected outcome: [1, 'Nirajan', 'Malla', 3, 4, 5]

//Slice
let p = n.slice(3);
console.log(p); // index 3 dekhi ko element slice hunxa
console.log(n);  // slice is not destructive ani original array mah changes leudaina

let q = n.slice(3, 5);
console.log(q); //index 3-5 ko bich ko element matra remove hunxa like 3, 4
console.log(n); //  Original array modify hunna

//reverse
let r = n.reverse();
console.log(r); // array ko elemets lai reverse gardinxa

//spread operator
let colors = ['red', 'yellow', 'greeen'];
let newcolors = [...colors, 'white', 'blue'];
console.log(newcolors);