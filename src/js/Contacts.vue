<template>
    <div class="flex flex-col xl:flex-row h-full items-center">
        <div class="flex flex-col w-full p-4">
            <h3 class="text-2xl lg:text-3xl font-semibold">Contacts</h3>

            <p class="mt-6 text-xl lg:text-2xl">
                You can find me on
                <a class="font-semibold underline" href="https://twitter.com/JoaoFSCruz">Twitter</a>
                (although I'm only there to get some tips) and on
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
                <form @submit="checkForm" :action="mailTo" class="flex flex-col bg-white w-11/12 md:w-7/12 xl:w-5/12 p-8 flex-shrink">

                    <h3 class="text-2xl lg:text-3xl">Send an email</h3>

                    <label for="email" class="mt-4 flex flex-col">
                        <span class="text-lg p-1">Email</span>
                        <input
                                id="email"
                                v-model="email.emailAddress"
                                name="name"
                                type="email"
                                class="border rounded py-2 px-4 shadow-sm text-2xl"
                                required
                        >
                    </label>

                    <label for="name" class="mt-4 flex flex-col">
                        <span class="text-lg p-1">Message</span>
                        <textarea
                                id="name"
                                v-model="email.message"
                                name="name"
                                class="border rounded py-2 px-4 shadow-sm overflow-y-auto resize-none h-56 text-2xl"
                                required/>
                    </label>

                    <button class="mt-8 rounded bg-indigo-700 text-white text-xl md:text-2xl p-2 hover:bg-indigo-800 font-semibold tracking-wide w-full">
                        Send
                    </button>
                </form>

                <div class="flex items-center justify-center w-2/5 mt-8 lg:mt-0">
                    <img class="w-3/5" src="../assets/imgs/undraw_mail_box_kd5i.svg" alt="">
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
                }
            }
        },

        computed: {
            mailTo() {
                return 'mailto:' + this.emailAddress;
            }
        },

        methods: {
            copy() {
                navigator.clipboard.writeText(this.emailAddress);
                this.tooltip = 'Copied!';
            },

            checkForm() {

            },
        }
    }
</script>