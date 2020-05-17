import $ from 'jquery';
class DisableWith {
    constructor(property) {
        this.initDisableWith(property);
    }

    initDisableWith(property) {
        $(`*[${property}]`).each((index, element) => {
            var submitButton = $(element);
            var value = submitButton.attr(property);
            this.initElement(submitButton, value);
        });
    }

    initElement(submitButton, value) {
        var isButton = submitButton.is('button');
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
    }
}

export default DisableWith;