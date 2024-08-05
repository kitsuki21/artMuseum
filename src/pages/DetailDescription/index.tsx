import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { APIProps } from "src/Type/API";
import {
  ArtImage,
  BookMark,
  Content,
  DateDisplay,
  Description,
  LeftSide,
  NameAuthor,
  Overview,
  Title,
  Wrapper,
} from "./styled";
import { Layout } from "src/components/Layout";
import { MyBytton } from "src/components/MyBytton";
import bookmark from "src/assets/bookmark.svg";
import { useFetching } from "src/hooks/useFetching";
import PostService from "src/API/PostService";

export const DetailDescription = () => {
  const params = useParams();
  const [artWork, setArtWork] = useState<APIProps>();
  const [fetchPostById, isLoading, error] = useFetching(async () => {
    const responsive = await PostService.getById(params.id);
    setArtWork(responsive.data as APIProps);
  });

  useEffect(() => {
    fetchPostById();
  }, [fetchPostById, params.id]);

  const image = `https://www.artic.edu/iiif/2/${
    artWork && artWork.image_id
  }/full/843,/0/default.jpg`;

  return (
    <Layout>
      {artWork && (
        <Content>
          <LeftSide>
            <ArtImage src={image} alt="" />
            <MyBytton>
              <BookMark src={bookmark} alt="bookmark" />
            </MyBytton>
          </LeftSide>
          <div>
            <Description>
              <NameAuthor>{artWork.title}</NameAuthor>
              <span>{artWork.artist_title}</span>
              <DateDisplay>{artWork.date_display}</DateDisplay>
            </Description>
            <Overview>
              <Title>Overview</Title>
              <Wrapper>
                <span>Artist nacionality:</span>
                {artWork.place_of_origin}
              </Wrapper>
              <Wrapper>
                <span>Dimensions: Sheet:</span>
                {artWork.dimensions}
              </Wrapper>
              <Wrapper>
                <span>Credit line:</span> {artWork.credit_line}
              </Wrapper>
              <Wrapper>
                <span>Repository: </span>
              </Wrapper>
              Public
            </Overview>
          </div>
        </Content>
      )}
    </Layout>
  );
};
