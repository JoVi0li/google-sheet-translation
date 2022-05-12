import { ILang } from "../interface/ilang";

const translationService = (langs: ILang[], initialLang?: ILang) => {
  var chosenLanguage: ILang = initialLang ? initialLang : langs[0];

  const uChangeLanguage = (key: string) => {
    const lang = langs.filter((x) => x.key === key)[0];
    if(lang !== null && lang !== undefined) chosenLanguage = lang;
  };

  const t = (key: string): string => {
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