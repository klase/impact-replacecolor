impact-replacecolor
===================

Plugin for ImpactJS to replace a color in images and spritesheets. Based on https://raw.github.com/deakster/impact-imageblender


Info
----
Replaces a color in an image or a spritesheet.

![Example](https://raw.github.com/klase/impact-replacecolor/master/example.png)

Usage
-----

- Copy replacecolor.js into your lib/plugins folder
- Add 'plugins.replacecolor' to the requires section
- When instantiating a new animation or image, append the path with the hex color you want followed by the color to be replaced: new ig.AnimationSheet( 'media/player.png#ff0000#00ff4e', 64, 64 )
