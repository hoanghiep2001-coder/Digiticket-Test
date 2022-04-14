$(document).ready(function () {
  var he = $("#date1").dateRangePicker({
    singleDate: true,
    hoveringTooltip: false,
    separator: " to ",
    startDate: new Date(),
    alwaysOpen: true,
    showShortcuts: false,
    singleMonth: true,
    hoveringTooltip: false,
    startOfWeek: "monday",
    showDateFilter: function (time, date) {
      var day = new Date(time);
      var ngayAm = getLunarDate(
        day.getDate(),
        day.getMonth() + 1,
        day.getFullYear()
      );
      var str = `
      <div class="custom-date-picker">
        <h3>${date}</h3>
        <span class="lunar-day">${
          ngayAm.day == "1" ? ngayAm.day + "/" + ngayAm.month : ngayAm.day
        }
        </span>
      </div>
      
      <p class="price">${Math.round(Math.random() * 9999)}.000đ</p>`;
      return str;
    },
    selectForward: true,
    customArrowPrevSymbol: '<span class="icon-arrow-left1"></span>',
    customArrowNextSymbol: '<span class="icon-arrow-right"></span>',
  });

  $("#date2").dateRangePicker({
    startDate: new Date(),
    selectForward: true,
    singleDate: true,
    hoveringTooltip: false,
    separator: " to ",
    alwaysOpen: true,
    showShortcuts: false,
    singleMonth: true,
    hoveringTooltip: false,
    startOfWeek: "monday",
    showDateFilter: function (time, date) {
      var day = new Date(time);
      var ngayAm = getLunarDate(
        day.getDate(),
        day.getMonth() + 1,
        day.getFullYear()
      );
      var str = `
      <div class="custom-date-picker">
        <h3>${date}</h3>
        <span class="lunar-day">${
          ngayAm.day == "1" ? ngayAm.day + "/" + ngayAm.month : ngayAm.day
        }
        </span>
      </div>
      
      <p class="price">${Math.round(Math.random() * 9999)}.000đ</p>`;
      return str;
    },
    selectForward: true,
    customArrowPrevSymbol: '<span class="icon-arrow-left1"></span>',
    customArrowNextSymbol: '<span class="icon-arrow-right"></span>',
  });

  $("#date2")
    .dateRangePicker()
    .bind("datepicker-change", function (event, obj) {
      $("html, body").animate(
        {
          scrollTop: $("#form-list-1").offset().top - 300,
        },
        1500
      );
    });

    $("#date1")
    .dateRangePicker()
    .bind("datepicker-first-date-selected", function (event, obj) {

      $('.date-picker-wrapper').first().click(function (e) {
        let selectedTimeOfDate1 = obj.date1.getTime()

        let date2Container = $('.date-picker-wrapper').last()
        let date2Next = date2Container.find('.next')
        let date2Prev = date2Container.find('.prev')
        $(date2Container).css({"margin-left": "16px"});
        let date2TdTime = date2Container.find('.day.toMonth.valid')
        let date2TimeCompared = date2TdTime.map(function (index) {
          return $(this).attr("time");
        })
  
        $(date2Next).click(function (e) { 
          e.preventDefault();
          let date2TdTime = date2Container.find('.day.toMonth.valid')
          let date2TimeCompared = date2TdTime.map(function (index) {
            return $(this).attr("time");
          })
  
          $(date2TimeCompared).each(function (index, element) {
            // element == this
    
            if (selectedTimeOfDate1 > Number(element)) {
              $(date2TdTime[index]).removeClass('valid');
              $(date2TdTime[index]).addClass('invalid');
            }
            else {
              $(date2TdTime[index]).removeClass('invalid');
              $(date2TdTime[index]).addClass('valid');
            }
          });
        });
  
        $(date2Prev).click(function (e) { 
          e.preventDefault();
          let date2TdTime = date2Container.find('.day.toMonth.valid')
          let date2TimeCompared = date2TdTime.map(function (index) {
            return $(this).attr("time");
          })
  
          $(date2TimeCompared).each(function (index, element) {
            // element == this
    
            if (selectedTimeOfDate1 > Number(element)) {
              $(date2TdTime[index]).removeClass('valid');
              $(date2TdTime[index]).addClass('invalid');
            }
            else {
              $(date2TdTime[index]).removeClass('invalid');
              $(date2TdTime[index]).addClass('valid');
            }
          });
        });
  
        $(date2TimeCompared).each(function (index, element) {
          // element == this
  
          if (selectedTimeOfDate1 > Number(element)) {
            $(date2TdTime[index]).removeClass('valid');
            $(date2TdTime[index]).addClass('invalid');
          }
          else {
            $(date2TdTime[index]).removeClass('invalid');
            $(date2TdTime[index]).addClass('valid');
          }
        });
      })

     
      
      $('#form-list-1').fadeOut("slow");
      setTimeout(function hideListFly() {
        $('#form-list-1').fadeIn("slow");
      }, 2000)

      $(".fly-info-loading").fadeIn("slow");
      setTimeout(function hideLoadingAnimate() {
        $(".fly-info-loading").fadeOut("slow");
      }, 1800);
  });
});
