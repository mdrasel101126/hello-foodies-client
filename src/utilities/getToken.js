import { json } from "react-router-dom";

export async function getJWTToken(user) {
  try {
    const res = await fetch("http://localhost:5000/jwt", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    });
    const data = await res.json();
    //console.log(data);
    localStorage.setItem("helloFoodies-jwt", JSON.stringify(data.token));
  } catch (e) {
    console.log(e);
  }
}
