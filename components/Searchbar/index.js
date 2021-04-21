import style from "./searchbar.module.scss";
import { Input } from "./searchbarstyled";

import React from "react";
import Image from "next/image";

const SearchBar = () => {
  return (
    <>
      <div className={style.wrapper}>
        <div className={style.icon_input_wrapper}>
          <Image
            className={style.case}
            src="/case.svg"
            alt="Picture of the author"
            width={15}
            height={14}
          />
          <Input placeholder={"Title, companies, expertise or benefits"} />
        </div>
        <button className={style.searchbar_button}>Search</button>
      </div>
    </>
  );
};

export default SearchBar;
