var app = new Vue({
    el: '#app',
    data: {
        currentContact: {
            name: '',
            phone: '',
            email: ''
        },
        contacts: [],
        editIndex: -1
    },
    methods: {
        addContact() {
            if (this.currentContact.name && this.currentContact.phone && this.currentContact.email) {
                this.contacts.push({ ...this.currentContact });
                this.resetForm();
            }
        },
        editContact(index) {
            this.currentContact = { ...this.contacts[index] };
            this.editIndex = index;
        },
        updateContact() {
            this.$set(this.contacts, this.editIndex, this.currentContact);
            this.resetForm();
            this.editIndex = -1;
        },
        deleteContact(index) {
            this.contacts.splice(index, 1);
        },
        resetForm() {
            this.currentContact = { name: '', phone: '', email: '' };
        }
    }
});
