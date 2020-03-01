<template>
  <div class="bg-gray-600 flex flex-wrap items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
    <div v-if="loading" class="w-full h-full fixed block top-0 left-0 bg-white opacity-75 z-50">
      <span
        class="text-green-500 opacity-75 top-1/2 my-0 mx-auto block relative w-0 h-0"
        style="
    top: 50%;
"
      >
        <i class="fas fa-circle-notch fa-spin fa-5x"></i>
      </span>
    </div>
    <div
      class="flex flex-wrap lg:min-w-3xl xl:min-w-4xl lg:flex lg:items-center lg:justify-center lg:w-3/5 lg:pl-8 lg:pr-8 bg-no-repeat"
    >
      <h1
        class="text-3xl leading-9 font-semibold font-display text-white sm:mt-6 sm:text-4xl sm:leading-10 xl:text-5xl xl:leading-none"
      >
        Template created with
        <p>
          <img
            class="mx-auto h-12 w-auto"
            src="../img/logos/tailwindui-logo-on-dark.svg"
            alt="Workflow"
          />
        </p>
        UI Components
      </h1>

      <p
        class="text-lg leading-7 text-gray-300 sm:text-xl sm:max-w-xl xl:mt-4 xl:text-2xl xl:max-w-2xl"
      >
        is a development platform inspired by the way you work
      </p>
    </div>

    <!-- Start Form  -->

    <div
      class="bg-white w-1/3 rounded-lg lg:flex lg:items-center lg:justify-start  py-12 px-3 lg:px-8"
    >
      <div class="w-full">
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full px-3 mb-6 md:mb-0">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-first-name"
            >
              First Name
            </label>
            <input
              class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              v-model="firstName"
              type="text"
              placeholder="First Name"
            />
          </div>
        </div>
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full px-3 mb-6 md:mb-0">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-last-name"
            >
              Last Name
            </label>
            <input
              class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-last-name"
              v-model="lastName"
              type="text"
              placeholder="Last Name"
            />
          </div>
        </div>
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full px-3">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-password"
            >
              Email
            </label>
            <input
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-email"
              v-model="email"
              type="email"
              placeholder="Email"
            />
          </div>
        </div>
        <div class="w-full px-3">
          <div class="w-full -mx-6 px-3">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-password"
            >
              Password
            </label>
            <input
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-password"
              v-model="password"
              type="password"
              placeholder="******************"
            />
          </div>
        </div>
        <div class="mt-6">
          <button
            type="submit"
            @click.prevent="register"
            class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out h-16"
          >
            <span class="absolute left-0 inset-y pl-3">
              <svg
                class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400 transition ease-in-out duration-150"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fill-rule="evenodd"
                  d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                  clip-rule="evenodd"
                />
              </svg>
            </span>
            Sign up
          </button>

          <p v-if="errorMessage" class="text-red-500 text-xs italic">{{ errorMessage }}</p>
        </div>
      </div>
    </div>
    <!-- End Form  -->
  </div>
</template>

<script>
import { dbUserRef } from '../firebase';
import { mapActions, mapGetters } from 'vuex';
const getters = mapGetters(['loading']);


export default {
  name: 'Sign-Up',
  data() {
    return {
      email: '',
      password: '',
      firstName: '',
      lastName: '',
      errorMessage: null,
    };
  },
  computed: getters,
  methods: {
    ...mapActions(['signUp']),
    clearData() {
      this.password = '';
      this.email = '';
      this.firstName = '';
      this.lastName = '';
      this.errorMessage = null;
    },
    async register() {
      try {
        this.signUp({
          email: this.email,
          password: this.password,
          firstName: this.firstName,
          lastName: this.lastName,
        }).then(() => {
          this.$router.push('/');
        });
      } catch (error) {
        if (error.message) {
          this.errorMessage = error.message;
        }
        console.log('Error: ', error);
      }
    },
    async addUser(uid) {
      try {
        const userCreated = await dbUserRef.add({
          uid: uid,
          firstName: this.firstName,
          lastName: this.lastName,
          password: this.password,
          email: this.email,
        });

        if (userCreated.id) {
          this.clearData();
        }
      } catch (error) {
        console.error('Error on create User', error);
      }
    },
  },
};
</script>
