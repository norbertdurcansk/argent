export const log = {
  info: (...args: any) => console.log('\x1b[32m[INFO]\x1b[0m ', ...args),
  error: (...args: any) => console.error('\x1b[31m[ERROR]\x1b[0m ', ...args),
}
