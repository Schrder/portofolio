const fs = require("fs");
const sharp = require("sharp");

const folderPath = "../public/assets/originals/converted";
const targetPath = "../src/pages/fragments";

fs.readdir(folderPath, (err, files) => {
  if (err) {
    console.error("Error reading folder:", err);
    return;
  }

  const pngFiles = files.filter((file) => file.toLowerCase().endsWith(".png"));

  pngFiles.forEach((file) => {
    const filePath = `${folderPath}/${file}`;
    const destionationPath = `${targetPath}/${file.replace(".png", ".md")}`;

    sharp(filePath)
      .metadata()
      .then((metadata) => {
        const info = `\twidth: ${metadata.width}\n\theight: ${metadata.height}\n`;

        fs.appendFile(destionationPath, info, (err) => {
          if (err) {
            console.error(`Error appending to ${destionationPath}:`, err);
          } else {
            console.log(`Appended information to ${destionationPath}`);
          }
        });
      })
      .catch((error) => {
        console.error(`Error reading ${file}:`, error);
      });
  });
});
