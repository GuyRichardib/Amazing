//mario theme song
const song = document.getElementById("myAudio"); 
  
  function playAudio() { 
    song.play(); 
  }  
  function pauseAudio() { 
    song.pause(); 
  } 
  //mario jump sound
const jump = document.getElementById("Jump"); 
 //mario stage complete sound
const finish = document.getElementById("Done"); 
  

const multiline = `***********.* 
*S.....**.*.T
*****.....*.*
*****.***.*.*
*****.*****.*
*****.*****.*
*****.......*
*****.*******
*.........***
*.******...**
*....********`

const mainContainer = document.querySelector('main')
mainContainer.className = 'container'

//generate sections with lines of divs inside body
for (i = 0; i < 11; i++) {
    let section = document.createElement('section')
    section.id = i
    mainContainer.appendChild(section)
}

let id = 0;
let j = 0;

for (i = 0; i < multiline.length; i++) {
    let charachter = multiline[i].split("");
    if (charachter == " ") {
        i++
        charachter = multiline[i].split("");
    }
    if (charachter == "*") {
        let create_div = document.createElement('div');
        create_div.className = 'wall'
        document.getElementById(id).appendChild(create_div)
    } else if (charachter == ".") {
        let create_div = document.createElement('div');
        create_div.className = 'path'
        document.getElementById(id).appendChild(create_div)
    } else if (charachter == "S") {
        let create_div = document.createElement('div');
        create_div.className = 'start'
        document.getElementById(id).appendChild(create_div)
    } else if (charachter == "T") {
        let create_div = document.createElement('div');
        create_div.className = 'treasure'
        document.getElementById(id).appendChild(create_div)
    }
    j++
    if (j == 14 && id <= 10) {
        id++
        j = 0
    }
}


const player_slot = document.createElement('div')
player_slot.className ='player'
document.querySelector('.start').appendChild(player_slot);
const player = document.querySelector('.player')
const player_image = document.querySelector('.img1')
document.querySelector('.player').appendChild(player_image);
const treasure = document.querySelector('.treasure')
const treasure_image = document.querySelector('.img2')
treasure.appendChild(treasure_image);



let x = 2;
let y = 1;

document.addEventListener('keydown', function (e) {
    let key = e.code;
    if (key == 'ArrowUp') {
        if(document.querySelector("#\\3"+(y-1)+" > div:nth-child("+ x +")").classList.contains('wall')){
            alert('Oops! it looks like you have hit a wall! Try again!');
        }else{
            y--
            document.querySelector("#\\3"+ y + " > div:nth-child("+ x +")").appendChild(player);
            jump.play();
        }
    } else if (key == 'ArrowRight') {
        if(document.querySelector("#\\3"+ y +" > div:nth-child("+(x+1)+")").classList.contains('wall')){
            alert('Oops! it looks like you have hit a wall! Try again!');
        }else{
            x++
            document.querySelector("#\\3"+ y + " > div:nth-child("+ x +")").appendChild(player);
            jump.play();
        }
    } else if (key == 'ArrowDown') {
        if(document.querySelector("#\\3"+(y+1)+" > div:nth-child("+ x +")").classList.contains('wall')){
            alert('Oops! it looks like you have hit a wall! Try again!');
        }else{
            y++
            document.querySelector("#\\3"+ y + " > div:nth-child("+ x +")").appendChild(player);
            jump.play();
        }
    } else if (key == 'ArrowLeft') {
        if(document.querySelector("#\\3"+ y +" > div:nth-child("+(x-1)+")").classList.contains('wall')){
            alert('Oops! it looks like you have hit a wall! Try again!');
        }else{
            x--
            document.querySelector("#\\3"+ y + " > div:nth-child("+ x +")").appendChild(player);
            jump.play();
        }
    }

    if(y==1 && x==13){
        song.pause();
        finish.play();
        treasure.removeChild(treasure_image);
        alert('Hurrah!!!, hurrah!, you have done it!')
    }
})