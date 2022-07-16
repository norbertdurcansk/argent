export interface ERC20Balance {
  address: string
  symbol: string
  balance: string
}

export interface Result {
  balance: string
  guardianCount: string
  erc20: Array<ERC20Balance>
}
