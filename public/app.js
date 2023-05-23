var a =document.getElementById("a")
var b =document.getElementById("b")
var d =document.getElementById("c")
var e =document.getElementById("d")
var f =document.getElementById("date")
var g =document.getElementById("month")
var h =document.getElementById("year")
var i =document.getElementById("male")
var j =document.getElementById("female")
var k =document.getElementById("custom")







function register() {
    var gender;
    console.log(a.value);
    console.log(b.value);
    console.log(d.value);
    console.log(e.value);
    console.log(f.value);
    console.log(g.value);
    console.log(h.value);
   

    var arr =[i,j,k]
for(i=0;i<arr.length;i++){
    
    if(arr[i].checked){
        gender=arr[i].value;
        break
    }

}
 console.log("gender",gender)   
}
 
