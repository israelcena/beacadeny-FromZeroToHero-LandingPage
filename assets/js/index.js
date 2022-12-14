// mobile menu
const mobileBtn = document.getElementById("mobile-nav-toggle")
const userMenu = document.getElementById("primary-navegation")
mobileBtn.addEventListener("click", () => {
  userMenu.classList.toggle("active")
})

userMenu.addEventListener("click", () => {
  userMenu.classList.remove("active")
})



// modal js
const openBtn1 = document.getElementById("openModal--1");
const closeBtn1 = document.getElementById("closeModal--1");
const openBtn2 = document.getElementById("openModal--2");
const closeBtn2 = document.getElementById("closeModal--2");
const openBtn3 = document.getElementById("openModal--3");
const closeBtn3 = document.getElementById("closeModal--3");
const modal1 = document.getElementById("modal--1");
const modal2 = document.getElementById("modal--2");
const modal3 = document.getElementById("modal--3");

openBtn1.addEventListener("click", () => {
  modal1.classList.toggle("open");
});

closeBtn1.addEventListener("click", () => {
  modal1.classList.remove("open");
});

openBtn2.addEventListener("click", () => {
  modal2.classList.toggle("open");
});

closeBtn2.addEventListener("click", () => {
  modal2.classList.remove("open");
});

openBtn3.addEventListener("click", () => {
  modal3.classList.toggle("open");
});

closeBtn3.addEventListener("click", () => {
  modal3.classList.remove("open");
});

// testimonials__table
const trs = document.querySelectorAll(".testimonials__table--row")
trs.forEach(
  tr => {
    fetch(`https://dev.to/api/users/${tr.rowIndex}`)
      .then(res => res.json())
      .then(data => {
        const td1 = document.createElement("td")
        const td2 = document.createElement("td")
        const td3 = document.createElement("td")
        const td4 = document.createElement("td")
        const td5 = document.createElement("td")
        td1.innerHTML = data.id
        td2.innerHTML = `<img src=${data.profile_image} />`
        td3.innerHTML = data.name
        td4.innerHTML = data.summary
        td5.innerHTML = data.username
        tr.appendChild(td1)
        tr.appendChild(td2)
        tr.appendChild(td3)
        tr.appendChild(td4)
        tr.appendChild(td5)
      })
      .catch(err => console.error(err))
  }
)
