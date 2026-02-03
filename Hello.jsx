import './App.css'
function Hello(){

    const isVisible = true;

    const visibility = isVisible ? "visible":"unvisible";

    return(
      <div>
         
         <h1 className={isVisible ? "visible" : "unvisible"}>Conditional rendering</h1>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, laudantium!</p>
         
      </div>
    )
   //  let message;

   //  if(isLoggedIn){
   //    message =<h1>Welcome user</h1>
   //  }else{
   //    message = <h2>Please login</h2>
   //  }
   //  return <div>{message}</div>
}
export default Hello

