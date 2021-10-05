import React from "react";
import styled from "styled-components";

const BorderBox = styled.div`
  box-sizing: border-box;
  display: block;
  font-size: 16px;
  background-color: rgb(247, 247, 247);
  text-align: left;
  line-height: 24px;
  word-break: break-all;
`;
const InnerBox = styled.div`
  box-sizing: border-box;
  display: block;
  font-size: 16px;
  line-height: 24px;
  margin-left: 306px;
  margin-right: 306px;
  max-width: 768px;
  min-height: 937px;
  padding-left: 0px;
  padding-right: 0px;
  width: 768px;
  word-break: break-all;
`;

const WriteBox = styled.div`
  background-color: rgb(255, 255, 255);
  line-height: 24px;
  margin-bottom: 12px;
  text-align: left;
  box-sizing: border-box;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: rgb(219, 219, 219);
`;

function BoxComponent() {
  return (
    <>
      <BorderBox>
        <InnerBox>
          <WriteBox></WriteBox>
        </InnerBox>
      </BorderBox>
    </>
  );
}

export default BoxComponent;
