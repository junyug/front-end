(function (window,undefined) {
  'use strict'
  var Drag = {
    ele: document.getElementById('drag'),
    disX: 0,
    disY: 0,
    fnDown: function (event) {
      var self = Drag;
      event = event || window.event;
      self.disX = event.clientX - this.offsetLeft;
      self.disY = event.clientY - this.offsetTop;
      EventUtil.addEventListener(document,'mousemove',self.fnMove);
      EventUtil.addEventListener(document,'mouseup', self.fnUp);
    },
    fnMove: function (event) {
      var self = Drag;
      event = event || window.event;
      var left = event.clientX - self.disX,
          top = event.clientY - self.disY,
          winW = document.documentElement.clientWidth || document.body.clientWidth,
          winH = document.documentElement.clientHeight || document.body.clientHeight,
          maxW = winW - self.ele.offsetWidth,
          maxH = winH - self.ele.offsetHeight;
      left = left < 0 ? 0 : left;
      left = left > maxW ? maxW : left;
      top = top < 0 ? 0 : top;
      top = top > maxH ? maxH : top;
      self.ele.style.left = left + 'px';
      self.ele.style.top = top + 'px'; 
    },
    fnUp: function () {
      var self = Drag;
      EventUtil.removeEventListener(document,'mousemove', self.fnMove);
      EventUtil.removeEventListener(document,'mouseup', self.fnUp);
    }
  };
  window.onload = function () {
    EventUtil.addEventListener(Drag.ele,'mousedown',Drag.fnDown);
  };
})(window)