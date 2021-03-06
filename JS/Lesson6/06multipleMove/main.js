window.onload = function() {
    var aDiv = document.getElementsByTagName('div');
    var timer = null;

    for (i = 0; i < aDiv.length; i++) {

        aDiv[i].timer = null;
        aDiv[i].onmouseover = function() {
            startMove(this, 300);
        };
        aDiv[i].onmouseout = function() {
            startMove(this, 100);
        };
    }
};

function startMove(obj, iTarget) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function() {
        var iSpeed = (iTarget - obj.offsetWidth) / 8;
        iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);

        if (obj.offsetWidth == iTarget) {
            clearInterval(obj.timer);
        } else {
            obj.style.width = obj.offsetWidth + iSpeed + 'px';
        }
    });
}
