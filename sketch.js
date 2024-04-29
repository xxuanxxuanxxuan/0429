var captureGraphics
var capture_width =640
var capture_height =480 
var span=10
function setup() {
  createCanvas(windowWidth,windowHeight);
  capture = createCapture(VIDEO) //啟動攝影機
  capture.size(capture_width,capture_height);//設定顯示畫面大小
  captureGraphics = captureGraphics(capture_width,capture_height)
  capture. translate (capture_width,0)
  capture. scale(-1,1)
  capture.hide()
  //選鈕的介面
  var radioElement = createRadio("方塊");
  radioElement.position(width/2-300,20)
  radioElement.option("方塊")
  radioElement.option("圓圈")
  radioElement.style("font-size","30")
}

function draw() {
  background(0);
  noStroke()
  span = 5+map(mouseX,0,width,0,20)
  push()
  translate(width/capture_width,height/capture_height) //把原點移到(width/2-160,height/2-120)
  captureGraphics.image(capture,0,0) //在(0,0)
  for (var x= 0;x<captureGraphics.width;x=x+span){
    for (var y= 0;x<captureGraphics.height;y=y+span){
      var pixel = captureGraphics.get(x,y)
      fill(pixel)
      if(radioElement.value()=="方塊"){
        rect(x,y,span)
      }

      if(radioElement.value()=="圓圈"){
        rect(x,y,span)
      rect(x,y,10)
      //ellipse(x,y,span)
    }
  }
  pop()
  }
}
