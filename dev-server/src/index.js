require('./a');
console.log('1211');
console.log('222');

// 访问一个地址
// const url = 'https://dog.ceo/api/breeds/image/random';
const url = '/api/breeds/image/random';
fetch(url)
  .then((resp) => resp.json())
  .then((resp) => {
    console.log('resp', resp);
  });
