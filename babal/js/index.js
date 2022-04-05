/*
 * @Author: luoxi
 * @LastEditTime: 2022-04-05 19:07:45
 * @LastEditors: your name
 * @Description: 
 */
const a = 1

const b = () => {
  console.log('b');
}

function method() {
  const c = () => {
    console.log('this', this);
  }
}

new Promise((resolve, reject) => {
  resolve()
})

const arr = [1, 2, 3, 4, 5, 6]
for (const item of arr) {
  console.log(item);
}

const obj = {
  c: 1,
  d: 2
}
const { c, d } = obj

class Student {
  name = 'John'
  constructor() {
    this.age = 1
  }
}


// --------------------------------@babel/plugin-proposal-function-bind
// function Print() {
//   console.log(this.loginId);
// }
// const obj1 = {
//   loginId: 'abc'
// }
// obj1:: Print // 相当于Print.call(obj1)


// --------------------------------@babel/plugin-proposal-optional-chaining
const obj2 = {
  foo: {
    bar: {
      baz: 22
    }
  }
}

const baz = obj2?.foo?.bar?.baz //22
const safe = obj2?.qux?.baz
console.log('baz', baz);
console.log('safe', safe);

