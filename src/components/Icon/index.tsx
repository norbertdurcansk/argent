import styled from 'styled-components'

const Img = styled.img`
  display: flex;
  height: 100%;
  width: 100%;
`

interface Props {
  src: string
  height?: string | number
  width?: string | number
}

const Icon = ({ src, height = 'auto', width = 'auto' }: Props) => {
  return (
    <div style={{ height, width }}>
      <Img src={src} />
    </div>
  )
}

export default Icon
