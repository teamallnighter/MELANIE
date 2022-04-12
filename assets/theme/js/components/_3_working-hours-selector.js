// File#: _3_working-hours-selector
// Usage: codyhouse.co/license
(function() {
  var Whs = function(element) {
    this.element = element;
    this.checkClass = 'js-whs__check';
    this.itemClass = 'js-whs__item';
    this.intElementClass = 'js-whs__int-element';
    this.checks = this.element.getElementsByClassName(this.checkClass);
    initWhs(this);
  };

  function initWhs(el) {
    setStatus(el);

    // listen to switch change event
    el.element.addEventListener('change', function(event) {
      var input = event.target.closest('.'+el.checkClass);
      setDayStatus(el, input);
    });

    // listen to click on day -> check/uncheck input
    el.element.addEventListener('click', function(event){
      var dayItem = event.target.closest('.'+el.itemClass);
      if(!dayItem) return;
      if(event.target.closest('.'+el.intElementClass)) return;
      var input = dayItem.getElementsByClassName(el.checkClass);
      if(input.length < 1) return;
      input[0].checked = !input[0].checked;
      setDayStatus(el, input[0]);
    });
  };

  function setStatus(el) {
    for(var i = 0; i < el.checks.length; i++) {
      setDayStatus(el, el.checks[i]);
    }
  };

  function setDayStatus(el, input) {
    // toggle the --on class when the switch status changes
    if(!input) return;
    var checkWrapper = input.closest('.'+el.itemClass);
    if(checkWrapper) Util.toggleClass(checkWrapper, 'whs__item--checked', input.checked);
  };

  window.Whs = Whs;

  var whs = document.getElementsByClassName('js-whs');
  if(whs.length > 0) {
    for( var i = 0; i < whs.length; i++) {
			(function(i){new Whs(whs[i]);})(i);
		}
  }
}());