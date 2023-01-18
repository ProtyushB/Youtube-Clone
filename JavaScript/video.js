const data = JSON.parse(localStorage.getItem("videoId"));
console.log(data[0].name)

const iframe = document.querySelector("#iframe");
iframe.src=`https://www.youtube.com/embed/${data[0].videoId}`;
iframe.allow="fullscreen"; 

const title = document.querySelector("#title");
title.textContent=data[0].name;