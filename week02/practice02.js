// ฟังก์ชัน compareStudent ใช้เปรียบเทียบ object นักเรียน 2 คน
// โดยตรวจสอบว่า id และ name เหมือนกันหรือไม่
// ถ้าเหมือนกันจะคืนค่า "Same student" ถ้าไม่เหมือนจะคืนค่า "Different student"
function compareStudent(s1, s2) {
 if (s1.id === s2.id && s1.name === s2.name) {
   return "Same student";
 } else {
   return "Different student";
 }
}

// ฟังก์ชัน cald(item, itemsperpage)
// ใช้คำนวณจำนวนหน้าทั้งหมด (pagination)
// ตรวจสอบก่อนว่า item < 0 หรือ itemsperpage <= 0 หรือไม่
// ถ้าใช่ จะ throw error ว่าต้องมีค่ามากกว่า 0
// ถ้าไม่ใช่ จะใช้ Math.ceil() ปัดเศษขึ้นจากการหาร item ÷ itemsperpage
// ตัวอย่างการเรียก cald(-25, 5) จะเจอเงื่อนไข item < 0 ทำให้เกิด error
function cald(item,itemsperpage){
    if (item<0 || itemsperpage <= 0) {
        throw new Error('item per page must be greater than zero')
    }
     return Math.ceil(item/itemsperpage);
}
 
console.log(cald(-25,5));

// object student เก็บข้อมูลนักเรียน
// มี property ซ้อนกัน (nested object) เช่น moreinfo
// และใน moreinfo มีข้อมูลหลายแบบ เช่น string, number, boolean, undefined, null, array
const student = {
  name: "Bhiraphat",
  moreinfo: {
    nickname: "Peem",
    no: 1 ,
    men: true,
    money: undefined,
    null:null,
    array:[1,2,3]
 
  }
};


// class Car ใช้สร้าง object ของรถ
// constructor จะกำหนดค่า Brand และ Models
// การสร้าง object ใช้ new Car("Laboghini", "Huracan")
// แล้วสามารถเข้าถึง property ผ่าน .Brand หรือ .Models ได้
class Car {
  constructor(Brand, Models) {
    this.Brand = Brand;
    this.Models = Models;
  }
}
 
const myCar = new Car("Laboghini", "Huracan");
const anotherCar = new Car("Audi", "R8");
 
console.log(myCar.Brand)
console.log(anotherCar.Brand)


// การทดสอบสร้างรถ 2 คัน: myCar และ anotherCar
// เมื่อ console.log(myCar.Brand) จะได้ "Laboghini"
// และ console.log(anotherCar.Brand) จะได้ "Audi"
function compareStudent(s1, s2) {
 if (s1.id === s2.id && s1.name === s2.name) {
   return "Same student";
 } else {
   return "Different student";
 }
}