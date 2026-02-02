
 function Hello(){
    function getName(yourname){
        return yourname;
    }

     function handleClick(){
        alert("you are Gay")
     }

     const handleInput = (event)=>{
        console.clear()
        console.log("value: ", event.target.value);
        

     }

     const name = "Nischal"

   return (
    <>
    
    <h1>Hello {getName(name)}</h1>
    <button  onClick={handleClick}>Don't click me</button>
    <button onClick={()=>alert("Hello Developer")}>say hello</button>
    <br />
    <input type="text" onChange={handleInput} placeholder="type soomething" />
    
    </>
   )
 }
 export default Hello