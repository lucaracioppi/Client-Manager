import { json } from "react-router-dom";

export async function getClients() {
  const response = await fetch(import.meta.env.VITE_API_URL);
  const result = response.json();
  return result;
}

export async function getClient(id) {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/${id}`);
  const result = response.json();
  return result;
}

export async function addClients(data) {
  try {
    const response = await fetch(import.meta.env.VITE_API_URL, {
      method: "post",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    await response.json();
  } catch (error) {
    console.log(error);
  }
}

export async function editClients(id, data) {
  try {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/${id}`, {
      method: "put",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    await response.json();
  } catch (error) {
    console.log(error);
  }
}

export async function deleteClients(id) {
  try {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/${id}`, {
      method: "delete",
    });
    await response.json();
  } catch (error) {
    console.log(error);
  }
}
