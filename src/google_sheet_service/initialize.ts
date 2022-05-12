import { GoogleSpreadsheet } from "google-spreadsheet";
import { IGoogleSheetKeys } from "../interface/igoogle_sheet_keys";

interface IInitialize{
  google_sheet_id: string;
  google_sheet_keys_client_email: IGoogleSheetKeys["client_email"];
  google_sheet_keys_private_key: IGoogleSheetKeys["private_key"];
}

const initialize = async ({
  google_sheet_id,
  google_sheet_keys_client_email,
  google_sheet_keys_private_key 
  }: IInitialize) => {
  const document = new GoogleSpreadsheet(google_sheet_id);
  
  await document.useServiceAccountAuth({
    client_email: google_sheet_keys_client_email,
    private_key: google_sheet_keys_private_key,
  });

  return document;
};

export { initialize };