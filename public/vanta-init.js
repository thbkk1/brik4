window.addEventListener('DOMContentLoaded', function() {
  function loadVanta() {
    if (window.VANTA && window.THREE && document.getElementById('vanta-bg')) {
      window.VANTA.NET({
        el: "#vanta-bg",
        backgroundAlpha: 1,
        backgroundColor: 0x232b2b,
        color: 0xd7e1fc,
        gyroControls: false,
        maxDistance: 20,
        minHeight: 200,
        minWidth: 200,
        mouseControls: false,
        points: 10,
        scale: 1,
        scaleMobile: 1,
        showDots: false,
        spacing: 15,
        touchControls: false
      });
    } else {
      setTimeout(loadVanta, 100);
    }
  }
  loadVanta();
}); 