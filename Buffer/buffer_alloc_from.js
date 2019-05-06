// 宣告一個長度為10、且用 0 填充的 Buffer。
const buf1 = Buffer.alloc(10);

// 宣告一個長度為 10，且用 0x1 填充的 Buffer
const buf2 = Buffer.alloc(10, 1);

// 宣告一個長度為 10、且為初始化的 Buffer
// 這個方法比使用 Buffer.alloc() 更快
// 但返回的 Buffer 實力可能包含舊資料
// 因此需要使用 fill() 或 write()覆寫
const buf3 = Buffer.allocUnsafe(10);

// 宣告一個包含 [0x1, 0x2, 0x3]的 Buffer
const buf4 = Buffer.from([1, 2, 3]);

// 創建一個包含 UTF-8 字節 [0x74, 0xc3, 0xa9, 0x73, 0x74] 的 Buffer
const buf5 = Buffer.from('tést')

// 宣告一個包含 Latin-1 字節 [0x74, 0xe9, 0x73, 0x74] 的 Buffer。

console.log('buf1 :'+ buf1)
console.log('buf2 :'+ buf2)
console.log('buf3 :'+ buf3)
console.log('buf4 :'+ buf4)
console.log('buf5 :'+ buf5)