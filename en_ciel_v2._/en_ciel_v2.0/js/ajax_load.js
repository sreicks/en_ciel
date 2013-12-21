function loadMenu(id,level)
{
  //alert("1");

if (window.XMLHttpRequest)
  {// code for IE7+, Firefox, Chrome, Opera, Safari
  xmlhttp=new XMLHttpRequest();
  }
else
  {// code for IE6, IE5
  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
xmlhttp.onreadystatechange=function()
  {
  if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {//alert("2");

    document.getElementById("nav").innerHTML=xmlhttp.responseText;
    resetFocus($('#nav').children(0).children(0).attr("id"));
   // alert("3");
   // focusId = '#'+ $('#nav').children(0).children(0).attr("id");
   // $(focusId).addClass("menuFocus");
    }
  }
xmlhttp.open("GET","php/getmenu.php?q="+id+"&level="+level,true);
xmlhttp.send();
//set focus on first item
  
  //$(focusId).addClass("menuFocus");

//alert("9");



}
function loadSubMenu(id,level)
{ 
//$(focusId).addClass("menuFocus");
//alert("loadsubkhgklhgjhsdsmenu"+id+" | "+level );
//reset active menus
$('#' + id ).siblings().removeClass("activeMenu");
$('#' + id ).siblings().children().remove();
$('#' + id ).addClass("activeMenu");
//document.getElementById("menuButton_" + id).className += " activeMenu";

if (window.XMLHttpRequest)
  {// code for IE7+, Firefox, Chrome, Opera, Safari
  xmlhttp=new XMLHttpRequest();
  }
else
  {// code for IE6, IE5
  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
xmlhttp.onreadystatechange=function()
  {
  if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
//        alert(xmlhttp.responseText);
    document.getElementById("childrenOf"+id).innerHTML=xmlhttp.responseText;

    }
  }
xmlhttp.open("GET","php/getmenu.php?q="+id+"&level="+level,true);
xmlhttp.send();
}
