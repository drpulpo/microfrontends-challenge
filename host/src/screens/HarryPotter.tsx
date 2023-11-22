import React from "react";
import ReactDOM from "react-dom";

// @ts-ignore
import {HPCharacterList} from "HPComponents/HPCharacterList";

type HarryPotterProps={
  lang:string
}

export const HarryPotter = (props:HarryPotterProps) => {
  const {lang} = props;
  return(<div>
      <div>
        <HPCharacterList lang={lang}/>
      </div>
</div>);
};
