/// Soal - 01
/// Kamu diminta untuk membuat sebuah perulangan menggunakan for loop, untuk mencetak angka prima dari 1 ~ 100
/// EDIT HERE
let nums = ''
// for (let i = 1; i <= 100; i++) {
//     let numb = 0;

//     for (let j = 2; j < i; j++) {
//         if (i % j == 0) {
//             numb += 1;
//         }
//     }

//     if (i > 1 && numb == 0) {
//         console.log(i);
//     }
// }
function prime (i){
    if (i === 1 || i === 0){
        return false
    }else if (i === 2){
        return true
    }
    for (let j = 2; j < i; j++) {
         if (i % j == 0) {
           return false
             //nums += 1;
         }
     }
   return true  
 }
 
 function primeCount (){
 for (let i = 1; i <= 100; i++) {
     let nums = 0;
 const isPrime = prime(i)
   if (isPrime === false){
    nums += 1 
   }
     if (i > 1 && nums == 0) {
         console.log(i);
     }
 }
 }
 
 console.log(primeCount())
 
 


/// Soal - 02
/// Kamu diminta untuk menemukan bilangan prima ke-50, temukan bilangan tersebut menggunakan while loop 
let primeCounter = 0;
let fiftiethPrime;

/// EDIT HERE
let currentNumber = 0
while ( primeCounter < 50) {
    const isPrime = prime (currentNumber)

    if (isPrime === true){
        primeCounter += 1
    }
    currentNumber +=1
}

let fiftiethPrime = currentNumber -=1


console.log(fiftiethPrime)
/// Soal - 03
/// Kamu diminta untuk menemukan bilangan ganjil ke-50, temukan bilangan tersebut menggunakan do while loop
let oddCounter = 0;
function evOd(i){
    if ( i % 2 == 0) {
        return true;
     }else{
        return false;
    }
    }
    
let curNum = 0;
    
    do {
      curNum = curNum + 1;
      oddCounter = oddCounter + curNum;
    } while (oddCounter < 50){
     const oddNum = evOd(curNum) 
     if (oddNum == false){
       oddCounter +=1
     }
    }
    
let fiftiethOdd = curNum -=1
    
    
console.log(fiftiethOdd);
    