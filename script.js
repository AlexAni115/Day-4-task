//1.Print odd numbers in an array
// Anonymous method;
result = [];
var a = function (odd)
{
    for (var i=0; i<odd.length ;i++){
        if (odd[i]%2!==0){
            result.push(odd[i])
        }
    }
    return result;
}
console.log(a([1,2,3,4,5,6,7,8,126,145,263]));

//IIFE method;

res = [];
(function (od){
    for (var i=0;i<od.length; i++){
        if (od[i]%2!==0){
            res.push(od[i])
        }
    }
    console.log(res)
})([45,56,78,65,89,88])

// Arrow Method;
result1 = [];
var b = (odd)=>
{
    for (var i=0; i<odd.length ;i++){
        if (odd[i]%2!==0){
            result1.push(odd[i])
        }
    }
    return result1;
}
console.log(b([363,452,555,589,786,622]));

//2.Convert all the strings to title caps in a string array
// Anonymous method;
ans = [];
var c = function (upper){
for (i=0; i<upper.length; i++)
{
    var upperCase=upper[i].slice(0,1).toUpperCase()
    var restOfName = upper[i].slice(1,upper[i].length)
    var resul = upperCase+restOfName
    ans.push(resul)
}
return ans;
}
console.log(c(["alex","prasad","karthik","nalan","dia"]))

//IIFE method;
ans1 = [];
( function (upper1){
for (i=0; i<upper1.length; i++)
{
    var upperCase1=upper1[i].slice(0,1).toUpperCase()
    var restOfName1 = upper1[i].slice(1,upper1[i].length)
    var resul1 = upperCase1+restOfName1
    ans1.push(resul1)
}
console.log (ans1);
})
(["ruban","lazar","sundararaj","alstan","elizha"])

// Arrow Method;

ans2 = [];
var d = (upper2)=>{
for (i=0; i<upper2.length; i++)
{
    var upperCase2=upper2[i].slice(0,1).toUpperCase()
    var restOfName2 = upper2[i].slice(1,upper2[i].length)
    var resul2= upperCase2+restOfName2
    ans2.push(resul2)
}
return ans2;
}
console.log(d(["anitha","john","elsin","doe","mary"]))

//3.Sum of all numbers in an array:-
// Anonymous method;
var f = 0
var sum= function(j){for (i=0; i<j.length;i++){
    f = f+j[i]
}
return f;
 }
console.log(sum([1,2,3,4]))


// (function(j){for (i=0; i<j.length;i++){
//     var f=0
//     f = f+j[i]
// }
// console.log(f);
//  })
// ([1,2,3,4])
// Arrow method;
var f1 = 0
var sum1= (j1)=>{for (i=0; i<j1.length;i++){
    f1 = f1+j1[i]
}
return f1;
 }
console.log(sum1([5,7,18,19]))


// 4.Return all the prime numbers in an array
