var students = [
    {
    NIS : '170700786',
    Nama : 'Gia',
    Avatar : 'img/1.jpg',
    Alamat : 'Simpang Kapuak'
    },
    {
    NIS : '170700788',
    Nama : 'Khairul Mustafa',
    Avatar : 'img/2.jpg',
    Alamat : 'Mungka'
    },
    {
    NIS : '170700803',
    Nama : 'Satria Ramadanol',
    Avatar : 'img/3.jpg',
    Alamat : 'Tabek Panjang'
    },
    {
    NIS : '170700801',
    Nama : 'Rizki Ananda',
    Avatar : 'img/4.jpg',
    Alamat : 'Kubang'
    },
    {
    NIS : '170700792',
    Nama : 'M Akhdanul Wafiy',
    Avatar : 'img/5.jpg',
    Alamat : 'Andiang'
    },
    {
    NIS : '170700714',
    Nama : 'Al Azim',
    Avatar : 'img/6.jpg',
    Alamat : 'Rambek'
    },
    {
    NIS : '170700806',
    Nama : 'Syukriatul Zandri',
    Avatar : 'img/7.jpg',
    Alamat : 'Limbanang'
    },
    {
    NIS : '170700800',
    Nama : 'Rizki Fauzan',
    Avatar : 'img/8.jpg',
    Alamat : 'Limbanang'
    },
    {
    NIS : '170700818',
    Nama : 'Hamizan Rafiqi Azuris',
    Avatar : 'img/9.jpg',
    Alamat : 'Suliki'
    },   
    {
    NIS : '170700790',
    Nama : 'M Revan Apriyandi',
    Avatar : 'img/10.jpg',
    Alamat : 'Limbanang'
    },
    {
    NIS : '170700781',
    Nama : 'Arif Habibie',
    Avatar : 'img/11.jpg',
    Alamat : 'Andiang'
    },
    {
    NIS : '170700791',
    Nama : 'Reyhan Septio',
    Avatar : 'img/12.jpg',
    Alamat : 'Padang Kandi'
    },
    {
    NIS : '170700834',
    Nama : 'Qolbi',
    Avatar : 'img/13.jpg',
    Alamat : 'Taeh'
    },
    {
    NIS : '170700922',
    Nama : 'Muhammad Andika',
    Avatar : 'img/14.jpg',
    Alamat : 'Kubang'
    },
    {
    NIS : '170700808',
    Nama : 'Yoghie Lailatul Igbal',
    Avatar : 'img/15.jpg',
    Alamat : 'limbanang'
    },
    {
    NIS : '170700823',
    Nama : 'Farid',
    Avatar : 'img/16.jpg',
    Alamat : 'Ampang Gadang'
    },
    {
    NIS : '170700713',
    Nama : 'Ahmad Fuadi',
    Avatar : 'img/17.jpg',
    Alamat : 'Dangung-Dangung'
    },
    {
    NIS : '170700799',
    Nama : 'Muhammad Lutfi',
    Avatar : 'img/18.jpg',
    Alamat : 'Tanjung Jati'
    },
    {
    NIS : '170700838',
    Nama : 'Wendi Hermawan',
    Avatar : 'img/19.jpg',
    Alamat : 'Maek'
    },
    {
    NIS : '170700757',
    Nama : 'Muhammad Ridwan',
    Avatar : 'img/20.jpg',
    Alamat : 'Limbanang'
    },
]
//ini untuk proses ketika pencarian data
//ketika tombol cari ditekan
function search(){
	var ketik = document.getElementById('search').value
	for (var i = 0; i < students.length; i++) {
		if (students[i].NIS == ketik || students[i].Nama == ketik) {
            document.getElementById('gambar').setAttribute("src",students[i].Avatar)
			document.getElementById('nama').textContent = "Nama : "+students[i].Nama
            document.getElementById('kode').textContent = "NIS : "+students[i].NIS
            document.getElementById('rumah').textContent = "Alamat : "+students[i].Alamat
		}
	}
}