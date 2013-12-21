<?php
function button($row,$level)
  {
  
       echo "<div 
              class='"
                .$row['class'].
                " idnum"
                  .$row['id'].
                " parent_id_"
                  .$row['parent_id'].
                "  ".$row['subclass'].
              "' id='"
                  .$row['id'].
              "' data-parent_id='"
                  .$row['parent_id'].
              "' data-class='"
                  .$row['class'].
              "' data-subclass='"
                  .$row['subclass'].
              "' data-level='"
                  .$level.
              "'onclick='javascript: handle("
                  .$row['id'].
                  ");'>";
        echo " " . $row['name'];
        echo "</div>";
       echo "<div class='submenu' id='childrenOf".$row['id']."'></div>";
}
?>