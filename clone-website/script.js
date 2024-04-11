document.addEventListener('DOMContentLoaded', () => {
   let songsHTML = "";
   let existingString;
   for(let i=0; i<songs.length; i++){
      let imagename = `covers/${i+1}.jpg`;
      songsHTML = `
      <div class="one">
         <img src="${imagename}" alt="" srcset="" class="image">
         <div class="content">
            <p>${songs[i]['name']}</p>
         </div>
         <div class="audio1">
            <audio controls>
               <source src="songs/${i+1}.mp3" type="audio/mpeg">
               ${songs[i]['timer']}
               </audio>
               
         </div>
      </div>
   `
   
      existingString += songsHTML;
      // console.log(songsHTML);
   }
   
   console.log(existingString);
   document.getElementById('songslist').innerHTML= existingString;
})
