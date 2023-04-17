import api from "./api";

export async function signUp(name, whatsapp,email, password, ) {
  console.log(name);
  console.log(whatsapp);
  console.log(email);
  console.log(password);
  const response = await api.post("/users", {
    name,
    whatsapp,
    email,
    password,
  });
  return response.data;
}
//

