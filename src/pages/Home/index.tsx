import React, { useEffect, useMemo, useState } from "react";
import { ArtWorks } from "src/components/ArtWorks";
import { Search } from "src/components/Search";
import { Typography } from "src/components/Typography";
import PostService from "src/API/PostService";
import { Loader } from "src/components/UI/Loader";
import { useFetching } from "src/hooks/useFetching";
import { Layout } from "src/components/Layout";
import { Select } from "src/components/Select";
import { APIProps } from "src/type/api";
import {
  ContentContainer,
  PageButton,
  PageContainer,
  TopContainer,
} from "./styled";
import arrowright from "src/assets/arrowright.svg";

export const Home = () => {
  const [artWorks, setArtWorks] = useState<APIProps[]>([]);
  const [artWorkOther, setArtWorkOther] = useState<APIProps[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSort, setSelectedSort] = useState("");
  const [limit, setLimit] = useState(3);
  const [page, setPage] = useState(1);
  let pagesArray = [];

  for (let i = 0; i < 10; i++) {
    pagesArray.push(i + 1);
  }

  const [fetchArtWorks, isLoadiangArtWorks, artWorkError] = useFetching(
    async (page: number | undefined, limit: number | undefined) => {
      const responsive = await PostService.getAllWorks(page, limit);
      console.log(responsive);
      setArtWorks(responsive.data);
    }
  );

  useEffect(() => {
    fetchArtWorks(page, limit);
  }, [fetchArtWorks, page, limit]);

  useEffect(() => {
    getArtWorkOther();
  }, []);

  // function debounce(callee: () => any, timeoutMs: number) {
  //   return function perfom(...args: []) {
  //     let lastCall = Date.now();
  //     let previousCall = lastCall;

  //     const lastCallTimer = setTimeout(() => callee(...args), timeoutMs);
  //     if (previousCall && lastCall - previousCall <= timeoutMs) {
  //       clearTimeout(lastCallTimer);
  //     }
  //   };
  // }

  // function getSortedArtWorks() {
  //   if (selectedSort) {
  //     return [...artWorks].sort((a, b) =>
  //       a[selectedSort as keyof APIProps]?toString().localeCompare(b[selectedSort])
  //     );
  //   }
  //   return artWorks;
  // }

  // const sortedArtWorks = getSortedArtWorks();

  const searchArtWork = useMemo(() => {
    return artWorks.filter((artWork) => artWork.title.includes(searchQuery));
  }, [artWorks, searchQuery]);

  // const debounseSearch = debounce(searchArtWork, 250)

  const getArtWorkOther = async () => {
    const responsive = await PostService.getOtherWorks();
    setArtWorkOther(responsive.data);
  };

  const sortArtWork = (sort: string) => {
    setSelectedSort(sort);
  };

  const changePage = (page: number) => {
    setPage(page);
    fetchArtWorks(page, limit);
  };

  return (
    <Layout>
      <ContentContainer>
        <Typography type="xxl">
          Let's Find Some <span>Art</span> Here!
        </Typography>
        <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <Select
          defaultValue="Сортировка по"
          options={[
            { value: "title", name: "По названию" },
            { value: "date_display", name: "по дате" },
          ]}
          value={selectedSort}
          onChange={sortArtWork}
        />
        <Typography>
          <span>Topics for you</span>
          Our special gallery
        </Typography>
        <TopContainer>
          {artWorkError && <h1>Произошла ошибка ${artWorkError}</h1>}
          {!isLoadiangArtWorks ? (
            <ArtWorks sizeContainer="full" artWorks={searchArtWork} />
          ) : (
            <Loader />
          )}
          <PageContainer>
            {pagesArray.map((p) => (
              <PageButton
                key={p}
                type={page === p ? "active" : ""}
                onClick={() => changePage(p)}
              >
                {p}
              </PageButton>
            ))}
            {/* <img src={arrowright} alt="next" /> */}
          </PageContainer>
        </TopContainer>
        <Typography>
          <span>Here some more</span>
          Other works for you
        </Typography>
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
