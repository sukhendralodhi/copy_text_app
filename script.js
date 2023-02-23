// Variable decalration
let copyBtn = document.getElementById("copy_btn");
let inputText = document.getElementById("input");

// function defination
const copyText = () => {
  navigator.clipboard.writeText(inputText.value).then(() => {
    alert("Coupon Code Copied: " + inputText.value);
    copyBtn.innerText = "Copied!!";
    setTimeout(() => {
      copyBtn.innerText = "Copy";
    }, 3000);
  });
};

// event listener
copyBtn.addEventListener("click", () => {
  copyText();
});