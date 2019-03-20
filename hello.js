
function Hello(greets)
{
  function logGreets(){
   const greetsTime = new Date().toTimeString();
   console.log(`${greets} (${greetsTime})`);
}
return { logGreets: logGreets};

}