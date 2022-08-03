// Variabel global untuk menampung nilai input
var data = []

// Fungsi untuk membuat palindrome
const palindrome = (data) => {
  var palindromeData = []
  // Memasukkan seluruh data input pada variabel temporary
  for (let i in data) {
    palindromeData.push(data[i])
  }
  // Memasukkan data input secara terbalik pada variabel temporary
  for (let i = data.length - 2; i >= 0; i--) {
    palindromeData.push(data[i])
  }
  // Menghilangkan Koma dan menyamakan format menjadi Uppercase
  return palindromeData.toString().replaceAll(',', '').toUpperCase()
}

// Mendefinisikan readline sebagai library untuk input dan output dengan terminal
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
})

// Fungsi untuk mendapatkan input dan mencetak output
const getData = () => {
  readline.question(`Masukkan Kata : `, word => {
    // Melakukan filter agar hanya huruf saja yang dapat dimasukkan
    const letterOnly = /^[A-Za-z]+$/
    if(word.match(letterOnly)) data.push(word);
    // Mencetak nilai palindrome
    console.log(`Palindrome    : ${palindrome(data)}`)
    // Membuat switch case sebagai opsi untuk melanjutkan kalimat atau mengakhiri
    const getConfirmation = () => {
      readline.question('Lanjut? (lanjut=y, reset=r, selesai=q) ', confirmation => {
        switch(confirmation.toLowerCase()) {
          case 'r':
            data = []
          case 'y':
            getData()
            break
          case 'q':
            readline.close()
            break
          default:
            console.log('Mohon maaf input tidak dikenali')
            getConfirmation()
        }
      })
    }
    getConfirmation()
  })
}

getData()