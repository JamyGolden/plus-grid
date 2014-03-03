# Plus Grid
A(nother) flexible, simple and responsive CSS grid framework

## Features
* Fluid layout
* Nestable grids
* Mobile first
* Nestable
* No grid column limit
* Classes can be stacked for different viewport grid structures
* Developed using Sass (with Compass)
* Easiliy customizable

## Class naming convention
`.pg-<VIEWPORT>-<NUMERATOR>-<DENOMINATOR>`
The maximum denominator value is set at 16 by default, but can be changed to any natural number. A real world example would be `.pg-md-1-8`

### Viewport name explanations
This naming convention was taken from [Twitter Bootstrap](http://getbootstrap.com/)
* **xs** - Extra Small, for mobile (&gt; 0)
* **sm** - Small, for tablet (&ge; 768px)
* **md** - Medium, for desktop (&ge; 992px)
* **lg** - Large, for wide monitors (&ge; 1200px)

### Easily remember the naming convention
Think to yourself when creating a PlusGrid:
**"PlusGrd medium 1 quater"**
The above would convert to `.pg-md-1-4`

## SCSS Variables
Through the SCSS variables, the horizontal and vertical gutters can be modified to be different sizes depending on the viewport.

## Example usage
If the
A mobile and up grid with 3 columns
```html
<div class="pg-row">
    <div class="pg-xs-1-3">...</div>
    <div class="pg-xs-1-3">...</div>
    <div class="pg-xs-1-3">...</div>
</div>
```

### Complex example
If I wanted to create a grid which was:
* 2 columns for mobile
* 4 columns for tablet
* 3 columns for desktop
* 6 columns for large monitor

```html
<div class="pg-row">
    <div class="pg-xs-1-2  pg-sm-1-4  pg-md-1-3  pg-lg-1-9">...</div>
    <div class="pg-xs-1-2  pg-sm-1-4  pg-md-1-3  pg-lg-1-9">...</div>
    <div class="pg-xs-1-2  pg-sm-1-4  pg-md-1-3  pg-lg-1-9">...</div>
    <div class="pg-xs-1-2  pg-sm-1-4  pg-md-1-3  pg-lg-1-9">...</div>
    <div class="pg-xs-1-2  pg-sm-1-4  pg-md-1-3  pg-lg-1-9">...</div>
    <div class="pg-xs-1-2  pg-sm-1-4  pg-md-1-3  pg-lg-1-9">...</div>
    <div class="pg-xs-1-2  pg-sm-1-4  pg-md-1-3  pg-lg-1-9">...</div>
    <div class="pg-xs-1-2  pg-sm-1-4  pg-md-1-3  pg-lg-1-9">...</div>
    <div class="pg-xs-1-2  pg-sm-1-4  pg-md-1-3  pg-lg-1-9">...</div>
</div>
```

## Different grids based on viewport
The grid classes work using the mobile first methadology, meaning `.pg-xs-1-2` will be a 50% cell/column all the way from xs to lg. Where as `.pg-md-1-3` will be a 33.33% cell/column from md to lg. Various PlusGrid cell/column classes can be used on an element and the "larger" viewport classes will take precidence over the "smaller" viewport classes. This allows for developers to completely change the grid structure layout based on the viewport.

## Browser support
IE8+ and modern browsers.

Since the `box-sizing` CSS property is used, IE7 won't support any gutters. In order for the grids to work correctly in IE7, all horizontal gutters should be set to 0 within the _config.scss file. In addition to this, all cells/columns should get a class of `.pg-<VIEWPORT>-col`. For example, support would be added to the above 3 column grid example by modifying it to be the following:
```html
<div class="pg-row">
    <div class="pg-xs-col pg-xs-1-3">...</div>
    <div class="pg-xs-col pg-xs-1-3">...</div>
    <div class="pg-xs-col pg-xs-1-3">...</div>
</div>
```

## License
MIT

## Changelog:
* 1.0.2 - Fixed IE7 class name bug
* 1.0.1 - Function/var/mixin internal fixups. 18-02-2014
* 1.0.0 - V1 release. 17-02-2014