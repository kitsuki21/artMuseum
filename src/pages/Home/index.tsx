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
  ContainerSearchArtWorks,
  ContentContainer,
  NextButton,
  Page,
  PageButton,
  PageContainer,
  PrevButton,
  WrraperPage,
  XlContainer,
  XxlContainer,
} from "./styled";
import arrowright from "src/assets/arrowright.png";
import arrowLeft from "src/assets/arrowleft.png";
import { Card } from "src/components/Card";

export enum SortKey {
  TitleUp = "title_up",
  TitleDown = "title_down",
  DateDisplayDown = "date_display_down",
  DateDisplayUp = "date_display_up",
  Undefined = "Undefined",
}

export const Home = () => {
  const [artWorks, setArtWorks] = useState<ArtWork[]>([]);
  const [artWorkOther, setArtWorkOther] = useState<ArtWork[]>([]);
  const [searchArtworks, setSearchArtworks] = useState<ArtWork[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSort, setSelectedSort] = useState<SortKey>(SortKey.Undefined);
  const [slidePage, setSlidePage] = useState(0);
  const [limit, setLimit] = useState(3);
  const [currentPage, setCurrentPage] = useState(1);
  const [fetchArtWorks, isLoadiangArtWorks, artWorkError] = useFetching(
    async (page: number | undefined, limit: number | undefined) => {
      const responsive = await PostService.getAllWorks(page, limit);
      setArtWorks(responsive);
    }
  );
  const [fetchArtWorksOther, isLoadiangArtWorksOther, artWorkErrorOther] =
    useFetching(async () => {
      const responsive = await PostService.getOtherWorks();
      setArtWorkOther(responsive);
    });

  const [fetchArtWorkSearch, isLoadiangArtWorkSearch, artWorkErrorSearch] =
    useFetching(async (searchQuery) => {
      const responsive = await PostService.getSearchArtWork(searchQuery);
      console.log(responsive, "responsive");
      setSearchArtworks(responsive);
    });

  console.log(fetchArtWorkSearch, "searach");

  useEffect(() => {
    if (searchQuery === "") {
      setSearchArtworks([]);
    } else {
      fetchArtWorkSearch(searchQuery);
    }
  }, [fetchArtWorkSearch, searchQuery]);

  let pagesArray = [];
  for (let i = 0; i < 20; i++) {
    pagesArray.push(i + 1);
  }

  const widthSlidePage = pagesArray.length * -101 - 4 * -101;

  useEffect(() => {
    fetchArtWorks(currentPage, limit);
  }, [fetchArtWorks, currentPage, limit]);

  useEffect(() => {
    fetchArtWorksOther();
  }, [fetchArtWorksOther]);

  function debounce(callee: any, timeoutMs: number) {
    return function perfom(...args: []) {
      let lastCall = Date.now();
      let prevCall = lastCall;
      const lasstCallTaimer = setTimeout(() => callee(...args), timeoutMs);
      if (prevCall && Date.now() - lastCall <= timeoutMs) {
        clearTimeout(lasstCallTaimer);
      }
    };
  }
  const debounceHandle = debounce(setSearchQuery, 250);
  console.log(debounceHandle, "debounce");

  const sortedAndSearchArtWork = useMemo(() => {
    if (selectedSort !== SortKey.Undefined) {
      return artWorkOther.sort((a, b) => {
        switch (selectedSort) {
          case SortKey.TitleUp:
            return a.title.toLocaleLowerCase() < b.title.toLocaleLowerCase()
              ? 1
              : -1;
          case SortKey.TitleDown:
            return a.title.toLocaleLowerCase() > b.title.toLocaleLowerCase()
              ? 1
              : -1;
          case SortKey.DateDisplayUp:
            return +a.date_end - +b.date_end;
          case SortKey.DateDisplayDown:
            return +b.date_end - +a.date_end;
          default:
            return 0;
        }
      });
    }
    return artWorkOther;
  }, [selectedSort, artWorkOther]);

  const sortArtWork = (value: SortKey) => {
    setSelectedSort(value);
  };

  const changePage = (page: number) => {
    setCurrentPage(page);
  };

  const nextPageClick = () => {
    if (slidePage === widthSlidePage) {
      return null;
    }
    setSlidePage(slidePage - 101);
  };
  const prevPageClick = () => {
    if (slidePage === 0) {
      return null;
    } else {
      setSlidePage(slidePage + 101);
    }
  };

  return (
    <Layout>
      <ContentContainer>
        <Typography type="xxl">
          Let's Find Some <span>Art</span> Here!
        </Typography>
        <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery}>
          <ContainerSearchArtWorks>
            {!isLoadiangArtWorkSearch ? (
              searchArtworks.map((artWork) => (
                <Card key={artWork.id} artWork={artWork} />
              ))
            ) : (
              <Loader />
            )}
          </ContainerSearchArtWorks>
        </Search>

        <Typography>
          <span>Topics for you</span>
          Our special gallery
        </Typography>
        <XlContainer>
          {artWorkError && <h1>Произошла ошибка ${artWorkError}</h1>}
          {!isLoadiangArtWorks ? (
            <ArtWorks sizeContainer="full" artWorks={artWorks} />
          ) : (
            <Loader />
          )}
          <PageContainer>
            <PrevButton onClick={prevPageClick}>
              <img src={arrowLeft} alt="prev" />
            </PrevButton>
            <WrraperPage>
              {pagesArray.map((p) => (
                <PageButton
                  key={p}
                  type={currentPage === p ? "active" : ""}
                  $transform={`translate3d(${slidePage}%, 0px, 0px)`}
                  onClick={() => changePage(p)}
                >
                  <Page>{p}</Page>
                </PageButton>
              ))}
            </WrraperPage>

            <NextButton onClick={nextPageClick}>
              <img src={arrowright} alt="next" />
            </NextButton>
          </PageContainer>
        </XlContainer>
        <Typography>
          <span>Here some more</span>
          Other works for you
        </Typography>
        <XxlContainer>
          {artWorkErrorOther && <h1>Произошла ошибка${artWorkErrorOther}</h1>}
          {!isLoadiangArtWorksOther ? (
            <>
              <Select
                options={[
                  { value: SortKey.Undefined, name: "Сортировка по" },
                  { value: "title_down", name: "По названию от A до Z" },
                  { value: "title_up", name: "По названию от Z до A" },
                  { value: "date_display_up", name: "По возростанию даты" },
                  { value: "date_display_down", name: "По убыванию даты" },
                ]}
                value={selectedSort}
                onChange={sortArtWork}
              />
              <ArtWorks
                artWorks={sortedAndSearchArtWork}
                sizeContainer="mini"
              />
            </>
          ) : (
            <Loader />
          )}
        </XxlContainer>
      </ContentContainer>
    </Layout>
  );
};
