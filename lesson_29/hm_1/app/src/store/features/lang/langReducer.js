import { langEn } from "../../../language/en";
import { langUa } from "../../../language/ua";
import { CHANGE_LANG } from "./langTypes";

const langs = {
  UA: langUa,
  EN: langEn,
};

const initialState = {
  lang: "UA",
  data: langUa,
};

const langReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_LANG: {
      return {
        ...state,
        lang: action.payload,
        data: langs[action.payload],
      };
    }
    default: {
      return state;
    }
  }
};

export default langReducer;
