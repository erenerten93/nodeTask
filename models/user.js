

var dummydata = {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
      "zipcode": "92998-3874",
      "geo": {
        "lat": "-37.3159",
        "lng": "81.1496"
      }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
      "name": "Romaguera-Crona",
      "catchPhrase": "Multi-layered client-server neural-net",
      "bs": "harness real-time e-markets"
    }
  }
  dummyUser = JSON.parse(JSON.stringify(dummydata));    

class User {
  constructor() {
  }
  UpdateUserAttributesWithBody(inputBody) {
    var jsonKey;
    var inputData = JSON.parse(JSON.stringify(inputBody));
    var inputKeys = Object.keys(inputData);
    for (var i = 0; i < inputKeys.length; i++) {
      jsonKey = inputKeys[i];
      dummyUser[jsonKey] = inputData[jsonKey];
    }
    return dummyUser; // updated dummyuser.
  }
}


module.exports = User ;