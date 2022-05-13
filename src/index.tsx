import React from "react";
import { useGoogleSheetTranslation } from "./useGoogleSheetTranslation";

const GoggleSheetContext = React.createContext(useGoogleSheetTranslation)

const GoogleSheetTranslation = () => {
  return (
    <GoggleSheetContext.Provider
     value={useGoogleSheetTranslation}>
   
    </GoggleSheetContext.Provider>
  )
}


