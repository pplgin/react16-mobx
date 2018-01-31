/**
 * store 添加factory
 */

export const factory = target => {
  Object.defineProperty(target, 'factory', {
    value: new target()
  })
  return target
}
