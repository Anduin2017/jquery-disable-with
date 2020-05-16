import $ from 'jquery';
class DisableWith {
    constructor(pattern) {
        this.initDisableWith(pattern);
    }

    initDisableWith(pattern) {
        // Active disable with tool
        $(`*[${pattern}]`).each((index, element) => {
            // Prepare control and get basic values.
            var submitButton = $(element);
            var isButton = submitButton.is('button');
            var value = submitButton.attr(pattern);
            var prevalue = '';
            if (isButton) {
                prevalue = submitButton.html();
            } else {
                prevalue = submitButton.val();
            }

            // Form of the control
            var firstForm = submitButton.parents().filter("form").first();
            if (firstForm && firstForm.length < 1) {
                console.warn('The disable-with control needs to be put in a form.');
                return;
            }

            // Handle form on submit to disable the control.
            firstForm.on('submit', function () {
                submitButton.attr('disabled', 'disabled');
                if (isButton) {
                    submitButton.html(value);
                } else {
                    submitButton.val(value);
                }
            });

            // Handle jquery validation invalid event.
            firstForm.bind('invalid-form.validate', function () {
                setTimeout(function () {
                    submitButton.removeAttr('disabled');
                    if (isButton) {
                        submitButton.html(prevalue);
                    } else {
                        submitButton.val(prevalue);
                    }
                }, 1);
            });
        });
    }
}

export default DisableWith;