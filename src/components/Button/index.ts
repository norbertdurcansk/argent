import styled, { css } from 'styled-components'
import { styleWithCondition } from '~/utils/styles'

const Button = styled.button<
  Partial<{
    primary: boolean
  }>
>`
  border: none;
  background: none;
  cursor: pointer;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
  transition: all 0.3s ease-in-out;
  padding: 4px 8px;

  &,
  &:focus {
    outline: none;
  }

  ${({ theme: t, ...props }) => css`
    ${styleWithCondition(
      props.primary,
      css`
        border: 1px solid ${t.color.gray.base};

        &:hover {
          background-color: ${t.color.gray[100]};
        }
      `
    )}

    ${styleWithCondition(
      props.disabled,
      css`
        pointer-events: none;
        background-color: ${t.color.gray.base};
      `
    )}
  `}
`

export default Button
