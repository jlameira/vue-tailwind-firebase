<template>
  <div class=" bg-gray-600 flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8">
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
    <div class=" bg-white rounded-lg max-w-md w-full py-2 px-4">
      <div>
        <img
          class="mx-auto h-12 w-auto"
          src="../img/logos/workflow-mark-on-white.svg"
          alt="Workflow"
        />
        <h2 class="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
          Sign in to your account
        </h2>
        <p class="mt-2 text-center text-sm leading-5 text-gray-600 max-w">
          Or
          <a
            href="/join"
            class="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150"
          >
            create you account
          </a>
        </p>
      </div>
      <form class="mt-8" action="#" method="POST">
        <input type="hidden" name="remember" value="true" />
        <div class="rounded-md shadow-sm">
          <div>
            <input
              aria-label="Email address"
              name="email"
              v-model="email"
              type="email"
              required
              class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5"
              placeholder="Email address"
            />
          </div>
          <div class="-mt-px">
            <input
              aria-label="Password"
              name="password"
              type="password"
              v-model="password"
              required
              class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5"
              placeholder="Password"
            />
          </div>
        </div>

        <div class="mt-6 flex items-center justify-between">
          <div class="flex items-center">
            <input
              id="remember_me"
              type="checkbox"
              class="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
            />
            <label for="remember_me" class="ml-2 block text-sm leading-5 text-gray-900">
              Remember me
            </label>
          </div>

          <div class="text-sm leading-5">
            <a
              href="#"
              class="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150"
            >
              Forgot your password?
            </a>
          </div>
        </div>

        <div class="mt-6">
          <button
            type="submit"
            @click.prevent="signIn"
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
            Sign in
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex';
const getters = mapGetters(['loading']);

export default {
  name: 'login',
  data() {
    return {
      email: '',
      password: '',
    };
  },
  computed: getters,
  methods: {
    ...mapActions({ login: 'login' }),
    async signIn() {
      try {
        this.login({ email: this.email, password: this.password }).then(() => {
          this.$router.push('/');
        });
      } catch (error) {
        const { code, message } = error;

        console.log('Erro code: ', code);
        console.log('Erro message: ', message);
      }
    },
  },
};
</script>
