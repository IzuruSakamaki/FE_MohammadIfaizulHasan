// Fungsi untuk membuat hourglass
const hourglass = (num) => {
  process.stdout.write('\n')
  //Membuat piramida terbalik
  for(let k = 0; k < num; k++) {
    for (let j = 0; j < k; j++) {
      process.stdout.write(' ')
    }
    for(let i = num - k; i > 0; i--) {
      process.stdout.write('* ')
    }
    process.stdout.write('\n')
  }
  //Membuat piramida tegak
  for(let k = 2; k <= num; k++) {
    for (let j = 0; j < num - k; j++) {
      process.stdout.write(' ')
    }
    for(let i = 0; i < k; i++) {
      process.stdout.write('* ')
    }
    process.stdout.write('\n')
  }
}

// Mendefinisikan readline sebagai library untuk input dan output dengan terminal
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
})

// Fungsi untuk mendapatkan input dan mencetak output
const getData = () => {
  readline.question(`Berapa bintang? `, num => {
    // Melakukan filter agar hanya angka saja yang dapat dimasukkan
    const numberOnly = /^[0-9]+$/
    if(num.match(numberOnly)) hourglass(num)
    process.exit()
  })
}

getData()