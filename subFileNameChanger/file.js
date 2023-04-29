const fs = require("fs");
const filePath = `C:\\Users\\sande\\Downloads\\[GigaCourse.Com] Udemy - Django 4 and Python Full-Stack Developer Masterclass\\08 - Introduction to Django Framework`;

const arr = fs.readdirSync(filePath);

for (f in arr) {
  if (arr[f].slice(-4) == ".srt" && arr[f].slice(-7, -4)) {
    let newFileName = arr[f].slice(0, -7) + arr[f].slice(-4);

    fs.rename(
      `${filePath}\\${arr[f]}`,
      `${filePath}\\${newFileName}`,
      (err) => {
        if (err) {
          console.log(err);
        }
      }
    );

    // console.log(arr[f].slice(0, -7) + arr[f].slice(-4));
    // console.log(arr[f]);
    // console.log(newFileName);
  }
}
// const arr1 = fs.readdir(
//   "C:\\Users\\sande\\Downloads\\[GigaCourse.Com] Udemy - Django 4 and Python Full-Stack Developer Masterclass\\test",
//   () => {}
// );
// console.log(arr1);
// for (i in arr1) {
//   console.log(arr[i]);
// }

// fs.rename(
//   "C:\\Users\\sande\\Downloads\\[GigaCourse.Com] Udemy - Django 4 and Python Full-Stack Developer Masterclass\\test.txt",
//   "C:\\Users\\sande\\Downloads\\[GigaCourse.Com] Udemy - Django 4 and Python Full-Stack Developer Masterclass\\sample.txt",
//   function (err) {
//     if (err) throw err;
//     console.log("File Renamed.");
//   }
// );
