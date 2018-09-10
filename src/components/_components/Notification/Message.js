import styled, { keyframes } from 'styled-components';

const Message = (props) => {
  return (
    <Container>
      <Title>{props.message}</Title>
    </Container>
  )
}

const Title = styled.div`
  height: 30px;
  font-size: 30px;
  border-bottom: 1px solid black;
`

const appear = keyframes`
  from {
    right: -250px;
    top: 20px;
  }
  to {
    right: 20px;
    top: 20px;
  }
`

const Container = styled.div`
  position: absolute;
  right: 20px;
  top: 20px;
  width: 250px;
  height: 120px;
  background-color: gray;
  color: white;
  animation-name: ${appear};
  animation-duration: 1s;
`
