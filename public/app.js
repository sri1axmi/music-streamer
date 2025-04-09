const music=new Audio('../Audio/1.mp3');
//music.play();

const songs=[
    {
        id:1,
        songName: `Pyar Hota Kayi Baar <br>
        <div class="subtitle">Arjith Singh</div>`,
        poster:"../Img/1.jpg",
    },
    {
        id:2,
        songName: `Bang Bang <br>
        <div class="subtitle">Benny Dayal</div>`,
        poster:"../Img/2.jpg",
    },
    {
        id:3,
        songName: `Tum Todo <br>
        <div class="subtitle">Bela shende </div>`,
        poster:"../Img/3.jpg",
    },
    {
        id:4,
        songName: `Faded <br>
        <div class="subtitle">Alan Walker</div>`,
        poster:"../Img/4.jpg",
    },
    {
        id:5,
        songName: `Ranvijay Entry <br>
        <div class="subtitle">Threeory Band</div>`,
        poster:"../Img/5.jpg",
    },
    {
        id:6,
        songName: `Arjan vailley<br>
        <div class="subtitle">Bupindher Babbal</div>`,
        poster:"../Img/6.jpg",
    },
    {
        id:7,
        songName: `Lokiverse 2.0 <br>
        <div class="subtitle">Anirudh</div>`,
        poster:"../Img/7.jpg",
    },
    {
        id:8,
        songName: `My Love Is Gone <br>
        <div class="subtitle">Ranjith</div>`,
        poster:"../Img/8.jpg",
    },

    {
        id:9,
        songName: `Uppenantha <br>
        <div class="subtitle">K.K</div>`,
        poster:"../Img/9.jpg",
    },
    {
        id:10,
        songName: `Stay with me <br>
        <div class="subtitle">Chanyeol</div>`,
        poster:"../Img/10.jpg",
    },
    {
        id:11,
        songName: `Breaking Down <br>
        <div class="subtitle">Doom</div>`,
        poster:"../Img/11.webp",
    },
    {
        id:12,
        songName: `Dynamite <br>
        <div class="subtitle">BTS</div>`,
        poster:"../Img/12.png",
    },
    {
        id:13,
        songName: `Dandelions <br>
        <div class="subtitle">Ruth B</div>`,
        poster:"../Img/13.jpg",
    },
    {
        id:14,
        songName: `Jawan Title Track <br>
        <div class="subtitle">Raj Kumari</div>`,
        poster:"../Img/14.jpg",
    },
    {
        id:15,
        songName: `Lover Remix <br>
        <div class="subtitle">Taylor Swift</div>`,
        poster:"../Img/15.jpg",
    },
    {
        id:16,
        songName: `Pista <br>
        <div class="subtitle">karthik,Yuvan</div>`,
        poster:"../Img/16.jpg",
    },
    {
        id:17,
        songName: `Peaches <br>
        <div class="subtitle">Justin Beiber</div>`,
        poster:"../Img/17.jpg",
    },
    {
        id:18,
        songName: `Poolane Kunukeyyamanta <br>
        <div class="subtitle">I vikram</div>`,
        poster:"../Img/18.jpg",
    },
    {
        id:19,
        songName: `Sakhiyaan <br>
        <div class="subtitle">Maninder Buttar</div>`,
        poster:"../Img/19.jpg",
    },
    {
        id:20,
        songName: `Vikram Rathore <br>
        <div class="subtitle">Anirudh</div>`,
        poster:"../Img/20.jpg",
    },
    {
        id:21,
        songName: `You are my love<br>
        <div class="subtitle">DSP</div>`,
        poster:"../Img/21.jpg",
    },
    {
        id:22,
        songName: `Ye Chota Nuvvunna <br>
        <div class="subtitle">Guru randhawa</div>`,
        poster:"../Img/22.jpg",
    },
    {
        id:23,
        songName: `Na Roja Nuvve <br>
        <div class="subtitle">Hesham Abdul</div>`,
        poster:"../Img/23.jpg",
    },
    {
        id:24,
        songName: `Gravity <br>
        <div class="subtitle">NELL</div>`,
        poster:"../Img/24.jpg",
    },
    {
        id:25,
        songName: `Kushi Title Song <br>
        <div class="subtitle">Hesham Abdul</div>`,
        poster:"../Img/25.jpg",
    },
    {
        id:26,
        songName: `Hello Rammante <br>
        <div class="subtitle">Vijay Prakash</div>`,
        poster:"../Img/26.jpg",
    },
    {
        id:27,
        songName: `O Sayonara <br>
        <div class="subtitle">DSP</div>`,
        poster:"../Img/27.jpg",
    },
    {
        id:28,
        songName: `Despacito <br>
        <div class="subtitle">Luis Fonsi</div>`,
        poster:"../Img/28.jpg",
    },
    {
        id:29,
        songName: `Inumulo <br>
        <div class="subtitle">A.R.Rehman</div>`,
        poster:"../Img/29.jpg",
    },
    {
        id:30,
        songName: `Yenti Yenti <br>
        <div class="subtitle">Chinmayi</div>`,
        poster:"../Img/30.jpg",
    },
    {
        id:31,
        songName: `Baby won't you tell me <br>
        <div class="subtitle">Shwtha Mohan</div>`,
        poster:"../Img/31.jpg",
    },
    {
        id:32,
        songName: `Rooba Rooba <br>
        <div class="subtitle">Shahil Hada</div>`,
        poster:"../Img/32.jpg",
    },
    {
        id:33,
        songName: `My Love is Gone <br>
        <div class="subtitle">Ranjith</div>`,
        poster:"../Img/33.jpg",
    },
    {
        id:34,
        songName: `Mr.Perfect <br>
        <div class="subtitle">Rita</div>`,
        poster:"../Img/34.jpg",
    },
    {
        id:35,
        songName: `Vaaji Vaaji <br>
        <div class="subtitle">A.R.Rehman</div>`,
        poster:"../Img/35.jpg",
    },
    {
        id:36,
        songName: `Aradhya <br>
        <div class="subtitle">Sid Sriram</div>`,
        poster:"../Img/36.jpg",
    },
    {
        id:37,
        songName: `Ladiyo <br>
        <div class="subtitle">Nikitha Gandhi</div>`,
        poster:"../Img/37.jpg",
    },
    {
        id:38,
        songName: `Nammavemo <br>
        <div class="subtitle">Saketh</div>`,
        poster:"../Img/38.jpg",
    },
    {
        id:39,
        songName: `Raakasi Raakasi <br>
        <div class="subtitle">NTR</div>`,
        poster:"../Img/39.jpg",
    },
    {
        id:40,
        songName: `Ria <br>
        <div class="subtitle">Rabbit Mac</div>`,
        poster:"../Img/40.jpg",
    },
    {
        id:41,
        songName: `Akhiyaan Gulaab <br>
        <div class="subtitle">Mitraz</div>`,
        poster:"../Img/41.jpg",
    },
    {
        id:42,
        songName: `Chaleya <br>
        <div class="subtitle">Arjit Singh</div>`,
        poster:"../Img/42.jpg",
    },
    {
        id:43,
        songName: `Badtameez Dil <br>
        <div class="subtitle">Pritam</div>`,
        poster:"../Img/43.jpg",
    },
    {
        id:44,
        songName: `Hua Main <br>
        <div class="subtitle">Raghav Chaitanya</div>`,
        poster:"../Img/44.jpg",
    },
    {
        id:45,
        songName: `Palat <br>
        <div class="subtitle">Sajid-wajid</div>`,
        poster:"../Img/45.jpg",
    },
    {
        id:46,
        songName: `Tu Meri <br>
        <div class="subtitle">Vishal Dadlani</div>`,
        poster:"../Img/46.jpg",
    },
    {
        id:47,
        songName: `Tere Pyaar Mein <br>
        <div class="subtitle">Arjit Singh</div>`,
        poster:"../Img/47.jpg",
    },
    {
        id:48,
        songName: `Dildara <br>
        <div class="subtitle">Vishal-Shekar</div>`,
        poster:"../Img/48.jpg",
    },
    {
        id:49,
        songName: `Talab Talab <br>
        <div class="subtitle">Arjit Singh</div>`,
        poster:"../Img/49.jpg",
    },
    {
        id:50,
        songName: `Main Agar Kahoon <br>
        <div class="subtitle">Sonu Nigam</div>`,
        poster:"../Img/50.jpg",
    },
    {
        id:51,
        songName: `Kesariya <br>
        <div class="subtitle">Arjit Singh</div>`,
        poster:"../Img/51.jpg",
    },
    {
        id:52,
        songName: `Agar Tum Saath Ho <br>
        <div class="subtitle">Arjit Singh</div>`,
        poster:"../Img/52.jpg",
    },
    {
        id:53,
        songName: `Dynamite <br>
        <div class="subtitle">BTS</div>`,
        poster:"../Img/53.jpg",
    },
    {
        id:54,
        songName: `Wrap Me In Plastic <br>
        <div class="subtitle">Momoland</div>`,
        poster:"../Img/54.jpg",
    },
    {
        id:55,
        songName: `Seven(Summer Mix) <br>
        <div class="subtitle">Jungkook</div>`,
        poster:"../Img/55.jpg",
    },
    {
        id:56,
        songName: `BAAM <br>
        <div class="subtitle">Momoland</div>`,
        poster:"../Img/56.jpg",
    },
    {
        id:57,
        songName: `Life Goes On <br>
        <div class="subtitle">BTS</div>`,
        poster:"../Img/57.jpg",
    },
    {
        id:58,
        songName: `Ready Or Not <br>
        <div class="subtitle">Momoland</div>`,
        poster:"../Img/58.jpg",
    },
    {
        id:59,
        songName: `Your's <br>
        <div class="subtitle">Raiden X Chanyeol</div>`,
        poster:"../Img/59.jpg",
    },
    {
        id:60,
        songName: `How you Like That <br>
        <div class="subtitle">Black Pink</div>`,
        poster:"../Img/60.jpg",
    },
    {
        id:61,
        songName: `Hello <br>
        <div class="subtitle">Shinee</div>`,
        poster:"../Img/61.jpg",
    },
    {
        id:62,
        songName: `Ring Ding Dong <br>
        <div class="subtitle">Shinee</div>`,
        poster:"../Img/62.jpg",
    },
    {
        id:63,
        songName: `Gangnam Style <br>
        <div class="subtitle">PSY</div>`,
        poster:"../Img/63.jpg",
    },
    {
        id:64,
        songName: `Cheer Up <br>
        <div class="subtitle">Twice</div>`,
        poster:"../Img/64.jpg",
    },
    {
        id:65,
        songName: `Stay With ME <br>
        <div class="subtitle">Chanyeol</div>`,
        poster:"../Img/65.jpg",
    },
    {
        id:66,
        songName: `Just Watching Yoy <br>
        <div class="subtitle">Jeong Se-woon</div>`,
        poster:"../Img/66.jpg",
    },
    {
        id:67,
        songName: `Blue Sky <br>
        <div class="subtitle">The Night of Seokyo</div>`,
        poster:"../Img/67.jpg",
    },
    {
        id:68,
        songName: `Glass Bridge <br>
        <div class="subtitle">Savina-Drones</div>`,
        poster:"../Img/68.jpg",
    },
    {
        id:69,
        songName: `Aching <br>
        <div class="subtitle">Kassy</div>`,
        poster:"../Img/69.jpg",
    },
    {
        id:70,
        songName: `You are my Destiny <br>
        <div class="subtitle">Maricris Garcia</div>`,
        poster:"../Img/70.jpg",
    },
    {
        id:71,
        songName: `True <br>
        <div class="subtitle">YOARI</div>`,
        poster:"../Img/71.jpg",
    },
    {
        id:72,
        songName: `When I Saw You <br>
        <div class="subtitle">Bumkey</div>`,
        poster:"../Img/72.jpg",
    },
    {
        id:73,
        songName: `Love Story <br>
        <div class="subtitle">Stella Jang</div>`,
        poster:"../Img/73.jpg",
    },
    {
        id:74,
        songName: `Round and Round <br>
        <div class="subtitle">Heize</div>`,
        poster:"../Img/74.jpg",
    },
    {
        id:75,
        songName: `Gravity <br>
        <div class="subtitle">NELL</div>`,
        poster:"../Img/75.jpg",
    },
    {
        id:76,
        songName: `Say You Love Me <br>
        <div class="subtitle">Sam Kim</div>`,
        poster:"../Img/76.jpg",
    },
    {
        id:77,
        songName: `Shape Of You <br>
        <div class="subtitle">Ed Sheeran</div>`,
        poster:"../Img/77.jpg",
    },
    {
        id:78,
        songName: `Love Me Like You Do <br>
        <div class="subtitle">Ellie Goulding</div>`,
        poster:"../Img/78.jpg",
    },
    {
        id:79,
        songName: `Da Da DA<br>
        <div class="subtitle">Jacrio</div>`,
        poster:"../Img/79.jpg",
    },
    {
        id:80,
        songName: `Dusk Till Dawn <br>
        <div class="subtitle">Luca Lush,Zayn</div>`,
        poster:"../Img/80.jpg",
    },
    {
        id:81,
        songName: `Enemy <br>
        <div class="subtitle">Imagine Dragons</div>`,
        poster:"../Img/81.jpg",
    },
    {
        id:82,
        songName: `Levitating <br>
        <div class="subtitle">Dua Lipa</div>`,
        poster:"../Img/82.jpg",
    },
    {
        id:83,
        songName: `Love Me <br>
        <div class="subtitle">Justin Beiber</div>`,
        poster:"../Img/83.jpg",
    },
    {
        id:84,
        songName: `Play Date <br>
        <div class="subtitle"> Melanie Martinez</div>`,
        poster:"../Img/84.jpg",
    },
    {
        id:85,
        songName: `Hey Mama <br>
        <div class="subtitle">David Guetta</div>`,
        poster:"../Img/85.jpg",
    },
    {
        id:86,
        songName: `Stereo Hearts <br>
        <div class="subtitle">Rabbit Mac</div>`,
        poster:"../Img/86.jpg",
    },
    {
        id:87,
        songName: `Saintjh-Roses <br>
        <div class="subtitle">Imanbek</div>`,
        poster:"../Img/87.jpg",
    }

]

Array.from(document.getElementsByClassName('songItem')).forEach((e, i)=>{
    e.getElementsByTagName('img')[0].src=songs[i].poster;
    e.getElementsByTagName('h5')[0].innerHTML=songs[i].songName;
});

let masterplay=document.getElementById('masterplay');
let wave=document.getElementById('wave');

masterplay.addEventListener('click',()=>{
    if(music.paused || music.currentTime <=0){
        music.play();
        wave.classList.add('active1');
        masterplay.classList.remove('bi-play-fill');
        masterplay.classList.add('bi-pause-fill');
    }
    else{
        music.pause();
        wave.classList.remove('active1');
        masterplay.classList.add('bi-play-fill');
        masterplay.classList.remove('bi-pause-fill');
    }
});

const makeAllBackground=()=>{
    Array.from(document.getElementsByClassName('songItem')).forEach((el)=>{
        el.style.background='rgb(105, 105, 105, .0)';
    })
}

const makeAllplays=()=>{
    Array.from(document.getElementsByClassName('playListPlay')).forEach((el)=>{
        el.classList.add('bi-play-circle-fill');
        el.classList.remove('bi-pause-circle-fill');
    })
}



let index=0;
let poster_master_play=document.getElementById('poster_master_play');
let download_music=document.getElementById('download_music');
let title=document.getElementById('title');
Array.from(document.getElementsByClassName('playListPlay')).forEach((e)=>{
    e.addEventListener('click',(el)=>{
        index=el.target.id;
       // console.log(index);
       music.src=`../Audio/${index}.mp3`;
       poster_master_play.src=`../Img/${index}.jpg`;
       music.play();
       masterplay.classList.remove('bi-play-fill');
        masterplay.classList.add('bi-pause-fill');
        download_music.href=`../Audio/${index}.mp3`;

        let songTitles=songs.filter((els)=>{
            return els.id==index;
        });

        songTitles.forEach(elss=>{
            let {songName}=elss;
            title.innerHTML=songName;
            download_music.setAttribute('download',songName);
        });

        makeAllBackground();
        Array.from(document.getElementsByClassName('songItem'))[index-1].style.background="rgb(105, 105, 105, .1)";
        makeAllplays();
        el.target.classList.remove('bi-play-circle-fill');
        el.target.classList.add('bi-pause-circle-fill');
        wave.classList.add('active1');
    });
})


let currentStart=document.getElementById('currentStart');
let currentEnd=document.getElementById('currentEnd');
let seek=document.getElementById('seek');
let bar2=document.getElementById('bar2');
let dot=document.getElementsByClassName('dot')[0];

music.addEventListener('timeupdate',()=>{
   let music_curr=music.currentTime;
   let music_dur=music.duration;

   let min1=Math.floor(music_dur/60);
   let sec1=Math.floor(music_dur%60);

   if(sec1 < 10){
    sec1 = `0${sec1}`;
   }

   currentEnd.innerText=`${min1}:${sec1}`;

   let min2=Math.floor(music_curr/60);
   let sec2=Math.floor(music_curr%60);
   if(sec2 < 10){
    sec2 = `0${sec2}`;
   }
   currentStart.innerText=`${min2}:${sec2}`;

   let progressBar = parseInt((music_curr/music_dur)*100);
   seek.value=progressBar;
   let seekbar=seek.value;
   bar2.style.width=`${seekbar}%`;
    dot.style.left=`${seekbar}%`;

});

seek.addEventListener('change',()=>{
    music.currentTime=seek.value*music.duration/100;
});

let vol_icon = document.getElementById('vol_icon');
let vol = document.getElementById('vol');
let vol_bar = document.getElementsByClassName('vol_bar')[0];
let vol_dot = document.getElementById('vol_dot');

vol.addEventListener('change',()=>{
    if(vol.value==0){
        vol_icon.classList.remove('bi-volume-up-fill');
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.add('bi-volume-off-fill');
    }
    if(vol.value>0){
        vol_icon.classList.remove('bi-volume-up-fill');
        vol_icon.classList.add('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-off-fill');
    }
    if(vol.value>50){
        vol_icon.classList.add('bi-volume-up-fill');
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-off-fill');
    }
    let vol_a=vol.value;
    vol_bar.style.width=`${vol_a}%`;
    vol_dot.style.left=`${vol_a}%`;
    music.volume=vol_a/100;
});

let back=document.getElementById('back');
let next=document.getElementById('next');

back.addEventListener('click',()=>{
    index -= 1;
    if(index<1){
        index=Array.from(document.getElementsByClassName('songItem')).length;
        
    }
    music.src=`../Audio/${index}.mp3`;
       poster_master_play.src=`../Img/${index}.jpg`;
       music.play();
       masterplay.classList.remove('bi-play-fill');
        masterplay.classList.add('bi-pause-fill');

        let songTitles=songs.filter((els)=>{
            return els.id==index;
        });

        songTitles.forEach(elss=>{
            let {songName}=elss;
            title.innerHTML=songName;
        });

        makeAllBackground();
        Array.from(document.getElementsByClassName('songItem'))[index-1].style.background="rgb(105, 105, 105, .1)";
        makeAllplays();
        el.target.classList.remove('bi-play-circle-fill');
        el.target.classList.add('bi-pause-circle-fill');
        wave.classList.add('active1');
});

next.addEventListener('click',()=>{
    index++;
    if(index>Array.from(document.getElementsByClassName('songItem')).length){
        index=1;
        
    }
    music.src=`../Audio/${index}.mp3`;
       poster_master_play.src=`../Img/${index}.jpg`;
       music.play();
       masterplay.classList.remove('bi-play-fill');
        masterplay.classList.add('bi-pause-fill');

        let songTitles=songs.filter((els)=>{
            return els.id==index;
        });

        songTitles.forEach(elss=>{
            let {songName}=elss;
            title.innerHTML=songName;
        });

        makeAllBackground();
        Array.from(document.getElementsByClassName('songItem'))[index-1].style.background="rgb(105, 105, 105, .1)";
        makeAllplays();
        el.target.classList.remove('bi-play-circle-fill');
        el.target.classList.add('bi-pause-circle-fill');
        wave.classList.add('active1');
});





let pop_song_left=document.getElementById("pop_song_left");
let pop_song_right=document.getElementById("pop_song_right");

let pop_song = document.getElementsByClassName('pop_song')[0];

pop_song_right.addEventListener('click',()=>{
    pop_song.scrollLeft += 330;
});

pop_song_left.addEventListener('click',()=>{
    pop_song.scrollLeft -= 330;
});

let tel_song_left1=document.getElementById("tel_song_left1");
let tel_song_right1=document.getElementById("tel_song_right1");

let tel_song = document.getElementsByClassName('tel_song')[0];

tel_song_right1.addEventListener('click',()=>{
    tel_song.scrollLeft += 330;
});

tel_song_left1.addEventListener('click',()=>{
    tel_song.scrollLeft -= 330;
});



let hin_song_left1=document.getElementById("hin_song_left1");
let hin_song_right1=document.getElementById("hin_song_right1");

let hin_song = document.getElementsByClassName('hin_song')[0];

hin_song_right1.addEventListener('click',()=>{
    hin_song.scrollLeft += 330;
});

hin_song_left1.addEventListener('click',()=>{
    hin_song.scrollLeft -= 330;
});



let kpop_song_left1=document.getElementById("kpop_song_left1");
let kpop_song_right1=document.getElementById("kpop_song_right1");

let kpop_song = document.getElementsByClassName('kpop_song')[0];

kpop_song_right1.addEventListener('click',()=>{
    kpop_song.scrollLeft += 330;
});

kpop_song_left1.addEventListener('click',()=>{
    kpop_song.scrollLeft -= 330;
});



let kost_song_left1=document.getElementById("kost_song_left1");
let kost_song_right1=document.getElementById("kost_song_right1");

let kost_song = document.getElementsByClassName('kost_song')[0];

kost_song_right1.addEventListener('click',()=>{
    kost_song.scrollLeft += 330;
});

kost_song_left1.addEventListener('click',()=>{
    kost_song.scrollLeft -= 330;
});





let holly_song_left1=document.getElementById("holly_song_left1");
let holly_song_right1=document.getElementById("holly_song_right1");

let holly_song = document.getElementsByClassName('holly_song')[0];

holly_song_right1.addEventListener('click',()=>{
    holly_song.scrollLeft += 330;
});

holly_song_left1.addEventListener('click',()=>{
    holly_song.scrollLeft -= 330;
});







let pop_art_left=document.getElementById("pop_art_left");
let pop_art_right=document.getElementById("pop_art_right");
let item = document.getElementsByClassName('item')[0];

pop_art_right.addEventListener('click',()=>{
    item.scrollLeft += 330;
})

pop_art_left.addEventListener('click',()=>{
    item.scrollLeft -= 330;
})



//search
let search_results =document.getElementsByClassName('search_results')[0];
songs.forEach(element=>{
    const {id, songName, poster}=element;
    let card=document.createElement('a');
    card.classList.add('card');
    card.href="#" + id;
    card.innerHTML =`<img src="${poster}">
    <div class="content">
        ${songName}
    </div>`;
    search_results.appendChild(card);

});

let input = document.getElementsByTagName('input')[0];
input.addEventListener('keyup',()=>{
    let input_value=input.value.toUpperCase();
    let items = search_results.getElementsByTagName('a');
    for(let index=0;index<items.length;index++){
        let as=items[index].getElementsByClassName('content')[0];
        let text_value=as.textContent||as.innerHTML;
        if(text_value.toUpperCase().indexOf(input_value) > -1){
            items[index].style.display="flex";
    }
    else{
        items[index].style.display="none";
    }

    if(input.value==0){
        search_results.style.display="none";

    }
    else{
        search_results.style.display="";
    }
    
}
})

// search end 

let play_btn=document.getElementById("play_btn");

play_btn.addEventListener('click',()=>{
    music.src=`../Audio/4.mp3`;
   music.play();
   if(music.play==true){
    masterplay.classList.remove('bi-play-fill');
    masterplay.classList.add('bi-pause-fill');
   }
})















