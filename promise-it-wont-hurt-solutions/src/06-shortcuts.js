require('es6-promise');

let promise = Promise.resolve('this is it')
promise = Promise.reject(new Error('this is NOT it'))

promise.catch(error => {
  console.log(error);
})
