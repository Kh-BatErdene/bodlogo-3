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

//

//

//

//

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

pyramid(3);

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
console.log("11." + " " + palindromNumber("123321"));

//

//

//

//

//

//

//

//12. Өгөгдсөн N тоо анхны тоо мөн эсэхийг шалгаад мөн бол true, биш бол false буцаа.

function isPrime(num) {
  for (let i = 2; i < num; i++) {
    if (num % i == 0) {
      return false;
    }
    return true;
  }
}
console.log("12." + " " + isPrime(13) + "\n13.");

//

//

//

//

//

//

//13. Өгөгдсөн N тоо хүртэлх бүх анхны тоог хэвлэ.

function countPrimes(num) {
  let plus = 0;
  for (let i = 2; i <= num; i++) {
    let prime = true;
    for (let j = 2; j < i; j++) {
      if (i % j == 0) {
        prime = false;
      }
    }
    if (prime) {
      plus++;
      console.log(i);
    }
  }
  return plus;
}

console.log("Bvgd:", countPrimes(13));

//

//

//

//

//

//14. Өгөгдсөн N тоо хүртэлх бүх фибоначийн дарааллын тоог хэвлэ.
function fionacci(num) {
  let fib = [0, 1];

  for (i = 2; i <= num; i++) {
    fib[i] = fib[i - 2] + fib[i - 1];
  }
  return fib;
}
console.log("14." + " " + fionacci(8));

//

//

//

//

//

//

//15. Өгөгдсөн массивийн давхцсан тоонуудыг арилгаад буцаа. ([1,2,2,3,4,3] -> [1,2,3,4])

function unique(arr) {
  let result = [];

  let set = {};
  for (let i = 0; i < arr.length; i++) {
    if (set[arr[i]] === undefined) {
      result.push(arr[i]);
      set[arr[i]] = true;
    }
  }
  return result;
}
console.log("15." + " " + unique([1, 2, 2, 3, 4, 3]));

//

//

//

//

//

//

//

//16. Дараалсан бүхэл тоонуудаас бүрдсэн массив байв. Даанч нэг тоо нь алга болчиж. Алга болсон тоог ол.

function missingItems(arr, n) {
  let missingItems = [];
  for (let i = 1; i <= n; i++) {
    if (!arr.includes(i)) missingItems.push(i);
  }
  return missingItems;
}
console.log("16." + " " + missingItems([9, 1, 4, 2, 10, 6], 10));

//

//

//

//

//

//

//

//

//17. N тоо өгөгдөв. Паскалын гурвалжны N дахь мөрийг хэвлэ.

var getRow = function (rowIndex) {
  if (rowIndex == 0) {
    return [1];
  } else {
    var row = [1];
    previousLine = getRow(rowIndex - 1);
    for (let i = 0; i < previousLine.length - 1; i++) {
      row.push(previousLine[i] + previousLine[i + 1]);
    }
    row.push(1);
  }
  return row;
};
console.log(getRow(3));

//18. Өгсөн 2 тооны хамгийн их ерөнхий хуваагчийг ол.

function egcd(a, b) {
  if (a == 0) return b;

  while (b != 0) {
    if (a > b) a = a - b;
    else b = b - a;
  }

  return a;
}
console.log(egcd(40, 60));

//

//

//

//

//

//

//19. Цифрүүдийн кубуудын нийлбэр нь өөртэйгөө тэнцүү байдаг бүх 3 оронтой тоог ол. /Armstrong number/

//

//20. N тоо болон массив өгөгдөв. Нийлбэр нь N байх 2 тоог олж index ийг нь буцаа. олдохгүй бол “Error” буцаа.

//21. Өгөгдсөн массивийг өсөх эрэмбээр эрэмблэ.

let arr = [4, 2, 5, 1, 3];
let temp;

function converter(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}

const newArr = converter(arr);
console.log(newArr);
