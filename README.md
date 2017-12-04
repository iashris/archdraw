# archdraw
An application to automate arch sketches to renders.

Idea kafi simple hai : Architects are not the best people in the world when it comes to efficiency. While a major chunk of
their kaam is simple, there are parts they do over and over again and hence there is ample space for automation.

One such possible task to be automated is to create automatic plan renders from pencil sketches.
Here is a typical sketch of a plan :

![Pencil sketch](https://github.com/iashris/archdraw/blob/master/testx.jpg "Pencil sketch")

And a typical rendered plan would look like this

![Rendering](https://i.ytimg.com/vi/xPL7BdpdqVQ/maxresdefault.jpg "Rendered plan")

So the goal is to make an application that automatically does this.

## Tools used

You can see what is possible now : http://iashris.com/archdraw/
I am using [p5js](https://p5js.org) for visualization and [jsfeat](https://inspirit.github.io/jsfeat/) to do the image processing.
I am a big fan of everything happening on browser and hence we shall do the project purely on Javascript.
Hence, I apologize to all Image Processing enthusiasts who may get irked and wonder _Hey ye toh MATLAB me ho jayega_

## What's happening

I am using jsfeat's corner detection algorithm to get corners and draw straight lines through them to make the walls. 
That's all so far. The next feature would be to avoid drawing a wall if the user hasn't drawn a line between two corners.
Second, there will be windows and doors in/on the walls which will be indicated by breaks in the walls. We have to figure out a way to implement that.
A color palette can be added which could help the designer preview color combinations on different sections and thereby get his complete design ready using this platform.

## Goals

I want to implement following features

* Make the web app's interface designed such that you can upload a picture from your phone or take a photo with the camera,
upload the image and get the results instantly.

* Implement feature to add doors and windows based on either symbolic doors on sketch or using colored markers (open ended hai thoda)

* Generate a 3D model from the output plan -> Ye thoda fight hai, magar dekhte hain. p5js has some cool WEBGL APIs which we can use. 

## KWoC?

I am a better designer than I am a coder. Code to me is just another tool to design things, hence I may not be able to 
teach you CS principles as well as some other mentors do but I can help you quickly prototype how to make an idea into a product.
Ideally I want to work with students with some experience in Javascript (optional), interest in design (compulsory) and lots of enthu (compulsory).







