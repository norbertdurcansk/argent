import { FlattenSimpleInterpolation } from 'styled-components'

export const styleWithCondition = (
  c1: boolean | undefined,
  s1: string | FlattenSimpleInterpolation,
  s2?: string | FlattenSimpleInterpolation
) => {
  if (c1) {
    return s1
  }

  return s2
}
