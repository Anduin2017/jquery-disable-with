$(document).ready(function () {
    // Active disable with tool
    $('*[data-disable-with]').each(function () {
        // Prepare
        var submitButton = $(this);
        var isButton = submitButton.is('button');
        var value = submitButton.attr('data-disable-with');
        var prevalue = '';
        if (isButton) {
            prevalue = submitButton.html();
        } else {
            prevalue = submitButton.val();
        }
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
        submitButton.parents().filter("form").first().bind('invalid-form.validate', function () {
            submitButton.removeAttr('disabled');
            if (submitButton.is('button')) {
                submitButton.html(prevalue);
            } else {
                submitButton.val(prevalue);
            }
        });
    });
});