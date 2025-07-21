export const getEmployeeDetails = () =>{
    return JSON.parse(localStorage.getItem("Employees"))
}
export const getAdminDetails = () =>{
    return JSON.parse(localStorage.getItem("Admins"))
}