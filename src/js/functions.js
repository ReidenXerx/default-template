export function taskBaseObjectPrototype() {
    Number.prototype.plus = function (arg) {
      return this + arg
    }

    Number.prototype.minus = function (arg) {
      return this - arg
    }

    let a = 5

    console.log((2).plus(3).minus(1))

  }



export function taskAkvelon() {

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
  let keyPrefix = []
  recursive(test, keyPrefix)
  console.log(objectBuffer)
  console.log(test);

  let iterator = 0
  function recursive(object, keyPrefix) {
    for (let key in object) {
      iterator = iterator + 1
      console.log(`keyPrefix ${keyPrefix} iterator ${iterator}`)
      if (object.hasOwnProperty(key)) {
        if(typeof(object[key]) == 'object') {
          console.log(`${keyPrefix} ${key}`)
          keyPrefix.push(key)
          recursive(object[key], keyPrefix)
        }
        else {
          objectBuffer[`${keyPrefix.join('.')}.${key}`] = object[key]
          // console.log(objectBuffer)
          // console.log(keyPrefix)

        }
      }
    }
  }
}



export function taskStringConcat() {
    function stringHandler(separator, strings) {
      let result = ''
      strings.forEach((string, i) => {
          result = result.concat(`${string}`)
        if ((i + 1) != strings.length) {
          result = result.concat(`${separator}`)
        }
      })
      console.log(result)
    }

    stringHandler('*', ['1', '2', '3'])
  }

  function taskRecursiveSumTree() {
    let sum = 0

    function getSum(obj) {
      sum += obj.valueNode;
      if (obj.next != null) {
        for (let i = 0; i < obj.next.length; i++) {
          getSum(obj.next[i])
        }
      }
      return sum
    }

    let tree1 = {
      valueNode: 1,
      next: [
        {
          valueNode: 3,
          next: null
        },
        {
          valueNode: 2,
          next: null
        }
      ]
    }

    let tree = {
      valueNode: 3,
      next: [{
        valueNode: 1,
        next: null
      },
      {
        valueNode: 3,
        next: null
      },
      {
        valueNode: 2,
        next: null
      },
      {
        valueNode: 2,
        next: [
          {
            valueNode: 1,
            next: null
          },
          {
            valueNode: 5,
            next: null
          }
        ]
      }]
    }
    console.log(getSum(tree1));
    sum = 0;
    console.log(getSum(tree));
  }

export function taskLetter() {
  let words = ['kot', 'tok']
  let result = new Map()
  words.forEach((word, i) => {
    result.set(`${i}`, word.split("").sort())
  })
  console.log(result)
  words = []
  result.forEach((word, i) => {
    words.push(word.join(""))
  })
  console.log(words)
  if(words[0] == words[1]) {
    console.log('yes')
  }
  for (var variable in object) {
    if (object.hasOwnProperty(variable)) {

    }
  }
}

export function taskArrayFilter() {
  let array = [true, false, false, false, true, true]
  let newarray = array.filter((element) => element == true)
  console.log(newarray.length)
}

export function taskHtmlDom() {
  console.log('2323')
  const blues = document.querySelectorAll('.blue')
  blues.forEach((blue, i) => {
    blue.style.backgroundColor = 'blue'
    blue.nextSibling.backgroundColor = 'red'
    blue.addEventListener('click', () => {
      console.log(i)
    })
  })
  document.addEventListener('DomContentLoaded', () => {
  })
}
