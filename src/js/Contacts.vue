<template>
    <div class="flex flex-col xl:flex-row h-full items-center">
        <div class="flex flex-col w-full p-4">
            <h3 class="text-2xl lg:text-3xl font-semibold">Contacts</h3>

            <p class="mt-6 text-xl lg:text-2xl">
                You can find me on
                <a class="font-semibold underline" href="https://github.com/JoaoFSCruz">Github</a>, on
                <a class="font-semibold underline" href="https://twitter.com/JoaoFSCruz">Twitter</a>
                and on
                <a class="font-semibold underline" href="https://www.linkedin.com/in/jo%C3%A3o-cruz-0a2936135/">
                    LinkedIn
                </a>
                .
            </p>

            <p class="mt-6 text-xl lg:text-2xl">
                You can also send an email to
                <span class="font-semibold underline cursor-pointer" v-on:mouseenter="" v-on:click="copy">
                    {{ emailAddress }}
                </span>,
                or use the form below:
            </p>

            <div class="mt-4">
                <span class="text-sm xl:text-lg font-semibold tracking-wider rounded-full bg-indigo-800 text-white px-4 py-1">
                    {{ tooltip }}
                </span>
            </div>

            <div class="mt-10 flex flex-col justify-center items-center lg:flex-row xl:justify-start">

                <form
                        @submit.prevent="sendEmail"
                        action="https://formspree.io/xeqrewad"
                        method="POST"
                        class="flex flex-col bg-white w-11/12 md:w-7/12 xl:w-5/12 p-8 flex-shrink"
                >
                    <div class="flex justify-between">
                        <h3 class="text-2xl lg:text-3xl">Send an email</h3>
                        <span v-show="sent" class="flex items-center p-2 border border-indigo-800 rounded uppercase">
                            <svg class="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M18 2a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4c0-1.1.9-2 2-2h16zm-4.37 9.1L20 16v-2l-5.12-3.9L20 6V4l-10 8L0 4v2l5.12 4.1L0 14v2l6.37-4.9L10 14l3.63-2.9z"/>
                            </svg>
                            <span class="ml-1">Sent</span>
                        </span>
                    </div>

                    <label for="email" class="mt-4 flex flex-col">
                        <div class="flex justify-between">
                            <span class="text-lg p-1">Email</span>
                            <span class="text-sm md:text-lg p-1 text-red-500" v-show="!emailValid">Please fill in with your email.</span>
                        </div>
                        <input
                                class="border rounded py-2 px-4 shadow-sm text-2xl"
                                id="email"
                                v-model="email.emailAddress"
                                @keydown="validateEmail = true"
                                name="_replyto"
                                type="email"
                        >
                    </label>

                    <label for="message" class="mt-4 flex flex-col">
                        <div class="flex justify-between">
                            <span class="text-lg p-1">Message</span>
                            <span class="text-sm md:text-lg p-1 text-red-500" v-show="!messageValid">Please fill in with a message.</span>
                        </div>
                        <textarea
                                class="border rounded py-2 px-4 shadow-sm overflow-y-auto resize-none h-40 md:h-56 text-2xl"
                                id="message"
                                v-model="email.message"
                                @keydown="validateMsg = true"
                                name="message"
                                />
                    </label>

                    <button
                            class="mt-8 rounded bg-indigo-700 text-white text-xl md:text-2xl p-2 hover:bg-indigo-800 font-semibold tracking-wide w-full"
                            type="submit"
                    >
                        Send
                    </button>
                    <span v-show="mailError" class="flex text-center p-2 text-sm md:text-lg text-red-500">An unexpected error occured. Please reach me out using your email client.</span>
                </form>

                <div class="flex items-center justify-center w-2/5 mt-8 lg:mt-0">
                    <img class="md:w-3/5" src="../assets/imgs/undraw_mail_box_kd5i.svg" alt="">
                </div>
            </div>

        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                tooltip: 'You can copy the email by clicking it!',
                emailAddress: 'joao.fs.cruz97@gmail.com',
                email: {
                    emailAddress: '',
                    message: '',
                },
                reg: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/,
                sent: false,
                validateEmail: false,
                validateMsg: false,
                mailError: false
            }
        },

        computed: {
            emailValid() {
                if (! this.validateEmail) return true;
                return this.email.emailAddress !== '' && this.reg.test(this.email.emailAddress);
            },

            messageValid() {
                if (! this.validateMsg) return true;
                return this.email.message !== '';
            }
        },

        methods: {
            copy() {
                navigator.clipboard.writeText(this.emailAddress);
                this.tooltip = 'Copied!';
            },

            sendEmail() {
                if (this.emailValid && this.messageValid) {
                    axios.post('https://formspree.io/xeqrewad', {
                            '_replyto': this.email.emailAddress,
                            'message': this.email.message
                        })
                        .then(() => {
                            this.sent = true;
                            setTimeout( () => {
                                this.sent = false;
                            }, 10000);
                            this.email.emailAddress = '';
                            this.email.message = '';
                            this.validateEmail = false;
                            this.validateMsg = false;
                        })
                        .catch(() => {
                            this.mailError = true;
                        });
                }
            }
        }
    }
</script>