/* Show things */
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else{
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

/* Show scrollup */
const targetElements = document.querySelectorAll('.showscrollup');
const button = document.getElementById('scholl-up');
const navItem = document.querySelectorAll('#navitemclr')

const observer2 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            button.classList.remove('show-scroll');
            navItem[0].style.color = "gold";
            navItem[1].style.color = "gold";
            navItem[2].style.color = "gold";
            navItem[3].style.color = "gold";
            navItem[4].style.color = "gold";
        } else {
            button.classList.add('show-scroll');
            navItem[0].style.color = "rgba(255, 217, 0, 0.171)";
            navItem[1].style.color = "rgba(255, 217, 0, 0.171)";
            navItem[2].style.color = "rgba(255, 217, 0, 0.171)";
            navItem[3].style.color = "rgba(255, 217, 0, 0.171)";
            navItem[4].style.color = "rgba(255, 217, 0, 0.171)";
        }
    });
});

targetElements.forEach(targetElement => {
    observer2.observe(targetElement);
});

/* Swipper1 */

var swiper = new Swiper(".mySwiper", {
    cssMode: true,
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

/* Swipper2 */

var swiper2 = new Swiper(".mySwiper2", {
    effect: "coverflow",
    cssMode: false,
    grabCursor: true,
    centeredSlides: true,
    breakpoints: {
        200:{
            slidesPerView: 1.2,
        },
        440:{
            slidesPerView: 1.3,
        },
        640: {
            slidesPerView: 1.7,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
    coverflowEffect: {
        rotate: 20,
        stretch: 0,
        depth: 400,
        modifier: 1,
        slideShadows: true,
    },
    loop: true,
});

/* Send email */

class FormSubmit {
    constructor(settings) {
        this.settings = settings;
        this.form = document.querySelector(settings.form);
        this.formButton = document.querySelector(settings.button);
        if (this.form) {
        this.url = this.form.getAttribute("action");
        }
        this.sendForm = this.sendForm.bind(this);
    }
    validateForm() {
        var form = document.getElementById("myForm");
        var name = form.elements["name"].value;
        var email = form.elements["email"].value;
        var subject = form.elements["_subject"].value;
        var message = form.elements["message"].value;
    
        if (name === "" && email === "" && subject === "" && message === "") {
            alert("Por favor, preencha todos os campos obrigatórios");
            return false;
        } if (name === "" || name === undefined) {
            alert("Por favor, insira um nome válido");
            return false;
        } else if (!email.match(form.elements["email"].pattern)) {
            alert("Por favor, insira um endereço de e-mail válido");
            return false;
        } else if (subject === undefined || subject === "") {
            alert("Por favor, preencha o campo subject");
            return false;
        } else if (message === "" || message === undefined || message.length < form.elements["message"].minlength) {
            alert("A mensagem deve ter pelo menos " + 1 + " caractere");
            return false;
        } else {
            return true;
        }
    }
    displaySuccess() {
        alert("Mensagem Enviada!");
    }
    displayError() {
        this.form.innerHTML = this.settings.error;
    }
    getFormObject() {
        const formObject = {};
        const fields = this.form.querySelectorAll("[name]");
        fields.forEach((field) => {
            formObject[field.getAttribute("name")] = field.value;
        });
        return formObject;
    }
    onSubmission(event) {
        event.preventDefault();
        event.target.disabled = true;
    }
    afterSubmission(event){
        event.preventDefault();
        event.target.disabled = false;
    }

    async sendForm(event) {
        try {
            if (this.validateForm()) {
                this.onSubmission(event);
                await fetch(this.url, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Accept: "application/json",
                    },
                    body: JSON.stringify(this.getFormObject()),
                });
                this.displaySuccess();
                this.afterSubmission(event);
            }
            } catch (error) {
                this.displayError();
                throw new Error(error);
            }
    }
    init() {
            if (this.form) this.formButton.addEventListener("click", this.sendForm);
            return this;
        }
}

const formSubmit = new FormSubmit({
    form: "[data-form]",
    button: "[data-button]",
    success: "<h1 class='success'>Mensagem enviada!</h1>",
    error: "<h1 class='error'>Não foi possível enviar sua mensagem.</h1>",
});
formSubmit.init();


/* validate form */
const sendButton = document.getElementById("sendbtn");

sendButton.addEventListener('click', () => {
    validateForm();
})

