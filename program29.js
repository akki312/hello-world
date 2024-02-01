// javasrcipt program to find the area of triangle
const side1 = parseInt(prompt('enter side1: '));
const side2 = parseInt(prompt('enter side2: '));
const side3 = parseInt(prompt('enter side3: '));
// calculate the semi-perimeter
const s = (side1 + side2 + side3) / 2;
// calculate the area
const areaValue = Math.sqrt(
    s * (s - side1) * (s - side2) * (s - side3)
    );
    console.log(
        'the area of the triangle is ${areaValue}'
);