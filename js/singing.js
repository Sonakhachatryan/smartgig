$(document).ready(function() {

    // Create a new instance of kontext
    var k = kontext(document.querySelector('.kontext'));
    // Demo page JS
    var bulletsContainer = document.body.querySelector('.bullets');
    var privateUse = [
        {
            "index": 0,
            "number": 0,
            "validation": {
                "required": "Please fill this field."
            },
            "value": null
        },
        {
            "index": 1,
            "number": 1,

            "validation": {
                "required": "Please fill this field.",
                "limit" :"Max allowed characters lehgth is 2500.",
            },
            "value": null
        },
        {
            "index": 2,
            "number": 2,
            "validation": {
                "required": "Please select the genre."
            },
            "value": null
        },
        {
            "index": 3,
            "number": 3,
            "validation": {
                "required": "Please select voice type."
            },
            "value": null
        },
        {
            "index": 4,
            "number": 4,
            "validation": {
                "required": "Please upload the file.",
                "fileFormat" :"Please upload correct file.Supported formats are mp3."
            },
            "value": null
        },
        {
            "index": 5,
            "number": 5,
            "validation": {
                "required" :"Please select the mood.",
            },
            "value": null
        },
        {
            "index": 6,
            "number": 6,
            "validation": {
                "required": "Please select the date."
            },
            "value": null
        },
        {
            "index": 7,
            "number": 7,
            "validation": {
                "required": "Please fill this field.",
                "limit": "Number must be less then 9999 and greater then 0"
            },
            "value": null
        }

    ];
    var commercialUse = [
        {
            "index": 0,
            "number": 0,
            "validation": {
                "required": "Please fill this field."
            },
            "value": null
        },
        {
            "index": 8,
            "number": 1,
            "validation": {
                "required": "Please fill this field.",
                "limit" :"Max allowed characters lehgth is 2500.",
            },
            "value": null
        },
        {
            "index": 9,
            "number": 2,
            "validation": {
                "required": "Please select the genre."
            },
            "value": null
        },
        {
            "index": 10,
            "number": 3,
            "validation": {
                "required": " Please select voice type."
            },
            "value": null
        },
        {
            "index": 11,
            "number": 4,
            "validation": {
                "required": "Please upload the file.",
                "fileFormat" :"Please upload correct file.Supported formats are mp3."
            },
            "value": null
        },
        {
            "index": 12,
            "number": 5,
            "validation": {
                "required" :"Please select the mood.",
            },
            "value": null
        },
        {
            "index": 13,
            "number": 6,
            "validation": {
                "required": "Please select the date."
            },
            "value": null
        },
        {
            "index": 14,
            "number": 7,
            "validation": {
                "required": "Please fill this field.",
                "limit": "Number must be less then 9999 and greater then 0"
            },
            "value": null
        }
    ];
    var selected = privateUse;
    var genreArray = [
        {
            "id": 1,
            "src": "images/singing/genre/soul/soul.jpg",
            "name": "Soul"
        },
        {
            "id": 2,
            "src": "images/singing/genre/blues/music-blues-01.jpg",
            "name": "Blues"
        },
        {
            "id": 3,
            "src": "images/singing/genre/classic/classic2.jpeg",
            "name": "Classic"
        },
        {
            "id": 4,
            "src": "images/singing/genre/funk/soulsounds-funk-music.jpg",
            "name": "Funk"
        },
        {
            "id": 5,
            "src": "images/singing/genre/disco/disco2.jpg",
            "name": "Disco"
        },
        {
            "id": 6,
            "src": "images/singing/genre/electro/electronic.jpg",
            "name": "Electro"
        },
        {
            "id": 7,
            "src": "images/singing/genre/disco/disco3.jpeg",
            "name": "Disco"
        },
        {
            "id": 8,
            "src": "images/singing/genre/pop/music-ppcorn-vinyl.jpg",
            "name": "Pop"
        },
        {
            "id": 9,
            "src": "images/singing/singer.jpg",
            "name": "Hindi"
        },
        {
            "id": 10,
            "src": "images/singing/genre/punk/punk1.jpg",
            "name": "Punk"
        },
        {
            "id": 11,
            "src": "images/singing/genre/rock/rock-man.jpeg",
            "name": "Rock"
        },
        {
            "id": 12,
            "src": "images/singing/genre/schalger/schalger.jpg",
            "name": "Schalger"
        },
        {
            "id": 13,
            "src": "images/singing/genre/pop/pop-music.jpg",
            "name": "Ambiente"
        },
        {
            "id": 14,
            "src": "images/singing/genre/soul/soul-music.jpg",
            "name": "Soul"
        }
    ];
    var fileExtension = ['mp3','txt','doc','docx','MIDI','mp4'];
    var inReview = false;

    for(var i = 0, len = selected.length; i < len; i++) {
        var bullet = document.createElement('li');
        bullet.className = i === 0 ? 'active' : '';
        bullet.setAttribute('index', selected[i].index);
        bullet.onclick = function(event) {
            debugger;
            if(canNavigate(event.target.getAttribute('index'))) {
                var navigateTo = selected[event.target.getAttribute('index')];
                k.show(navigateTo.index);
                changeCounter(navigateTo.number + 1);
            }
        };
        bullet.ontouchstart = function(event) { k.show(event.target.getAttribute('index')) };
        bulletsContainer.appendChild(bullet);
    }
    // Update the bullets when the layer changes
    k.changed.add(function(layer, index) {
        var bullets = document.body.querySelectorAll('.bullets li');
        for(var i = 0, len = bullets.length; i < len; i++) {
            bullets[i].className = i === index ? 'active' : '';
        }
    });

    $('button').on('click', function(event) {
        if($(this).data('slide-to') || $(this).data('slide-to') == 0) {
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
                    selected = privateUse;
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
                    if(!selected[2].value) {
                        element = null;
                        isValid = false;
                        error = selected[2].validation.required;
                    } else {
                        number = 3;
                    }
                    break;
                case 4:
                    element =  $('select[data-number="3"]');
                    if(element.val() != '') {
                        selected[3].value = element.val();
                        number = 4;
                    } else {
                        isValid = false;
                        error = selected[3].validation.required;
                    }
                    break;
                case 5:
                    element = $('input[data-number="4"]').closest('.upload-file-button').find('label');
                    if(selected[4].value) {
                        var extension = selected[4].value.split('.');
                        extension = extension[extension.length-1];
                        if(fileExtension.indexOf(extension) == -1) {
                            isValid = false;
                            error = selected[4].validation.fileFormat;
                        }else{
                            number = 5;
                        }
                    } else {
                        number = 5;
                    }
                    break;
                case 6:
                    element = $('select[data-number="5"]');
                    if(element.val() == '' ) {
                        isValid = false;
                        error = selected[5].validation.required;
                    } else {
                        selected[5].value = element.val();
                        number = 6;
                    }
                    break;
                case 7:
                    element = $('input[data-number="6"]');
                    if(element.val() == '') {
                        isValid = false;
                        error = selected[6].validation.required;
                    } else {
                        selected[6].value = element.val();
                        number = 7;
                    }
                    break;
                case 8:
                    selected = commercialUse;
                    selected[0].value = 'commercial';
                    number = 1;
                    break;
                case 9:
                    element = $('textarea[data-number="8"]');
                    if(element.val() != '') {
                        selected[1].value = element.val();
                        number = 2;
                    } else {
                        isValid = false;
                        error = selected[1].validation.required;
                    }
                    break;
                case 10:
                    if(!selected[2].value) {
                        element = null;
                        isValid = false;
                        error = selected[2].validation.required;
                    } else {
                        number = 3;
                    }
                    break;
                case 11:
                    element =  $('select[data-number="10"]');
                    if(element.val() != '') {
                        selected[3].value = element.val();
                        number = 4;
                    } else {
                        isValid = false;
                        error = selected[3].validation.required;
                    }
                    break;
                case 12:
                    element = $('input[data-number="11"]').closest('.upload-file-button').find('label');
                    if(selected[4].value) {
                        var extension = selected[4].value.split('.');
                        extension = extension[extension.length-1];
                        if(fileExtension.indexOf(extension) == -1) {
                            isValid = false;
                            error = selected[4].validation.fileFormat;
                        }else{
                            number = 5;
                        }
                    } else {
                        number = 5;
                    }
                    break;
                case 13:
                    element = $('select[data-number="12"]');
                    if(element.val() == '') {
                        isValid = false;
                        error = selected[5].validation.required;
                    } else {
                        selected[5].value = element.val();
                        number = 6;
                    }
                    break;
                case 14:
                    element = $('input[data-number="13"]');
                    if(element.val() == '') {
                        isValid = false;
                        error = selected[6].validation.required;
                    } else {
                        selected[6].value = element.val();
                        number = 7;
                    }
                    break;
                case 15:
                    if($(this).data('slide-number') == 7) {
                        element = $('input[data-number="7"]');
                    } else {
                        element = $('input[data-number="14"]');
                    }
                    if(element.val() != '') {
                        if(element.val() < 0 || element.val() > 9999) {
                            isValid = false;
                            error = selected[7].validation.limit;
                        }
                        selected[7].value = element.val();
                    } else {
                        isValid = false;
                        error = selected[7].validation.required;
                    }
                    break;
            }
            if(isValid) {
                if(element) {
                    element.removeClass('error');
                }

                var selector = 'p[data-number="' + $(this).data('slide-number') + '"]'
                $(selector).addClass('hidden');

                if($(this).data('slide-to') == 15) {
                    setData(selected);
                    $('.bullets').hide();
                    function canNavigate(index) {
                        var slide = selected[+index].value;
                        var slidePrev= '';
                        if(selected[+index - 1 ]) {
                            slidePrev = selected[+index - 1].value;
                        }
                        if( slide || slidePrev)
                            return true;
                        return false;
                    }     $('.nav-counter').hide();
                    inReview = true;
                }
                //                slide($(this));
                k.show(event.target.getAttribute('index'));
                var bullets = document.body.querySelectorAll('.bullets li');
                for(var i = 0, len = bullets.length; i < len; i++) {
                    bullets[i].className = (i == number ? 'active' : '');
                }
                changeCounter(number + 1);
            } else {
                if(element) {
                    element.addClass('error');
                }
                var selector = 'p[data-number="' + $(this).data('slide-number') + '"]';
                $(selector).html(error);
                $(selector).removeClass('hidden');
            }
        }
    });

    function setData(data) {
        var selector = '';
        if(data[0].value == 'private') {
            $('#elem_0_p').prop('checked', true);
        } else {
            $('#elem_0_c').prop('checked', true);
        }
        for(var i = 1; i < data.length; i++) {
            selector = '#elem_' + data[i].number;
            var element = $(selector);
            if(data[i].number == 2) {
                element.find('img').attr('src', data[i].value.image);
                element.find('h3').text(data[i].value.name);
            }else if(data[i].number == 4) {
                element.find('label').text(data[i].value)
            } else {
                element.val(data[i].value);
            }
        }
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

    $('input[type="file"]').on('change', function() {
        var value = $(this).val().split('\\').pop();
        var extension = value.split('.');
        extension = extension[extension.length-1];
        var label = $(this).closest('.upload-file-button').find('label');
        label.text(value);
        selected[4].value = value;
        if(fileExtension.indexOf(extension) == -1){
            label.addClass('error');
            var selector = 'p[data-number="' + $(this).data('number') + '"]';
            $(selector).html(selected[4].validation.fileFormat);
            $(selector).removeClass('hidden');
        }else{
            $(this).removeClass('error');
            var selector = 'p[data-number="' + $(this).data('number') + '"]';
            $(selector).html('');
            $(selector).addClass('hidden');
        }
    });

    //open genre modal
    $(".genre-choose").click(function() {
        $('#genre-filter').val('');
        drowGenreContent(genreArray);
        $(".genre-modal").show(200);
    });

    //drow genre modal content
    function drowGenreContent(genres) {
        var content = '<div class="row">';
        var needClose = true;
        for(var i = 0; i < genres.length; i++) {
            content += ' <div class="col-md-3 col-sm-6  col-xs-6 groups-of-genre">' +
                '<div class="instrument-image">' +
                '<img src="' + genres[i].src + '" alt="">' +
                '<div class="instruments-name">' +
                '<h3>' + genres[i].name + '</h3>\n' +
                '</div>' +
                '</div>' +
                '</div>';

            if(i % 4 == 3) {
                content += "</div>";
                needClose = false;

                if(i != genres.length - 1) {
                    content += '<div class="row">';
                    needClose = true;
                }
            }
        }

        if(needClose) {
            content += "</div>";
        }

        $('#genre-content').html(content);
    }

    //handle genre filter change
    $('#genre-filter').on('keydown', function() {
        var filteredArray = [];
        var value = $(this).val().toLowerCase();
        if(value != '') {
            filteredArray = genreArray.filter(function(t) {
                return t.name.toLowerCase().indexOf(value) == -1 ? false : true;
            }, value);
            console.log(filteredArray);
            drowGenreContent(filteredArray);
        } else {
            drowGenreContent(genreArray)
        }
    });

    //handle genre filter change
    $('#genre-filter').on('keyup', function() {
        var filteredArray = [];
        var value = $(this).val().toLowerCase();
        if(value != '') {
            filteredArray = genreArray.filter(function(t) {
                return t.name.toLowerCase().indexOf(value) == -1 ? false : true;
            }, value);
            console.log(filteredArray);
            drowGenreContent(filteredArray);
        } else {
            drowGenreContent(genreArray)
        }
    });

    //handle genre choose event
    $(document).on('click', '.instrument-image', function() {
        debugger;
        selected[2].value = {
            "name": $(this).find('h3').html(),
            "image": $(this).find('img').attr('src')
        };

        if(selected[0].value == 'private') {
            $('.singing_genre').find('img').attr('src', selected[2].value.image);
            $('.singing_genre').find('h3').html(selected[2].value.name);
            $('button[data-slide-to="3"]').removeClass('hidden');
        } else {
            $('.singing_use_genre').find('img').attr('src', selected[2].value.image);
            $('.singing_use_genre').find('h3').html(selected[2].value.name);
            $('button[data-slide-to="10"]').removeClass('hidden');
        }

        $(".genre-modal").hide(200);
    });


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
        var budgetNumbers = [7,14,27];
        var moodNumbers = [5,12,25];

        if(budgetNumbers.indexOf(number) > -1){
            budgetChanges(number,e,selected,7);
        }

        if(moodNumbers.indexOf(number) > -1){
            moodChanges(number,e,selected,5);
        }

    });

    $('input').on('keydown',function(e){
        var number = $(this).data('number');
        var budgetNumbers = [7,14,27];
        var moodNumbers = [5,12,25];

        if(budgetNumbers.indexOf(number) > -1){
            budgetChanges(number,e,selected,7);
        }

        if(moodNumbers.indexOf(number) > -1){
            moodChanges(number,e,selected,5);
        }
    });


    $("#modal-open").on('click',function() {
        $('.input-name').closest('div').find('p').addClass('hidden');
        $('.input-email').closest('div').find('p').addClass('hidden');
        $(".contact-modal").show(200);
    });

});