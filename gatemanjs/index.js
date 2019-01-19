var mongoose = require('mongoose');
var gateman = require("gatemanjs").GateMan(mongoose);
gateman.createRole("admin").then((role) => {
    console.log(role);
}).catch((err) => {
    console.log(err);
});
gateman.createClaim("delete").then((claim) => {
    console.log(claim);
}).catch((err) => {
    console.log(err);
});
gateman.createRole("admin").then(role => {
    gateman.allow("admin").to("delete").then(result => {
        //result is true if claim was assigned successfully
    }).catch(err => {
        //err contains the error message, if any
    });
})
for (let p in gateman) {
    if (gateman[p] instanceof Function) {
        console.log(p)
    } else {
        console.log(p)
    }
}
// console.log(gateman.toString())
// gateman.disallow('role').from('claim').then(result => {
//     //result is true if claim was retracted
// }).catch(err => {
//     //err contains any error message, if any
// });