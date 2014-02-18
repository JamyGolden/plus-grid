# Plus Grid
A flexible and responsive CSS grid framework

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

### Viewport explanations
* **xs** - Extra Small, for mobile (&gt; 0)
* **sm** - Small, for tablet (&ge; 768px)
* **md** - Medium, for desktop (&ge; 992px)
* **lg** - Large, for wide monitors (&ge; 1200px)

## SCSS Variables
Through the SCSS variables, the horizontal and vertical gutters can be modified to be different sizes depending on the viewport.

## Example usage
If the
A mobile and up grid with 3 columns

    <div class="gd-row">
        <div class="gd-xs-1-3">...</div>
        <div class="gd-xs-1-3">...</div>
        <div class="gd-xs-1-3">...</div>
    </div>

## Browser support
IE8+ and modern browsers.

IE7 support is built in, however an extra class of `.gd-col` is needed to be added to each cell/column item. For example:
Support would be added to the above 3 column grid example by modifying it to be the following:

    <div class="gd-row">
        <div class="gd-col gd-xs-1-3">...</div>
        <div class="gd-col gd-xs-1-3">...</div>
        <div class="gd-col gd-xs-1-3">...</div>
    </div>