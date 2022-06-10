import { BookListNav } from "./BooklistNav/BooklistNav";
import { useEffect, useState } from "react";
import { StyledBook, StyledBookList } from "./BookList.Styled";
import { FavouriteBtn } from "../FavouriteBtn.jsx/FavouriteBtn";
import { Filters } from "../Filters/Filters";
import { Spinner } from "../../../utils/Spinner";
import { Link } from "react-router-dom";

export const BookList = ({ searchFilters, favourites }) => {
  // const htm = /([htm])\w+/g;
  const [bookList, setBookList] = useState(null);
  const [listPage, setListPage] = useState(1);
  const [favBooks, setFavBooks] = useState([]);

  const BOOK_LIST_ENDPOINT =
    searchFilters !== ""
      ? `https://gnikdroy.pythonanywhere.com/api/book/${searchFilters}&page=${listPage}`
      : `https://gnikdroy.pythonanywhere.com/api/book/?page=${listPage}${searchFilters}`;

  const getBookList = () => {
    fetch(BOOK_LIST_ENDPOINT)
      .then((res) => res.json())
      .then((res) => setBookList(res));
  };

  useEffect(() => {
    setBookList(null);
    getBookList();
  }, [listPage, searchFilters, favourites]);

  if (!bookList) {
    return <Spinner />;
  }
  let renderFavourites = []
  if(favourites === true) {
    renderFavourites = (JSON.parse(localStorage.getItem("favourites")))
  }
  return (
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
      <StyledBookList>
        {
          favourites ? renderFavourites.map(
            ({ id, title, agents, downloads, languages, resources }) => (
              <StyledBook key={id}>
                <h4>{title}</h4>
                <h6>{agents[0].person}</h6>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginTop: "10px",
                  }}>
                  {resources.map((e) => (
                    <img
                      src={
                        e.uri.slice(e.uri.length - 9, e.uri.length) ===
                        "small.jpg"
                          ? e.uri
                          : null
                      }
                    />
                  ))}
                  <FavouriteBtn id={id} title={title} agents={agents} downloads={downloads} resources={resources} />
                  <div style={{ padding: "10px", fontSize: '18px' }}>
                    <p>&#128483; languages: {[languages].join(" ")}</p>
                    <p>&#129095; {downloads}</p>
                    <span>
                      {" "}
                      {resources.map((e) => (
                        <p key={e.uri}>
                          <a
                            target='_blank'
                            href={
                              e.uri.slice(e.uri.length - 3, e.uri.length) ===
                              "htm"
                                ? e.uri
                                : null
                            }>
                            {e.uri.slice(e.uri.length - 3, e.uri.length) ===
                            "htm" ? (
                              <span>&#128366; read it!</span>
                            ) : null}
                          </a>
                        </p>
                      ))}
                    </span>
                  </div>
                </div>
              </StyledBook>
            )
          ) : bookList?.results.map(
          ({ id, title, agents, downloads, languages, resources }) => (
            <StyledBook key={id}>
              <h4>{title}</h4>
              <h6>{agents[0].person}</h6>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginTop: "10px",
                }}>
                {resources.map((e) => (
                  <img
                    src={
                      e.uri.slice(e.uri.length - 9, e.uri.length) ===
                      "small.jpg"
                        ? e.uri
                        : null
                    }
                  />
                ))}
                <FavouriteBtn id={id} title={title} agents={agents} downloads={downloads} resources={resources} />
                <div style={{ padding: "10px", fontSize: '18px' }}>
                  <p>&#128483; languages: {[languages].join(" ")}</p>
                  <p>&#129095; {downloads}</p>
                  <span>
                    {" "}
                    {resources.map((e) => (
                      <p key={e.uri}>
                        <a
                          target='_blank'
                          href={
                            e.uri.slice(e.uri.length - 3, e.uri.length) ===
                            "htm"
                              ? e.uri
                              : null
                          }>
                          {e.uri.slice(e.uri.length - 3, e.uri.length) ===
                          "htm" ? (
                            <span>&#128366; read it!</span>
                          ) : null}
                        </a>
                      </p>
                    ))}
                  </span>
                </div>
              </div>
            </StyledBook>
          )
        )}

      </StyledBookList>
      <BookListNav listPage={listPage} setListPage={setListPage} />

    </div>
  );
};
