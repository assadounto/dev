let isClicked = false;

  function openNav() {
  if (!isClicked) {
    document.getElementById("Mynav").style.display = 'block';
    document.getElementById('head').style.filter = 'blur(0.3rem)';
    document.getElementById('logo').style.filter = 'blur(0.3rem)';
    document.getElementById('hamb').style.display = 'none';
    isClicked = true;
  }
    else {
    document.getElementById("Mynav").style.display = 'none';
    document.getElementById('head').style.filter = 'none';
    document.getElementById('hamb').style.display = 'block';
    document.getElementById('logo').style.filter = 'none';
    isClicked = false;
 }
}
 function menuClicked() {
  openNav();
}