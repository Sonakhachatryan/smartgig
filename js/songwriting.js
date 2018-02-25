$(document).ready(function () {

    // Create a new instance of kontext
    var k = kontext( document.querySelector( '.kontext' ) );
    var bulletsContainer = document.body.querySelector( '.bullets' );
    var privateUse = [
        {
            "index" : 0,
            "number" : 0,
            "validation" : {
                "required" :"Please fill this field.",
            },
            "value" : null,
        },
        {
            "index" : 1,
            "number" : 1,

            "validation" : {
                "required" :"Please fill this field.",
                "limit" :"Max allowed characters lehgth is 2500.",
            },
            "value" : null,
        },
        {
            "index" : 2,
            "number" : 2,
            "validation" : {
                "required" :"Please select the date.",
            },
            "value" : null,
        },
        {
            "index" : 3,
            "number" : 3,
            "validation" : {
                "required" :"Please fill this field.",
                "limit" : "Number must be less then 9999 and greater then 0",
            },
            "value" : null,
        },

    ];
    var commercialUse = [
        {
            "index" : 0,
            "number" : 0,
            "validation" : {
                "required" :"Please fill this field.",
            },
            "value" : null,
        },
        {
            "index" : 4,
            "number" : 1,
            "validation" : {
                "required" :"Please fill this field.",
                "limit" :"Max allowed characters lehgth is 2500.",
            },
            "value" : null,
        },
        {
            "index" : 5,
            "number" : 2,
            "validation" : {
                "required" :"Please fill this field.",
            },
            "value" : null,
        },
        {
            "index" : 6,
            "number" : 3,
            "validation" : {
                "required" :"Please fill this field.",
                "limit" : "Number must be less then 9999 and greater then 0",
            },
            "value" : null,
        },
    ];
    var selected = privateUse;
    var inReview = false;
    var slideNumber = 0;

    for( var i = 0, len = selected.length; i < len; i++ ) {
        var bullet = document.createElement( 'li' );
        bullet.className = i === 0 ? 'active' : '';
        bullet.setAttribute( 'index', selected[i].index);
        bullet.onclick = function( event ) {
            if(canNavigate(event.target.getAttribute( 'index' )),selected) {
                var navigateTo = selected[event.target.getAttribute('index')];
                k.show(navigateTo.index);
                changeCounter(navigateTo.number + 1);
            }
        };
        bullet.ontouchstart = function( event ) { k.show( event.target.getAttribute( 'index' ) ) };
        bulletsContainer.appendChild( bullet );
    }
    // Update the bullets when the layer changes
    k.changed.add( function( layer, index ) {
        var bullets = document.body.querySelectorAll( '.bullets li' );
        for( var i = 0, len = bullets.length; i < len; i++ ) {
            bullets[i].className = i === index ? 'active' : '';
        }
    } );

    $('button').on('click', function (event) {
        if($(this).data('slide-to') || $(this).data('slide-to') == 0) {
            debugger;
            var isValid = true;
            var element = '';
            var number = 0;
            var error = "";
            //validate input before going next page
            switch($(this).data('slide-to')) {
                case 0:
                    number = 0;
                    break;
                case 1:
                    selected[0].value = 'private';
                    number = 1;
                    break;
                case 2:
                    element = $('textarea[data-number="1"]');
                    if(element.val() != '') {
                        selected[1].value = element.val();
                        number = 2;
                    } else {
                        isValid = false;
                        error = selected[1].validation.required;
                    }
                    break;
                case 3:
                    element = $('input[data-number="2"]');
                    if(element.val() != '') {
                        selected[2].value = element.val();
                        number = 3;
                    } else {
                        isValid = false;
                        error = selected[2].validation.required;
                    }
                    break;
                case 4:
                    selected = commercialUse;
                    selected[0].value = 'commercial';
                    number = 1;
                    break;
                case 5:
                    element = $('textarea[data-number="4"]');
                    if(element.val() != '') {
                        selected[1].value = element.val();
                        number = 2;
                    } else {
                        isValid = false;
                        error = selected[1].validation.required;
                    }
                    break;
                case 6:
                    element = $('input[data-number="5"]');
                    if(element.val() != '') {
                        selected[2].value = element.val();
                        number = 3;
                    } else {
                        isValid = false;
                        error = selected[2].validation.required;
                    }
                    break;
                case 7:
                    if($(this).data('slide-number') == 3) {
                        element = $('input[data-number="3"]');
                    } else {
                        element = $('input[data-number="6"]');
                    }
                    if(element.val() != '') {
                        if(element.val() < 0 || element.val() > 9999) {
                            isValid = false;
                            error = selected[3].validation.limit;
                        }
                        selected[3].value = element.val();
                    } else {
                        isValid = false;
                        error = selected[3].validation.required;
                    }
                    break;
            }
            if(isValid) {
                slideNumber = number;
                if(element) {
                    element.removeClass('error');
                    var selector = 'p[data-number="' + $(this).data('slide-number') + '"]'
                    $(selector).addClass('hidden');
                }

                if($(this).data('slide-to') == 7) {
                    setData(selected);
                    $('.bullets').hide();
                    $('.nav-counter').hide();
                    inReview = true;
                }
                k.show(event.target.getAttribute('index'));
                var bullets = document.body.querySelectorAll('.bullets li');
                for(var i = 0, len = bullets.length; i < len; i++) {
                    bullets[i].className = (i == number ? 'active' : '');
                }
                changeCounter(number + 1);
            } else {
                element.addClass('error');
                var selector = 'p[data-number="' + $(this).data('slide-number') + '"]';
                $(selector).html(error);
                $(selector).removeClass('hidden');
            }
        }
    });

    function setData(data) {
        var selector = '';
        if(selected[0].value == 'private'){
            $('#elem_0_p').prop('checked',true);
        }else{
            $('#elem_0_c').prop('checked',true);
        }
        $(selector).addClass('active');
        for(var i=1;i<selected.length;i++){
            selector = '#elem_' + selected[i].number;
            var element = $(selector);
            element.val(data[i].value);
        }

        selector = 'span[data-number="10"]';
        $(selector).html(selected[1].value.length);
    }

    function canNavigate(index) {
        var slide = selected[+index].value;
        var slidePrev= '';
        if(selected[+index - 1 ]) {
            slidePrev = selected[+index - 1].value;
        }
        if( slide || slidePrev)
            return true;
        return false;
    }

    $('textarea').on('keyup',function(e){
        var number = $(this).data('number');
        textareaChanges(number,e,selected,1);
    });

    $('textarea').on('keydown',function(e){
        var number = $(this).data('number');
        textareaChanges(number,e,selected,1);
    });

    //prevent budget filed input
    $('input').on('keyup',function(e){
        var number = $(this).data('number');
        var budgetNumbers = [3,6,13];
        if(budgetNumbers.indexOf(number) > -1){
            budgetChanges(number,e,selected,3);
        }

    });

    $('input').on('keydown',function(e){
        var number = $(this).data('number');
        var budgetNumbers = [3,6,13];
        if(budgetNumbers.indexOf(number) > -1){
            budgetChanges(number,e,selected,3);
        }
    });

    $("#modal-open").on('click',function() {
        $('.input-name').closest('div').find('p').addClass('hidden');
        $('.input-email').closest('div').find('p').addClass('hidden');
        $(".contact-modal").show(200);
    });
});