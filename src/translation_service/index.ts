import { ILang } from "../interface/ilang";

const translationService = () => {
  const uChangeLanguage = (key: string, langs: ILang[]) => {
    var chosenLanguage: ILang;
    const lang = langs.filter((x) => x.key === key)[0];
    if(lang !== null && lang !== undefined) 
      chosenLanguage = lang;
      return chosenLanguage;
  };

  const t = (key: string, chosenLanguage: ILang): string => {
    const text = chosenLanguage.json[key];
    if(text === undefined || text === null){
      throw new Error("Essa chave não existe");
    };
    return text;
  };

  return {
    uChangeLanguage,
    t,
  };
};

export { translationService };