let hello = 10;         // ধাপ ১: একটি সংখ্যা ইনপুট হিসেবে নাও।
for (let i = 1; i <= hello; i++) {          // ধাপ ২: ১ থেকে ওই সংখ্যাটি পর্যন্ত একটি লুপ চালাও।
    if (i % 3 == 0) {           // ধাপ ৩: লুপের প্রতিটি ধাপে সংখ্যা এবং ৩ দ্বারা ভাগশেষ (modulus) পরীক্ষা করো।
        console.log("Fizz");        // প্রিন্ট Fizz
    }
    else if (i % 5 == 0) {      // ধাপ ৪:  লুপের প্রতিটি ধাপে সংখ্যা এবং ৫ দ্বারা ভাগশেষ (modulus) পরীক্ষা করো।
        console.log("Buzz");        // প্রিন্ট Buzz
    }
    else if (i % 3 == 0 && i % 5 == 0) {        // ধাপ ৫:  লুপের প্রতিটি ধাপে সংখ্যা ৩ এবং ৫ দ্বারা ভাগশেষ (modulus) পরীক্ষা করো।
        console.log("FizzBuzz");        // প্রিন্ট FizzBuzz
    }
    else console.log(i);        // প্রিন্ট others numbers
}


let arr = [2, 4, 6, 8, 3, 5, 7];
let sum = 0;
let avg;
arr.forEach(function (element){
    sum = sum + element;

    avg = sum / arr.length;
})

console.log(sum)
console.log(avg)