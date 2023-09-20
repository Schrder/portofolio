const sharp = require("sharp");

// Input and output file paths
const inputFilePath = "favicon.png"; // Replace with your input file path
const outputFilePath = "favicon-2.png"; // Replace with your desired output file path

// Resize the image to a width of 200px
sharp(inputFilePath)
  .resize(200)
  .toFile(outputFilePath, (err, info) => {
    if (err) {
      console.error(err);
    } else {
      console.log(`Image resized to width: ${info.width}px`);
    }
  });
