import styled, { css } from 'styled-components'
import { styleWithCondition } from '~/utils/styles'

const Text = styled.p<
  Partial<{
    large: boolean
    small: boolean
    error: boolean
    medium: boolean
  }>
>`
  ${({ theme: t, ...props }) => css`
    ${styleWithCondition(
      props.large,
      css`
        font-size: 24px;
      `
    )}

    ${styleWithCondition(
      props.small,
      css`
        font-size: 13px;
      `
    )} //font-weights
    ${styleWithCondition(
      props.medium,
      css`
        font-weight: 500;
      `
    )} //  colors
    ${styleWithCondition(
      props.error,
      css`
        color: ${t.color.red.base};
      `
    )}
  `}
`

export default Text
