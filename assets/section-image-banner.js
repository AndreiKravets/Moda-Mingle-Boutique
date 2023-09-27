"use strict";function _typeof(t){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,_toPropertyKey(n.key),n)}}function _createClass(t,e,r){return e&&_defineProperties(t.prototype,e),r&&_defineProperties(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t}function _toPropertyKey(t){t=_toPrimitive(t,"string");return"symbol"===_typeof(t)?t:String(t)}function _toPrimitive(t,e){if("object"!==_typeof(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0===r)return("string"===e?String:Number)(t);r=r.call(t,e||"default");if("object"!==_typeof(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&_setPrototypeOf(t,e)}function _createSuper(r){var n=_isNativeReflectConstruct();return function(){var t,e=_getPrototypeOf(r);return _possibleConstructorReturn(this,n?(t=_getPrototypeOf(this).constructor,Reflect.construct(e,arguments,t)):e.apply(this,arguments))}}function _possibleConstructorReturn(t,e){if(e&&("object"===_typeof(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return _assertThisInitialized(t)}function _assertThisInitialized(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function _wrapNativeSuper(t){var r="function"==typeof Map?new Map:void 0;return(_wrapNativeSuper=function(t){if(null===t||!_isNativeFunction(t))return t;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==r){if(r.has(t))return r.get(t);r.set(t,e)}function e(){return _construct(t,arguments,_getPrototypeOf(this).constructor)}return e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),_setPrototypeOf(e,t)})(t)}function _construct(t,e,r){return(_construct=_isNativeReflectConstruct()?Reflect.construct.bind():function(t,e,r){var n=[null];n.push.apply(n,e);e=new(Function.bind.apply(t,n));return r&&_setPrototypeOf(e,r.prototype),e}).apply(null,arguments)}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(t){return!1}}function _isNativeFunction(t){return-1!==Function.toString.call(t).indexOf("[native code]")}function _setPrototypeOf(t,e){return(_setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t})(t,e)}function _getPrototypeOf(t){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}!function n(o,i,u){function c(e,t){if(!i[e]){if(!o[e]){var r="function"==typeof require&&require;if(!t&&r)return r(e,!0);if(s)return s(e,!0);throw(t=new Error("Cannot find module '"+e+"'")).code="MODULE_NOT_FOUND",t}r=i[e]={exports:{}},o[e][0].call(r.exports,function(t){return c(o[e][1][t]||t)},r,r.exports,n,o,i,u)}return i[e].exports}for(var s="function"==typeof require&&require,t=0;t<u.length;t++)c(u[t]);return c}({1:[function(t,e,r){customElements.get("image-banner")||customElements.define("image-banner",function(){_inherits(e,_wrapNativeSuper(HTMLElement));var t=_createSuper(e);function e(){return _classCallCheck(this,e),t.call(this)}return _createClass(e,[{key:"connectedCallback",value:function(){this.speed=this.getAttribute("data-speed"),this.dataDots="true"==this.getAttribute("data-dots"),this.settings={cellAlign:"center",contain:!1,wrapAround:!0,pageDots:this.dataDots,prevNextButtons:!1,percentPosition:!1},"false"!=this.speed&&(this.settings.autoPlay=+this.speed),this.initSlider()}},{key:"initSlider",value:function(){this.slider=new Flickity(this.querySelector(".s-image-banner"),this.settings)}}]),e}())},{}]},{},[1]);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvc2VjdGlvbi1pbWFnZS1iYW5uZXIuanMiLCJzZWN0aW9uLWltYWdlLWJhbm5lci5qcyJdLCJuYW1lcyI6WyJyIiwiZSIsIm4iLCJ0IiwibyIsImkiLCJmIiwiYyIsInJlcXVpcmUiLCJ1IiwiYSIsIkVycm9yIiwiY29kZSIsInAiLCJleHBvcnRzIiwiY2FsbCIsImxlbmd0aCIsIjEiLCJtb2R1bGUiLCJjdXN0b21FbGVtZW50cyIsImdldCIsImRlZmluZSIsIl9pbmhlcml0cyIsIkltYWdlQmFubmVyIiwiX3dyYXBOYXRpdmVTdXBlciIsIkhUTUxFbGVtZW50IiwiX3N1cGVyIiwiX2NyZWF0ZVN1cGVyIiwiX2NsYXNzQ2FsbENoZWNrIiwidGhpcyIsIl9jcmVhdGVDbGFzcyIsImtleSIsInZhbHVlIiwic3BlZWQiLCJnZXRBdHRyaWJ1dGUiLCJkYXRhRG90cyIsInNldHRpbmdzIiwiY2VsbEFsaWduIiwiY29udGFpbiIsIndyYXBBcm91bmQiLCJwYWdlRG90cyIsInByZXZOZXh0QnV0dG9ucyIsInBlcmNlbnRQb3NpdGlvbiIsImF1dG9QbGF5IiwiaW5pdFNsaWRlciIsInNsaWRlciIsIkZsaWNraXR5IiwicXVlcnlTZWxlY3RvciJdLCJtYXBwaW5ncyI6InEzR0FBQSxDQUFBLFNBQUFBLEVBQUFDLEVBQUFDLEVBQUFDLEdBQUEsU0FBQUMsRUFBQUMsRUFBQUMsR0FBQSxHQUFBLENBQUFKLEVBQUFHLEdBQUEsQ0FBQSxHQUFBLENBQUFKLEVBQUFJLEdBQUEsQ0FBQSxJQUFBRSxFQUFBLFlBQUEsT0FBQUMsU0FBQUEsUUFBQSxHQUFBLENBQUFGLEdBQUFDLEVBQUEsT0FBQUEsRUFBQUYsRUFBQSxDQUFBLENBQUEsRUFBQSxHQUFBSSxFQUFBLE9BQUFBLEVBQUFKLEVBQUEsQ0FBQSxDQUFBLEVBQUEsTUFBQUssRUFBQSxJQUFBQyxNQUFBLHVCQUFBTixFQUFBLEdBQUEsR0FBQU8sS0FBQSxtQkFBQUYsQ0FBQSxDQUFBRyxFQUFBWCxFQUFBRyxHQUFBLENBQUFTLFFBQUEsRUFBQSxFQUFBYixFQUFBSSxHQUFBLEdBQUFVLEtBQUFGLEVBQUFDLFFBQUEsU0FBQWQsR0FBQSxPQUFBSSxFQUFBSCxFQUFBSSxHQUFBLEdBQUFMLElBQUFBLENBQUEsQ0FBQSxFQUFBYSxFQUFBQSxFQUFBQyxRQUFBZCxFQUFBQyxFQUFBQyxFQUFBQyxDQUFBLENBQUEsQ0FBQSxPQUFBRCxFQUFBRyxHQUFBUyxPQUFBLENBQUEsSUFBQSxJQUFBTCxFQUFBLFlBQUEsT0FBQUQsU0FBQUEsUUFBQUgsRUFBQSxFQUFBQSxFQUFBRixFQUFBYSxPQUFBWCxDQUFBLEdBQUFELEVBQUFELEVBQUFFLEVBQUEsRUFBQSxPQUFBRCxDQUFBLEVBQUEsQ0FBQWEsRUFBQSxDQUFBLFNBQUFULEVBQUFVLEVBQUFKLEdDQUFLLGVBQUFDLElBQUEsY0FBQSxHQUNBRCxlQUFBRSxPQUFBLGVBQUEsV0FBQUMsVUFBQUMsRUF3QkFDLGlCQXhCQUMsV0FBQSxDQUFBLEVBQUEsSUFBQUMsRUFBQUMsYUFBQUosQ0FBQSxFQUNBLFNBQUFBLElBQUEsT0FBQUssZ0JBQUFDLEtBQUFOLENBQUEsRUFBQUcsRUFBQVgsS0FBQWMsSUFBQSxDQUVBLENBcUJBLE9BckJBQyxhQUFBUCxFQUFBLENBQUEsQ0FBQVEsSUFBQSxvQkFBQUMsTUFFQSxXQUNBSCxLQUFBSSxNQUFBSixLQUFBSyxhQUFBLFlBQUEsRUFDQUwsS0FBQU0sU0FBQSxRQUFBTixLQUFBSyxhQUFBLFdBQUEsRUFFQUwsS0FBQU8sU0FBQSxDQUNBQyxVQUFBLFNBQ0FDLFFBQUEsQ0FBQSxFQUNBQyxXQUFBLENBQUEsRUFDQUMsU0FBQVgsS0FBQU0sU0FDQU0sZ0JBQUEsQ0FBQSxFQUNBQyxnQkFBQSxDQUFBLENBQ0EsRUFDQSxTQUFBYixLQUFBSSxRQUFBSixLQUFBTyxTQUFBTyxTQUFBLENBQUFkLEtBQUFJLE9BRUFKLEtBQUFlLFdBQUEsQ0FDQSxDQUFBLEVBQUEsQ0FBQWIsSUFBQSxhQUFBQyxNQUVBLFdBQ0FILEtBQUFnQixPQUFBLElBQUFDLFNBQUFqQixLQUFBa0IsY0FBQSxpQkFBQSxFQUFBbEIsS0FBQU8sUUFBQSxDQUNBLENBQUEsRUFBQSxFQUFBYixDQUFBLEVBeEJBLENBMEJBLENDR0EsRUFBRSxHQUFHLEVBQUUsR0Y5QlBULENBQUFBLEVBQUFBIiwiZmlsZSI6InNlY3Rpb24taW1hZ2UtYmFubmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsImlmICghY3VzdG9tRWxlbWVudHMuZ2V0KCdpbWFnZS1iYW5uZXInKSkge1xyXG4gIGN1c3RvbUVsZW1lbnRzLmRlZmluZSgnaW1hZ2UtYmFubmVyJywgY2xhc3MgSW1hZ2VCYW5uZXIgZXh0ZW5kcyBIVE1MRWxlbWVudCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgc3VwZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcclxuICAgICAgdGhpcy5zcGVlZCA9ICh0aGlzLmdldEF0dHJpYnV0ZSgnZGF0YS1zcGVlZCcpKVxyXG4gICAgICB0aGlzLmRhdGFEb3RzID0gKHRoaXMuZ2V0QXR0cmlidXRlKCdkYXRhLWRvdHMnKSA9PSAndHJ1ZScgPyB0cnVlIDogZmFsc2UpXHJcblxyXG4gICAgICB0aGlzLnNldHRpbmdzID0ge1xyXG4gICAgICAgIGNlbGxBbGlnbjogJ2NlbnRlcicsXHJcbiAgICAgICAgY29udGFpbjogZmFsc2UsXHJcbiAgICAgICAgd3JhcEFyb3VuZDogdHJ1ZSxcclxuICAgICAgICBwYWdlRG90czogdGhpcy5kYXRhRG90cyxcclxuICAgICAgICBwcmV2TmV4dEJ1dHRvbnM6IGZhbHNlLFxyXG4gICAgICAgIHBlcmNlbnRQb3NpdGlvbjogZmFsc2VcclxuICAgICAgfVxyXG4gICAgICB0aGlzLnNwZWVkID09ICdmYWxzZScgPyBmYWxzZSA6IHRoaXMuc2V0dGluZ3MuYXV0b1BsYXkgPSArdGhpcy5zcGVlZDtcclxuXHJcbiAgICAgIHRoaXMuaW5pdFNsaWRlcigpO1xyXG4gICAgfVxyXG5cclxuICAgIGluaXRTbGlkZXIoKSB7XHJcbiAgICAgIHRoaXMuc2xpZGVyID0gbmV3IEZsaWNraXR5KHRoaXMucXVlcnlTZWxlY3RvcignLnMtaW1hZ2UtYmFubmVyJyksIHRoaXMuc2V0dGluZ3MpO1xyXG4gICAgfVxyXG5cclxuICB9KVxyXG59IiwiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSh7MTpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG5pZiAoIWN1c3RvbUVsZW1lbnRzLmdldCgnaW1hZ2UtYmFubmVyJykpIHtcclxuICBjdXN0b21FbGVtZW50cy5kZWZpbmUoJ2ltYWdlLWJhbm5lcicsIGNsYXNzIEltYWdlQmFubmVyIGV4dGVuZHMgSFRNTEVsZW1lbnQge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgIHN1cGVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XHJcbiAgICAgIHRoaXMuc3BlZWQgPSAodGhpcy5nZXRBdHRyaWJ1dGUoJ2RhdGEtc3BlZWQnKSlcclxuICAgICAgdGhpcy5kYXRhRG90cyA9ICh0aGlzLmdldEF0dHJpYnV0ZSgnZGF0YS1kb3RzJykgPT0gJ3RydWUnID8gdHJ1ZSA6IGZhbHNlKVxyXG5cclxuICAgICAgdGhpcy5zZXR0aW5ncyA9IHtcclxuICAgICAgICBjZWxsQWxpZ246ICdjZW50ZXInLFxyXG4gICAgICAgIGNvbnRhaW46IGZhbHNlLFxyXG4gICAgICAgIHdyYXBBcm91bmQ6IHRydWUsXHJcbiAgICAgICAgcGFnZURvdHM6IHRoaXMuZGF0YURvdHMsXHJcbiAgICAgICAgcHJldk5leHRCdXR0b25zOiBmYWxzZSxcclxuICAgICAgICBwZXJjZW50UG9zaXRpb246IGZhbHNlXHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5zcGVlZCA9PSAnZmFsc2UnID8gZmFsc2UgOiB0aGlzLnNldHRpbmdzLmF1dG9QbGF5ID0gK3RoaXMuc3BlZWQ7XHJcblxyXG4gICAgICB0aGlzLmluaXRTbGlkZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICBpbml0U2xpZGVyKCkge1xyXG4gICAgICB0aGlzLnNsaWRlciA9IG5ldyBGbGlja2l0eSh0aGlzLnF1ZXJ5U2VsZWN0b3IoJy5zLWltYWdlLWJhbm5lcicpLCB0aGlzLnNldHRpbmdzKTtcclxuICAgIH1cclxuXHJcbiAgfSlcclxufVxufSx7fV19LHt9LFsxXSlcblxuIl19
