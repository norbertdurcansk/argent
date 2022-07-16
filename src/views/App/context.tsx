import React from 'react'

export interface Result {
  balance: number
  guardianCount: number
  erc20: Record<string, number>
}

export interface AppContextType {
  address?: string | null
  result?: Result
}

export const AppContext = React.createContext<AppContextType>({})

interface MemoizedChildProps {
  children: React.ReactNode
}

const MemoizedChild = React.memo(({ children }: MemoizedChildProps) => <>{children}</>)
MemoizedChild.displayName = 'MemoizedChild'

interface AppProviderType {
  context: AppContextType
  children: React.ReactNode
}

export const AppProvider = ({ children, context }: AppProviderType) => {
  return (
    <AppContext.Provider value={context}>
      <MemoizedChild>{children}</MemoizedChild>
    </AppContext.Provider>
  )
}
