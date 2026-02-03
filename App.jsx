
import Hello from "./hello"
import Bye from "./bye"

function App() {
  const isLoggedIn = false;
  if(isLoggedIn){
    return<Hello/>
  }else{
    return<Bye/>

  }
}

export default App
