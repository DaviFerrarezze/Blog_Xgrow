function UserLogin(email, password) {
    const registredUsers = JSON.parse(localStorage.getItem("users")) || [];

    const user = registredUsers.find(user => user.email === email && user.password === password)

}

export default UserLogin;