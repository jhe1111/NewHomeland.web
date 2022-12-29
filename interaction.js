//<!-- 01 get mouse position -->//

        const root = document.documentElement;

        document.addEventListener('mousemove', evt => {
            let x = evt.clientX / innerWidth;
            let y = evt.clientY / innerHeight;

            root.style.setProperty('--mouse-x', x);
            root.style.setProperty('--mouse-y', y);
        });

//!-- 02 drag clone -->//

$('.draggable').draggable({helper: "clone"});
$('.draggable').bind('dragstop', function(event, ui)
{ $(this).after($(ui.helper).clone().draggable());});

//<!-- 03 drag-resize-rotate -->//
$(document).ready(function() {
    var params = {
        start: function(event, ui) {
            console.log("Rotating started")
        },
        rotate: function(event, ui) {
            if (Math.abs(ui.angle.current > 6)) {
              console.log("Rotating " + ui.angle.current)
            }
        },
        stop: function(event, ui) {
            console.log("Rotating stopped")
        },
    };
    $('.rotatable').rotatable();
    $('.drag').draggable();
    $(".resize").resizable({
      handles: 'ne, se, sw, nw',
    });
});

function coordinate(event) {
    var x=event.clientX;
    var y=event.clientY;
    document.getElementById("X").value=x;
    document.getElementById("Y").value=y;
}
