const utils = require('./index')

describe('[Exercise 1] trimProperties', () => {
  it('[1] returns an object with the properties trimmed', () => {
    // EXAMPLE
    const input = { foo: '  foo ', bar: 'bar ', baz: ' baz' }
    const expected = { foo: 'foo', bar: 'bar', baz: 'baz' }
    const actual = utils.trimProperties(input)
    expect(actual).toEqual(expected)
  })
  it('[2] returns a copy, leaving the original object intact', () => {

    const input = { foo: '  foo ', bar: 'bar ', baz: ' baz' }
    const expected = { foo: 'foo', bar: 'bar', baz: 'baz' }
    const actual = utils.trimProperties(input)
    expect(expected).toMatchObject(actual)
    expect(actual).toEqual(expected)
  })
})

describe('[Exercise 2] trimPropertiesMutation', () => {
   it('[3] returns an object with the properties trimmed', () => {

    const input = { foo: '  foo ', bar: 'bar ', baz: ' baz' }
    const expected = { foo: 'foo', bar: 'bar', baz: 'baz' }
    const actual = utils.trimProperties(input)
    expect(input).toEqual(input)
    expect(actual).toEqual(expected)
   })
   
   it('[4] the object returned is the exact same one we passed in', () => {

    const input = { foo: '  foo ', bar: 'bar ', baz: ' baz' }
    const expected = { foo: 'foo', bar: 'bar', baz: 'baz' }
    const actual = utils.trimProperties(input)
    expect(actual).toStrictEqual(expected)
   })
})

describe('[Exercise 3] findLargestInteger', () => {
   it('[5] returns the largest number in an array of objects { integer: 2 }', () => {

    const input = [{ integer: 1 }, { integer: 3 }, { integer: 2 }]
    const expected = 3;
    const actual = utils.findLargestInteger(input)
    expect(expected).toBe(actual)
   })
})

describe('[Exercise 4] Counter', () => {
  let counter
  beforeEach(() => {
    counter = new utils.Counter(3) // each test must start with a fresh couter
  })
   it('[6] the FIRST CALL of counter.countDown returns the initial count', () => {
     const expected = 3;
     const actual = counter.countDown()
     expect(actual).toBe(expected)
   })
   it('[7] the SECOND CALL of counter.countDown returns the initial count minus one', () => {
     counter.countDown()
     expect(counter.countDown()).toBe(2)
   })
   it('[8] the count eventually reaches zero but does not go below zero', () => {
     counter.countDown()
     counter.countDown()
     counter.countDown()
     counter.countDown()
     counter.countDown()
     expect(counter.countDown()).toBe(0)
   })
})

describe('[Exercise 5] Seasons', () => {
  let seasons
  beforeEach(() => {
    seasons = new utils.Seasons() // each test must start with fresh seasons
  })
   it('[9] the FIRST call of seasons.next returns "summer"', () => {
     const expected = "summer"
     const actual = seasons.next()

     expect(actual).toBe(expected)
   })

   it('[10] the SECOND call of seasons.next returns "fall"', () => {
     seasons.next()
     expect(seasons.next()).toBe('fall')
   })

   it('[11] the THIRD call of seasons.next returns "winter"', () => {
     seasons.next()
     seasons.next()
     expect(seasons.next()).toBe('winter')
   })

   it('[12] the FOURTH call of seasons.next returns "spring"', () => {
     seasons.next()
     seasons.next()
     seasons.next()
     expect(seasons.next()).toBe('spring')
   })

   it('[13] the FIFTH call of seasons.next returns again "summer"', () => {
     seasons.next()
     seasons.next()
     seasons.next()
     seasons.next()
     expect(seasons.next()).toBe('summer')
   })

   it('[14] the 40th call of seasons.next returns "spring"', () => {
     for (let i = 0; i < 39; i++) {
       seasons.next()
     }
     expect(seasons.next()).toBe('spring')
   })
})

describe('[Exercise 6] Car', () => {
  let focus
  beforeEach(() => {
    focus = new utils.Car('focus', 20, 30) // each test must start with a fresh car
  })

   it('[15] driving the car returns the updated odometer', () => {
     expect(focus.drive(100)).toBe(100)
     expect(focus.drive(300)).toBe(400)
   })

   it('[16] driving the car uses gas', () => {
     focus.drive(15)
     expect(focus.dte).toBe(585)
   })

   it('[17] refueling allows to keep driving', () => {
     focus.drive(600)
     expect(focus.refuel(1)).toBe(30)
   })

   it('[18] adding fuel to a full tank has no effect', () => {

    expect(focus.refuel(50)).toBe(600)
   })
})

describe('[Exercise 7] isEvenNumberAsync', () => {
   it('[19] resolves true if passed an even number', async () => {
     const result = await utils.isEvenNumberAsync(2)
     expect(result).toBe(true)
   })

   it('[20] resolves false if passed an odd number', async () => {
     const result = await utils.isEvenNumberAsync(3)
     expect(result).toBe(false)
   })
})
