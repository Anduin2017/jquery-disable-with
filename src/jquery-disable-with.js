$(document).ready(function () {
    // Active disable with tool
    $('*[data-disable-with]').each(function () {
        // Prepare
        var submitButton = $(this);
        var isButton = submitButton.is('button');
        var value = submitButton.attr('data-disable-with');
        var firstForm = submitButton.parents().filter("form").first();
        firstForm.on('submit', function () {
            //Set
            submitButton.attr('disabled', 'disabled');
            if (isButton) {
                submitButton.html(value);
            } else {
                submitButton.val(value);
            }
        });
    });
});