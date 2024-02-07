// nested object
const student = {
    name: 'john',
    age: 20,
    marks: {
        science: 40,
        math: 69
    }
}
// accessing property of student object
console.log(student.marks); //{science: 40, math:69}
// accessing property of marks object
console.log(student.marks.math); //40