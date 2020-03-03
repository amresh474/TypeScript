console.log("Sending Data...............");

let logged;

function sendAnalatics(data: string) {
  console.log(data);
  logged = true;
  console.log(logged);
}

sendAnalatics("the data is ? ......");
