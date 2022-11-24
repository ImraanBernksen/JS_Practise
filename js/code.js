// let Display = document.querySelector('button')
// Display.addEventListener('click', ()=>{
//     document.write("Imo Let's Go");
// })

// console.log(window)

// let numb1 = new Number(16);
// let numb2 = 13;
// console.log
// console.log(numb1);
// console.log(numb2);

const numbers = [4, 6, 8, 9, 11, 14]
console.log(numbers[0]);

let length = numbers.length;
console.log(length);

let first = numbers.first

numbers.forEach((item) => {
    if (item % 2 == 0) {
        console.log(item);
    }
})

if (numbers.includes(9)) {
    console.log('It does' + numbers.indexOf(9));
}