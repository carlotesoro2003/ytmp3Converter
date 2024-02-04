const convertMP3Button = document.getElementById('convertMP3-button');
const convertMP4Button = document.getElementById('convertMP4-button');
const convertInput = document.getElementById('convert-input');
const resultDisplay = document.querySelector('.result');



async function getAudio(){
    let link = convertInput.value;
    let parts = link.split("=");
    let videoId = "";

    if(parts.length === 2){
        videoId = parts[1]
        console.log(videoId)
    }
    else{
        console.log("Error! Invalid Youtube Link")
    }

    const url = `https://youtube-mp36.p.rapidapi.com/dl?id=${videoId}`

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '9006db66c2mshcb07c157de00a88p10fa73jsn83d66d0f73e1',
            'X-RapidAPI-Host': 'youtube-mp36.p.rapidapi.com'
        }
    };

        const response = await fetch(url, options);
        const result = await response.json();
        resultDisplay.innerHTML = `<p class="title"> Title: ${result.title}</p>`
        console.log(result);

        setTimeout(() =>{
            window.open(result.link, "_blank")
        },1000)
    
}

async function getVideo() {
    let link = convertInput.value;
    let parts = link.split("=");
    let videoId = "";

    if (parts.length === 2) {
        videoId = parts[1]
        console.log(videoId)
        console.log(link)
    } else {
        console.log("Error! Invalid Youtube Link")
    }

    const url = `https://youtube-media-downloader.p.rapidapi.com/v2/video/details?videoId=${videoId}`;


    const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '9006db66c2mshcb07c157de00a88p10fa73jsn83d66d0f73e1',
		'X-RapidAPI-Host': 'youtube-media-downloader.p.rapidapi.com'
	    }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        resultDisplay.innerHTML = `<p class="title"> Title: ${result.title}</p>`
        console.log(result);

        
        setTimeout(() =>{
            window.open(result.link, "_blank")
        },1000)

    } catch (error) {
        console.error("Error fetching or downloading the video:", error);
    }
}

convertMP3Button.addEventListener("click", () =>{
    getAudio();
})

convertMP4Button.addEventListener("click", () => {
    getVideo();
})