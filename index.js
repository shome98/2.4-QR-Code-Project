/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/
import inquirer from 'inquirer';
import qr from "qr-image";
import fs from "fs";
// var qr = require('qr-image');

inquirer
  .prompt([
    /* Pass your questions in here */
    {message:"type in your URL",name:"URL"
}])
  .then((answers) => {
    // Use user feedback for... whatever!!
    const url=answers.URL;
    var qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream('qr_img.png'));
    // console.log(answers);
    fs.writeFile("URL.txt", url, (err) => {
        if (err) throw err;
        console.log("the file has been saved!");
      });
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });

  //lets improve it later by modifying it so that it can make qr-codes one after another
  //name of the files should be changed as well ilke i can take user input for name of the file
  //and the url name and the file name will also be changed so that we can varry the names
  //used npm packages inquirer and qr-image