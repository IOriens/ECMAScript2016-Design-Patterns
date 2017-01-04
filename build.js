const fs = require('fs')

fs.readdir('.', (err, files) => {
  if (err) {
    console.log(err)
  }
  const processFile = __filename
  const filteredFiles = files.filter((item) => {
    const stat = fs.statSync(item)
    return `${__dirname}/${item}` !== processFile && item !== `output.md` && !stat.isDirectory()
  })

  fs.open('output.md', 'w', (err, fd) => {
    if (err) {
      console.log(err)
    }

    let data

    for (let file of filteredFiles) {
      console.log(file)
      data = fs.readFileSync(file)

      if (file.match(/.js$/)) {
        const preFix = new Buffer(`\n# ${file}` + '\n```\n')
        const afterFix = new Buffer('\n```')
        data = Buffer.concat([preFix, data, afterFix])
        fs.writeSync(fd, data)
      }
    }
  })
})
