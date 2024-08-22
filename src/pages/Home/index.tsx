import React, { useEffect, useMemo, useState } from "react";
import { ArtWorks } from "src/components/ArtWorks";
import { Search } from "src/components/Search";
import { Typography } from "src/components/Typography";
import PostService from "src/API/PostService";
import { Loader } from "src/components/UI/Loader";
import { useFetching } from "src/hooks/useFetching";
import { Layout } from "src/components/Layout";
import { Select } from "src/components/Select";
import { ArtWork } from "src/types";
import {
  ContentContainer,
  PageButton,
  PageContainer,
  TopContainer,
} from "./styled";
import arrowright from "src/assets/arrowright.svg";

export enum SortKey {
  Title = "title",
  DateDisplay = "date_end",
  Undefined = 'undefined',
}

export const Home = () => {
  const [artWorks, setArtWorks] = useState<ArtWork[]>([]);
  const [artWorkOther, setArtWorkOther] = useState<ArtWork[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSort, setSelectedSort] = useState<SortKey>(SortKey.Undefined);
  const [limit, setLimit] = useState(3);
  const [page, setPage] = useState(1);
  let pagesArray = [];

  for (let i = 0; i < 10; i++) {
    pagesArray.push(i + 1);
  }

  const [fetchArtWorks, isLoadingArtWorks, artWorkError] = useFetching(
    async (page: number | undefined, limit: number | undefined) => {
      const responsive = await PostService.getAllWorks(page, limit);
      console.log(responsive, responsive);
      setArtWorks(responsive);
    }
  );

  const [fetchArtWorkOther, isLoadingArtWorksOther, artWorkOtherError] = useFetching(
    async () => {
      const responsive = await PostService.getOtherWorks();

      setArtWorkOther(responsive);
    }
  );

  useEffect(() => {
    fetchArtWorks(page, limit);
  }, [fetchArtWorks, page, limit]);

  useEffect(() => {
    fetchArtWorkOther();
  }, [fetchArtWorkOther]);

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
    return artWorks.filter((artWork) => artWork.title.toLocaleLowerCase().includes(searchQuery.toLocaleLowerCase()));
  }, [artWorks, searchQuery]);

  const sortedAndSearchArtWork = useMemo(() => {
    console.log(selectedSort, 'sort by title')
    if (selectedSort !== SortKey.Undefined) {
      return searchArtWork.sort((a, b) => {
        if (selectedSort === SortKey.Title) {
          return a.title.toLocaleLowerCase() > b.title.toLocaleLowerCase() ? 1 : -1
        } else if (selectedSort === SortKey.DateDisplay) {
          console.log(+a.date_end - +b.date_end, '+a.date_end - +b.date_end')
          return +a.date_end - +b.date_end
        }

        return 0
      });
    }
    return searchArtWork
  }, [searchArtWork, selectedSort]);

  console.log(sortedAndSearchArtWork, 'sortedAndSearchArtWork')

  // const debounseSearch = debounce(searchArtWork, 250)

  const sortArtWork = (value: SortKey) => {
    setSelectedSort(value);
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
          options={[
            { value: SortKey.Undefined, name: "Сортировка по", disabled: true },
            { value: SortKey.Title, name: "По названию" },
            { value: SortKey.DateDisplay, name: "по дате" },
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
          {!isLoadingArtWorks ? (
            <ArtWorks sizeContainer="full" artWorks={sortedAndSearchArtWork} />
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
        {artWorkOtherError && <h1>Произошла ошибка${artWorkOtherError}</h1>}
        {!isLoadingArtWorksOther ? (
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
