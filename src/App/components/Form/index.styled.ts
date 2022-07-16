import styled, { css } from 'styled-components'
import { styleWithCondition } from '~/utils/styles'

export const SearchContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr minmax(100px, auto);
  gap: 24px;
`

export const Input = styled.input<{
  hasError: boolean
}>`
  height: 40px;
  font-size: 16px;
  padding: 4px 8px;
  width: 100%;

  ${({ theme: t, ...props }) => css`
    ${styleWithCondition(
      props.hasError,
      css`
        border: 1px solid ${t.color.red.base};
      `,
      css`
        border: 1px solid ${t.color.gray.base};
      `
    )}
  `}
`
