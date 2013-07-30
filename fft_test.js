$(document).ready(function() {
  var src = window.getDraggedFile() || "/timbre.js/misc/audio/amen.wav";
  var synth = T("audio", {load: src} ).play();
  var fft = T("fft", 512, "Hann");
  fft.onfft = function(real, imag) {
    // window.background.draw( this.spectrum );
  };
  fft.listen(synth);          
        
});