$(document).ready(function () {

    // Displays current date and time at top of page

    $('#currentDay').text(moment().format('dddd, MMMM Do'));


    // add event listener for save icons

    $('.saveBtn').on('click', function () {
        // get values
        var value = $(this).siblings('.description').val();
        var time = $(this).parent().attr('id');

        // save to localStorage

        localStorage.setItem(time, value);

    });

    function hourUpdater() {
        // get number of the current hour
        var currentHour = moment().hours();


        // loop over time blocks
        $('.time-block').each(function () {
            var blockHour = parseInt($(this).attr('id').split('-')[1]);

            // check if time has passed time of time block

            if (blockHour < currentHour) {
                $(this).addClass('past');
            } else if (blockHour === currentHour) {
                $(this).removeClass('past');
                $(this).addClass('present');
            } else {
                $(this).removeClass('past');
                $(this).removeClass('present');
                $(this).addClass('future');
            }
        });
    }

    hourUpdater();

    // interval to check if current time needs updating
    var interval = setInterval(hourUpdater, 15000);

    // load saved data from localStorage
    $('#hour-9 .description').val(localStorage.getItem('hour-9'));
    $('#hour-10 .description').val(localStorage.getItem('hour-10'));
    $('#hour-11 .description').val(localStorage.getItem('hour-11'));
    $('#hour-12 .description').val(localStorage.getItem('hour-12'));
    $('#hour-13 .description').val(localStorage.getItem('hour-13'));
    $('#hour-14 .description').val(localStorage.getItem('hour-14'));
    $('#hour-15 .description').val(localStorage.getItem('hour-15'));
    $('#hour-16 .description').val(localStorage.getItem('hour-16'));
    $('#hour-17 .description').val(localStorage.getItem('hour-17'));


});