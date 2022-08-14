const myform = document.getElementById("myform");
myform.noValidate = true;

function validateForm(e) {
    const form = e.target;
    if (form.checkValidity()) {
        // form is valid - make further checks
    }
    else {
        // form is invalid - cancel submit
        e.preventDefault();
        // apply invalid class
        Array.from(form.elements).forEach(i => {
            if (i.checkValidity()) {
                // field is valid - remove class
                i.parentElement.classList.remove('invalid');
            }
            else {
                // field is invalid - add class
                i.parentElement.classList.add('invalid');
            }
        });
    }
};
myform.addEventListener("submit", validateForm);
// validate contact form
const contactForm = new FormValidate(document.getElementById('contact'), false); // this validates form AFTER first submit