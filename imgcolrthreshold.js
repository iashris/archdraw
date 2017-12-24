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
	let src = cv.imread('canvasInput');
	let dst1 = new cv.Mat();
	let dst2 = new cv.Mat();
	// To distinguish the input and output, we graying the image.
	// You can try different conversions.
	cv.cvtColor(src, dst1, cv.COLOR_RGB2HSV);
	cv.imshow('canvasOutput', dst1);
	//defining range for Blue
	let low = new cv.Mat(dst1.rows, dst1.cols, dst1.type(), [110, 50, 50, 50]);
	let high = new cv.Mat(dst1.rows, dst1.cols, dst1.type(), [170, 250, 250, 255]);

	cv.inRange(dst1, low, high, dst2);
	cv.imshow('canvasOutput', dst2);

	src.delete();
	dst1.delete();
	dst2.delete();
};

function onOpenCvReady() {
	document.getElementById('status').innerHTML = "OpenCV.js is ready.";
}
</script>
<script async src="opencv.js" onload="onOpenCvReady();" type="text/javascript"></script>
</body>
</html>
