// // let btn = document.querySelector("button");

// // btn.addEventListener("click", () => {});

// // let url = "https://catfact.ninja/fact";

// // btn.addEventListener("click", async () => {
// //   //asyncronus function banvyu
// //   let fact = await getfact(); //fact ave pachi j agal vadhe tena mate

// //   p = document.querySelector("#result");
// //   p.innerText = fact;
// // });

// // async function getfact() {
// //   try {
// //     let res = await axios.get(url);
// //     return res.data.fact; //fact ni velue return kari je btn dabava thi fact nam na variabale ma strire thase
// //   } catch (err) {
// //     console.log("Error :", err  );
// //   }
// // }

// let url2 = "https://dog.ceo/api/breeds/image/random";

// let btn = document.querySelector("button");
// let img = document.querySelector("#img");

// btn.addEventListener("click", async () => {
//   let link = await getImage();
//   img.setAttribute("src", link);
// });

// async function getImage() {
//   try {
//     let res = await axios.get(url2);
//     return res.data.message;
//   } catch (e) {
//     console.log("error : ", e);
//   }
//   console.log("kiran mithapara");
// }

let url3 = "https://universities.hipolabs.com/search?name=";

let country = "nepal";

async function getCollage() {
  try {
    let res = await axios.get(url3 + country);
    console.log(res.data);
  } catch (e) {
    console.log("error", e);
  }
}

getCollage();
