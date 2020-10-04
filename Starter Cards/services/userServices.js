var endpoint = "https://api.remotebootcamp.dev/api/users/";

let registerUser = (payload) => {
  const config = {
    method: "POST",
    url: endpoint + "register",
    data: payload,
    withCredentials: true,
    crossdomain: true,
    headers: { "content-Type": "application/json" },
  };
  return axios(config);
};

let logIn = (logCreds) => {
  const config = {
    method: "POST",
    url: endpoint + "login",
    data: logCreds,
    withCredentials: true,
    crossdomain: true,
    headers: { "content-Type": "application/json" },
  };
  return axios(config);
};
let getStatus = () => {
  const config = {
    method: "GET",
    url: endpoint + "current",
    crossdomain: true,
    headers: { "content-type": "application/json" },
  };
  return axios(config);
};

let getUser = (id) => {
  const config = {
    method: "GET",
    url: endpoint + id,
    crossdomain: true,
    headers: { "content-type": "application/json" },
  };
  return axios(config);
};

let logOutUser = () => {
  const config = {
    method: "GET",
    url: endpoint + "logout",
    crossdomain: true,
    headers: { "content-type": "application/json" },
  };
  return axios(config);
};
