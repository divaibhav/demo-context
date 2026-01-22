# Practice Problems

## Problem: Create a React application that uses Context API with state to manage authentication status across the application.

### Requirements


1. Create an AuthContext using createContext.
2. Store a boolean state isLoggedIn inside the Context Provider.
3. Provide two functions through context:


    3.1  login() → sets isLoggedIn to true

    3.2 logout() → sets isLoggedIn to false


4. Wrap the application (or a part of it) with AuthProvider.
5. Consume the context in a child component using useContext.
6. Display:

    6.1 "Welcome User" if the user is logged in


    6.2    "Please Login" if the user is logged out


7. Show:


    7.1 Login button when logged out


    7.2 Logout button when logged in


