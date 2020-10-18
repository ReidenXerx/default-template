function taskAkvelon() {

  let test = {
    a: 0,
    b: {
      m: 1,
      n: 2,
      k: 4,
      l: {
        i: 5,
        e: 6
      }
    },
    c: 2
  }

  let test1 = {
    a: 0,
    b: 1
  }

  let objectBuffer = {}

  recursive(test, '')
  console.log(objectBuffer)
  console.log(test);

  function recursive(object, keyPrefix) {
    for (let key in object) {
      if (object.hasOwnProperty(key)) {
        if(typeof(object[key]) == 'object') {
          recursive(object[key], `${keyPrefix}${key}.`)
        }
        else {
          objectBuffer[`${keyPrefix}${key}`] = object[key]
        }
      }
    }
  }
}

taskAkvelon()
