import { UserContext } from "./context/UserContext";
import Home from './Home';

function App() {
  const users =[
  {
    name: "Vaibhav",
    role: "Admin",
    email:"divaibhav@gmail.com"
  },
  {
    name: "Jonh",
    role: "User",
    email:"Jonh@gmail.com"
  },

  {
    name: "Ramesh",
    role: "Admin",
    email:"Ramesh@gmail.com"
  },

  {
    name: "Dinesh",
    role: "User",
    email:"Dinesh@gmail.com"
  },

  {
    name: "Rajiv",
    role: "Admin",
    email:"Rajiv@gmail.com"
  }
];

  return (
    <>
     <UserContext.Provider value={users}>
      <Home/>
     </UserContext.Provider>
    </>
  )
}

export default App
