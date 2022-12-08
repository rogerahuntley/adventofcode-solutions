const data = input.trim().split('\n')
// get console log

// helper function to scale out directories
const getDir = (path) => {
  let curDir = files
  path.forEach((dir) => {
    curDir._dirs[dir] ||= { _files: {}, _size: 0, _dirs: {} }
    curDir = curDir._dirs[dir]
  })
  return curDir
}

// build file system from console logs
let path = []
let files = { _dirs: {} }
let reading = true
data.forEach((l) => {
  if (l.at(0) == '$') {
    // command
    reading = false
    const line = l.split(' ').slice(1)
    const [cmd, opts] = line
    switch (cmd) {
      case 'cd':
        if (opts == '..') {
          path.pop()
        } else if (opts == '/') {
          path = ['/']
        } else {
          path.push(opts)
        }
        break
      case 'ls':
        reading = true
        break
    }
  } else {
    // data
    if (reading) {
      const line = l.split(' ')
      const [meta, name] = line
      if (meta == 'dir') {
        getDir([...path, name])
      } else {
        const dir = getDir(path)
        dir._files[name] = Number(meta)
        dir._size = Object.values(dir._files).reduce((a, b) => a + b, 0)
      }
    }
  }
})

// get sum of all dirs of size 100,000 or less
let dirSum = 0
const checkDirSizes = (dir) => {
  let total = 0

  // get total of files
  total += Object.values(dir._files).reduce((a, b) => a + b, 0)

  // get total of child dirs
  Object.values(dir._dirs).forEach((d) => {
    total += checkDirSizes(d)
  })

  // get actual puzzle answer
  if (total <= 100000) {
    dirSum += total
  }

  // return total size of dir
  return total
}

// get directory sizes and add to total
checkDirSizes(files._dirs['/'])

return dirSum
