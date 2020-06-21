class DisableWith {
    constructor(property: string, onInit: (form: Element, button: Element, preValue: string, isButton: boolean) => void) {
        this.initDisableWith(property, onInit);
    }

    initDisableWith(property: string, onInit: (form: Element, button: Element, preValue: string, isButton: boolean) => void): void {
        document.querySelectorAll(`*[${property}]`).forEach(element => {
            let value = element.getAttribute(property);
            this.initElement(element, value, onInit);
        });
    }

    getParentForm(element: Element): Element {
        if (element.nodeName.toLowerCase() === 'form') {
            return element;
        }
        if (element == null) {
            return null;
        }
        return this.getParentForm(element.parentElement);
    }

    initElement(submitButton: Element, value: string, onInit: (form: Element, button: Element, preValue: string, isButton: boolean) => void): void {
        let isButton = submitButton.nodeName.toLowerCase() === 'button';
        let prevalue = '';
        if (isButton) {
            prevalue = submitButton.innerHTML;
        } else {
            prevalue = submitButton.getAttribute("value");
        }

        // Form of the control
        let firstForm = this.getParentForm(submitButton);
        if (!firstForm) {
            console.warn('The disable-with control needs to be put in a form.');
            return;
        }

        // Handle form on submit to disable the control.
        firstForm.addEventListener('submit', () => {
            submitButton.setAttribute('disabled', 'disabled');
            if (isButton) {
                submitButton.innerHTML = value;
            } else {
                submitButton.setAttribute('value', value);
            }
        });
        if (onInit) {
            onInit(firstForm, submitButton, prevalue, isButton);
        }
    }
}

export default DisableWith;