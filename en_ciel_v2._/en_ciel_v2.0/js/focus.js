var focusId = "null";

$(document.documentElement).keyup(function (event) {
  // handle cursor keys
  if (event.keyCode == 37) {
    // go left
      switchFocus("left");
  } else if (event.keyCode == 39) {
    // go right
      switchFocus("right");
  } else if (event.keyCode == 38) {
    // go up
      switchFocus("up");
  } else if (event.keyCode == 40) {
    // go down
      switchFocus("down");
  } else if (event.keyCode == 32|| event.keyCode == 13) {
    // go select
      
      switchFocus("select");
  }
});
/*
function handle(id,level,main_class,subclass)
{
  //alert("gonna handle it");
//  resetFocus(id);
  switch (main_class)
  {
    case "button":
      resetFocus("menuButton_"+id);
      loadSubMenu(id,level);
    break;
    alert('slipped through!');
    case "select":
      break;
    case "select":
      break;
  }
}*/

function resetFocus(newFocusId)
  {
      //alert(newFocusId);
      $(focusId).removeClass("menuFocus");
      focusId = "#"+newFocusId;
      $(focusId).addClass("menuFocus");
  }

function switchFocus(keyCommand)
{
  //alert("sup");
  var newFocus = focusId;
  //alert(keyCommand);
  switch (keyCommand)
      {
      case "select":
          alert("select");

        break;
        
      case "left":
        alert( focusId+" parent:"+$(focusId).parent().attr('id') );
        if($(focusId).parent().attr('id') != "submenu1")
        {
                alert("left: "+ $(focusId).parent().parent().parent().attr('id'));

            newFocus= $(focusId).parent().attr('id');
        }
        break;/*
      case "right":
        if($(focusId).children().size()>0)
        {
                alert("right")

          $newFocus= $(focusId+":first-child").attr('id');
        }
        break;
      case "up":
        if($(focusId).previous().length() > 0)
        {
                alert("up")

          $newFocus= $(focusId).previous().attr('id');
        }
        break;
      case "down":
        if($(focusId).next().length() > 0)
        {
              alert("down")

          $newFocus= = $(focusId).next().attr('id');
        }
        break;

      */
      }
      //alert("qudglk");
      if(newFocus != focusId)
      {
        alert(newFocus);
        resetFocus(newFocus);
      }
  
}
