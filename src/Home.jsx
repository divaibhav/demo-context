import { useContext } from "react";
import { UserContext } from "./context/UserContext";

function Home(){
    //consume the data
    const users = useContext(UserContext);
    return(
        <div>
            <h1>User info</h1>
            {
            users.filter(user=> user.role === "Admin")
                .map((user => {
                return(
                    <div>
                        <h3>Name: {user.name}</h3>
                        <h3>Role: {user.role}</h3>
                        <h3>Email: {user.email}</h3>
                        </div>
                )
            }))}
        </div>

    );
}
export default Home;