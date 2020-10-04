var endpoint = "https://api.remotebootcamp.dev/api/jobs/";

let addJob = (payload) => {
  const config = {
    method: "POST",
    url: endpoint,
    data: payload,
    crossdomain: true,
    headers: { "content-Type": "application/json" },
  };
  return axios(config);
};

let getJobs = (pageIndex, pageSize) => {
  const config = {
    method: "GET",
    url: endpoint + `?pageIndex=${pageIndex}&pageSize=${pageSize}`,
    crossdomain: true,
    headers: { "content-Type": "application/json" },
  };
  return axios(config);
};

let updateJob = (id, payload) => {
  const config = {
    method: "PUT",
    url: endpoint + id,
    data: payload,
    crossdomain: true,
    headers: { "content-Type": "application/json" },
  };
  return axios(config);
};

let getJobById = (id) => {
  const config = {
    method: "GET",
    url: endpoint + id,
    crossdomain: true,
    headers: { "content-Type": "application/json" },
  };
  return axios(config);
};

let findJob = (searchString) => {
  const config = {
    method: "GET",
    url: endpoint + `search?pageIndex=0&pageSize=10&q=${searchString}`,
    crossdomain: true,
    headers: { "content-Type": "application/json" },
  };
  return axios(config);
};

let updateJobStatus = (id, statusId) => {
  const config = {
    method: "PUT",
    url: endpoint + id + `/${statusId}`,
    crossdomain: true,
    headers: { "content-Type": "application/json" },
  };
  return axios(config);
};
