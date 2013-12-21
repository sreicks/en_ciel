

function handle(id)
{
  switch ($("#"+id).attr("data-class"))
  {
    case "button":
      switch ($("#"+id).attr("data-subclass")){
        case "menu":
          resetFocus(id);
           loadSubMenu( id , $("#"+id).attr("data-level")) ;
        break;
        case "table":
          alert("loadtable");
        break;
      }
    break;
    alert('slipped through!');
    case "select":
      break;
    case "select":
      break;
  }
}
