const data = JSON.parse(localStorage.getItem("videoId"));

console.log(data[0].name);

const allVideos = JSON.parse(localStorage.getItem("AllVideos"));

console.log(allVideos);

const iframe = document.querySelector("#iframe");
iframe.src=`https://www.youtube.com/embed/${data[0].videoId}`;
iframe.allow="fullscreen"; 

const title = document.querySelector("#title");
title.textContent=data[0].name;

let count=0;
let container_2 = document.querySelector("#container_2");

const displayRelatedVideos = (videos)=>{

    container_2.innerHTML=null;

    videos.forEach(({id:{videoId},snippet:{title},snippet:{channelTitle},snippet:{thumbnails:{high:{url}}}})=>{

        if(data[0].videoId!=videoId){
            
            let box = document.createElement("div");
            box.setAttribute("class","box");



            let videoBox = document.createElement("div");
            videoBox.setAttribute("class", "videoBox");
            

            let video = document.createElement("img");
            video.setAttribute("class", "video");
            video.src=url;

            videoBox.append(video);



            let textBox = document.createElement("div");
            textBox.setAttribute("class","textBox");


            let name = document.createElement("p");
            name.setAttribute("class", "title");
            name.textContent=title;


            let channelName = document.createElement("p");
            channelName.setAttribute("class", "channel");
            channelName.textContent=channelTitle;


            textBox.append(name,channelName);

            box.append(videoBox,textBox);

            box.addEventListener("click", function(){
                console.log("openVideo");
                openVideo(videoId,title);
            });

            container_2.append(box);
        }
    });
}

displayRelatedVideos(allVideos);


const openVideo = (vdoUrl,title)=>{

    let obj={
        videoId: vdoUrl,
        name: title
    }

    let arr=[];
    arr.push(obj);

    localStorage.setItem("videoId",JSON.stringify(arr));
    window.location.href="video.html";
}