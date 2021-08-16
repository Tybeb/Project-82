var mouseEvent = "empty";
var last_position_x,last_position_y;
canvas = document.getElementById("myCanvas");
ctx= canvas.getContext("2d");
color="red";
width_of_line = 1;
canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e)
{
color = document.getElementById("color").value;
width_of_line = document.getElementById("LineWidth").value;
radius = document.getElementById("Radius").value;
mouseEvent = "mouseDown";
}
canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e)
{
    current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
    current_position_of_mouse_y = e.clientY - canvas.offsetTop;

    if (mouseEvent == "mouseDown") {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;
        console.log("Last position of x and y coordinates = ");
        console.log("Current position of x and y coordinates");
        ctx.arc(current_position_of_mouse_x,current_position_of_mouse_y,radius,0,2*Math.PI);
    ctx.stroke();
    }
    last_position_x = current_position_of_mouse_x
    last_position_y = current_position_of_mouse_y
}
canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e)
{
    mouseEvent = "mouseUp";
}
canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e)
{
    mouseEvent = "mouseleave";
}
function clearArea(){
    ctx.clearRect(0,0,canvas.width,canvas.height)
}