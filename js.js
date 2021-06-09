const form = new Vue({
    el: "#app",
    data: {
        name: '',
        phone: '',
        email: '',
        errorName: false,
        errorPhone: false,
        errorEmail: false,
    },

    methods: {
        validate() {
            this.clearErr();
            let nameExp = /^[a-zA-Zа-яА-ЯёЁ'][a-zA-Z-а-яА-ЯёЁ' ]+[a-zA-Zа-яА-ЯёЁ']?$/iu;
            let phoneExp = /^((\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{10,12}$/;
            let emailExp = /^([a-z0-9_\.-]+)@([a-z0-9_\.-]+)\.([a-z\.]{2,6})$/;
            let isValid = nameExp.test(this.name);
            if (!isValid) {
                this.errorName = true;
            }
            isValid = phoneExp.test(this.phone);
            if (!isValid) {
                this.errorPhone = true;
            }
            isValid = emailExp.test(this.email);
            if (!isValid) {
                this.errorEmail = true;
            }
        },
        clearErr() {
            this.errorName = false;
            this.errorPhone = false;
            this.errorEmail = false;
        }
    },
})