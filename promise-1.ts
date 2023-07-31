const RandomInt= (): string => {
    return (Math.random ()* 10).toFixed(0);
 };
  
 const find_even = new Promise <number> ((resolve, reject) => {
    setTimeout( function(): void{
 const value = parseInt(RandomInt());
  
 if (value %2== 0){
    resolve(value);
  
 }else{
    reject ('Odd number found!');
 }
    }, 1000);
 }
 );
  
 find_even.then ((value) => {
  
    console.log ('Resloved-1:', value +1 );
    return `${value +1}`;
 }).then ((value) => {
    console.log ('Resloved-2:', value +1 );
 }).catch ((error ) => {
    console.log ('Rejected:', error );
 });
 