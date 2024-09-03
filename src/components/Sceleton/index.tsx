import React from "react";
import {
  Block,
  BlockLeft,
  BlockOverview,
  BlockRight,
  BlockTitle,
  Content,
  Description,
  Overview,
  WrraperContent,
} from "./styled";

export const Sceleton = () => {
  return (
    <WrraperContent>
      <Content>
        <BlockLeft></BlockLeft>
        <BlockRight>
          <Description>
            <BlockTitle></BlockTitle>
            <Block></Block>
            <Block></Block>
          </Description>
          <Overview>
            <BlockOverview></BlockOverview>
            <Block></Block>
            <Block></Block>
            <Block></Block>
            <Block></Block>
            <Block></Block>
          </Overview>
        </BlockRight>
      </Content>
    </WrraperContent>
  );
};
