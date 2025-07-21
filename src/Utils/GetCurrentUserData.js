export const CurrentUserData = () =>{
    return JSON.parse(localStorage.getItem("loggedInUser"))
}