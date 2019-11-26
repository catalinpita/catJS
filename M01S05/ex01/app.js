function getTime(){
var hour=new Date().getHours();
var minutes=new Date().getMinutes();
var seconds=new Date().getSeconds();
var milliseconds=new Date().getMilliseconds();

return `${hour}:${minutes}:${seconds}:${milliseconds}`;
}

console.log(getTime());
// console.log(
// new Date().getHours()+':'+
// new Date().getMinutes()+':'+
// new Date().getSeconds()+':'+
// new Date().getMilliseconds(),
// 'Am ajuns la EM!'
// );