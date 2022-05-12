import { GoogleSpreadsheet } from "google-spreadsheet";


interface IRead{
  document: GoogleSpreadsheet;
  title: string;
  offset?: number;
}

const read = async ({ document, title, offset }: IRead) => {
  await document.loadInfo();
  
  const sheet = document.sheetsByTitle[title];
  await sheet.loadHeaderRow();

  const columnsTitle = sheet.headerValues;
  const rows = await sheet.getRows({ 
    limit: sheet.rowCount,
    offset: offset ? offset : 0,
  });

  let result = {};

  rows.map((row: { [x: string]: any; }) => {
    columnsTitle.slice(1).forEach((title: string) => {
      result[title] = result[title] || [];
      const key = row[columnsTitle[0]];
      result = {
        ...result,
        [title]: {
          ...result[title],
          [key]: row[title] !== "" ? row[title] : undefined,
        },
      };
    });
  });

  return result;
}

export { read };