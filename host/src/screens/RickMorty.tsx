import React from "react";
import ReactDOM from "react-dom";

// @ts-ignore
import {RMCharacterList} from "RMComponents/RMCharacterList";

type RickMortyProps = {
  lang:string
}

export const RickMorty = (props:RickMortyProps) => {
  const {lang} = props;
  return(<div>
      <div>
        <RMCharacterList lang={lang}/>
      </div>
</div>);
};
