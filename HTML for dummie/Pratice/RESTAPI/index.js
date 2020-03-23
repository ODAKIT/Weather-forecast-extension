var axios = require("axios");



//get menthod , gui request len REST URL co endpoint la listUser , lay data ve
axios.get("http://localhost:3000/listUser")
.then(function(res){
    console.log(res.data);
})

//Patch , request len REST API co endpoint sau do sua thong tin(khong the sua id)

axios.patch("http://localhost:3000/listUser/2",{
	name : "Okala",
	height : 900,
}).then(function(res){
	console.log(res.data);
})


// //post menthod , gui request len REST URL , yeu cau gui data len(them du lieu vao)
axios.post('http://localhost:3000/listUser', {
	name: "John",
	id : 1,
	})
	.then(function(res) {	
		console.log(res.data);
	})

//phuong thuc put cung dung de thay the(co the dung patch cung duoc) nhung dung put chu yeu de replace toan bo record , con patch thi chi 1 phan cua record
axios.put('http://localhost:3000/listUser/2	', {
	name : "FUCK",
	height : 200,
})
	.then(function(res) {
		console.log(res.data);
	})
	.catch(function(err) {
		console.log('Loi o dau roi');
	});





// //Xoa mot object trong db voi id tuong ung
axios.delete("http://localhost:3000/listUser/2")
	.then(function(res){
		console.log(res.data);
	})