//найти максимум в массиве
const list = [15,5,78,45,98,12,49,99]
let max = list[0];
for(itvar of list){
 if(itvar>max){
    max=itvar;
 }
}
console.log(max)

//вывести таблицу умножения для числа 5 
for(let i=1;i<=10;i++){
    console.log(`5 x ${i} = ${5*i}`);
  }
  //правда знак $ подсмотрел в ин
  
// сумма четных чисел массива
let sumeven=0;
for(itvar of list){
    if(itvar % 2 === 0){
       sumeven +=itvar;
    }
   }
console.log(sumeven)

//реверс массива
for(i=list.length; i>=0; i--){
    console.log(list[i]);
}





  