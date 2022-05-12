import { IGoogleSheetKeys } from "../interface/igoogle_sheet_keys";
import { initialize } from "../google_sheet_service/initialize";
import { read } from "../google_sheet_service/read";
import { write } from "../google_sheet_service/write";
import { GoogleSpreadsheet } from "google-spreadsheet";

interface IExecInitialize {
  google_sheet_id: string;
  google_sheet_keys: IGoogleSheetKeys;
}

const googleSheetService = () => {

  const uInitialize = async ({ 
    google_sheet_id,
    google_sheet_keys,
   }: IExecInitialize) => {
    const params = {
      google_sheet_id: google_sheet_id,
      google_sheet_keys_client_email: google_sheet_keys.client_email,
      google_sheet_keys_private_key: google_sheet_keys.private_key
    };
    const document = await initialize(params);
    return document;
  };

  const uRead = async (
      document: GoogleSpreadsheet,
      title: string,
      offset?: number
    ) => {
    const params = {
      document,
      title,
      offset
    };
    const result = await read(params);
    return result;
  };

  const uWrite = (data: object, path: string) => {
    const params = {
      path,
      data,
    }
    write(params);
  };

  return {
    uInitialize,
    uRead, 
    uWrite
  };
}

export { googleSheetService };