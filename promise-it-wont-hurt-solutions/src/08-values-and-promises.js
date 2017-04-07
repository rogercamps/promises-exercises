require('es6-promise');

let attachTitle = (name) => {
  return 'DR. ' + name
}

Promise.resolve('MANHATTAN')
  .then(attachTitle)
  .then(console.log)
