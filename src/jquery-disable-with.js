$(document).ready(function () {
    // Active disable with tool
    $('*[data-disable-with]').click(function () {
        // Prepare
        var submitButton = $(this);
        var isButton = submitButton.is('button');
        var prevalue = '';
        var value = submitButton.attr('data-disable-with');
        //Set
        submitButton.attr('disabled', 'disabled');
        if (isButton) {
            prevalue = submitButton.html();
            submitButton.html(value);
        } else {
            prevalue = submitButton.val();
            submitButton.val(value);
        }
        submitButton.parents().filter("form").first().bind('invalid-form.validate', function () {
            submitButton.removeAttr('disabled');
            if (submitButton.is('button')) {
                submitButton.html(prevalue);
            } else {
                submitButton.val(prevalue);
            }
        }).submit();
    });
});