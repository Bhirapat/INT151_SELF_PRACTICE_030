const words = ['apple', 'malagor', 'banana', 'orange'];
const startwords = [];
 
// ใช้ forEach วนทุกคำใน array
// ถ้าคำขึ้นต้นด้วย 'm' ให้ push เข้า startwords
words.forEach(word => {
  if (word.startsWith('m')) {
    startwords.push(word);
  }
});
console.log(startwords);  // ["malagor"]


// ------------------------------------------------------
// การใช้ map() เพื่อแปลง object ให้เป็น fullName ตัวใหญ่ทั้งหมด
// (โค้ดนี้พิมพ์ผิดเล็กน้อย: person แต่ใช้ em → ต้องแก้เป็น person)
const fullNames = employees.map(person => 
 (person.firstName + " " + person.lastName).toUpperCase()
);


// ------------------------------------------------------
// อีกวิธี: ใช้ map() สร้าง array fullName ด้วย push
const fullName = [];
employees.map(name => {
    fullName.push(`${name.firstname.toUpperCase()} ${name.lastname.toUpperCase()} `)
})

// จากนั้น filter หาชื่อที่มีคำว่า 'jai' (ไม่สนตัวพิมพ์เล็กใหญ่)
const filterName = fullName.filter(nameJai =>
    nameJai.toLowerCase().includes('jai')
)
console.log(filterName);


// ------------------------------------------------------
// ตัวอย่างการใช้ reduce() เพื่อหาผลรวมราคาสินค้าในตะกร้า
const carts = [
  { productId: 1002, price: 10, amount: 5 },
  { productId: 2005, price: 100, amount: 2 },
  { productId: 5001, price: 5, amount: 4 },
]

// reduce ใช้สะสม total โดยคูณ price * amount แล้วบวกเข้า acc.total
const total = carts.reduce((acc, cur) => {
  return { total: acc.total + (cur.price * cur.amount) };
}, { total: 0 });

// ดึงค่า total ออกมา
const result = total.total
// คำนวณภาษี 7%
const netprice = total.total * 7 / 100

console.log("total : " , result)                 // ผลรวมราคาก่อนภาษี
console.log("net price : " , netprice)          // ภาษี 7%
console.log("รวมที่ต้องจ่่าย : " , result + netprice) // รวมทั้งสิ้น
