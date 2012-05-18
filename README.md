centerImages
============

Center images vertically and horizontically using jQuery.

## Requirements

You have to use the [imagesLoaded Plugin](https://github.com/desandro/imagesloaded), to work around Browser quirks.

## Usage

Use the ```centerImages()``` function on the parent element of the images. Say you have the following structure, as it is typical with jQuery.cycle:

```
  <ul>
    <li><img src="http://placekitten.com/400/300"></li>
    <li><img src="http://placekitten.com/400/300?image=2"></li>
  </ul>
```

You would have to use the following code to auto align all images:

```
$("ul li").centerImages();
```