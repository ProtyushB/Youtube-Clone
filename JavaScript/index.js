// url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&key=[YOUR_API_KEY]`;


const displayGrid = document.querySelector("#displayGrid");

const search = async ()=>{
    
    try{
        const query = document.querySelector("#search").value;

        console.log(query);

        //const res = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=latest movies trailer&key=${api_key1}`);

        const res = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=12&q=${query}&key=AIzaSyCSbz6Rxz4juGXvxTDaYUIs25OgsrcLMT4`);

        const data = await res.json();

        //const data=JSON.parse(localStorage.getItem("YouTubeData"));

        console.log(data);
        //localStorage.setItem("YouTubeData",JSON.stringify(data.items));
        localStorage.setItem("Videos", JSON.stringify(data.items));
        display();

        //localStorage.setItem("YouTubeData", JSON.stringify(data))
        //display(data);
    }catch(err){
        console.log(err);
    }
}

const display = ()=>{

    let videos = JSON.parse(localStorage.getItem("Videos"));
    
    //console.log(videos);
    displayGrid.innerHTML=null;

    videos.forEach(({id:{videoId},snippet:{title},snippet:{channelTitle},snippet:{thumbnails:{high:{url}}}})=>{
        let box = document.createElement("div");
        box.setAttribute("id","box");
        //box.setAttribute("class", "crop");

        let vdothumbnails=document.createElement("img");
        vdothumbnails.setAttribute("id","vdothumbnails")

        let vdoBox = document.createElement("div");
        vdoBox.setAttribute("class", "crop");

        vdoBox.append(vdothumbnails);

        vdothumbnails.src=url;
        vdothumbnails.addEventListener("click",function (){
            //console.log(videos);
            localStorage.setItem("AllVideos",JSON.stringify(videos));
            openVideo(videoId,title);
        })





        let name=document.createElement("p");
        name.textContent=title;

        let titleBox = document.createElement("div");
        titleBox.setAttribute("class","titleBox");

        titleBox.append(name);






        let channel = document.createElement("p");
        channel.textContent=channelTitle;

        let channelBox=document.createElement("div");
        channelBox.setAttribute("class","channelBox");

        channelBox.append(channel);

        box.append(vdoBox,titleBox,channelBox);
        displayGrid.append(box);
    });
}

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

{/* <iframe 
    width="560" 
    height="315" 
    src="https://www.youtube.com/embed/1jY93I2QOhI" 
    title="YouTube video player" 
    frameborder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
    allowfullscreen>
</iframe> */}

search();