 function Hello(){
const fruits = ["apple","mango","litchi"]

return(
   <div>
      <h2>Fruit List</h2>
      <ul>
         {fruits.map((fruit, index)=>(
            <li>{index} - {fruit}</li>
         ))}
      </ul>
   </div>
)

 }

 export default Hello