var endpoint = "https://api.remotebootcamp.dev/api/friends/";

//AJAX CALL TEMPLATE

/*
let [nameOfCall] = (params) => {
    const config = {
        method: [method],
        url: [endpoint + w/e is needed],
        data(if needed): param,
        crossdomain:true,
        crossdomain: true,
        headers: { "content-Type": "application/json" }
    };
    return axios(config);

    callbacks belong with function calls, not here
}
*/

let addFriend = (payload) => {
  /*expected payload format:
  {
      "title": "NAME",
      "bio": "string",
      "summary": "string",
      "headline": "string",
      "slug": "string",
      "statusId": "NotSet",
      "primaryImage": "string"
    }*/

  const config = {
    method: "POST",
    url: endpoint,
    data: payload,
    crossdomain: true,
    headers: { "content-Type": "application/json" },
  };
  return axios(config);
};

let getFriends = (pageIndex, pageSize) => {
  // pageIndex = starting with which friend, pageSize = how many friends to show
  const config = {
    method: "GET",
    url: endpoint + `?pageIndex=${pageIndex}&pageSize=${pageSize}`,
    crossdomain: true,
    headers: { "content-Type": "application/json" },
  };
  return axios(config);
};
let updateFriend = (id, payload) => {
  /*expected payload format
  {
      "id": id,
      "title": "string",
      "bio": "string",
      "summary": "string",
      "headline": "string",
      "slug": "string",
      "statusId": "NotSet",
      "primaryImage": "string"
    }*/
  const config = {
    method: "PUT",
    url: endpoint + id,
    data: payload,
    crossdomain: true,
    headers: { "content-Type": "application/json" },
  };
  return axios(config);
};

let getFriend = (id) => {
  const config = {
    method: "GET",
    url: endpoint + id,
    crossdomain: true,
    headers: { "content-Type": "application/json" },
  };
  return axios(config);
};

let removeFriend = (id) => {
  const config = {
    method: "DELETE",
    url: endpoint + id,
    crossdomain: true,
    headers: { "content-Type": "application/json" },
  };
  return axios(config).then(function (response) {
    return id;
  });
};

let findFriend = (searchString) => {
  const config = {
    method: "GET",
    url: endpoint + `search?pageIndex=0&pageSize=10&q=${searchString}`,
    crossdomain: true,
    headers: { "content-Type": "application/json" },
  };
  return axios(config);
};

let updateFriendStatus = (id, status) => {
  const config = {
    method: "PUT",
    url: endpoint + `${id}/${status}`,
    crossdomain: true,
    headers: { "content-Type": "application/json" },
  };
};
