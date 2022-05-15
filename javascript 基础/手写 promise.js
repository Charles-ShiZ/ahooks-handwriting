const PENDING = "pending";
const RESOLVED = "resolved";
const REJECTED = "rejected";

class MyPromise {
  constructor(cb) {
    this.cb = cb;
    this.status = PENDING;
    this.value = undefined;
    this.resolvedCallbacks = [];
    this.rejectedCallbacks = [];
    const resolve = (arg) => {
      this.status = RESOLVED;
      this.value = arg;
      this.resolvedCallbacks.forEach(cb => setTimeout(() => cb(this.value)));
    };
    const reject = (arg) => {
      this.status = REJECTED;
      this.value = arg;
      this.rejectedCallbacks.forEach(cb => setTimeout(() => cb(this.value)));
    };
    cb(resolve, reject);
  }
  then(resolvedCb, rejectedCb) {
    return new MyPromise((resolve, reject) => {
      switch (this.status) {
        case RESOLVED:
          setTimeout(() => resolve(resolvedCb(this.value)));
          break;
        case REJECTED:
          setTimeout(() => reject(rejectedCb(this.value)));
          break;

        default:
          this.resolvedCallbacks.push((value) => {
            resolve(resolvedCb(value));
          });
          this.rejectedCallbacks.push((value) => {
            reject(rejectedCb(value));
          });
          break;
      }
    });
  }
  catch(rejectedCb) {
    return new MyPromise((resolve, reject) => {
      switch (this.status) {
        case REJECTED:
          setTimeout(() => reject(rejectedCb(this.value)));
          break;

        default:
          this.rejectedCallbacks.push((value) => {
            resolve(rejectedCb(value));
          });
          break;
      }
    });
  }
}

const promise = new MyPromise((res, rej) => {
  console.log(1)
  setTimeout(() => {
    res(2)
  }, 1000)
})
promise.then(() => {
  console.log(3)
}).then(() => {
  console.log(5)
}).then(() => {
  console.log(99)
})
promise.then(() => {
  console.log(4)
})
console.log(2)

// const a = new Promise(res => res(2))
// a.then(() => {
//   console.log(1)
// }).then(() => {
//   console.log(3)
// }).then(() => {
//   console.log(4)
// })
// a.then(() => {
//   console.log(2)
// }).then(() => {
//   console.log(6)
// })
