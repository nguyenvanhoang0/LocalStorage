var usernametag = document.getElementById('c1_id')
var fullnametag = document.getElementById('c2_id')
var emailtag = document.getElementById('c3_id')
var birhdaytag = document.getElementById('c4_id')
var result = document.getElementById('b2')

var productlist=[]

function saveData()  {
	var product = {
        "username": userNametag.value,
		"fullname": fullNametag.value,
		"email":  emailtag.value,
		"birhday": birhdaytag.value,		

		}
		productlist.push(product)


	showproduct()	
	return false
}

function removeproduct(i) {
	var option = confirm('ban co chac muon xoa')
	if(!option) return

	productlist.splice(i,1)	
    showproduct()
}
function selectproduct(i){
    var p = productlist[i]

    usernametag.value = p.username
    fullnametag.value = p.fullname
    emailtag.value = p.email
    birhdaytag.value = p.birhday

}

function showproduct() {
	result.innerHTML = ''
    i=0
	for(var product of productlist){
		result.innerHTML += `<tr>
					<td>${i+1}</td>
					<td>${product.username}</td>
					<td>${product.fullname}</td>
					<td>${product.email}</td>
					<td>${product.birhday}</td>
					<td><button class="c7" onclick="selectproduct(${i})">edit</button></td>
					<td><button class="c8 onclick="removeproduct(${i})" >delete</button></td>


				</tr>`
			i++
	}
}