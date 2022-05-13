import { useState } from "react";
import { googleSheetService, IExecInitialize } from "./google_sheet_service";
import { IRead } from "./google_sheet_service/read";
import { IWrite } from "./google_sheet_service/write";
import { ILang } from "./interface/ilang";
import { translationService } from "./translation_service";

const useGoogleSheetTranslation = () => {
  const [languages, setLanguages] = useState<ILang[]>([]);
  const [chosenLang, setChosenLang] = useState<ILang>(undefined);

  const gService = googleSheetService();
  const tService = translationService();

  const init = (initData: IExecInitialize) => {
    return gService.uInitialize(initData);
  };

  const read = ({ document, title, offset }: IRead) => {
    return gService.uRead({ document, title, offset });
  };

  const write = ({ data, path }: IWrite) => {
    return gService.uWrite(data, path);
  };

  const changeChosenLang = (key: string) => {
    const lang = tService.uChangeLanguage(key, languages);
    setChosenLang(lang);
  };

  const t = (key: string) => {
    return tService.t(key, chosenLang);
  };

  const getChosenlang = () => {
    return chosenLang;
  };

  const setlangs = (langs: ILang[]) => {
    setLanguages(langs);
  };

  const getLangs = () => {
    return languages;
  };


  return {
    init,
    read,
    write,
    changeChosenLang,
    t,
    getChosenlang,
    setlangs,
    getLangs,
  }
};

export { useGoogleSheetTranslation };
