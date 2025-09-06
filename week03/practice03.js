// ฟังก์ชันนี้ใช้หาความถี่ของแต่ละคำในประโยค
function getFreqOfWords(sentence) {
  // ถ้า input เป็น null หรือ undefined ให้ return undefined
  if (sentence === null || sentence === undefined)
    return undefined
 
  // แปลงเป็นตัวเล็กทั้งหมด และแยกเป็น array ด้วยช่องว่าง
  const words = sentence.toLowerCase().split(" ")
  // สร้าง object ว่างเพื่อเก็บผลลัพธ์ (key = คำ, value = จำนวนครั้ง)
  const frequen = {}
 
  // วน loop คำแต่ละคำ
  for (let word of words) {
    if (frequen[word]) {
      // ถ้ามีคำนี้แล้ว ให้บวกเพิ่ม 1
      frequen[word] += 1
    } else {
      // ถ้ายังไม่มี ให้เริ่มนับที่ 1
      frequen[word] = 1
    }
  }
 
  // คืนค่า object ที่บอกความถี่ของแต่ละคำ
  return frequen
}
 
console.log(getFreqOfWords("Today is present and present is your gift"))
// output: { today: 1, is: 2, present: 2, and: 1, your: 1, gift: 1 }


// ฟังก์ชันบวกเลขสองจำนวน
function plus(num1, num2) {
  return num1 + num2;
}
let result = plus(5, 7);
console.log("number 1 + number 2 = ", result);
// output: number 1 + number 2 =  12


// ฟังก์ชัน sum ใช้ rest parameter (...number) รับตัวเลขไม่จำกัด
function sum(...number){
    let count = 0
    // ใช้ arguments วน loop เพื่อเข้าถึงค่าที่ส่งเข้ามา
    for (i of arguments){
        // สร้างตัวแปร number = 2 (ไม่ได้ใช้จริง แค่ทับซ้อนชื่อ)
        let number = 2
        count += i
    }
    return count
}
 
console.log(sum(1,2,3,4,5,6,7,8,9))  // output: 45
console.log(sum())                   // output: 0
