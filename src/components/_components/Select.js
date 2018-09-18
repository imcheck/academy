import React from 'react';
import styled from 'styled-components';

export class Select extends React.PureComponent {
  render() {
    return (
      <PureSelect>{this.props.children}</PureSelect>
    )
  }
}

const PureSelect = styled.select`
  
`;

export const Option = styled.option``;