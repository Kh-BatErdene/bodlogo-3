//1. Өгөгдсөн массивийн нийлбэрийг олж буцаа.
function sumnumber(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
console.log("1." + " " + sumnumber([1, 2, 3, 4, 5]));

//

//

//

//2.Өгөгдсөн массивийн дунджийг олж буцаа.
function mid(num) {
  let sum = 0;
  for (let i = 0; i < num.length; i++) {
    sum += num[i] / num.length;
  }
  return sum;
}
console.log("2." + " " + mid([1, 2, 3, 4, 5]));

//

//

//

// 3. A болон B тоо өгөгдөв. А тооны B зэргийг давталт ашиглан олж буцаа.
function deg(a, b) {
  let result = 1;

  for (let i = 0; i < b; i++) {
    result *= a;
  }
  return result;
}
console.log("3." + " " + deg(5, 3));

//

//

//

// 4. Өгөгдсөн массивийн хамгийн их тоог олж буцаа.

function max(arr) {
  let max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}
console.log("4." + " " + max([20, 5, 8, 15, 56, 26, 81, 3, 58, 5]));

//5. Өгөгдсөн string-ийн урвууг буцаа. (Hello -> olleH).

function reverse(str) {
  let result = "";
  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }
  return result;
}
console.log("5." + " " + reverse("Hello"));

//

//

//

//

//6. Өгөгдсөн string-ийн тэмдэгт бүр давхардаж ороогүй эсэхийг шалга. (Check if all chars are unique)

function isunque(str) {
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j < str.length; j++) {
      if (str[i] === str[j]) {
        return "Overlap";
      }
    }
  }
  return "No overlap";
}
console.log("6." + " " + isunque("Helo"));

//

//

//

//

//7. Өгөгдсөн 2 массивийн огтлолцлыг олж буцаа.

function intersec(arr1, arr2) {
  let seen = [],
    result = [];
  for (let i = 0; i < arr1.length; i++) {
    seen[arr1[i]] = true;
    for (let i = 0; i < arr2.length; i++) {
      if (seen[arr2[i]]) {
        result.push(arr2[i]);
      }
    }
  }
  return result;
}
console.log("7." + " " + intersec([1, 2, 3, 4], [4, 5, 6, 7, 8]) + "\n8.");

//

//

//

//

//

//8. Өгөгдсөн N тооны өндөртэй пирамид ‘*’ ашиглан хэвлэ.
function pyramid(rows) {
  for (let i = 0; i < rows; i++) {
    let spaces = "";
    for (let j = 0; j < rows - i; j++) spaces += " ";
    for (let k = 0; k <= i; k++) spaces += "* ";
    console.log(spaces);
  }
}

pyramid(5);

//

//

//

//

//

//

//9. Өгөгдсөн N тооны факториалыг олж буцаа.

function factorial(n) {
  return n ? n * factorial(n - 1) : 1;
}

console.log("9." + " " + factorial(5) + "\n10.");

//

//

//

//

//

//

//10. Өгөгдсөн N тоо хүртэлх бүх тэгш тоог хэвлэ.

function evenNumbers(n) {
  for (let i = 0; i <= n; i += 2) {
    console.log(i);
  }
}
evenNumbers(6);

//

//

//

//

//

//

//11. Өгөгдсөн N тоо палиндром тоо эсэхийг шалгаад мөн бол true, биш бол false буцаа.

function palindromNumber(str) {
  let j = str.length - 1;

  for (let i = 0; i < str.length / 2; i++) {
    if (str[i] === str[j]) {
      return true;
    }
    return false;
  }
}
console.log("11." + " " + palindromNumber("racecar"));

//

//

//

//

//

//

//

//12. Өгөгдсөн N тоо анхны тоо мөн эсэхийг шалгаад мөн бол true, биш бол false буцаа.

function isPrime(num) {
  flag = true;
  if (num < 2) {
    flag = false;
  }
  for (let j = 2; j <= Math.ceil(num / 2); j++) {
    if (num % j == 0) {
      flag = false;
      break;
    }
  }
  return flag;
}
console.log("12." + " " + isPrime(5));
