var result=function(){
  var sidea =parseInt(document.getElementById("sidea").value);
  var sideb =parseInt(document.getElementById("sideb").value);
  var sidec =parseInt(document.getElementById("sidec").value);

  if (sidea>=sideb + sidec || sidec>=sidea + sideb || sideb>=sidea + sidec){
    alert("Not a triangle");
  }else if (sidea===sideb && sideb===sidec) {
    alert("Equilateral triangle :all sides are equal");
  }else if (sidea===sideb || sideb===sidec || sidec===sidea) {
    alert("Isosceles triangle :two sides are equal");
  }else if (sidea!==sideb || sideb!==sidec) {
    alert("Scalene triangle : all sides are not equal");
  }
}
