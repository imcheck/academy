import React, {Fragment} from 'react';
import styled from 'styled-components';

export class Modal extends React.Component {
  _getProps = (props) => {
    return {
      visible: false,
      ...props
    }
  }
  render() {
    const {
      visible,
      width,
      height,
      title,
      footer,
      onBackgroundClick,
    } = this._getProps(this.props);
    if(visible) {
      return (
        <Fragment>
          <Background onClick={onBackgroundClick}/>
          <Container width={width} height={height+300}>
            <Header>
              <Title>{title}</Title>
            </Header>
            <Body height={height}>
              {this.props.children}
            </Body>
            <Footer>
              {footer}
            </Footer>
          </Container>
        </Fragment>
      )
    } else {
      return null;
    }
  }
}

const Background = styled.div`
  position: fixed;
  top: 0px;
  bottom: 0px;
  left: 0px;
  right: 0px;
  background-color: black;
  opacity: 0.3;
`

const Container = styled.div`
  position: fixed;
  background-color: white;
  top: calc(50% - ${props => props.height / 2}px);
  left: calc(50% - ${props => props.width / 2}px);
  width: ${props => props.width}px;
  opacity: 1;
`

const Title = styled.div`
  padding: 0px 10px;
  background-color: ${props => props.theme._components.blue};
  color: white;
  font-weight: bold;
`
const Header = styled.div`
  height: 50px;
  line-height: 50px;
`
const Body = styled.div`
  padding: 10px;
  height: ${props => props.height}px;
  // border-top: 1px solid ${props => props.theme._components.blue}
  // border-bottom: 1px solid ${props => props.theme._components.blue}
`
const Footer = styled.div`
  height: 50px;
  line-height: 50px;
  text-align: right;
  background-color: ${props => props.theme._components.blue};
  & > * {
    margin-right: 10px;
  }
`