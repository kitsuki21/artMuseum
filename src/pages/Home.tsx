import React, { useEffect, useMemo, useState } from "react";
import styled from "styled-components";

import { ArtWorks } from "src/components/ArtWorks";
import { Search } from "src/components/Search";
import { Title } from "src/components/Title";
import PostService from "src/API/PostService";
import { Loader } from "src/components/UI/Loader";
import { useFetching } from "src/hooks/useFetching";
import { CardProps } from "src/components/Card";
import { Layout } from "src/components/Layout";
import { getPageCount } from "src/utils/pages";
import { Select } from "src/components/Select";
import { APIProps } from "src/Type/API";

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Home = () => {
  const [artWorksAll, setArtWorksAll] = useState<APIProps[]>([]);
  const [artWorkOther, setArtWorkOther] = useState<APIProps[]>([]);
  const [selectedSort, setSelectedSort] = useState("");
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(3);
  const [page, setPage] = useState(1);
  // let pagesArray = [];

  // for (let i = 0; i <= totalPages; i++) {
  //   pagesArray.push(i + 1);
  // }

  const [fetchArtWorks, isLoadiangArtWorks, artWorkError] = useFetching(
    async () => {
      const responsive = await PostService.getAll(limit, page);
      const totalCount = 27;
      setTotalPages(getPageCount(totalCount, limit));
      setArtWorksAll(responsive.data);
    }
  );

  useEffect(() => {
    console.log("jjjjj");
    fetchArtWorks();
  }, [fetchArtWorks]);

  useEffect(() => {
    console.log("kklll");
    getArtWorkOther();
  }, []);

  const getArtWorkOther = async () => {
    const responsive = await PostService.getOtherWorks();
    setArtWorkOther(responsive.data);
  };

  // const sortArtWork = (sort: any) => {
  //   setSelectedSort(sort);
  //   setArtWorksAll(
  //     [...artWorksAll].sort((a, b) => a[sort].localeCompare(b[sort]))
  //   );
  //   console.log(sort);
  // };

  // console.log(pagesArray, "totalHome");
  // console.log(totalCount);

  return (
    <Layout>
      <ContentContainer>
        <Title appereance="title">
          {" "}
          Let's Find Some <span>Art</span> Here!
        </Title>
        <Search />
        <Select
          defaultValue="Сортировка по"
          options={[
            { value: "title", name: "По названию" },
            { value: "title_artist", name: "По названию" },
          ]}
          value={selectedSort}
          // onChange={sortArtWork}
        />
        <Title>
          <span>Topics for you</span>
          Our special gallery
        </Title>
        {artWorkError && <h1>Произошла ошибка ${artWorkError}</h1>}
        {!isLoadiangArtWorks ? (
          <ArtWorks sizeContainer="full" artWorks={artWorksAll} />
        ) : (
          <Loader />
        )}
        <Title>
          <span>Here some more</span>
          Other works for you
        </Title>
        {artWorkError && <h1>Произошла ошибка${artWorkError}</h1>}
        {!isLoadiangArtWorks ? (
          <>
            <ArtWorks artWorks={artWorkOther} sizeContainer="mini" />{" "}
          </>
        ) : (
          <Loader />
        )}
      </ContentContainer>
    </Layout>
  );
};
