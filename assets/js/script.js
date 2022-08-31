$(document).ready(function () {

    // Displays current date and time at top of page

    var currentDateTime = moment().format('MMMM Do YYYY, h:mm:ss a');
    $("#currentDay").text(currentDateTime);

    // add event listener for save icons

    $('.saveBtn').on('click', function () {
        // get values
        var value = $(this).siblings('.description').val();
        var time = $(this).parent().attr('id');

        // save to localStorage

        localStorage.setItem(time, value);

    });

    function hourUpdater() {
        // get current number of hours
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

});