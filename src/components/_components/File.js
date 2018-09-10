import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
`
const Name = styled.div`
  width: 150px;
  height: 36px;
  line-height: 36px;
  text-align: center;
  color: white;
  border-radius: 5px 0px 0px 5px;
  background-color: #4286f4;
  margin-right: 5px;
`
const FileName = styled.div`
  flex: 1;
  height: 36px;
  line-height: 36px;
`
const Input = styled.input`
  display: none;
`
const Label = styled.label`
  float: right;
  width: 100px;
  height: 36px;
  background-color: #00AB84;
  text-align: center;
  color: white;
  border-radius: 0px 5px 5px 0px;
`

export const File = ({file, onChange}) => {
  const filename = file ? file.name : "";
  return (
    <Container>
      <Name>File</Name>
      <FileName>
        {filename}
        <Label htmlFor="file_components">Browse</Label>
      </FileName>
      <Input id="file_components" type="file" onChange={(e) => {
        onChange(e.target.files[0]);
        e.target.value="";
      }}/>
    </Container>
  )
}
