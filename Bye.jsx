function Bye(){
const users = [
        {firstName:"john",lastName:"Doe",age:25},
        {firstName:"Salman",lastName:"Khan",age:51},
        {firstName:"Akshay",lastName:"Vashist",age:29}
]
function fullName(user){
    return user.firstName +" "+user.lastName;
}
return(
    <div>
        <h2>Person Details</h2>
        <ul>
        {users.map((user, index)=>(
        <li>{fullName(user)} is {user.age} years old</li>
        ))}
        </ul>
        
    </div>
)
}
export default Bye