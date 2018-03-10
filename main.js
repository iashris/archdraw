<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>Hello OpenCV.js again x2</title>
</head>
<body>
<h2>Hello OpenCV.js</h2>
<p id="status">OpenCV.js is loading...</p>
<div>
	<div class="inputoutput">
			<img id="imageSrc" alt="No Image"/>
			<div class="caption">imageSrc<input type="file" id="fileInput" 
			name="file"/></div>
	</div>
	<div class="inputoutput">
		<canvas id="canvasOutput"></canvas>
		<div class="caption">canvasOutput</div>
	</div>
</div>
<script type="text/javascript">
		let imgElement = document.getElementById('imageSrc');
		let inputElement = document.getElementById('fileInput');
		inputElement.addEventListener('change', (e) => {
			img.imgElement.src = URL.createObjectURL(e.target.files[0]);
		}, false);

imgElement.onload = function() {
let src1 = cv.imread('canvasInput');
let src = cv.Mat.zeros(src1.rows, src1.cols, cv.CV_8UC3);
let dst = cv.Mat.zeros(src1.rows, src1.cols, cv.CV_8UC3);

let srcH = cv.Mat.zeros(src1.rows, src1.cols, cv.CV_8UC3);

cv.cvtColor(src1, srcH, cv.COLOR_RGBA2GRAY, 0);
cv.cvtColor(src1, src1, cv.COLOR_RGB2HSV);

let low = new cv.Mat(src1.rows, src1.cols, src1.type(), [115, 100, 0, 0]);
let high = new cv.Mat(src1.rows, src1.cols, src1.type(), [125, 255, 255, 255]);// blue

let low1 = new cv.Mat(src1.rows, src1.cols, src1.type(), [40, 100, 0, 0]);
let high1 = new cv.Mat(src1.rows, src1.cols, src1.type(), [80, 255, 255, 255]); //green color marker

let M = cv.Mat.ones(7, 7, cv.CV_8U);
let contours = new cv.MatVector();
let hierarchy = new cv.Mat();
let poly = new cv.MatVector();
let tmp = new cv.Mat();
    let cnt = new cv.Mat();
for(let k = 0; k < 2; k++)
{

	if (k == 1) {
	cv.inRange(src1, low1, high1, src);
	}
	else
	{
	cv.inRange(src1, low, high, src);
	}
// You can try more different parameters
cv.morphologyEx(src, src, cv.MORPH_OPEN, M);
cv.findContours(src, contours, hierarchy, cv.RETR_CCOMP, cv.CHAIN_APPROX_SIMPLE);
// approximates each contour to polygon

alert('contours.size' +contours.size());

	for (let i = 0; i < contours.size(); ++i) {

	    cnt = contours.get(i);
	    // You can try more different parameters
	    cv.approxPolyDP(cnt, tmp, 3, true);
	    poly.push_back(tmp);
    
	}
// draw contours with random Scalar



alert('poly.size' +poly.size());
	for (let i = 0; i < poly.size(); ++i) {

		  if (i == 1) {
			color1 = new cv.Scalar(10, 150, 10);
			cv.drawContours(dst, poly, i, color1, -1, 8, hierarchy, 0);
		alert('i' +i);
		  }
		  else {
			color = new cv.Scalar(10, 10, 125);
			cv.drawContours(dst, poly, i, color, -1, 8, hierarchy, 0);
		  }

	}

}


let lines = new cv.Mat();
let col = new cv.Scalar(255, 0, 0);
cv.Canny(srcH, srcH, 150, 200, 3);
// You can try more different parameters
cv.HoughLinesP(srcH, lines, 1, Math.PI / 180, 2, 0, 0);
// draw lines
	for (let i = 0; i < lines.rows; ++i) {
	    let startPoint = new cv.Point(lines.data32S[i * 4], lines.data32S[i * 4 + 1]);
	    let endPoint = new cv.Point(lines.data32S[i * 4 + 2], lines.data32S[i * 4 + 3]);
	    cv.line(dst, startPoint, endPoint, col);
	}
	
cv.imshow('canvasOutput', dst);
cnt.delete(); tmp.delete();lines.delete(); srcH.delete();
src1.delete(); src.delete(); dst.delete(); hierarchy.delete(); contours.delete(); poly.delete();

};

function onOpenCvReady() {
	document.getElementById('status').innerHTML = "OpenCV.js is ready.";
}
</script>
<script async src="opencv.js" onload="onOpenCvReady();" type="text/javascript"></script>
</body>
</html>
