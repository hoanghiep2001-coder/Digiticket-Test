$(function () {
    let html = $('html')
    let bannerBannerOptions = $('.banner-options-dropdown')

    let calendarTable = $('.startDate')
    let endCalendarTable = $('.endDate')
    
    var dateRangePicker = {
        
        config: function() {
            let date = new Date()
              $('input[name="birthday"]').daterangepicker({
                "locale": {
                    "format": "DD/MM/YYYY",
                    "separator": " - ",
                    "applyLabel": "Apply",
                    "cancelLabel": "Cancel",
                    "fromLabel": "From",
                    "toLabel": "To",
                    "customRangeLabel": "Custom",
                    "weekLabel": "W",
                    "daysOfWeek": [
                        "CN",
                        "T2",
                        "T3",
                        "T4",
                        "T5",
                        "T6",
                        "T7"
                    ],
                    "monthNames": [
                        "Tháng 1",
                        "Tháng 2",
                        "Tháng 3",
                        "Tháng 4",
                        "Tháng 5",
                        "Tháng 6",
                        "Tháng 7",
                        "Tháng 8",
                        "Tháng 9",
                        "Tháng 10",
                        "Tháng 11",
                        "Tháng 12",
                    ],
                    "firstDay": 1
                },
                "singleDatePicker": true,
                "autoApply": true,
                "maxSpan": {
                    "days": 7
                },
                "startDate": date,
                "endDate": "28/03/2024",
                "minDate": date,
                "maxDate": "28/03/2024"
            },
             function(start, end, label) {
              
            });

              $.each(bannerBannerOptions, function (indexInArray, dropdown) { 
                $(html).click(function (e) { 
                    e.preventDefault();
                    $(dropdown).removeClass('open');
                });
              });

              // done date đầu tiên sẽ xổ ra date thứ 2
              $(calendarTable).change(function (e) { 
                $(endCalendarTable).trigger("click");
              });

              $('.modal-calendar-start').change(function (e) { 
                $('.modal-calendar-end').trigger("click");
              });
        },
        start: function (param) {
            this.config()
        }
    }

    dateRangePicker.start()
});


// $(document).on('click', 'li.item', function(e){
//     e.preventDefault();
//     let $this = $(this);
//     let $parent = $this.closet('.input-container');
//     let $input = $parent.find('input.class');
//     let $dropdown = $parent.find('dropdown.menu');

//     let _txt = $this.find('h3').text();
//     let _airport = $this.find('p').text();
//     $input.val(`${_txt} - ${_airport}`).trigger('change');
//     $dropdown.slideUp(500);
//     $dropdown.toggleClass()
    
// });