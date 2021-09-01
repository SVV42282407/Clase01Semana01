//let { name, email } = { name: "John", email: "john@example.com"}
//console.log(name); // "John" 
//console.log(email); // "john@example.com"
let { name, email, ...rest} = { name: "John", email: "john@example.com", city: "Phoenix", state: "AZ", country: "USA"}
console.log(rest);
//console.log(rest === { city: "Phoenix", state: "AZ", country: "USA"});// true

({name, email, rest} = {name, email, rest:{city: "Phoenix", state: "AZ", country: "EE.UU"}});
console.log(rest);