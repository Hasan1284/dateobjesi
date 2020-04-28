 // Date Objeckt
/**
 let d = new Date();
 let birthday = new Date(1980,3,5);

// Set metotları
d.setFullYear(2019);
d.setHours(15);
d.setMinutes(46);




 // Get metotları
console.log(d.getDate());
console.log(d.getDay());
console.log(d.getFullYear());
console.log(d.getHours());

console.log(d.getFullYear() - birthday.getFullYear());
 console.log(d);
 console.log(typeof d);

 // bu sefer de number metotları çalısılacaktou
 

 //farklı date uygulamaları
 // 1- şimdiki tarihin gün ay ve yıl bilgisini yazdırınız
 
 //var dt = new Date();

 //console.log(dt);
 //console.log(dt.getMonth()+2);
 //onsole.log(dt.getDate());
 //console.log(dt.getFullYear());

 // tarih ve saat bilgi içeren bir date objesi oluşturunz

 //var dtA = new Date("08/24/2010 14:50:10");

 //console.log(dtA);

 var dtC = new Date("1/1/1990");

 var dayOfMonth = dtC.getDate();
 dtC.setDate(dayOfMonth-1);
 
 console.log(dtC);

 // iki tarih arasında gecen zamaını bulunuz

 var start = new Date("1/1/1990");
 var end = new Date("1/10/1991");

var milisecond = end - start;
var saniye = milisecond / 1000;
var dakika = saniye / 60;
var saat = dakika / 60;
var gun = saat / 24;

console.log("milisecond: "+ saniye);
console.log("saniye: "+ saniye);
console.log("dakika :"+ dakika);
console.log("saat :"+ saat);
console.log("gun : "+ gun);
*/


// yal hesaplama nasıl yapılır

var birthday = new Date("8/1/1985");
var ageDifMs = Date.now() - birthday.getTime();
var ageDate = new Date(ageDifMs);

console.log(ageDate.getFullYear() -1970);
//console.log(birthday.getTime());
//console.log(Date.now());


