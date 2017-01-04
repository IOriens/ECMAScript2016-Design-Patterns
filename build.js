const fs = require('fs')
const path = require('path')

fs.readdir(path.join(__dirname, 'src'), (err, files) => {
  if (err) {
    console.log(err)
  }

  const filteredFiles = files.sort()

  fs.open('output.md', 'w', (err, fd) => {
    if (err) {
      console.log(err)
    }

    let data

    for (let file of filteredFiles) {
      console.log(file)
      data = fs.readFileSync(path.join(__dirname, 'src', file))

      if (file.match(/.js$/)) {
        const preFix = new Buffer(`\n# ${file}` + '\n```\n')
        const afterFix = new Buffer('\n```')
        data = Buffer.concat([preFix, data, afterFix])
        fs.writeSync(fd, data)
      }
    }
  })
})
