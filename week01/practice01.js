
//อันบนผมทำคอมตัวเอง
const arr = ['Hi', 1, true]
console.log(arr.length)
console.log(arr[0])
console.log(arr.length - 1)
arr.push({ name: "Sombat", age: 25 })
arr.push(['mango', 'banana'])
arr.forEach(item => {
    console.log(item);  
});
 
//อันนี้ผมทำในคอมเพื่อนเพราะเพื่อนขอแลกที่ไปสอนเพื่อนอีกคนนึงครับ
const myDog = ["NumChock", 2, 50, "GermanSheperd"]
console.log(myDog.length);
console.log(myDog[0]);
console.log(myDog.length - 1);
console.log(myDog[myDog.length-1])
myDog.push (('Euro','Beer') , {name:'euro', age : 22})
console.log(myDog)
myDog[myDog.length]=['หมา','เวฟ 125']
for (let i = 0; i<myDog.length;i++){
    console.log(myDog[i])
}

