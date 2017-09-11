"use strict"
/*Дана строка, которая содержит имена пользователей, разделенные запятой – "Login1,LOgin2,login3,loGin4". Разбейте эту строку на массив строк (чтобы отдельно были логины), и приведите их все в нижний регистр.*/

var string = "Login1,LOgin2,login3,loGin4";
string = string.toLowerCase();

var arrey = string.split(",");
console.dir (arrey);
