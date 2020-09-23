function myFunction() {

	const requestOptions = {
  filters: [{ usbVendorId: 0x2341 }],
};
navigator.serial.requestPort(requestOptions)
.then(device => {


  
          device.open({baudrate : 115200} );
     

          alert(device);
    const reader = device.readable.getReader();

    for  (const { value, done } of reader.read()) {
  if (done) break;
  console.log(value);

    alert(device)
    console.log(device);
   
}
})
.catch(error => { console.log(error); });

}