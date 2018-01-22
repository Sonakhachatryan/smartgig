// AOS.init();

$(document).ready(function() {
  window.kontext = function(container) {

    // Dispatched when the current layer changes
    var changed = new kontext.Signal();

    // All layers in this instance of kontext
    var layers = Array.prototype.slice.call(container.querySelectorAll('.layer'));

    // Flag if the browser is capable of handling our fancy transition
    var capable = 'WebkitPerspective' in document.body.style ||
      'MozPerspective' in document.body.style ||
      'msPerspective' in document.body.style ||
      'OPerspective' in document.body.style ||
      'perspective' in document.body.style;
    if(capable) {
      container.classList.add('capable');
    }
    // Create dimmer elements to fade out preceding slides
    layers.forEach(function(el, i) {
      if(!el.querySelector('.dimmer')) el.innerHTML += '<div class="dimmer"></div>';
    });

    /**
     * Transitions to and shows the target layer.
     *
     * @param target index of layer or layer DOM element
     */
    function show(target, direction) {

      // Make sure our listing of available layers is up to date
      layers = Array.prototype.slice.call(container.querySelectorAll('.layer'));

      // Flag to CSS that we're ready to animate transitions
      container.classList.add('animate');

      // Flag which direction
      direction = direction || (target > getIndex() ? 'right' : 'left');

      // Accept multiple types of targets
      if(typeof target === 'string') target = parseInt(target);
      if(typeof target !== 'number') target = getIndex(target);

      // Enforce index bounds
      target = Math.max(Math.min(target, layers.length), 0);

      // Only navigate if were able to locate the target
      if(layers[target] && !layers[target].classList.contains('show')) {
        layers.forEach(function(el, i) {
          el.classList.remove('left', 'right');
          el.classList.add(direction);
          if(el.classList.contains('show')) {
            el.classList.remove('show');
            el.classList.add('hide');
          }
          else {
            el.classList.remove('hide');
          }
        });
        layers[target].classList.add('show');
        changed.dispatch(layers[target], target);
      }
    }

    /**
     * Shows the previous layer.
     */
    function prev() {
      var index = getIndex() - 1;
      show(index >= 0 ? index : layers.length + index, 'left');
    }

    /**
     * Shows the next layer.
     */
    function next() {
      show((getIndex() + 1) % layers.length, 'right');
    }

    /**
     * Retrieves the index of the current slide.
     *
     * @param of [optional] layer DOM element which index is
     * to be returned
     */
    function getIndex(of) {
      var index = 0;
      layers.forEach(function(layer, i) {
        if((of && of == layer) || (!of && layer.classList.contains('show'))) {
          index = i;
          return;
        }
      });
      return index;
    }

    /**
     * Retrieves the total number of layers.
     */
    function getTotal() {
      return layers.length;
    }

    // API
    return {
      show: show,
      prev: prev,
      next: next,
      getIndex: getIndex,
      getTotal: getTotal,
      changed: changed
    };
  };
  /**
   * Minimal utility for dispatching signals (events).
   */
  kontext.Signal = function() {
    this.listeners = [];
  };
  kontext.Signal.prototype.add = function(callback) {
    this.listeners.push(callback);
  };
  kontext.Signal.prototype.remove = function(callback) {
    var i = this.listeners.indexOf(callback);

    if(i >= 0) this.listeners.splice(i, 1);
  };
  kontext.Signal.prototype.dispatch = function() {
    var args = Array.prototype.slice.call(arguments);
    this.listeners.forEach(function(f, i) {
      f.apply(null, args);
    });
  };


  //disable all past dates
  $(function() {
    var dtToday = new Date();

    var month = dtToday.getMonth() + 1;
    var day = dtToday.getDate();
    var year = dtToday.getFullYear();

    if(month < 10)
      month = '0' + month.toString();
    if(day < 10)
      day = '0' + day.toString();

    var maxDate = year + '-' + month + '-' + day;
    $('input[type="date"]').attr('min', maxDate);
  });

  //close modal
  $('.close-modal').on('click', function() {
    $(this).closest('.dialog-modal').hide(200);
  });

  $('.nav-item').on('click', function(e) {
    if($('.main-modal .confirm').length && !$(this).hasClass('contact_us')) {
      e.preventDefault();
      var url = $(this).find('a').attr('href');
      $('.main-modal .confirm').attr('data-page', url);
      $('.main-modal').show(200);
    }
  });

  $('.confirm').on('click', function() {
    var url = $(this).data('page');
    document.location.href = url;
  });

  $('.contact-submit').on('click',function() {
    var name = $('.input-name').val();
    if(!name){
      $('.input-name').closest('div').find('p').removeClass('hidden');
    }

    var email = $('.input-email').val();
    if(!email){
      $('.input-email').closest('div').find('p').removeClass('hidden');
    }

    if(email && name){
      document.location.href = 'thank_you.html';
    }
  });
});


//counter slider js


var countSlider = simpleslider.getSlider({
  container: document.getElementById('countSlider'),
  prop: 'top',
  init: -612,
  show: 0,
  end: 1,
  unit: 'px',
  delay: 0.5,
  paused: true
});

function slideCounter(number) {
  var currentIndex = countSlider.currentIndex();
  var selector;
  var index = 0;
  if(currentIndex == 0) {
    index = 1;
    selector = 'span[data-index="2"]';
    $('span[data-index="2"]').css({"color": "#fff"});
    $(selector).html(number);
    countSlider.change(index);
    $('span[data-index="1"]').css({"color": "#171a1d"});
  } else {
    selector = 'span[data-index="1"]';
    $('span[data-index="1"]').css({"color": "#fff"});
    $(selector).html(number);
    countSlider.change(index);
    $('span[data-index="2"]').css({"color": "#171a1d"});
  }

}

function changeCounter(number) {
  slideCounter(number);
}

function budgetChanges(number, e, selected, index) {
  var selector = 'input[data-number="' + number + '"]';
  var value = $(selector).val();
  if(value > 999) {
    if(e.keyCode !== 8 && e.keyCode !== 46) {
      e.preventDefault();
    }
  }

  /*selector = 'p[data-number="' + number +'"]';
  if(value>999){
    if(e.keyCode !== 8 && e.keyCode !== 46){
      e.preventDefault();
    }
    $(selector).removeClass('hidden');
    $(selector).html(selected[index].validation.limit);
  }else{
    $(selector).addClass('hidden');
  }*/
}

function moodChanges(number, e, selected, index) {
  var selector = 'input[data-number="' + number + '"]';
  var value = $(selector).val();
  selector = 'span[data-number="' + number + '"]';
  $(selector).html(value.length);
  if(value.length > 49) {
    if(e.keyCode !== 8 && e.keyCode !== 46) {
      e.preventDefault();
    }
  }
}

function textareaChanges(number,e,selected,index) {
  var selector = 'textarea[data-number="' + number +'"]';
  var len = $(selector).val().length;
  selector = 'span[data-number="' + number +'"]';
  $(selector).html(len);

  // selector = 'p[data-number="' + number +'"]';
  if(len>2499){
    if(e.keyCode !== 8 && e.keyCode !== 46){
      e.preventDefault();
    }
  }
  /* if(len>2499){
       if(e.keyCode !== 8 && e.keyCode !== 46){
           e.preventDefault();
       }
       $(selector).removeClass('hidden');
       $(selector).html(selected[2].validation.limit);
   }else{
       $(selector).addClass('hidden');
   }*/
}


