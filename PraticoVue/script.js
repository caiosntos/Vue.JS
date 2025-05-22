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
                Swal.fire({
                icon: 'success',
                title: 'Contato adicionado!',
                showConfirmButton: false,
                timer: 1500
            });
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
                Swal.fire({
                icon: 'success',
                title: 'Contato atualizado!',
                showConfirmButton: false,
                timer: 1500
            });
        },
        deleteContact(index) {
            this.contacts.splice(index, 1);
                Swal.fire(
                'Deletado!',
                'O contato foi removido.',
                'success'
                    );
        },
        resetForm() {
            this.currentContact = { name: '', phone: '', email: '' };
        }
    }
});
