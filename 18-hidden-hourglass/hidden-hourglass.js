// Fungsi untuk membuat hourglass
const hourglass = (num) => {
  process.stdout.write('\n')
  //Membuat segitiga tegak berhadapan
  for(let l = num; l > 0; l--) {
    for(let k = 0; k <= num - l; k++) {
      process.stdout.write(`${k + 1} `)
    }
    for (let j = 0; j < (2 * l) - 3; j++) {
      process.stdout.write('  ')
    }
    for(let i = num - l + 1; i > 0; i--) {
      if(i == num) continue
      process.stdout.write(`${i} `)
    }
    process.stdout.write('\n')
  }
  //Membuat segitiga terbalik berhadapan
  for(let l = 1; l <= num - 1; l++) {
    for(let k = 0; k < num - l; k++) {
      process.stdout.write(`${k + 1} `)
    }
    for (let j = 0; j < 2 * l - 1; j++) {
      process.stdout.write('  ')
    }
    for(let i = num - l; i > 0; i--) {
      process.stdout.write(`${i} `)
    }
    process.stdout.write('\n')
  }
  process.exit()
}

// Mendefinisikan readline sebagai library untuk input dan output dengan terminal
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
})

// Fungsi untuk mendapatkan input dan mencetak output
const getData = () => {
  readline.question(`Berapa angka? `, num => {
    // Melakukan filter agar hanya angka saja yang dapat dimasukkan
    const numberOnly = /^[0-9]+$/
    num.match(numberOnly) ? hourglass(num) : getData()
  })
}

getData()