var avatar;
var position,database;
function setup(){
    createCanvas(500,500);
    database = firebase.database();
    avatar = createSprite(250,250,10,10);
    avatar.shapeColor = "blue";

    var avatarref = database.ref("avatar/position");
    avatarref.on("value",function(snapshot){
        position = snapshot.val();
        avatar.x = position.x;
        avatar.y = position.y;
    })
}


function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        writedatabase(-2,0)
    }
    else if(keyDown(RIGHT_ARROW)){
        writedatabase(2,0)
    }
    else if(keyDown(UP_ARROW)){
        writedatabase(0,-2)
    }
    else if(keyDown(DOWN_ARROW)){
        writedatabase(0,2)
    }
    drawSprites();
}
function writedatabase(x,y){
  database.ref("avatar/position").set({
      x: position.x+x,
      y:position.y+y
  })
}