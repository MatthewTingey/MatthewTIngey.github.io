function startGame() {
  location.href = "lvl1.html";
}
function back() {
  location.href = "index.html";
}
function restartLevel1() {
  location.href = "lvl1.html";
}

function restartLevel2() {
  location.href = "lvl3.html";
}

function pick() {
  this.x = -1875;
  this.y = h / 2 - 50;
  this.pickLives = 3;
  this.show = function () {
    strokeWeight(5);
    stroke(255);
    fill(255, 0, 0);
    rect(this.x, this.y, 2000, 100);
  };
  this.move = function () {
    if (keyIsDown(68)) {
      this.x += 8;
    }
  };
  this.end = function () {
    if (this.x > -600) {
      window.location.href = "lvl1-2.html";
    }
  };
  this.restartLevel1 = function () {
    if (this.pickLives < 1) {
      window.location.href = "gameOver1.html";
    }
  };
}

function showLivesLeft1() {
  this.x = w - 285;
  this.y = -200;
  this.show = function () {
    image(threeHearts, this.x, this.y);
  };
  this.showLives = function () {
    if (pick.pickLives == 3) {
      this.x = w - 285;
      this.y = 40;
    }
  };
}

function showLivesLeft2() {
  this.x = w - 210;
  this.y = -200;
  this.show = function () {
    image(twoHearts, this.x, this.y);
  };
  this.showLives = function () {
    if (pick.pickLives == 2) {
      this.x = w - 210;
      this.y = 40;
      showLivesLeft1.y = -200;
    }
  };
}

function showLivesLeft3() {
  this.x = w - 135;
  this.y = -200;
  this.show = function () {
    image(oneHeart, this.x, this.y);
  };
  this.showLives = function () {
    if (pick.pickLives == 1) {
      this.x = w - 135;
      this.y = 40;
      showLivesLeft2.y = -200;
    }
  };
}

function block1() {
  this.x = 300;
  this.y = h - 150;
  this.objSpeed = 5;
  this.show = function () {
    stroke;
    fill(0, 0, 0);
    rect(this.x, this.y, 150, h - 150);
  };
  this.move = function () {
    this.y = this.y + this.objSpeed;
    if (this.y < 450 || this.y > h - 150) {
      this.objSpeed = -this.objSpeed;
    }
  };
  this.hit = function () {
    this.collide = collideRectRect(
      this.x,
      this.y,
      150,
      h - 150,
      pick.x,
      pick.y,
      2000,
      100
    );
    if (this.collide === true && pick.x < -1550) {
      pick.x = -1875;
      pick.y = h / 2 - 50;
      pick.pickLives -= 1;
    } else if (this.collide === true && pick.x > -1550) {
      this.objSpeed = 0;
      this.y += 3;
    }
  };
}

function block2() {
  this.x = 300;
  this.y = -300;
  this.objSpeed = 5;
  this.show = function () {
    fill(0, 0, 0);
    rect(this.x, this.y, 150, h - 150);
  };
  this.move = function () {
    this.y = this.y - this.objSpeed;
    if (this.y < -h + 300 || this.y > -300) {
      this.objSpeed = -this.objSpeed;
    }
  };
  this.hit = function () {
    this.collide = collideRectRect(
      this.x,
      this.y,
      150,
      h - 150,
      pick.x,
      pick.y,
      2000,
      100
    );
    if (this.collide === true && pick.x < -1550) {
      pick.x = -1875;
      pick.y = h / 2 - 50;
      pick.pickLives -= 1;
    } else if (this.collide === true && pick.x > -1550) {
      this.objSpeed = 0;
      this.y -= 3;
    }
  };
}

function block3() {
  this.x = 600;
  this.y = 450;
  this.objSpeed = 5;
  this.show = function () {
    fill(0, 0, 0);
    rect(this.x, this.y, 150, h - 150);
  };
  this.move = function () {
    this.y = this.y + this.objSpeed;
    if (this.y < 450 || this.y > h - 150) {
      this.objSpeed = -this.objSpeed;
    }
  };
  this.hit = function () {
    this.collide = collideRectRect(
      this.x,
      this.y,
      150,
      h - 150,
      pick.x,
      pick.y,
      2000,
      100
    );
    if (this.collide === true && pick.x < -1250) {
      pick.x = -1875;
      pick.y = h / 2 - 50;
      pick.pickLives -= 1;
    } else if (this.collide === true && pick.x > -1250) {
      this.objSpeed = 0;
      this.y += 3;
    }
  };
}

function block4() {
  this.x = 600;
  this.y = -h + 300;
  this.objSpeed = 5;
  this.show = function () {
    fill(0, 0, 0);
    rect(this.x, this.y, 150, h - 150);
  };
  this.move = function () {
    this.y = this.y - this.objSpeed;
    if (this.y < -h + 300 || this.y > -300) {
      this.objSpeed = -this.objSpeed;
    }
  };
  this.hit = function () {
    this.collide = collideRectRect(
      this.x,
      this.y,
      150,
      h - 150,
      pick.x,
      pick.y,
      2000,
      100
    );
    if (this.collide === true && pick.x < -1250) {
      pick.x = -1875;
      pick.y = h / 2 - 50;
      pick.pickLives -= 1;
    } else if (this.collide === true && pick.x > -1250) {
      this.objSpeed = 0;
      this.y -= 3;
    }
  };
}

function block5() {
  this.x = 900;
  this.y = h - 150;
  this.objSpeed = 5;
  this.show = function () {
    fill(0, 0, 0);
    rect(this.x, this.y, 150, h - 150);
  };
  this.move = function () {
    this.y = this.y + this.objSpeed;
    if (this.y < 450 || this.y > h - 150) {
      this.objSpeed = -this.objSpeed;
    }
  };
  this.hit = function () {
    this.collide = collideRectRect(
      this.x,
      this.y,
      150,
      h - 150,
      pick.x,
      pick.y,
      2000,
      100
    );
    if (this.collide === true && pick.x < -950) {
      pick.x = -1875;
      pick.y = h / 2 - 50;
      pick.pickLives -= 1;
    } else if (this.collide === true && pick.x > -950) {
      this.objSpeed = 0;
      this.y += 3;
    }
  };
}

function block6() {
  this.x = 900;
  this.y = -300;
  this.objSpeed = 5;
  this.show = function () {
    fill(0, 0, 0);
    rect(this.x, this.y, 150, h - 150);
  };
  this.move = function () {
    this.y = this.y - this.objSpeed;
    if (this.y < -h + 300 || this.y > -300) {
      this.objSpeed = -this.objSpeed;
    }
  };
  this.hit = function () {
    this.collide = collideRectRect(
      this.x,
      this.y,
      150,
      h - 150,
      pick.x,
      pick.y,
      2000,
      100
    );
    if (this.collide === true && pick.x < -950) {
      pick.x = -1875;
      pick.y = h / 2 - 50;
      pick.pickLives -= 1;
    } else if (this.collide === true && pick.x > -950) {
      this.objSpeed = 0;
      this.y -= 3;
    }
  };
}

function block7() {
  this.x = 1200;
  this.y = 450;
  this.objSpeed = 5;
  this.show = function () {
    fill(0, 0, 0);
    rect(this.x, this.y, 150, h - 150);
  };
  this.move = function () {
    this.y = this.y + this.objSpeed;
    if (this.y < 450 || this.y > h - 150) {
      this.objSpeed = -this.objSpeed;
    }
  };
  this.hit = function () {
    this.collide = collideRectRect(
      this.x,
      this.y,
      150,
      h - 150,
      pick.x,
      pick.y,
      2000,
      100
    );
    if (this.collide === true && pick.x < -650) {
      pick.x = -1875;
      pick.y = h / 2 - 50;
      pick.pickLives -= 1;
    } else if (this.collide === true && pick.x > -650) {
      this.objSpeed = 0;
      this.y += 3;
    }
  };
}

function block8() {
  this.x = 1200;
  this.y = -h + 300;
  this.objSpeed = 5;
  this.show = function () {
    fill(0, 0, 0);
    rect(this.x, this.y, 150, h - 150);
  };
  this.move = function () {
    this.y = this.y - this.objSpeed;
    if (this.y < -h + 300 || this.y > -300) {
      this.objSpeed = -this.objSpeed;
    }
  };
  this.hit = function () {
    this.collide = collideRectRect(
      this.x,
      this.y,
      150,
      h - 150,
      pick.x,
      pick.y,
      2000,
      100
    );
    if (this.collide === true && pick.x < -650) {
      pick.x = -1875;
      pick.y = h / 2 - 50;
      pick.pickLives -= 1;
    } else if (this.collide === true && pick.x > -650) {
      this.objSpeed = 0;
      this.y -= 3;
    }
  };
}

function guard1() {
  this.x = w / 2 - 97.5;
  this.y = h - 290;
  this.show = function () {
    image(guardOne, this.x, this.y);
    noStroke();
    noFill();
    rect(w / 2, 0, 195, 240);
  };
}

function player0() {
  this.x = w / 2 - 97.5;
  this.y = 150;
  this.show = function () {
    image(prisoner1, this.x, this.y);
    noStroke();
    noFill();
    rect(this.x, this.y, 195, 240);
  };
  this.moveD = function () {
    this.y += this.speed;
  };
  this.moveU = function () {
    this.y -= this.speed;
  };
  this.moveR = function () {
    this.x += this.speed;
  };
  this.moveL = function () {
    this.x -= this.speed;
  };
  this.bump = function () {
    if (this.y < 150) {
      this.y = 150;
    }
    if (this.y > h - 240) {
      this.y = h - 240;
    }
    if (this.x < prisonCell1.x + 1200) {
      this.x = prisonCell1.x + 1200;
    }
    if (this.x > prisonCell2.x + 270) {
      this.x = prisonCell2.x + 270;
    }
  };
}
function player() {
  this.speed = 15;
  this.x = w / 2 - 97.5;
  this.y = 150;
  this.show = function () {
    image(prisoner1, this.x, this.y);
    noStroke();
    fill(0, 0, 0);
    rect(this.x, this.y, 1, 1);
  };
  this.moveD = function () {
    this.y += this.speed;
  };
  this.moveU = function () {
    this.y -= this.speed;
  };
  this.moveR = function () {
    this.x += this.speed;
  };
  this.moveL = function () {
    this.x -= this.speed;
  };
  this.bump = function () {
    if (this.y < 150) {
      this.y = 150;
    }
    if (this.y > h - 240) {
      this.y = h - 240;
    }
    if (this.x < prisonCell1.x + 1200) {
      this.x = prisonCell1.x + 1200;
    }
    if (this.x > prisonCell2.x + 270) {
      this.x = prisonCell2.x + 270;
    }
  };
}

function textBox() {
  this.x = w / 2 - 825;
  this.y = h - 270;
  this.w = 1650
  this.h = 255
  this.show = function () {
    rect(this.x, this.y, 1650, 255);
    image(textBoxOne, this.x, this.y);
    text(
      "You have been imprisoned by Neo Soviets on the planet Saturn in the year 2323 Your task is to escape the prison and meet up with the US Agent waiting for you in the delorean",
      this.x  ,
      this.y ,
      1650,
      255
    );
  };
  this.bump = function () {
    if (player.y == 180) {
      window.location.href = "lvl1LockPicking.html";
    }
  };
}

function prisonCell1() {
  this.x = w / 2 - 1665;
  this.y = 0;
  this.show = function () {
    rect(this.x, this.y, 1, 1);
    image(prisonCellOne, this.x, this.y);
  };
}

function prisonCell2() {
  this.x = w / 2 - 15;
  this.y = 0;
  this.show = function () {
    rect(this.x, this.y, 1, 1);
    image(prisonCellOne, this.x, this.y);
  };
}

function playerTwo() {
  this.speed = 15;
  this.x = w / 2 - 97.5;
  this.y = 210;
  this.yMinBarrier = 210;
  this.show = function () {
    image(prisoner1, this.x, this.y);
    noStroke();
    noFill();
    rect(this.x, this.y, 195, 240);
  };
  this.moveD = function () {
    this.y += this.speed;
  };
  this.moveU = function () {
    this.y -= this.speed;
  };
  this.moveR = function () {
    this.x += this.speed;
  };
  this.moveL = function () {
    this.x -= this.speed;
  };
  this.bump = function () {
    if (this.y < this.yMinBarrier) {
      this.y = this.yMinBarrier;
    }
    if (this.y > h - 240) {
      this.y = h - 240;
    }
    if (this.x > w - 195) {
      this.x = w - 195;
    }
  };
  this.exitCell = function () {
    if (this.y > 210) {
      this.yMinBarrier = 210;
    }
  };
}
function lvl1() {
  this.exit = function () {
    if (playerTwo.x < -195) {
      window.location.href = "lvl2.html";
    }
  };
}

function player3() {
  this.speed = 15;
  this.x = w - 195;
  this.y = h / 2;
  this.yMinBarrier = 210;
  this.show = function () {
    image(prisoner1, this.x, this.y);
    rect(this.x + 100, this.y + 100, 0, 0);
  };
  this.moveD = function () {
    this.y += this.speed;
  };
  this.moveU = function () {
    this.y -= this.speed;
  };
  this.moveR = function () {
    this.x += this.speed;
  };
  this.moveL = function () {
    this.x -= this.speed;
  };
  this.bump = function () {
    if (this.y < this.yMinBarrier) {
      this.y = this.yMinBarrier;
    }
    if (this.y > h) {
      window.location.href = "lvl3.html";
    }
    if (this.x > w - 195) {
      this.x = w - 195;
    }
    if (this.x < 0) {
      this.x = 0;
    }
  };
}

function guard2() {
  this.x = 0;
  this.y = h / 2;
  this.show = function () {
    image(guardOne, this.x, this.y);
    rect(w / 2, 0, 1, 1);
  };
}
function guard2Flipped() {
  this.x = 350;
  this.y = h / 2;
  this.show = function () {
    image(guardTwo, this.x, this.y);
    rect(w / 2, 0, 1, 1);
  };
}
function speechBubble1() {
  this.x = guard2.x + 180;
  this.y = guard2.y - 80;
  this.show = function () {
    rect(this.x, this.y, 1, 1);
    image(speechBubbleOne, this.x, this.y);
    text("Man I need to get a new job", 202, h / 2 - 94, 170, 120);
  };
}

function arrow1() {
  this.x = playerTwo.x - 300;
  this.y = playerTwo.y + 370;
  this.i = 0;
  this.show = function () {
    image(arrowOne, this.x, this.y);
    noStroke();
    noFill();
    rect(this.x, this.y, 265, 165);
  };
}

function arrow2() {
  this.x = w / 2 - 132.5 + 60;
  this.y = player3.y + 150;
  this.show = function () {
    image(arrowTwo, this.x, this.y);
    rect(this.x + 80, this.y, 1, 1);
  };
}
function timer() {
  this.timer1 = 20;
  this.play = function () {
    if (frameCount % 60 == 0 && this.timer1 > 0) {
      this.timer1--;
    }
    if (this.timer1 == 0) {
      location.href = "gameOver2.html";
    }
  };
}
function player4() {
  this.speed = 10;
  this.x = w / 2 - 55;
  this.y = h / 2 - 75;
  this.show = function () {
    image(prisoner1Back, this.x, this.y);
    noStroke();
    noFill();
    rect(this.x, this.y, 110, 150);
  };
  this.moveD = function () {
    prisonCellAbove1.y -= this.speed;
    prisonCellAbove2.y -= this.speed;
    prisonCellAbove3.y -= this.speed;
    prisonCellAbove4.y -= this.speed;
    prisonCellAbove5.y -= this.speed;
    prisonCellAbove6.y -= this.speed;
    prisonCellAbove7.y -= this.speed;
    prisonCellAbove8.y -= this.speed;
    prisonCellAbove9.y -= this.speed;
    prisonCellAbove10.y -= this.speed;
    grassFloor1.y -= this.speed;
    grassFloor2.y -= this.speed;
    grassFloor3.y -= this.speed;
    grassFloor4.y -= this.speed;
    barbedWireFence1.y -= this.speed;
    barbedWireFence2.y -= this.speed;
    barbedWireFence3.y -= this.speed;
    trees1.y -= this.speed;
    trees2.y -= this.speed;
    move.y -= 10;
  };
  this.moveU = function () {
    prisonCellAbove1.y += this.speed;
    prisonCellAbove2.y += this.speed;
    prisonCellAbove3.y += this.speed;
    prisonCellAbove4.y += this.speed;
    prisonCellAbove5.y += this.speed;
    prisonCellAbove6.y += this.speed;
    prisonCellAbove7.y += this.speed;
    prisonCellAbove8.y += this.speed;
    prisonCellAbove9.y += this.speed;
    prisonCellAbove10.y += this.speed;
    grassFloor1.y += this.speed;
    grassFloor2.y += this.speed;
    grassFloor3.y += this.speed;
    grassFloor4.y += this.speed;
    barbedWireFence1.y += this.speed;
    barbedWireFence2.y += this.speed;
    barbedWireFence3.y += this.speed;
    trees1.y += this.speed;
    trees2.y += this.speed;
    move.y += 10;
  };
  this.moveR = function () {
    prisonCellAbove1.x -= this.speed;
    prisonCellAbove2.x -= this.speed;
    prisonCellAbove3.x -= this.speed;
    prisonCellAbove4.x -= this.speed;
    prisonCellAbove5.x -= this.speed;
    prisonCellAbove6.x -= this.speed;
    prisonCellAbove7.x -= this.speed;
    prisonCellAbove8.x -= this.speed;
    prisonCellAbove9.x -= this.speed;
    prisonCellAbove10.x -= this.speed;
    grassFloor1.x -= this.speed;
    grassFloor2.x -= this.speed;
    grassFloor3.x -= this.speed;
    grassFloor4.x -= this.speed;
    barbedWireFence1.x -= this.speed;
    barbedWireFence2.x -= this.speed;
    barbedWireFence3.x -= this.speed;
    trees1.x -= this.speed;
    trees2.x -= this.speed;
    move.x -= 10;
  };
  this.moveL = function () {
    prisonCellAbove1.x += this.speed;
    prisonCellAbove2.x += this.speed;
    prisonCellAbove3.x += this.speed;
    prisonCellAbove4.x += this.speed;
    prisonCellAbove5.x += this.speed;
    prisonCellAbove6.x += this.speed;
    prisonCellAbove7.x += this.speed;
    prisonCellAbove8.x += this.speed;
    prisonCellAbove9.x += this.speed;
    prisonCellAbove10.x += this.speed;
    grassFloor1.x += this.speed;
    grassFloor2.x += this.speed;
    grassFloor3.x += this.speed;
    grassFloor4.x += this.speed;
    barbedWireFence1.x += this.speed;
    barbedWireFence2.x += this.speed;
    barbedWireFence3.x += this.speed;
    trees1.x += this.speed;
    trees2.x += this.speed;
    move.x += 10;
  };
  this.bump = function () {
    this.collide = collideRectRect(
      this.x,
      this.y,
      150,
      110,
      move.x,
      move.y,
      120,
      88
    );
    if (this.collide === true) {
      window.location.href = "gameOver2.html";
    }
  };
}
function prisonCellAbove1() {
  this.x = w / 2 - 1680;
  this.y = 760;
  this.show = function () {
    image(prisonCellAboveOne, this.x, this.y);
    noStroke();
    noFill();
    rect(this.x, this.y, 1680, 60);
  };
  this.bump = function () {
    if (this.x > w / 2 - 1680 + 220) {
      this.x = w / 2 - 1680 + 220;
      move.x -= 10;
    }
    if (this.x < w / 2 - 1680 - 250) {
      this.x = w / 2 - 1680 - 250;
      move.x += 10;
    }
    if (this.y < 760 - 280) {
      this.y = 760 - 280;
    }
    if (this.y > 760 + 4000) {
      this.y = 760 + 4000;
      window.location.href = "lvl4.html";
    }
  };
}
function prisonCellAbove2() {
  this.x = w / 2 - 2180;
  this.y = -300;
  this.show = function () {
    image(prisonCellAboveTwo, this.x, this.y);
    noStroke();
    noFill();
    rect(this.x, this.y, 1680, 60);
  };
  this.bump = function () {
    if (this.x > w / 2 - 2180 + 220) {
      this.x = w / 2 - 2180 + 220;
    }
    if (this.x < w / 2 - 2180 - 250) {
      this.x = w / 2 - 2180 - 250;
    }
    if (this.y < -300 - 280) {
      this.y = -300 - 280;
    }
    if (this.y > -300 + 4000) {
      this.y = -300 + 4000;
    }
  };
}
function prisonCellAbove3() {
  this.x = w / 2 + 300;
  this.y = -300;
  this.show = function () {
    image(prisonCellAboveTwo, this.x, this.y);
    noStroke();
    noFill();
    rect(this.x, this.y, 1680, 60);
  };
  this.bump = function () {
    if (this.x > w / 2 + 300 + 220) {
      this.x = w / 2 + 300 + 220;
    }
    if (this.x < w / 2 + 300 - 250) {
      this.x = w / 2 + 300 - 250;
    }
    if (this.y < -300 - 280) {
      this.y = -300 - 280;
    }
    if (this.y > -300 + 4000) {
      this.y = -300 + 4000;
    }
  };
}
function prisonCellAbove4() {
  this.x = w / 2;
  this.y = 760;
  this.show = function () {
    image(prisonCellAboveOne, this.x, this.y);
    noStroke();
    noFill();
    rect(this.x, this.y, 1680, 60);
  };
  this.bump = function () {
    if (this.x > w / 2 + 220) {
      this.x = w / 2 + 220;
    }
    if (this.x < w / 2 - 250) {
      this.x = w / 2 - 250;
    }
    if (this.y < 760 - 280) {
      this.y = 760 - 280;
    }
    if (this.y > 760 + 4000) {
      this.y = 760 + 4000;
    }
  };
}
function prisonCellAbove5() {
  this.x = w / 2 - 335;
  this.y = -1080;
  this.show = function () {
    image(prisonCellAboveThree, this.x, this.y);
    noStroke();
    noFill();
    rect(this.x, this.y, 1680, 60);
  };
  this.bump = function () {
    if (this.x > w / 2 - 335 + 220) {
      this.x = w / 2 - 335 + 220;
    }
    if (this.x < w / 2 - 335 - 250) {
      this.x = w / 2 - 335 - 250;
    }
    if (this.y < -1080 - 280) {
      this.y = -1080 - 280;
    }
    if (this.y > -1080 + 4000) {
      this.y = -1080 + 4000;
    }
  };
}
function prisonCellAbove6() {
  this.x = w / 2 + 300;
  this.y = -1080;
  this.show = function () {
    image(prisonCellAboveThree, this.x, this.y);
    noStroke();
    noFill();
    rect(this.x, this.y, 1680, 60);
  };
  this.bump = function () {
    if (this.x > w / 2 + 300 + 220) {
      this.x = w / 2 + 300 + 220;
    }
    if (this.x < w / 2 + 300 - 250) {
      this.x = w / 2 + 300 - 250;
    }
    if (this.y < -1080 - 280) {
      this.y = -1080 - 280;
    }
    if (this.y > -1080 + 4000) {
      this.y = -1080 + 4000;
    }
  };
}
function prisonCellAbove7() {
  this.x = w / 2 - 2180;
  this.y = -1700;
  this.show = function () {
    image(prisonCellAboveFour, this.x, this.y);
    noStroke();
    noFill();
    rect(this.x, this.y, 1680, 60);
  };
  this.bump = function () {
    if (this.x > w / 2 - 2180 + 220) {
      this.x = w / 2 - 2180 + 220;
    }
    if (this.x < w / 2 - 2180 - 250) {
      this.x = w / 2 - 2180 - 250;
    }
    if (this.y < -1700 - 280) {
      this.y = -1700 - 280;
    }
    if (this.y > -1700 + 4000) {
      this.y = -1700 + 4000;
    }
  };
}
function prisonCellAbove8() {
  this.x = w / 2 + 300;
  this.y = -1700;
  this.show = function () {
    image(prisonCellAboveFour, this.x, this.y);
    noStroke();
    noFill();
    rect(this.x, this.y, 1680, 60);
  };
  this.bump = function () {
    if (this.x > w / 2 + 300 + 220) {
      this.x = w / 2 + 300 + 220;
    }
    if (this.x < w / 2 + 300 - 250) {
      this.x = w / 2 + 300 - 250;
    }
    if (this.y < -1700 - 280) {
      this.y = -1700 - 280;
    }
    if (this.y > -1700 + 4000) {
      this.y = -1700 + 4000;
    }
  };
}
function prisonCellAbove9() {
  this.x = w / 2 - 2180;
  this.y = -2200;
  this.show = function () {
    image(prisonCellAboveOne, this.x, this.y);
    noStroke();
    noFill();
    rect(this.x, this.y, 1680, 60);
  };
  this.bump = function () {
    if (this.x > w / 2 - 2180 + 220) {
      this.x = w / 2 - 2180 + 220;
    }
    if (this.x < w / 2 - 2180 - 250) {
      this.x = w / 2 - 2180 - 250;
    }
    if (this.y < -2200 - 280) {
      this.y = -2200 - 280;
    }
    if (this.y > -2200 + 4000) {
      this.y = -2200 + 4000;
    }
  };
}
function prisonCellAbove10() {
  this.x = w / 2 + 300;
  this.y = -2200;
  this.show = function () {
    image(prisonCellAboveOne, this.x, this.y);
    noStroke();
    noFill();
    rect(this.x, this.y, 1680, 60);
  };
  this.bump = function () {
    if (this.x > w / 2 + 300 + 220) {
      this.x = w / 2 + 300 + 220;
    }
    if (this.x < w / 2 + 300 - 250) {
      this.x = w / 2 + 300 - 250;
    }
    if (this.y < -2200 - 280) {
      this.y = -2200 - 280;
    }
    if (this.y > -2200 + 4000) {
      this.y = -2200 + 4000;
    }
  };
}
function grassFloor1() {
  this.x = w / 2 - 1880;
  this.y = -3050;
  this.show = function () {
    image(grassFloorOne, this.x, this.y);
  };
  this.bump = function () {
    if (this.x > w / 2 - 1880 + 220) {
      this.x = w / 2 - 1880 + 220;
    }
    if (this.x < w / 2 - 1880 - 250) {
      this.x = w / 2 - 1880 - 250;
    }
    if (this.y < -3050 - 280) {
      this.y = -3050 - 280;
    }
    if (this.y > -3050 + 4000) {
      this.y = -3050 + 4000;
    }
  };
}
function grassFloor2() {
  this.x = w / 2 - 100;
  this.y = -3050;
  this.show = function () {
    image(grassFloorOne, this.x, this.y);
  };
  this.bump = function () {
    if (this.x > w / 2 - 100 + 220) {
      this.x = w / 2 - 100 + 220;
    }
    if (this.x < w / 2 - 100 - 250) {
      this.x = w / 2 - 100 - 250;
    }
    if (this.y < -3050 - 280) {
      this.y = -3050 - 280;
    }
    if (this.y > -3050 + 4000) {
      this.y = -3050 + 4000;
    }
  };
}

function grassFloor3() {
  this.x = w / 2 - 1880;
  this.y = -3850;
  this.show = function () {
    image(grassFloorOne, this.x, this.y);
  };
  this.bump = function () {
    if (this.x > w / 2 - 1880 + 220) {
      this.x = w / 2 - 1880 + 220;
    }
    if (this.x < w / 2 - 1880 - 250) {
      this.x = w / 2 - 1880 - 250;
    }
    if (this.y < -3850 - 280) {
      this.y = -3850 - 280;
    }
    if (this.y > -3850 + 4000) {
      this.y = -3850 + 4000;
    }
  };
}
function grassFloor4() {
  this.x = w / 2 - 100;
  this.y = -3850;
  this.show = function () {
    image(grassFloorOne, this.x, this.y);
  };
  this.bump = function () {
    if (this.x > w / 2 - 100 + 220) {
      this.x = w / 2 - 100 + 220;
    }
    if (this.x < w / 2 - 100 - 250) {
      this.x = w / 2 - 100 - 250;
    }
    if (this.y < -3850 - 280) {
      this.y = -3850 - 280;
    }
    if (this.y > -3850 + 4000) {
      this.y = -3850 + 4000;
    }
  };
}

function barbedWireFence1() {
  this.x = w / 2 - 1890;
  this.y = -3200;
  this.show = function () {
    image(barbedWireFenceOne, this.x, this.y);
  };
  this.bump = function () {
    if (this.x > w / 2 - 1890 + 220) {
      this.x = w / 2 - 1890 + 220;
    }
    if (this.x < w / 2 - 1890 - 250) {
      this.x = w / 2 - 1890 - 250;
    }
    if (this.y < -3200 - 280) {
      this.y = -3200 - 280;
    }
    if (this.y > -3200 + 4000) {
      this.y = -3200 + 4000;
    }
  };
}
function barbedWireFence2() {
  this.x = w / 2 - 70;
  this.y = -3200;
  this.show = function () {
    image(barbedWireFenceOne, this.x, this.y);
  };
  this.bump = function () {
    if (this.x > w / 2 - 70 + 220) {
      this.x = w / 2 - 70 + 220;
    }
    if (this.x < w / 2 - 70 - 250) {
      this.x = w / 2 - 70 - 250;
    }
    if (this.y < -3200 - 280) {
      this.y = -3200 - 280;
    }
    if (this.y > -3200 + 4000) {
      this.y = -3200 + 4000;
    }
  };
}
function barbedWireFence3() {
  this.x = w / 2 + 310;
  this.y = -3200;
  this.show = function () {
    image(barbedWireFenceOne, this.x, this.y);
  };
  this.bump = function () {
    if (this.x > w / 2 + 310 + 220) {
      this.x = w / 2 + 310 + 220;
    }
    if (this.x < w / 2 + 310 - 250) {
      this.x = w / 2 + 310 - 250;
    }
    if (this.y < -3200 - 280) {
      this.y = -3200 - 280;
    }
    if (this.y > -3200 + 4000) {
      this.y = -3200 + 4000;
    }
  };
}
function trees1() {
  this.x = w / 2 - 40;
  this.y = -4100;
  this.show = function () {
    image(trees, this.x, this.y);
  };
  this.bump = function () {
    if (this.x > w / 2 - 40 + 220) {
      this.x = w / 2 - 40 + 220;
    }
    if (this.x < w / 2 - 40 - 250) {
      this.x = w / 2 - 40 - 250;
    }
    if (this.y < -4100 - 280) {
      this.y = -4100 - 280;
    }
    if (this.y > -4100 + 4000) {
      this.y = -4100 + 4000;
    }
  };
}
function trees2() {
  this.x = w / 2 - 1520;
  this.y = -4100;
  this.show = function () {
    image(trees, this.x, this.y);
  };
  this.bump = function () {
    if (this.x > w / 2 - 1520 + 220) {
      this.x = w / 2 - 1520 + 220;
    }
    if (this.x < w / 2 - 1520 - 250) {
      this.x = w / 2 - 1520 - 250;
    }
    if (this.y < -4100 - 280) {
      this.y = -4100 - 280;
    }
    if (this.y > -4100 + 4000) {
      this.y = -4100 + 4000;
    }
  };
}

function move() {
  //define move dimensions and positions
  this.y = -50;
  this.x = w / 2;
  this.width = 110;
  this.height = 160;
  //object speed
  this.objSpeed = 10;

  //show what this obejct looks like
  this.show = function () {
    image(guard1, this.x, this.y);
    noStroke();
    noFill();
    rect(this.x, this.y, this.width, this.height);
  };

  //move the object
  this.go = function () {
    this.y = this.y + this.objSpeed;
    if (this.y > h) {
      this.y = -50;
      this.x = random(w / 2 - 100 - 55, w / 2 + 100 - 55);
    }
  };
  this.bump = function () {
    if (this.x > w / 2 - 55 + 470) {
      this.x = w / 2 - 55 + 470;
    }
    if (this.x < w / 2 - 55 - 470) {
      this.x = w / 2 - 55 - 470;
    }
  };
}
function car() {
  this.x = w / 2 - 270;
  this.y = -15;
  this.w = 540;
  this.h = 300;
  this.show = function () {
    image(car2, this.x, this.y);
    rect(this.x + 100, this.y + 75, 0, 0);
    text("W CAR", w / 2 - 500, 100, 1000, 1000);
  };
}
function car21() {
  this.x = 0;
  this.y = -30;
  this.w = 540;
  this.h = 300;
  this.show = function () {
    image(car2, this.x, this.y);
    rect(this.x + 100, this.y + 75, 0, 0);
    text("W CAR", w / 2 - 500, 100, 1000, 1000);
  };
}
function car31() {
  this.x = w-540;
  this.y = -30;
  this.w = 540;
  this.h = 300;
  this.show = function () {
    image(car2, this.x, this.y);
    rect(this.x + 100, this.y + 75, 0, 0);
    text("W CAR", w / 2 - 500, 100, 1000, 1000);
  };
}

function road() {
  this.x = 0;
  this.y = 0;
  this.show = function () {
    image(road1, this.x, this.y);
  };
}
function road2() {
  this.x = w - 400;
  this.y = 0;
  this.show = function () {
    image(road1, this.x, this.y);
  };
}
function road3() {
  this.x = 0;
  this.y = -180;
  this.show = function () {
    image(road1, this.x, this.y);
  };
}
function road4() {
  this.x = w - 400;
  this.y = -180;
  this.show = function () {
    image(road1, this.x, this.y);
  };
}
function sidewalk() {
  this.x = 0;
  this.y = 300;
  this.show = function () {
    image(sidewalk1, this.x, this.y);
  };
}
function sidewalk2() {
  this.x = w / 2 - 400;
  this.y = 300;
  this.show = function () {
    image(sidewalk1, this.x, this.y);
  };
}
function grassFloor5() {
  this.x = 0;
  this.y = 350;
  this.show = function () {
    image(grassFloor, this.x, this.y);
  };
}
function grassFloor6() {
  this.x = w / 2 - 200;
  this.y = 350;
  this.show = function () {
    image(grassFloor, this.x, this.y);
  };
}
function trees3() {
  this.x = -240;
  this.y = h - 300;
  this.show = function () {
    image(trees, this.x, this.y);
  };
}
function trees4() {
  this.x = 1240;
  this.y = h - 300;
  this.show = function () {
    image(trees, this.x, this.y);
  };
}
function player5() {
  this.x = w/2 -80
  this.y = h/2 + 100
  this.speed = 10
  this.show = function () {
    image(player1, this.x, this.y)
  }
  this.moveD = function () {
    this.y += this.speed;
  };
  this.moveU = function () {
    this.y -= this.speed;
  };
  this.moveR = function () {
    this.x += this.speed;
  };
  this.moveL = function () {
    this.x -= this.speed;
  }; 
  this.bump = function() {
    if(this.y < 125 && (this.x > w/2 -170 && this.x < w/2)) {
      window.location.href = "lvl4-5.html"
    }
  }
  this.bump2 = function() {
    if(this.y < 105) {
      this.y = 105
    }
    if(this.y > h - 160) {
      this.y = h-160
    }
    if(this.x < 0 ) {
      this.x = 0
    }
    if(this.x > w- 120) {
      this.x = w- 120
    }
  }
}