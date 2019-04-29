var snakeHead = document.getElementById("snakeHead");
var snakeHeadTopPos = Number(snakeHead.style.top.substring(0, snakeHead.style.top.length - 2));
console.log(snakeHead.style.top);
console.log(snakeHead.style.left);
console.log("snakeHeadTopPos: ", snakeHeadTopPos);
var snakeHeadLeftPos = Number(snakeHead.style.left.substring(0, snakeHead.style.left.length - 2));
console.log("snakeHeadLeftPos: ", snakeHeadLeftPos);


document.onkeydown = function(key) {
  switch(key.keyCode){
    case 37:
      console.log("left key pressed");
      leftPressed();
      break;
    case 38:
      console.log("up key pressed");
      upPressed();
      break;
    case 39:
      console.log("right key pressed");
      rightPressed();
      break;
    case 40:
      console.log("down key pressed");
      downPressed();
      break;
    default:
      console.log("other key pressed");
      break;
  }
}



function leftPressed(){
  var id = setInterval(frame, 5);
  var cnt = 0;

  function frame(){
    console.log("counting...", cnt);
    if(cnt > 50){
      console.log("stopped timer?");
      clearInterval(id);
    }
    else{
      console.log("snakeHeadLeftPos: ", snakeHeadLeftPos);
      cnt++;
      snakeHeadLeftPos--;
      snakeHead.style.left = (snakeHeadLeftPos) + "px";
    }
  }
}

function upPressed(){
  var id = setInterval(frame, 5);
  var cnt = 0;

  function frame(){
    console.log("counting...", cnt);
    if(cnt > 50){
      console.log("stopped timer?");
      clearInterval(id);
    }
    else{
      console.log("snakeHeadTopPos: ", snakeHeadTopPos);
      cnt++;
      snakeHeadTopPos--;
      snakeHead.style.top = (snakeHeadTopPos) + "px";
    }
  }
}

function rightPressed(){
  var id = setInterval(frame, 5);
  var cnt = 0;

  function frame(){
    console.log("counting...", cnt);
    if(cnt > 50){
      console.log("stopped timer?");
      clearInterval(id);
    }
    else{
      console.log("snakeHeadLeftPos: ", snakeHeadLeftPos);
      cnt++;
      snakeHeadLeftPos++;
      snakeHead.style.left = (snakeHeadLeftPos) + "px";
    }
  }
}

function downPressed(){
  var id = setInterval(frame, 5);
  var cnt = 0;

  function frame(){
    console.log("counting...", cnt);
    if(cnt > 50){
      console.log("stopped timer?");
      clearInterval(id);
    }
    else{
      console.log("snakeHeadTopPos: ", snakeHeadTopPos);
      cnt++;
      snakeHeadTopPos++;
      snakeHead.style.top = (snakeHeadTopPos) + "px";
    }
  }
}
