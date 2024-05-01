var Facebook = document.querySelector('.Facebook');
var format = document.querySelector('.format');
var hidden = document.querySelector('.hidden');

function Direct() {
if(Facebook.value != ""){
  if(Facebook.value.indexOf("https://fb.watch/") != -1)
     {
     const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': '2b929025ddmshd3302ab633a818cp1ab4cdjsne14ca95e2a8d',
          'X-RapidAPI-Host': 'facebook-reel-and-video-downloader.p.rapidapi.com'
       }
     };
      var url = 'https://facebook-reel-and-video-downloader.p.rapidapi.com/app/main.php?url='+Facebook.value;
      fetch(url, options).then((response)=>{
           return response.json();
       }).then((data)=>{
            console.log(data);
            switch (format.value) {
               case "Low":
                  hidden.classList.add('active');
               document.querySelector('.form-control').value = data.links["Download Low Quality"];
               break;
               case "High":
                  hidden.classList.add('active');
                   document.querySelector('.form-control').value = data.links["Download High Quality"];
               break;
               }
        }).catch(err => console.error(err));
    }
   else{
       alert('Enter Your Facebook Url');
     }
 }
 else {
   alert('Enter Your Url');
 }
}

var url = document.querySelector('.form-control');
function download(){
      const anchor = document.createElement("a");
      anchor.href =  url.value;
      anchor.download = 'MWC.mp4';
  
      document.body.appendChild(anchor);
      anchor.click();
      document.body.removeChild(anchor);
 }