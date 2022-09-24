var obj = [ { name: "SUBA", experianse: "6 years", company: "GUVI" },
 { name: "SARATHI", experianse: "5 years", company: "GUVI geek" }, 
 { name: "TAMIL", experianse: "8 years", company: "GUVI geek network" }, ]


for (var i in obj){
    console.log(i, obj[i]);
}

console.log("<br>");

for(var j of obj){
    console.log(j);
}

console.log("<br>");

for(var k = 0;k<=obj.length-1;k++){
    console.log(obj[k]);
}

console.log("<br>");

obj.forEach(function (l){
    console.log(l);
});