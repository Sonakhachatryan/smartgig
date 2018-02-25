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
                "required": "Please choose an instrument.",
                "limit": "Please select 1-5 instruments."
            },
            "value": null
        },
        {
            "index": 2,
            "number": 2,
            "validation": {
                "required": "Please fill this field.",
                "limit" :"Max allowed characters length is 2500.",
            },
            "value": null
        },
        {
            "index": 3,
            "number": 3,
            "validation": {
                "required": "Please select the genre."
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
                "required": "Please select the date."
            },
            "value": null
        },
        {
            "index": 6,
            "number": 6,
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
            "index": 7,
            "number": 1,

            "validation": {
                "required": "Please choose an instrument.",
                "limit": "Please select 1-5 instruments."
            },
            "value": null
        },
        {
            "index": 8,
            "number": 2,
            "validation": {
                "required": "Please fill this field.",
                "limit" :"Max allowed characters length is 2500.",
            },
            "value": null
        },
        {
            "index": 9,
            "number": 3,
            "validation": {
                "required": "Please select the genre."
            },
            "value": null
        },
        {
            "index": 10,
            "number": 4,
            "validation": {
                "required": "Please upload the file.",
                "fileFormat" :"Please upload correct file.Supported formats are mp3."
            },
            "value": null
        },
        {
            "index": 11,
            "number": 5,
            "validation": {
                "required": "Please select the date."
            },
            "value": null
        },
        {
            "index": 12,
            "number": 6,
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
    var instrumentsArray = [
        {
            "id": 1,
            "src": "images/instrumentals/genre/accordeon/accordion-musical-instrument.jpeg",
            "name": "Accordeon"
        },
        {
            "id": 2,
            "src": "images/instrumentals/genre/bugle/bugle.jpg",
            "name": "Bugle"
        },
        {
            "id": 3,
            "src": "images/instrumentals/genre/clarinet/maxresdefault.jpg",
            "name": "Clarinet"
        },
        {
            "id": 4,
            "src": "images/instrumentals/genre/digeridoo/Collection-of-Digeridoo.jpg",
            "name": "Digeridoo"
        },
        {
            "id": 5,
            "src": "images/instrumentals/genre/euphonium/euph.jpg",
            "name": "Euphonium"
        },
        {
            "id": 6,
            "src": "images/instrumentals/genre/fife/SKU274652_9.jpg",
            "name": "Fife"
        },
        {
            "id": 7,
            "src": "images/instrumentals/genre/glockenspiel/xt0YQ.jpg",
            "name": "Glockenspiel"
        },
        {
            "id": 8,
            "src": "images/instrumentals/genre/harp/stock-photo-snapsee-harp.jpg",
            "name": "Harp"
        },
        {
            "id": 9,
            "src": "images/instrumentals/genre/harp/stock-photo-snapsee-harp.jpg",
            "name": "Jew’s harp"
        },
        {
            "id": 10,
            "src": "images/instrumentals/genre/koto/koto.jpg",
            "name": "Koto"
        },
        {
            "id": 11,
            "src": "images/instrumentals/genre/lute/Lute.jpg",
            "name": "Lute"
        },
        {
            "id": 12,
            "src": "images/instrumentals/genre/melodica/Melodica.jpg",
            "name": "Melodica"
        },
        {
            "id": 13,
            "src": "images/instrumentals/genre/nay/nay.jpg",
            "name": "Ney"
        },
        {
            "id": 14,
            "src": "images/instrumentals/genre/ocarina/Ocarina2.jpg",
            "name": "Ocarina"
        },
        {
            "id": 15,
            "src": "images/instrumentals/genre/piano/Piano4.jpeg",
            "name": "Piano"
        },
        {
            "id": 16,
            "src": "images/instrumentals/genre/saxophone/Saxophone.jpeg",
            "name": "Saxophone"
        },
        {
            "id": 0,
            "src": "images/instrumentals/add-icon.png",
            "name": "Add custom instrument"
        }
    ];
    var fileExtension = ['mp3','txt','doc','docx','MIDI','mp4'];
    var inReview = false;

    for(var i = 0, len = selected.length; i < len; i++) {
        var bullet = document.createElement('li');
        bullet.className = i === 0 ? 'active' : '';
        bullet.setAttribute('index', selected[i].index);
        bullet.onclick = function(event) {
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

    function canNavigate(index) {
        var slide = selected[+index].value;
        var slidePrev = '';
        if(selected[+index - 1]) {
            slidePrev = selected[+index - 1].value;
        }
        if(slide || slidePrev)
            return true;
        return false;
    }


    //current step indicator

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
                    if(!selected[1].value) {
                        element = null;
                        isValid = false;
                        error = selected[1].validation.required;
                    } else {
                        number = 2;
                    }
                    console.log(selected);
                    break;
                case 3:
                    element = $('textarea[data-number="2"]');
                    if(element.val() != '') {
                        selected[2].value = element.val();
                        number = 3;
                    } else {
                        isValid = false;
                        error = selected[2].validation.required;
                    }
                    break;
                case 4:
                    if(!selected[3].value) {
                        element = null;
                        isValid = false;
                        error = selected[3].validation.required;
                    } else {
                        number = 4;
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
                    debugger;
                    element = $('input[data-number="5"]');
                    if(element.val() == '') {
                        isValid = false;
                        error = selected[5].validation.required;
                    } else {
                        selected[5].value = element.val();
                        number = 6;
                    }
                    break;
                case 7:
                    selected = commercialUse;
                    selected[0].value = 'commercial';
                    number = 1;
                    break;
                case 8:
                    if(!selected[1].value) {
                        element = null;
                        isValid = false;
                        error = selected[1].validation.required;
                    } else {
                        number = 2;
                    }
                    break;
                case 9:
                    element = $('textarea[data-number="8"]');
                    if(element.val() != '') {
                        selected[2].value = element.val();
                        number = 3;
                    } else {
                        isValid = false;
                        error = selected[2].validation.required;
                    }
                    break;
                case 10:
                    if(!selected[3].value) {
                        element = null;
                        isValid = false;
                        error = selected[3].validation.required;
                    } else {
                        number = 4;
                    }
                    break;
                case 11:
                    element = $('input[data-number="10"]').closest('.upload-file-button').find('label');
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
                case 12:
                    element = $('input[data-number="11"]');
                    if(element.val() == '') {
                        isValid = false;
                        error = selected[5].validation.required;
                    } else {
                        selected[5].value = element.val();
                        number = 6;
                    }
                    break;
                case 13:
                    if($(this).data('slide-number') == 6) {
                        element = $('input[data-number="6"]');
                    } else {
                        element = $('input[data-number="12"]');
                    }
                    if(element.val() != '') {
                        if(element.val() < 0 || element.val() > 9999) {
                            isValid = false;
                            error = selected[6].validation.limit;
                        }
                        selected[6].value = element.val();
                    } else {
                        isValid = false;
                        error = selected[6].validation.required;
                    }
                    break;
            }
            if(isValid) {
                if(element) {
                    element.removeClass('error');
                }

                var selector = 'p[data-number="' + $(this).data('slide-number') + '"]'
                $(selector).addClass('hidden');

                if($(this).data('slide-to') == 13) {
                    setData(selected);
                    $('.bullets').hide();
                    $('.nav-counter').hide();
                    inReview = true;
                }
                //                slide($(this));
                console.log(event.target.getAttribute('index'));
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
        debugger;
        var selector = '';
        console.log(data);
        if(data[0].value == 'private') {
            $('#elem_0_p').prop('checked', true);
        } else {
            $('#elem_0_c').prop('checked', true);
        }
        for(var i = 1; i < data.length; i++) {
            selector = '#elem_' + data[i].number;
            var element = $(selector);
            if(data[i].number == 1){
                drowChosenInstruments('.choosen-content-review');
            } else if(data[i].number == 3) {
                element.find('img').attr('src', data[i].value.image);
                element.find('h3').text(data[i].value.name);
            } else if(data[i].number == 3) {
                if(data[i].value == 'male') {
                    $('#elem_3_m').prop('checked', true);
                } else {
                    $('#elem_3_f').prop('checked', true);
                }
            } else if(data[i].number == 4) {
                element.find('label').text(data[i].value)
            } else {
                element.val(data[i].value);
            }
        }
    }

    //choose instrument
    $(document).on('click', '.instrument-item', function() {
        var dataId = $(this).data('id');
        if(dataId) {
            if(!selected[1].value) {
                selected[1].value = [];
            }

            if(selected[1].value.length >= 0) {
                var filtered = selected[1].value.filter(function(t) {
                    return t.id == dataId;
                }, dataId);
                if(filtered.length) {
                    $(this).find('.csscheckbox').addClass('hidden');
                    $(this).find('.instruments-name').removeClass('hover-style');
                    $(this).removeClass('instrument-check-in');
                    selected[1].value.splice(selected[1].value.indexOf(filtered[0]), 1);
                    $('.choose-instruments-types-modal').find('p[data-number="1"]').addClass('hidden');
                } else {
                    if(selected[1].value.length < 5) {
                        $(this).find('.csscheckbox').removeClass('hidden');
                        $(this).find('.instruments-name').addClass('hover-style');
                        $(this).addClass('instrument-check-in');
                        selected[1].value.push({
                            "id": dataId,
                            "name": $(this).find('h3').html(),
                            "src": $(this).find('img').attr('src')
                        });
                    } else {
                        $('.choose-instruments-types-modal').find('p[data-number="1"]').removeClass('hidden');
                        $('.choose-instruments-types-modal').find('p[data-number="1"]').html(selected[1].validation.limit);
                    }
                }
            }
        }else{
            $('.input-instrument').val('');
            $('.add-instruments-name').find('p').addClass('hidden');
            if(!selected[4].value || selected[1].value.length < 5) {
                $('.choose-instruments-types-modal').find('p[data-number="1"]').addClass('hidden');
                $('.add-instruments-modal').show(200);
            }else{
                $('.choose-instruments-types-modal').find('p[data-number="1"]').removeClass('hidden');
                $('.choose-instruments-types-modal').find('p[data-number="1"]').html(selected[1].validation.limit);
            }
        }

    });

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
                '<div class="instrument-image genre-item">' +
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

    //handle genre choose event
    $(document).on('click', '.genre-item', function() {
        debugger;
        selected[3].value = {
            "name": $(this).find('h3').html(),
            "image": $(this).find('img').attr('src')
        };

        if(selected[0].value == 'private') {
            $('.instrument_genre').find('img').attr('src', selected[3].value.image);
            $('.instrument_genre').find('h3').html(selected[3].value.name);
        } else {
            $('.instrument_use_genre').find('img').attr('src', selected[3].value.image);
            $('.instrument_use_genre').find('h3').html(selected[3].value.name);
        }

        $(".genre-modal").hide(200);
    });

    //open instrument modal
    $(document).on('click','.instrument-choose',function() {
        $('#instrument-filter').val('');
        drowInstrumentContent(instrumentsArray);
        $(".choose-instruments-types-modal").show(200);

    });

    //drow instrument modal content
    function drowInstrumentContent(instruments) {
        var content = '<div class="row">';
        var needClose = true;
        for(var i = 0; i < instruments.length; i++) {
            var checked = false;
            var dataId = instruments[i].id;
            if(selected[1].value && selected[1].value.length){
                var filtered = selected[1].value.filter(function(t) {
                    return t.id == dataId;
                }, dataId);
                if(filtered.length){
                    checked = true;
                }
            }

            content += ' <div class="col-md-3 col-sm-4  col-xs-6 instrument-image-and-name">' +
                '<div class="instrument-image instrument-item ' + (checked ? 'instrument-check-in' : '') + '" data-id="' + instruments[i].id + '">' +
                '<div class="csscheckbox ' + (checked ? '' : 'hidden') + '"><span>&#10004;</span></div>' +
                '<img src="' + instruments[i].src + '" alt="">' +
                '<div class="instruments-name ' + (checked ? 'hover-style' : '') + '">' +
                '<h3>' + instruments[i].name + '</h3></div></div></div>';

            if(i % 4 == 3) {
                content += "</div>";
                needClose = false;

                if(i != instruments.length - 1) {
                    content += '<div class="row">';
                    needClose = true;
                }
            }
        }
        if(needClose) {
            content += "</div>";
        }
        $('#instrument-content').html(content);
    }

    $('.done').on('click',function() {
        var selector = '';
        if(inReview){
            selector = '.choosen-content-review';
        }else {
            if(selected[0].value == 'private') {
                selector = '.choosen-content-private';
            } else {
                selector = '.choosen-content-commercial';
            }
        }

        drowChosenInstruments(selector);

    })

    //show selected instruments
    function drowChosenInstruments(selector) {
        var count = selected[1].value.length;
        var col = '';
        switch(count){
            case 1:
            case 2:
            case 3:
                col = 'col-md-4';
                break;
            case 4:
                col = 'col-md-3';
                break;
            case 5:
                col = 'col-md-2';
                break;
        }
        var html = '';
        if(selected[1].value.length) {
            for(var i = 0; i < selected[1].value.length; i++) {
                html += ' <div class="' + col + '  col-sm-4 groups-of-genre instrument-choose">' +
                    '                        <div class="instrument-image">' +
                    '                            <img src="' + selected[1].value[i].src + '" alt="">' +
                    '                        </div>\n' +
                    '                        <p data-number="1" class="hidden error-message"></p>' +
                    '                        <div class="instrument-name">' +
                    '                            <h3>' + selected[1].value[i].name + '</h3>' +
                    '                        </div>' +
                    '                    </div>'
            }
        }else{
            html = '<div class="col-md-4  col-sm-4 groups-of-genre instrument-choose">' +
                '                        <div class="instrument-image">\n' +
                '                            <img src="images/instrumentals/instr.jpg" alt="">' +
                '                        </div>\n' +
                '                        <p data-number="1" class="hidden error-message"></p>' +
                '                        <div class="instrument-name">' +
                '                            <h3>Choose Instrument</h3>' +
                '                        </div>' +
                '                    </div>'
        }

        $(selector).html(html);
        $('.choose-instruments-types-modal').hide(200);
    }
    //handle instrument filter change
    $('#instrument-filter').on('keyup',function () {
        debugger;
        var filteredArray = [];
        var value = $(this).val().toLowerCase();
        if(value != ''){
            filteredArray = instrumentsArray.filter(function (t) {
                return  t.name.toLowerCase().indexOf(value) == -1 ? false : true;
            },value);
            drowInstrumentContent(filteredArray);
        }else{
            drowInstrumentContent(instrumentsArray)
        }
    })
    $('#instrument-filter').on('keydown',function () {
        debugger;
        var filteredArray = [];
        var value = $(this).val().toLowerCase();
        if(value != ''){
            filteredArray = instrumentsArray.filter(function (t) {
                return  t.name.toLowerCase().indexOf(value) == -1 ? false : true;
            },value);
            drowInstrumentContent(filteredArray);
        }else{
            drowInstrumentContent(instrumentsArray)
        }
    })


    $('textarea').on('keyup',function(e){
        var number = $(this).data('number');
        textareaChanges(number,e,selected,2);
    });
    $('textarea').on('keydown',function(e){
        var number = $(this).data('number');
        textareaChanges(number,e,selected,2);
    });




    //prevent budget filed input
    $('input').on('keyup',function(e){
        var number = $(this).data('number');
        var budgetNumbers = [6,12,26];
        if(budgetNumbers.indexOf(number) > -1){
            budgetChanges(number,e,selected,6);
        }

    });

    $('input').on('keydown',function(e){
        var number = $(this).data('number');
        var budgetNumbers = [6,12,26];
        if(budgetNumbers.indexOf(number) > -1){
            budgetChanges(number,e,selected,6);
        }
    });

    $("#modal-open").on('click',function() {
        $('.input-name').closest('div').find('p').addClass('hidden');
        $('.input-email').closest('div').find('p').addClass('hidden');
        $(".contact-modal").show(200);
    });

    $('.instrument-submit').on('click',function() {
        var name = $('.input-instrument').val();
        if(!name){
            $('.input-instrument').closest('div').find('p').removeClass('hidden');
        }

        if(name){
            var obj =  {
                "id": instrumentsArray.length +1,
                "src": "images/instrumentals/abstract-music-instruments-bg.jpg",
                "name": name
            };
            if(!selected[1].value) {
                selected[1].value = [];
            }
            selected[1].value.push(obj);
            instrumentsArray.splice(instrumentsArray.length - 1, 0, obj);
            drowInstrumentContent(instrumentsArray);
            $('.add-instruments-modal').hide(200);
        }
    });

});