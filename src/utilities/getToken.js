export async function getJWTToken(user) {
  try {
    const res = await fetch("https://hello-foodies.web.app/jwt", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    });
    const data = await res.json();
    //console.log(data);
    localStorage.setItem("helloFoodies-jwt", data.token);
  } catch (e) {
    console.log(e);
  }
}
