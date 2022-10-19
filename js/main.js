//muterin kartu
$(document).ready(function() {
    $('.card').hover(function() {
      $(this).addClass('flipped');
    }, function() {
      $(this).removeClass('flipped');
    });
  });

//jquery
$( function() {
  $( document ).tooltip();
} );

//menampung hasil pesan
const scriptURL = 'https://script.google.com/macros/s/AKfycbwxDxQeTH1mAdycXqQREfd5lbJ49Ov8fEc6oeZ0WAH_41n5QVSd05FOnXp2wla9NqHPCA/exec'
		const form = document.forms['Hasil Kirim Pesan']
    const btnKirim = document.querySelector('.btn-kirim');
    const btnLoading = document.querySelector('.btn-loading');
    const alertBerhasil = document.querySelector('.alert-berhasil');
    const alertGagal = document.querySelector('.alert-gagal');

		form.addEventListener('submit', e => {
			e.preventDefault()
      // menampilkan tombol loading, menghilangkan tombol kirim
      btnLoading.classList.toggle('d-none');
      btnKirim.classList.toggle('d-none');
			fetch(scriptURL, { method: 'POST', body: new FormData(form) })
				.then(response => {
          // menghilangkan tombol loading, menampilkan tombol kirim
          btnLoading.classList.toggle('d-none');
          btnKirim.classList.toggle('d-none');
          // tampilan alert berhasil
          alertBerhasil.classList.toggle('d-none');
          //reset form
          form.reset();
          //console log jika pesan berhasil dikirim
          console.log('Success!', response)
        })
				.catch(error => {
          // tampilkan alert gagal
          alertGagal.classList.toggle('d-none');
          //reset form
          form.reset();
          //console log jika pesan gagal dikirim
          console.error('Error!', error.message)
      })
		})