async function apiRegister(userName, email, password, pin) {
  return fetch("http://localhost:3000/api/users/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      userName,
      email,
      password,
      pin,
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      return data;
    });
}

async function apiLogin(email, password) {
  return fetch("http://localhost:3000/api/users/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      return data;
    });
}

async function apiGetUser() {
  return fetch("http://localhost:3000/api/users", {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  })
    .then((res) => res.json())
    .then((data) => {
      return data;
    });
}

async function apiCheckPin(pin) {
  return fetch("http://localhost:3000/api/users/pin", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    body: JSON.stringify({
      pin: pin,
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      return data;
    });
}

async function apiFastLogin() {
  return fetch("http://localhost:3000/api/users/fastLogin", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  })
    .then((res) => res.json())
    .then((data) => {
      return data;
    });
}
