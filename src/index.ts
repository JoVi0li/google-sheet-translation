import { googleSheetService } from "./google_sheet_service";
import { translationService } from "./translation_service";
import { ILang } from "./interface/ilang";

const useGoogleSheetTranslation = (langs: ILang[], initialLang?: ILang) => {

  const useGoogleSheet = () => {

    return googleSheetService();
  }


  const useTranslation = () => {
    return translationService(langs, initialLang);
  }

  return {
    useGoogleSheet,
    useTranslation
  };
};


export { useGoogleSheetTranslation };