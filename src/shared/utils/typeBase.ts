export function functionType<T extends (...args: any[]) => any>(func: T): ReturnType<T> {
  return func();
}
// Sử dụng functionType với các hàm khác nhau
// const result1: ReturnType<typeof add> = functionType(() => add(1, 2)); // result1 có kiểu number
// const result2: ReturnType<typeof concat> = functionType(() => concat("Hello, ", "world!")); // result2 có kiểu string
// const result3: ReturnType<typeof multiply> = functionType(() => multiply(3, 4)); // result3 có kiểu number
