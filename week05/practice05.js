// ฟังก์ชัน echo คืนค่าข้อความที่รับเข้ามา
function echo(msg) {
  return msg;
}
 
// ฟังก์ชัน getLength คืนค่าความยาวของ string
function getLength(str) {
  return str.length;
}
 
// ค่าคงที่ GPA
const GPA = 3.0;
 
// คลาส Book มี property isbn
class Book {
  constructor(isbn) {
    this.isbn = isbn;
  }
}
 
// export ออกไปใช้งานไฟล์อื่น
export { echo, getLength, GPA, Book };


// --------------------------------------------------------
// Array ของนักเรียน
const students = [
  { id: 66500102, name: "Suda", gpa: 2.5 },
  { id: 66500555, name: "ada", gpa: 2.8 },
  { id: 66500589, name: "pornchai", gpa: 3.25 },
  { id: 66500104, name: "Pornsak", gpa: 3.8 },
]

// sort() เรียงชื่อนักเรียนตามลำดับตัวอักษร (ใช้ localeCompare)
students.sort((a, b) => a.name.localeCompare(b.name));
console.log(students);


// --------------------------------------------------------
// ตัวอย่าง array ของตัวเลข
const array14 = [1, 30, 4, 21, 1000]

// sort() เรียงจากมากไปน้อย (ใช้การลบ n2-n1)
array14.sort((n1, n2) => n2 - n1)
console.log(array14);


// --------------------------------------------------------
// ฟังก์ชัน getPassingNames คืนค่าเฉพาะชื่อนักเรียนที่สอบผ่าน
function getPassingNames(students) {
  return students
    // filter เลือกเฉพาะคนที่ได้ score >= 70
    .filter(student => student.score >= 70)
    // map เอาเฉพาะชื่อและแปลงเป็นตัวพิมพ์ใหญ่
    .map(student => student.name.toUpperCase());
}

// ข้อมูลนักเรียนพร้อมคะแนนสอบ
const studentScores = [
  { name: 'Alice', score: 85 },
  { name: 'Bob', score: 92 },
  { name: 'Charlie', score: 68 },
  { name: 'David', score: 55 },
  { name: 'Eve', score: 78 },
];

// เรียกใช้ฟังก์ชัน
const passingNames = getPassingNames(studentScores);
console.log(passingNames); 
//Output: ["ALICE", "BOB", "EVE"]
