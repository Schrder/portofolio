import fs from "fs";

// List of file names (replace these with your own names)
const photoNames = [
  "berlijn-duitsland-2022",
  "funatsu-japan-2017",
  "fransum-nederland-2017",
  "tanabe-2-japan-2017",
  "darelkebdani-marokko-2015",
  "jeruzalem-israel-2014",
  "amsterdam-2-nederland-2022",
  "ardabil-2-iran-2016",
  "isfahan-2-iran-2016",
  "fujikawaguchiko-japan-2017",
  "lissabon-portugal-2023",
  "lissabon-portugal-2015",
  "tanabe-japan-2017",
  "geiranger-2-noorwegen-2022",
  "isfahan-3-iran-2016",
  "tokyo-japan-2017",
  "seoul-korea-2019",
  "isfahan-4-iran-2016",
  "amsterdam-2-nederland-2017",
  "lissabon-2-portugal-2023",
  "enna-italie-2022",
  "porto-portugal-2015",
  "amsterdam-nederland-2017",
  "aarhus-denemarken-2023",
  "noordpolderzijl-nederland-2017",
  "geiranger-noorwegen-2022",
  "ardabil-iran-2016",
  "isfahan-iran-2016",
  "madrid-spanje-2013",
  "tokyo-2-japan-2017",
];
const prefix = "../src/pages/fragments/";
const extension = ".md";

if (!fs.existsSync(prefix)) {
  throw new Error("prefix: " + prefix + " does not exist");
}

function generateFileContent(filename) {
  return `---
    layout: ../../layouts/PhotoLayout.astro
    title: ${filename}
    description: 
  ---`;
}

// Loop through the list of names and create the files
photoNames.forEach((photoName) => {
  const content = generateFileContent(photoName);
  const name = prefix + photoName + extension;
  fs.writeFile(name, content, (err) => {
    if (err) {
      console.error(`Error creating ${name}: ${err}`);
    } else {
      console.log(`Created file: ${name}`);
    }
  });
});

console.log("Files created successfully!");
