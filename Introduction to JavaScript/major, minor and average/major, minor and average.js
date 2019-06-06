var num1 = parseInt(prompt("Write the first number"))
var num2 = parseInt(prompt("Write the second number"))
var num3 = parseInt(prompt("Write the third number"))
var mayor
var menor
var media = (num1 + num2 + num3) / 3
if (num1 >= num2 && num1 >= num3) {
    mayor = num1
} else if (num2 >= num1 && num2 >= num3) {
    mayor = num2
} else if (num3 >= num1 && num3 >= num2) {
    mayor = num3
}
if (num1 <= num2 && num1 <= num3) {
    menor = num1;
} else if (num2 <= num1 && num2 <= num3) {
    menor = num2
} else if (num3 <= num1 && num3 <= num2) {
    menor = num3
}
document.write("The greater is " + mayor + "<br>")
document.write("The small is " + menor + "<br>")
document.write("The average is " + media + "<br>")