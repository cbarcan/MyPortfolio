//front page text writing animation
const txtFull = "Full Stack Developer";
const txtArr = txtFull.split("");

function waitForMs(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}
function getRandomTime() {
  return Math.random() * 0.5;
}
function getEle(id) {
  return document.getElementById("text");
}
function ModifyTxt(el, txt) {
  return (el.innerHTML = txt);
}
function writeOut(txtArr, curChar = 0) {
  const randomTime = getRandomTime();
  setTimeout(
    async () => {
      const el = getEle("text");
      let elTxt = el.innerHTML;
      elTxt += txtArr[curChar];
      ModifyTxt(el, elTxt);
      //check if next iteration is out of range
      if (curChar + 1 == txtArr.length) {
        await waitForMs(1500);
        return deleteOut(txtArr, txtArr.length);
      }
      await waitForMs(500);
      return writeOut(txtArr, curChar + 1);
    },

    randomTime * 1000
  );
}
function deleteOut(txtArr, curChar = 0) {
  const randomTime = getRandomTime();
  setTimeout(
    () => {
      const el = getEle("text");
      let elTxt = el.innerHTML;
      //remove
      const elTxtArr = elTxt.split("");
      const elTxtArrLen = elTxtArr.length;
      console.log(elTxtArr.length - 1);
      const newElTxt = elTxtArr.splice(0, curChar - 1).join("");
      ModifyTxt(el, newElTxt);
      if (elTxtArrLen == 0) {
        return writeOut(txtArr, 0);
      }
      return deleteOut(txtArr, elTxtArrLen - 1);
    },

    randomTime * 1000
  );
  return;
}

writeOut(txtArr);


// function sendEmail() {
//   Email.send({
//       Host: "smtp.gmail.com",
//       Username: "sender@email_address.com",
//       Password: "Enter your password",
//       To: 'receiver@email_address.com',
//       From: "sender@email_address.com",
//       Subject: "Sending Email using javascript",
//       Body: "Well that was easy!!",
//   })
//       .then(function (message) {
//           alert("mail sent successfully")
//       });
// }

//scroll to top
var upButton = document.querySelector("#upButton");

window.onscroll = () => {
  if (window.scrollY > 300) {
    upButton.classList.add('show')
  } else {
    upButton.classList.remove('show');
  }
};

upButton.onclick = () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

mobileNavToggle.addEventListener("click", () => {
  if (navbar.style.display === "none") {
    navbar.style.display = "block";
  } else {
    navbar.style.display = "none"
  }
})