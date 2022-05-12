import fs from "fs";

interface IWrite{
  data: object;
  path: string;
}

const write = ({ data, path }: IWrite) => {
  Object.keys(data).forEach((key) => {
    fs.writeFile(
      `${__dirname}/${path}/${key}.json`,
      JSON.stringify(data, null, 2),
      (err: any) => {
        if(err) console.log(err);
      }
    );
  });
};

export { write };