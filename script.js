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
    console.log(res);
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
console.log(c(["alex","prasad","karthik","nalan","dia"]));

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
(["ruban","lazar","sundararaj","alstan","elizha"]);

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
console.log(d(["anitha","john","elsin","doe","mary"]));

//3.Sum of all numbers in an array:-
// Anonymous method;
var f = 0
var sum= function(j){for (i=0; i<j.length;i++){
    f = f+j[i]
}
return f;
 }
console.log(sum([1,2,3,4]));

//IIFE method;
(function(j){for (i=0; i<j.length;i++){
    var f=0
    f = f+j[i]
}
console.log(f);
 })
([1,2,3,4]);
// Arrow method;
var f1 = 0
var sum1= (j1)=>{for (i=0; i<j1.length;i++){
    f1 = f1+j1[i]
}
return f1;
 }
console.log(sum1([5,7,18,19]));


// 4.Return all the prime numbers in an array

// 5.Return all the palindromes in an array
// Anonymous method;
 function palindrome (arr20){
    var palin =[];
    for ( var i=0;i<arr20.length;i++){
     var data = arr20[i].split("").reverse().join("");
      if (data===arr20[i]){
        palin.push(arr20[i])
      }
     
    }
    return palin;
}
console.log(palindrome(["mom","dad",121,"data","John"]));


// 6.Return median of two sorted arrays of the same size.
// Anonymous method;
var median = function twoSort(arr1,arr2){
    var arr = [...arr1,...arr2];
    arr.sort((a,b)=>a-b);
    let n = arr.length
     if (n%2===0){
        return ((arr[n/2]+arr[n/2-1])/2)
     }else{
        return arr[Math.floor(n/2)]
     }
}
console.log(median([1,4,3,5,2,7],[8,7,9,10,12,13,14,15]));

 //IIFE method;

 (function twoSort(arr3,arr4){
    var arr5 = [...arr3,...arr4];
    arr5.sort((a,b)=>a-b);
    let n = arr5.length
     if (n%2===0){
        console.log ((arr5[n/2]+arr5[n/2-1])/2)
     }else{
        console.log (arr5[Math.floor(n/2)])
     }
     
}
)([1,4,3,5,2,7,],[8,7,9,10])

// Arrow Method;

var median1 = (arr6,arr7)=>{
    var arr8 = [...arr6,...arr7];
    arr8.sort((a,b)=>a-b);
    let n = arr8.length
     if (n%2===0){
        return ((arr8[n/2]+arr8[n/2-1])/2)
     }else{
        return arr8[Math.floor(n/2)]
     }
}
console.log(median1([1,4,3,5,2,7],[8,7,9,10,12,13,14,15,16,17,18]));

//7.Remove duplicates from an array

// Anonymous method;
let dupli = function removeDuplicates(arr9){
return arr9.filter((ele,index)=>arr9.indexOf(ele)===index);
}
console.log(dupli([1,1,1,2,3,3,4,4,4,]));

//IIFE method;

( function removeDuplicates(arr10){
   console.log (arr10.filter((ele1,index1)=>arr10.indexOf(ele1)===index1));
    }
    
    )
    ([1,1,1,2,3,3,4,4,4,"alex","alex",]);

    // Arrow Method;
    let dupli1 =(arr12)=>{
        return arr12.filter((ele2,index2)=>arr12.indexOf(ele2)===index2);
        }
        console.log(dupli1([1,1,1,2,3,3,4,4,4,"john","john","Doe","Doe","Doe"]))
        
 //8.Rotate an array by k times
// Anonymous method;
 var rotate=function(nu,k){
    for (var l=0; l<k; l++){
      nu.push(nu[l])
      
    }
    for (var l=0;l<k;l++){
        nu.shift()
    }
    return nu;
}
console.log(rotate([1,2,3,4,5],3));

//IIFE method;
// Anonymous method;
(function(nu,k){
    for (var l=0; l<k; l++){
      nu.push(nu[l])
      
    }
    for (var l=0;l<k;l++){
        nu.shift()
    }
    console.log (nu);
})
([1,2,3,4,5],7);
     
        