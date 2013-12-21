<?php
include 'button.php';


$q=$_GET["q"];
$level=$_GET["level"];
$con = mysqli_connect('localhost','root','root','en_ciel');
if (!$con)
  {
  die('Could not connect: ' . mysqli_error($con));
  }

mysqli_select_db($con,'en_ciel');
$sql="SELECT * FROM menu WHERE parent_id = '".$q."'";

$result = mysqli_query($con,$sql);
$level = $level+1;

echo "<div id='submenu".$level."' >";
while($row = mysqli_fetch_array($result))

switch ($row['class']) {
    case "button":
       button($row,$level);
        break;
    case "bar":
        echo "i is bar";
        break;
    case "cake":
        echo "i is cake";
        break;
}

echo "</div>";

mysqli_close($con);

?>