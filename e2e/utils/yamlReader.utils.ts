import * as YAML from "yaml";
import * as fs from "fs";

interface JsonObject {
  [key: string]: any;
}

export const getPageObject = (folderPath: string) => {
  const localPageObjects: JsonObject = {};
  const files = getAllFilePaths(folderPath);
  let i = 1;
  for (const file of files) {
    localPageObjects[`File${i++}`] = yamlReader(file);
  }
  return localPageObjects;
};

export const getAllFilePaths = (
  folderPath: string,
  allFilesPaths: string[] = []
) => {
  const files = fs.readdirSync(folderPath);
  files.forEach(async (file) => {
    if (fs.statSync(`${folderPath}/${file}`).isDirectory()) {
      getAllFilePaths(`${folderPath}/${file}`, allFilesPaths);
    } else {
      allFilesPaths.push(`${folderPath}/${file}`);
    }
  });
  return allFilesPaths;
};

export const yamlReader = (filePath: string) => {
  const fileObj = fs.readFileSync(filePath, "utf8");
  const yamlReaderObj = YAML.parse(fileObj);
  return yamlReaderObj;
};


