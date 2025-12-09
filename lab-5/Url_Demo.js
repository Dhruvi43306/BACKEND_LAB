
//4.
// const url = require("url");
//  const myurl = "https://arjun.bala:8090/pofile/user?fn:arjun&ln:bala"
// const data = url.parse(myurl,true);
// console.log(data);

// console.log("Portocal:",data.protocol)
// console.log("HostName:",data.hostname);
// console.log("Host:",data.host);
// console.log("PathName:",data.pathname);
// console.log("QueryPermater:",data.query);
// console.log("PortNumber:",data.port);


//5.
 const myurl = "https://arjun.bala:8090";

// const data = new URL(myurl);
// const data = URL(myurl)
console.log(data)

data.pathname = "/profile/user"
data.searchParams.append("id:","10")
data.searchParams.append("Name:","Dhruvi");
console.log("Final URL:",data);
console.log("URL:",data.toString());
