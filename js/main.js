var jawaban = window.confirm("Anda ingin mengubah gambar di bagian profil ?");  
	document.write("Jawaban Anda : " + jawaban);

var myImage = document.querySelector('img');

myImage.onclick = function() {
	var mySrc = myImage.getAttribute('src');
	if(mySrc === 'img/me1.jpg') {
		myImage.setAttribute ('src','img/me2.jpg');
	}	else {
		myImage.setAttribute ('src','img/me1.jpg');
	}
	{
		alert ("Ingin mengubah gambar?");
	}
}