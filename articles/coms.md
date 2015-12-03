# 知好乐前端组件化规范
标签： 组件化
组件库：http://git.tfedu.net/tfedu-web/tfedu-frontend-coms

---
## 1 样式组件化
- 基于less规范
- 字体 字体大小
- 基本样式 居中 
- 图标圆形


## 2 前端组件库
- angular.js
- 通用组件库
- 自定义组件库

## 3 服务化模块
- interface api
- 带后台的api调用及接口

### 3.1 图片剪裁服务
 - 服务器地址：http://219.239.146.211/imgcrop/webroot/img.php
使用方法
 - 图片服务器？图片路径
 - 如：http://219.239.146.211/imgcrop/webroot/img.php?src=http://pic.yupoo.com/oiui/D8ZxF1LI/medish.jpg
 参数：width(简写w), height(h)
 - 如http://219.239.146.211/imgcrop/webroot/img.php?src=http://pic.yupoo.com/oiui/D8ZxF1LI/medish.jpg&w=60
更多方法 参看：https://github.com/mosbth/cimage

####Options for deciding width and height of target image

These options are all affecting the final dimensions, width and height, of the resulting image.

| Parameter      | Explained                                    | 
|----------------|----------------------------------------------|
| `h, height`    | `h=200` sets the width to be to max 200px. `h=25%` sets the height to max 25% of its original height. |
| `w, width`     | `w=200` sets the height to be max 200px. `w=100%` sets the width to max 100% of its original width. |
| `ar, aspect-ratio` | Control target aspect ratio. Use together with either height or width or alone to base calculations on original image dimensions. This setting is used to calculate the resulting dimension for the image. `w=160&aspect-ratio=1.6` results in a height of 100px. Use `ar=!1.6` to inverse the ratio, useful for portrait images, compared to landscape images. |
| `dpr, device-pixel-ratio` | Default value is 1, set to 2 when you are delivering the image to a high density screen, `dpr=2` or `dpr=1.4`. Its a easy way to say the image should have larger dimensions. The resulting image will be twice as large (or 1.4 times), keeping its aspect ratio. |



####Options for resize strategy

These options affect strategy to use when resizing an image into a target image that has both width and height set.

| Parameter      | Explained                                    | 
|----------------|----------------------------------------------|
| `nr, no-ratio, stretch` | Do *not* keep aspect ratio when resizing and using both width & height constraints. Results in stretching the image, if needed, to fit in the resulting box. |
| `cf, crop-to-fit`  | Set together with both `h` and `w` to make the image fit into dimensions, and crop out the rest of the image. |
| `ff, fill-to-fit` | Set together with both `h` and `w` to make the image fit into dimensions, and fill the rest using a background color. You can optionally supply a background color as this `ff=00ff00`, or `ff=00ff007f` when using the alpha channel. |
| `nu, no-upscale` | Avoid smaller images from being upscaled to larger ones. Combine with `stretch`, `crop-to-fit` or `fill-to-fit` to get the smaller image centered on a larger canvas. The requested dimension for the target image are thereby met. |



####Options for cropping part of image

These options enable to decide what part of image to crop out.

| Parameter      | Explained                                    | 
|----------------|----------------------------------------------|
| `c, crop`      | Crops an area from the original image, set `width`, `height`, `start_x` and `start_y` to define the area to crop, for example `crop=100,100,10,10` (`crop=width,height,start_x,start_y`). Left top corner is 0, 0. You can use `left`, `right` or `center` when setting `start_x`. You may use `top`, `bottom` or `center` when setting `start_y`. |
| `a, area`      | Define the area of the image to work with. Set `area=10,10,10,10` (`top`, `right`, `bottom`, `left`) to crop out the 10% of the outermost area. It works like an offset to define the part of the image you want to process. Its an alternative of using `crop`. |



####General processing options

These options are general options affecting processing.

| Parameter      | Explained                                    | 
|----------------|----------------------------------------------|
| `bgc, bg-color` | Set the backgroundcolor to use (if its needed). Use six hex digits as `bgc=00ff00` and 8 digits when using the alpha channel, as this `bgc=00ff007f`. The alpha value can be between 00 and 7f. |



####Processing of image before resizing 

This option are executed *before* the image is resized.

| Parameter      | Explained                                    | 
|----------------|----------------------------------------------|
| `s, scale`     | Scale the image to a size proportional to a percentage of its original size, `scale=25` makes an image 25% of its original size and `size=200` doubles up the image size. Scale is applied before resizing and has no impact of the target width and height. |
| `rb, rotate-before` | Rotate the image before its processed, send the angle as parameter `rb=45`. |
| `aro, auto-rotate`  | Auto rotate the image based on EXIF information (useful when using images from smartphones). |



####Processing of image after resizing 

These options are executed *after* the image is resized.

| Parameter      | Explained                                    |
|----------------|----------------------------------------------|
| `ra, rotate-after`<br>`r, rotate` | Rotate the image after its processed, send the angle as parameter `ra=45`. |
| `sharpen`            | Appy a convolution filter that sharpens the image.       |
| `emboss`             | Appy a convolution filter with an emboss effect.         |
| `blur`               | Appy a convolution filter with a blur effect.            |
| `convolve`           | Appy custom convolution filter as a 3x3 matrix, a divisor and offset, `convolve=0,-1,0,-1,5,-1,0,-1,0,1,0` sharpens the image. |
| `convolve`           | Use predefined convolution expression as `convolve=sharpen-alt` or a serie of convolutions as `convolve=draw,mean,motion`. These are supported out of the box: `lighten`, `darken`, `sharpen`, `sharpen-alt`, `emboss`, `emboss-alt`, `blur`, `gblur`, `edge`, `edge-alt`, `draw`, `mean`, `motion`. Add your own, or overwrite existing, in `img_config.php`. |
| `f, filter`          | Apply filter to image, `f=colorize,0,255,0,0` makes image more green. Supports all filters as defined in [PHP GD `imagefilter()`](http://php.net/manual/en/function.imagefilter.php). |
| `f0, f1-f9`    | Same as `filter`, just add more filters. Applied in order `f`, `f0-f9`.  |
| `sc, shortcut` | Save longer expressions in `img_config.php`. One place to change your favorite processing options, use as `sc=sepia` which is a shortcut for `&f=grayscale&f0=brightness,-10&f1=contrast,-20`<br>`&f2=colorize,120,60,0,0&sharpen`. |



####Saving image, affecting quality and file size 

Options for saving the target image.

| Parameter      | Explained                                    | 
|----------------|----------------------------------------------|
| `q, quality`   | Quality affects lossy compression and file size for JPEG images by setting the quality between 1-100, default is 60.  Quality only affects JPEG. |
| `co, compress` | For PNG images it defines the compression algorithm, values can be 0-9, default is defined by PHP GD. Compress only affects PNG. |
| `p, palette`   | Create a palette version of the image with up to 256 colors. |
| `sa, save-as`  | Save resulting image as JPEG, PNG or GIF, for example `?src=river.png&save-as=gif`. |
| `alias`        | Save resulting image as a copy in the alias-directory. |

Carry on reading to view examples on how to use and combine the parameters to achieve desired effects and target images.



## 4 开发规范

- 开发规范

## 5 使用说明

- 使用说明









