# Plus Grid
A(nother) flexible, simple and responsive CSS grid framework

## Features
* Fluid layout
* Nestable grids
* Mobile first
* No grid column limit
* Classes can be stacked for different viewport grid structures
* Developed using Sass (with Compass)
* Easiliy customizable

## Class naming convention
`.gd-<VIEWPORT>-<NUMERATOR>-<DENOMINATOR>`
The maximum denominator value is set at 16 by default, but can be changed to any natural number. A real world example would be `.gd-md-1-8`

### Viewport name explanations
This naming convention was taken from [Twitter Bootstrap](http://getbootstrap.com/)
* **xs** - Extra Small, for mobile (&gt; 0)
* **sm** - Small, for tablet (&ge; 768px)
* **md** - Medium, for desktop (&ge; 992px)
* **lg** - Large, for wide monitors (&ge; 1200px)

## SCSS Variables
Through the SCSS variables, the horizontal and vertical gutters can be modified to be different sizes depending on the viewport.

## Example usage
If the
A mobile and up grid with 3 columns
```html
<div class="gd-row">
    <div class="gd-xs-1-3">...</div>
    <div class="gd-xs-1-3">...</div>
    <div class="gd-xs-1-3">...</div>
</div>
```

### Complex example
If I wanted to create a grid which was:
* 2 columns for mobile
* 4 columns for tablet
* 3 columns for desktop
* 6 columns for large monitor

```html
<div class="gd-row">
    <div class="gd-xs-1-2  gd-sm-1-4  gd-md-1-3  gd-lg-1-9">...</div>
    <div class="gd-xs-1-2  gd-sm-1-4  gd-md-1-3  gd-lg-1-9">...</div>
    <div class="gd-xs-1-2  gd-sm-1-4  gd-md-1-3  gd-lg-1-9">...</div>
    <div class="gd-xs-1-2  gd-sm-1-4  gd-md-1-3  gd-lg-1-9">...</div>
    <div class="gd-xs-1-2  gd-sm-1-4  gd-md-1-3  gd-lg-1-9">...</div>
    <div class="gd-xs-1-2  gd-sm-1-4  gd-md-1-3  gd-lg-1-9">...</div>
    <div class="gd-xs-1-2  gd-sm-1-4  gd-md-1-3  gd-lg-1-9">...</div>
    <div class="gd-xs-1-2  gd-sm-1-4  gd-md-1-3  gd-lg-1-9">...</div>
    <div class="gd-xs-1-2  gd-sm-1-4  gd-md-1-3  gd-lg-1-9">...</div>
</div>
```

## Different grids based on viewport
The grid classes work using the mobile first methadology, meaning `.gd-xs-1-2` will be a 50% cell/column all the way from xs to lg. Where as `.gd-md-1-3` will be a 33.33% cell/column from md to lg. Various PlusGrid cell/column classes can be used on an element and the "larger" viewport classes will take precidence over the "smaller" viewport classes. This allows for developers to completely change the grid structure layout based on the viewport.

## Browser support
IE8+ and modern browsers.

IE7 support is built in, however an extra class of `.gd-col` is needed to be added to each cell/column item. For example:
Support would be added to the above 3 column grid example by modifying it to be the following:
```html
<div class="gd-row">
    <div class="gd-col gd-xs-1-3">...</div>
    <div class="gd-col gd-xs-1-3">...</div>
    <div class="gd-col gd-xs-1-3">...</div>
</div>
```
