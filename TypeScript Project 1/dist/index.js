"use strict";
let getUserName = document.querySelector("#user");
let formSubmit = document.querySelector("#form");
let mainContainer = document.querySelector(".main_container");
let baseUrl = "https://api.github.com/users";
async function myCustomFetch(url, options) {
    const res = await fetch(url, options);
    const data = await res.json();
    if (!res.ok) {
        throw new Error(`Network response was not ok-ststus ${res.status}`);
    }
    else {
        return data;
    }
}
async function fetchUserData(url) {
    const data = await myCustomFetch(url, {});
    data.forEach((user) => showUser(user));
}
function showUser(user) {
    const { avatar_url, url, login, id } = user;
    mainContainer.insertAdjacentHTML("beforeend", `
      <div class="card">
     <img src="${avatar_url}" alt="${login}"/>
   <hr/>
    <div class="card-footer"> 
    <img src="${avatar_url}" alt="${login}"/>
    <h1 class="username">${login}</h1>
    <a href="${url}">Github</a>
    </div>
   </div>
    `);
}
fetchUserData(baseUrl);
formSubmit.addEventListener("submit", async (e) => {
    e.preventDefault();
    const searchValue = getUserName.value.toLowerCase();
    try {
        const userData = await myCustomFetch(baseUrl, {});
        const matchUser = userData.filter((user) => user.login.toLowerCase().includes(searchValue));
        console.log(matchUser);
        mainContainer.innerHTML = "";
        if (matchUser.length === 0) {
            return mainContainer?.insertAdjacentHTML("beforeend", `<p class="empty-msg">No matching users found</p>`);
        }
        else {
            matchUser.forEach((user) => showUser(user));
        }
    }
    catch (error) {
        console.log(error);
    }
});
