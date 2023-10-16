import React, { useEffect, useState } from "react";
import Card from "./Card";

export default function InfiniteScroll() {
  const [cards, setCards] = useState([]);
  const [pageNo, setPageNo] = useState(1);
  const [loading, setLoading] = useState(false);

  const link = `https://rickandmortyapi.com/api/character/?page=${pageNo}`;

  const getData = async () => {
    setLoading(true);
    const res = await fetch(link);
    const data = await res.json();
    setCards((prev) => [...prev, ...data?.results]);
    setLoading(false);
  };

  const handleInfiniteScroll = () => {
    // console.log("scrollHeight : ", document.documentElement.scrollHeight);
    // console.log("innerheight : ", window.innerHeight);
    // console.log("scrollTop : ", document.documentElement.scrollTop);

    if (
      window.innerHeight + document.documentElement.scrollTop >=
      document.documentElement.scrollHeight
    )
      setPageNo((prevPage) => prevPage + 1);
  };

  useEffect(() => {
    console.log("PAGE NO : ", pageNo);
    window.addEventListener("scroll", handleInfiniteScroll);

    getData();

    return () => {
      window.removeEventListener("scroll", handleInfiniteScroll);
    };
  }, [pageNo]);

  return (
    <div>
      <h1>React Infinte Scroll</h1>
      <div className="box">
        {cards?.map((character) => {
          return <Card key={character.id} character={character} />;
        })}
      </div>
      {loading && <h1>Loading...</h1>}
    </div>
  );
}
