import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import { getRandomManga } from "@/libs/getManga";
import Manga from "./posts/manga";
import { useEffect, useState } from "react";
const MFA = require("mangadex-full-api");

MFA.login("alexq217", "Toithanhcong1");

export function getServerSideProps() {
  // const manga = await getRandomManga();
  // const manga = fetchMangaCover();
  return {
    props: {
      // manga: manga,
    },
  };
}

export default function Home() {
  const [coverList, setCoverList] = useState([]);

  useEffect(() => {
    // get truc tiep tu await, get thong qua state se bi loi
    async function fetchCoversByQuery() {
      const manga = await MFA.Manga.getByQuery({
        title: "March Comes in Like a Lion",
      });
      const covers = await MFA.Cover.getMangaCovers(manga);
      // const covers = await MFA.Cover.getByQuery({
      //   order: {
      //     volume: "asc",
      //   },
      //   manga: [manga],
      // });
      setCoverList(covers);
    }
    fetchCoversByQuery();
  }, []);

  return (
    <div>
      {coverList
        .sort((a, b) => a.volume - b.volume)
        .map((el) => {
          return <Image src={el.image256} width={300} height={100} />;
        })}
      {/* {<Image src={coverList.image256} width={300} height={100} />} */}
    </div>
  );
}
