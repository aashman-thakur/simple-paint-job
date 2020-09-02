var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["a08e8934-e4d4-4682-8165-e3269324846d","ea6c46ba-fef0-47c0-ab11-e1f04de17560","f4e7d801-7013-4763-ad6c-773e10897597","da024d47-3849-4796-adb4-c6082cb65330","84622336-3453-425f-9e56-e0d454eb676c"],"propsByKey":{"a08e8934-e4d4-4682-8165-e3269324846d":{"name":"animation_1","sourceUrl":null,"frameSize":{"x":60,"y":49},"frameCount":1,"looping":true,"frameDelay":12,"version":"nLykcnxHmCYHcc0tBCkboBhIJ8_1TCkq","loadedFromSource":true,"saved":true,"sourceSize":{"x":60,"y":49},"rootRelativePath":"assets/a08e8934-e4d4-4682-8165-e3269324846d.png"},"ea6c46ba-fef0-47c0-ab11-e1f04de17560":{"name":"animation_2","sourceUrl":null,"frameSize":{"x":400,"y":350},"frameCount":1,"looping":true,"frameDelay":12,"version":"6lnmgLi4M_Wb8bUtI8bnrlIlhxBJ0A4J","loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":350},"rootRelativePath":"assets/ea6c46ba-fef0-47c0-ab11-e1f04de17560.png"},"f4e7d801-7013-4763-ad6c-773e10897597":{"name":"animation_3","sourceUrl":null,"frameSize":{"x":100,"y":50},"frameCount":1,"looping":true,"frameDelay":12,"version":"LPHmnJ.7IHr_bKIB3ZjfdRIyw.245sC1","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":50},"rootRelativePath":"assets/f4e7d801-7013-4763-ad6c-773e10897597.png"},"da024d47-3849-4796-adb4-c6082cb65330":{"name":"animation_4","sourceUrl":null,"frameSize":{"x":200,"y":50},"frameCount":1,"looping":true,"frameDelay":12,"version":"Pum9DnmVi_CSWOY87AD8ysfyNno5PVc9","loadedFromSource":true,"saved":true,"sourceSize":{"x":200,"y":50},"rootRelativePath":"assets/da024d47-3849-4796-adb4-c6082cb65330.png"},"84622336-3453-425f-9e56-e0d454eb676c":{"name":"animation_5","sourceUrl":null,"frameSize":{"x":40,"y":40},"frameCount":1,"looping":true,"frameDelay":12,"version":"WGR0fSIMfVtEUmlo1XnluZoaQB6NG0sP","loadedFromSource":true,"saved":true,"sourceSize":{"x":40,"y":40},"rootRelativePath":"assets/84622336-3453-425f-9e56-e0d454eb676c.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var c=1
var s=10
var pxl
var paint = createGroup();
var canvas = createSprite(200, 175,400,350);
canvas.setAnimation("animation_2")
var bin = createSprite(30, 375,400,50);
bin.setAnimation("animation_1");
var cp = createSprite(350,375,100,50);
var sp= createSprite(178,375,200,50);
var cd = createSprite(25, 25,40,40);
var sd = createSprite(75, 25,40,40)
var sd1 = createSprite(sd.x,sd.y,s,s);
sd.setAnimation("animation_5")
sp.setAnimation("animation_4")
cp.setAnimation("animation_3");

var paint=createGroup();
function draw() {
background("black");
sd1.shapeColor='black'
sd1.width=s
sd1.height=s

switch(c){
case 1:cd.shapeColor='black';
break;
case 2:cd.shapeColor='red';
break;
case 3:cd.shapeColor='blue';
break;
case 4:cd.shapeColor='green';
break;
case 5:cd.shapeColor='yellow';
break;
default:break;
}

if(mousePressedOver(cp)){
  c=c+1
}
if(c>5){
c=1
}
if(mousePressedOver(sp)){
  s=s+1
}
if(s>35){
s=10  
}
if (mousePressedOver(canvas)) {
  pxl = createSprite(camera.mouseX, camera.mouseY, s, s);
  pxl.shapeColor='black'
  paint.add(pxl)

switch(c){
case 1:pxl.shapeColor='black';
break;
case 2:pxl.shapeColor='red';
break;
case 3:pxl.shapeColor='blue';
break;
case 4:pxl.shapeColor='green';
break;
case 5:pxl.shapeColor='yellow';
break;
default:break;
}
}
if (mousePressedOver(bin)) {
  paint.destroyEach();
}
drawSprites();
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
