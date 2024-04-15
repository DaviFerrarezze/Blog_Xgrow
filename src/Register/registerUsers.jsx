//funcao para armazenar e adicionar novos usuarios

function RegisterUser(name, email, password) {
  const registredUsers = JSON.parse(localStorage.getItem("users")) || [];

  const inUseEmail = registredUsers.find((user) => user.email === email);
  if (inUseEmail) {
    return false;
  }

  registredUsers.push({ name, email, password });
  localStorage.setItem("users", JSON.stringify(registredUsers));

  return true;
}

export default RegisterUser;
