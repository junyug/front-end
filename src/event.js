(function (window) {
  'use strict'
  var EventUtil = {
    addEventListener: function (ele, type, handler) {
      if (ele.addEventListener) {
        ele.addEventListener(type, handler, false);
      } else {
        ele.attachEvent('on' + type, handler);
      }
    },
    removeEventListener: function (ele, type, handler) {
      if (ele.removeEventListener) {
        ele.removeEventListener(type, handler, false);
      } else {
        ele.detachEvent('on' + type, handler);
      }
    },
    getEvent: function (event) {
      return event || window.event;
    },
    getTarget: function (event) {
      event = event || window.event;
      return event.target || event.srcElement;
    },
    preventDefault: function (event) {
      event = event || window.event;
      if (event.preventDefault) {
        event.preventDefault();
      } else {
        event.returnValue = false;
      }
    },
    stopPropagation: function (event) {
      var event = event || window.event;
      if (event.stopPropagation) {
        event.stopPropagation();
      } else {
        event.cancelBubble = true;
      }
    }
  };
  window.EventUtil = EventUtil;
})(window);
