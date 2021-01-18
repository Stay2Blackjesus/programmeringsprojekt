//Changing this Value will trigger the start screen 0=OFF 1=ON
var Menu = 0;
var f = createFont("e");
//Variable för hur Start knappen ser ut
    var sbtn = {
    X: 120,
    Y: 170,
    Width: 160,
    Height: 60
    };

if(Menu === 0){
    background(168, 165, 168);
    
    //Shadow For Name of Game
    fill(0, 0, 0);
    textFont(f,38);
    text("Tic-Tac-Toe",90.0,89);

    //Startknappen
    fill(0, 0, 0);
     strokeWeight(3);
     stroke(255, 0, 255);
    rect(sbtn.X,sbtn.Y,sbtn.Width,sbtn.Height);
     //text for start Button
    fill(255, 255, 255);
    textSize(25);
    text("Start",174,207);
    
    //Name of the game
    fill(255, 0, 0);
    textFont(f,38);
    text("Tic-Tac-Toe",92,91);
    
    //Name of the Creator
    fill(0, 0, 0);
    textFont(f,20);
    text("By Kais.T",300,380);
}

//button Core
    mouseClicked = function() {
    if (mouseX >= sbtn.X && mouseX <= sbtn.X+sbtn.Width &&
        mouseY >= sbtn.Y && mouseY <= sbtn.Y+sbtn.Height)
        {
        Menu = 1; 
        }
};
