//getWords
import api from "./api";

export async function getWords() {
  const response = await api.get("/words");
  return response.data;
}
//
