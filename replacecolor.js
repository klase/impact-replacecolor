// Replace Color - https://github.com/klase/impact-replacecolor
// Based on Image Blender - https://github.com/deakster/impact-imageblender

ig.module(
  'plugins.replacecolor'
).requires(
    'impact.image'
).defines(function () {

  ig.Image.inject({

      onload: function( event ) {
        this.parent( event );

        var hashIndex = this.path.indexOf('#');
        if (hashIndex > 0 && this.path.match(/#/g).length === 2) {

          this.convertToCanvas();

          var rRed = parseInt(this.path.substr(hashIndex + 8, 2), 16),
              rGreen = parseInt(this.path.substr(hashIndex + 10, 2), 16),
              rBlue = parseInt(this.path.substr(hashIndex + 12, 2), 16),
              ctx = this.data.getContext("2d"),
              imgData = ctx.getImageData(0, 0, this.data.width, this.data.height),
              src = imgData.data,
              len = src.length,
              dRed = parseInt(this.path.substr(hashIndex + 1, 2), 16),
              dGreen = parseInt(this.path.substr(hashIndex + 3, 2), 16),
              dBlue = parseInt(this.path.substr(hashIndex + 5, 2), 16);

          for (var px = 0; px < len; px += 4) {

            var red = src[px],
                green = src[px+1],
                blue = src[px+2];

            if (red === rRed && green === rGreen && blue === rBlue) {
                src[px] = dRed;
                src[px+1] = dGreen;
                src[px+2] = dBlue;
            }
          }

          ctx.putImageData(imgData, 0, 0);
        }
      },

    convertToCanvas: function () {
      if (this.data.getContext) {
        return;
      }

      var orig = ig.$new('canvas');
      orig.width = this.width;
      orig.height = this.height;
      orig.getContext('2d').drawImage( this.data, 0, 0, this.width, this.height, 0, 0, this.width, this.height );
      this.data = orig;
    }
  });
});
