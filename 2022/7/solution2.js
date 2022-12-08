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

// get map of possible dir sizes ( we don't need to know the actual path )
const dirSizes = []
const checkDirSizes = (dir) => {
  let total = 0

  // get total of files
  total += Object.values(dir._files).reduce((a, b) => a + b, 0)

  // get total of child dirs
  Object.values(dir._dirs).forEach((d) => {
    total += checkDirSizes(d)
  })

  // get actual puzzle answer
  dirSizes.push(total)

  // return total size of dir
  return total
}

// so this time we get our root size and search for the smallest directory we can delete and still have enough room to update
const update = 30000000
const total = 70000000
const rootSize = checkDirSizes(files._dirs['/'])
const sizeNeeded = (total - update - rootSize) * -1

// filter out the sizes too small and get the smallest left
return Math.min(...dirSizes.filter((s) => s >= sizeNeeded))
