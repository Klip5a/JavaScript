var a = prompt("Введите первое число", ""),
  b = prompt("Введите второе число", "");

if (isNaN(a)) {
    alert("Вы ввели символы а не число!");
} else if (a === '') {
    alert("Вы не ввели первое число!");
} else if (isNaN(b)) {
    alert("Вы ввели символы а не число!");
} else if (b === '') {
    alert("Вы не ввели второе число!");
} else if (a > b) {
    alert("Первое число больше второго");
} else if (a < b) {
    alert("Второе число больше второго");
} else {
    alert("Числа равны");
}