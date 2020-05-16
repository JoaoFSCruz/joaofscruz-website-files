<template>
    <div class="flex ">
        <div class="flex flex-col">
            <h3 class="text-4xl font-semibold">Contacts</h3>

            <p class="mt-6 text-3xl">
                You can find me on
                <a class="font-semibold underline" href="https://twitter.com/JoaoFSCruz">Twitter</a>
                (although I'm only there to get some tips) and on
                <a class="font-semibold underline" href="https://www.linkedin.com/in/jo%C3%A3o-cruz-0a2936135/">
                    LinkedIn
                </a>
                .
            </p>

            <p class="mt-6 text-3xl">
                You can also send an email to
                <span class="font-semibold underline cursor-pointer" v-on:mouseenter="" v-on:click="copy">
                {{ emailAddress }}
                </span>,
                or use the form below:
            </p>

            <div class="mt-4">
                <span class="text-lg font-semibold tracking-wider rounded-full bg-indigo-800 text-white px-2 py-1">
                    {{ tooltip }}
                </span>
            </div>

            <div class="mt-32 flex">
                <form @submit="checkForm" :action="mailTo" class="rounded bg-white w-1/2 flex flex-col px-10 py-8">

                    <h3 class="text-3xl">Send an email</h3>

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

                    <button class="mt-8 rounded bg-indigo-700 text-white text-2xl p-2 hover:bg-indigo-800 font-semibold tracking-wide">
                        Send
                    </button>
                </form>

                <div class="ml-64">
                    <img src="../assets/imgs/undraw_mail_box_kd5i.svg" alt="">
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