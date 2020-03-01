<template>
  <div>
    <div class="bg-gray-800 pb-32">
      <header class="py-10">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="lg:flex lg:items-center lg:justify-between">
            <div class="flex-1 min-w-0">
              <h2
                class="text-2xl font-bold leading-7 text-white sm:text-3xl sm:leading-9 sm:truncate"
              >
                {{ checkMyNameLogged }}
              </h2>
              <div class="mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap">
                <div class="mt-2 flex items-center text-sm leading-5 text-gray-300 sm:mr-6">
                  <svg
                    class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
                      clip-rule="evenodd"
                    />
                    <path
                      d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"
                    />
                  </svg>
                  Full-time
                </div>
                <div class="mt-2 flex items-center text-sm leading-5 text-gray-300 sm:mr-6">
                  <svg
                    class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  Remote
                </div>
                <div class="mt-2 flex items-center text-sm leading-5 text-gray-300 sm:mr-6">
                  <svg
                    class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z"
                    />
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  $120k – $140k
                </div>
                <div class="mt-2 flex items-center text-sm leading-5 text-gray-300">
                  <svg
                    class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  Closing on January 9, 2020
                </div>
              </div>
            </div>
            <div class="mt-5 flex lg:mt-0 lg:ml-4">
              <span class="hidden sm:block shadow-sm rounded-md">
                <button
                  type="button"
                  class="inline-flex items-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-gray-700 hover:bg-gray-600 focus:outline-none focus:shadow-outline-gray focus:border-gray-800 transition duration-150 ease-in-out"
                >
                  <svg
                    class="-ml-1 mr-2 h-5 w-5 text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"
                    />
                  </svg>
                  Edit
                </button>
              </span>

              <span class="hidden sm:block ml-3 shadow-sm rounded-md">
                <button
                  type="button"
                  class="inline-flex items-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-gray-700 hover:bg-gray-600 focus:outline-none focus:shadow-outline-gray focus:border-gray-800 transition duration-150 ease-in-out"
                >
                  <svg
                    class="-ml-1 mr-2 h-5 w-5 text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  View
                </button>
              </span>

              <span class="sm:ml-3 shadow-sm rounded-md">
                <button
                  type="button"
                  class="inline-flex items-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-500 hover:bg-indigo-400 focus:outline-none focus:shadow-outline-indigo focus:border-indigo-600 transition duration-150 ease-in-out"
                >
                  <svg class="-ml-1 mr-2 h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  Publish
                </button>
              </span>
            </div>
          </div>
        </div>
      </header>
    </div>
    <main class="-mt-32">
      <div class="max-w-7xl mx-auto px-4 pb-12 sm:px-6 lg:px-8">
        <div class="bg-white shadow overflow-hidden rounded-md">
          <div class="bg-white px-4 pt-5 border-b border-gray-200 sm:px-6">
            <h3 class="text-lg leading-6 font-medium text-gray-900">
              Candidates
            </h3>
            <div class="pt-3 pb-4 sm:p-0">
              <div class="sm:hidden">
                <select
                  class="form-select block w-full text-gray-900 border-gray-300 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition ease-in-out duration-150"
                >
                  <option>Applied</option>
                  <option>Phone screening</option>
                  <option selected>Interview</option>
                  <option>Offer</option>
                  <option>Hired</option>
                </select>
              </div>
              <div class="hidden sm:block">
                <div>
                  <nav class="-mb-px flex">
                    <a
                      href="#"
                      class="whitespace-no-wrap py-4 px-1 border-b-2 border-transparent font-medium text-sm leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition ease-in-out duration-150"
                    >
                      Applied
                    </a>
                    <a
                      href="#"
                      class="whitespace-no-wrap ml-8 py-4 px-1 border-b-2 border-transparent font-medium text-sm leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition ease-in-out duration-150"
                    >
                      Phone screening
                    </a>
                    <a
                      href="#"
                      class="whitespace-no-wrap ml-8 py-4 px-1 border-b-2 border-indigo-500 font-medium text-sm leading-5 text-indigo-600 focus:outline-none focus:text-indigo-800 focus:border-indigo-700 transition ease-in-out duration-150"
                    >
                      Interview
                    </a>
                    <a
                      href="#"
                      class="whitespace-no-wrap ml-8 py-4 px-1 border-b-2 border-transparent font-medium text-sm leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition ease-in-out duration-150"
                    >
                      Offer
                    </a>
                    <a
                      href="#"
                      class="whitespace-no-wrap ml-8 py-4 px-1 border-b-2 border-transparent font-medium text-sm leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition ease-in-out duration-150"
                    >
                      Hired
                    </a>
                  </nav>
                </div>
              </div>
            </div>
          </div>
          <div class="px-4 pt-5 pb-3 sm:px-6">
            <div>
              <label for="filter" class="sr-only">Search candidates</label>
              <div class="flex rounded-md shadow-sm">
                <div class="relative flex-grow focus-within:z-10">
                  <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg class="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                      <path
                        fill-rule="evenodd"
                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </div>
                  <input
                    id="filter"
                    class="appearance-none rounded-none block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-l-md text-gray-900 placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5 transition ease-in-out duration-150"
                    placeholder="John Doe"
                  />
                </div>
                <button
                  class="-ml-px relative flex items-center px-3 py-2 rounded-r-md border border-gray-300 text-sm leading-5 bg-gray-50 text-gray-900 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 transition ease-in-out duration-150"
                >
                  <svg class="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fill-rule="evenodd"
                      d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span class="ml-2">Filter</span>
                </button>
              </div>
            </div>
          </div>
          <ul>
            <li>
              <a
                href="#"
                class="block hover:bg-gray-50 focus:outline-none focus:bg-gray-50 transition duration-150 ease-in-out"
              >
                <div class="flex items-center px-4 py-4 sm:px-6">
                  <div class="min-w-0 flex-1 flex items-center">
                    <div class="flex-shrink-0">
                      <img
                        class="h-12 w-12 rounded-full"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                    </div>
                    <div class="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
                      <div>
                        <div class="text-sm leading-5 font-medium text-indigo-600 truncate">
                          Ricardo Cooper
                        </div>
                        <div class="mt-2 flex items-center text-sm leading-5 text-gray-500">
                          <svg
                            class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884zM18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"
                              clip-rule="evenodd"
                            />
                          </svg>
                          <span class="truncate"
                            ><span
                              class="__cf_email__"
                              data-cfemail="5b2932383a293f34753834342b3e291b3e233a362b373e75383436"
                              >[email&#160;protected]</span
                            ></span
                          >
                        </div>
                      </div>
                      <div class="hidden md:block">
                        <div>
                          <div class="text-sm leading-5 text-gray-900">
                            Applied on
                            <time datetime="2020-01-07">January 7, 2020</time>
                          </div>
                          <div class="mt-2 flex items-center text-sm leading-5 text-gray-500">
                            <svg
                              class="flex-shrink-0 mr-1.5 h-5 w-5 text-green-400"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clip-rule="evenodd"
                              />
                            </svg>
                            Completed phone screening
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <svg class="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fill-rule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
              </a>
            </li>
            <li class="border-t border-gray-200">
              <a
                href="#"
                class="block hover:bg-gray-50 focus:outline-none focus:bg-gray-50 transition duration-150 ease-in-out"
              >
                <div class="flex items-center px-4 py-4 sm:px-6">
                  <div class="min-w-0 flex-1 flex items-center">
                    <div class="flex-shrink-0">
                      <img
                        class="h-12 w-12 rounded-full"
                        src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                    </div>
                    <div class="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
                      <div>
                        <div class="text-sm leading-5 font-medium text-indigo-600 truncate">
                          Kristen Ramos
                        </div>
                        <div class="mt-2 flex items-center text-sm leading-5 text-gray-500">
                          <svg
                            class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884zM18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"
                              clip-rule="evenodd"
                            />
                          </svg>
                          <span class="truncate"
                            ><span
                              class="__cf_email__"
                              data-cfemail="6a011803191e0f0444180b0705192a0f120b071a060f44090507"
                              >[email&#160;protected]</span
                            ></span
                          >
                        </div>
                      </div>
                      <div class="hidden md:block">
                        <div>
                          <div class="text-sm leading-5 text-gray-900">
                            Applied on
                            <time datetime="2020-01-07">January 7, 2020</time>
                          </div>
                          <div class="mt-2 flex items-center text-sm leading-5 text-gray-500">
                            <svg
                              class="flex-shrink-0 mr-1.5 h-5 w-5 text-green-400"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clip-rule="evenodd"
                              />
                            </svg>
                            Completed phone screening
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <svg class="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fill-rule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
              </a>
            </li>
            <li class="border-t border-gray-200">
              <a
                href="#"
                class="block hover:bg-gray-50 focus:outline-none focus:bg-gray-50 transition duration-150 ease-in-out"
              >
                <div class="flex items-center px-4 py-4 sm:px-6">
                  <div class="min-w-0 flex-1 flex items-center">
                    <div class="flex-shrink-0">
                      <img
                        class="h-12 w-12 rounded-full"
                        src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                    </div>
                    <div class="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
                      <div>
                        <div class="text-sm leading-5 font-medium text-indigo-600 truncate">
                          Ted Fox
                        </div>
                        <div class="mt-2 flex items-center text-sm leading-5 text-gray-500">
                          <svg
                            class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884zM18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"
                              clip-rule="evenodd"
                            />
                          </svg>
                          <span class="truncate"
                            ><span
                              class="__cf_email__"
                              data-cfemail="a5d1c0c18bc3cadde5c0ddc4c8d5c9c08bc6cac8"
                              >[email&#160;protected]</span
                            ></span
                          >
                        </div>
                      </div>
                      <div class="hidden md:block">
                        <div>
                          <div class="text-sm leading-5 text-gray-900">
                            Applied on
                            <time datetime="2020-01-07">January 7, 2020</time>
                          </div>
                          <div class="mt-2 flex items-center text-sm leading-5 text-gray-500">
                            <svg
                              class="flex-shrink-0 mr-1.5 h-5 w-5 text-green-400"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clip-rule="evenodd"
                              />
                            </svg>
                            Completed phone screening
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <svg class="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fill-rule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
              </a>
            </li>
            <li class="border-t border-gray-200">
              <a
                href="#"
                class="block hover:bg-gray-50 focus:outline-none focus:bg-gray-50 transition duration-150 ease-in-out"
              >
                <div class="flex items-center px-4 py-4 sm:px-6">
                  <div class="min-w-0 flex-1 flex items-center">
                    <div class="flex-shrink-0">
                      <img
                        class="h-12 w-12 rounded-full"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                    </div>
                    <div class="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
                      <div>
                        <div class="text-sm leading-5 font-medium text-indigo-600 truncate">
                          Ricardo Cooper
                        </div>
                        <div class="mt-2 flex items-center text-sm leading-5 text-gray-500">
                          <svg
                            class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884zM18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"
                              clip-rule="evenodd"
                            />
                          </svg>
                          <span class="truncate"
                            ><span
                              class="__cf_email__"
                              data-cfemail="95e7fcf6f4e7f1fabbf6fafae5f0e7d5f0edf4f8e5f9f0bbf6faf8"
                              >[email&#160;protected]</span
                            ></span
                          >
                        </div>
                      </div>
                      <div class="hidden md:block">
                        <div>
                          <div class="text-sm leading-5 text-gray-900">
                            Applied on
                            <time datetime="2020-01-07">January 7, 2020</time>
                          </div>
                          <div class="mt-2 flex items-center text-sm leading-5 text-gray-500">
                            <svg
                              class="flex-shrink-0 mr-1.5 h-5 w-5 text-green-400"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clip-rule="evenodd"
                              />
                            </svg>
                            Completed phone screening
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <svg class="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fill-rule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
              </a>
            </li>
            <li class="border-t border-gray-200">
              <a
                href="#"
                class="block hover:bg-gray-50 focus:outline-none focus:bg-gray-50 transition duration-150 ease-in-out"
              >
                <div class="flex items-center px-4 py-4 sm:px-6">
                  <div class="min-w-0 flex-1 flex items-center">
                    <div class="flex-shrink-0">
                      <img
                        class="h-12 w-12 rounded-full"
                        src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                    </div>
                    <div class="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
                      <div>
                        <div class="text-sm leading-5 font-medium text-indigo-600 truncate">
                          Kristen Ramos
                        </div>
                        <div class="mt-2 flex items-center text-sm leading-5 text-gray-500">
                          <svg
                            class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884zM18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"
                              clip-rule="evenodd"
                            />
                          </svg>
                          <span class="truncate"
                            ><span
                              class="__cf_email__"
                              data-cfemail="d2b9a0bba1a6b7bcfca0b3bfbda192b7aab3bfa2beb7fcb1bdbf"
                              >[email&#160;protected]</span
                            ></span
                          >
                        </div>
                      </div>
                      <div class="hidden md:block">
                        <div>
                          <div class="text-sm leading-5 text-gray-900">
                            Applied on
                            <time datetime="2020-01-07">January 7, 2020</time>
                          </div>
                          <div class="mt-2 flex items-center text-sm leading-5 text-gray-500">
                            <svg
                              class="flex-shrink-0 mr-1.5 h-5 w-5 text-green-400"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clip-rule="evenodd"
                              />
                            </svg>
                            Completed phone screening
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <svg class="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fill-rule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
              </a>
            </li>
            <li class="border-t border-gray-200">
              <a
                href="#"
                class="block hover:bg-gray-50 focus:outline-none focus:bg-gray-50 transition duration-150 ease-in-out"
              >
                <div class="flex items-center px-4 py-4 sm:px-6">
                  <div class="min-w-0 flex-1 flex items-center">
                    <div class="flex-shrink-0">
                      <img
                        class="h-12 w-12 rounded-full"
                        src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                    </div>
                    <div class="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
                      <div>
                        <div class="text-sm leading-5 font-medium text-indigo-600 truncate">
                          Ted Fox
                        </div>
                        <div class="mt-2 flex items-center text-sm leading-5 text-gray-500">
                          <svg
                            class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884zM18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"
                              clip-rule="evenodd"
                            />
                          </svg>
                          <span class="truncate"
                            ><span
                              class="__cf_email__"
                              data-cfemail="1b6f7e7f357d74635b7e637a766b777e35787476"
                              >[email&#160;protected]</span
                            ></span
                          >
                        </div>
                      </div>
                      <div class="hidden md:block">
                        <div>
                          <div class="text-sm leading-5 text-gray-900">
                            Applied on
                            <time datetime="2020-01-07">January 7, 2020</time>
                          </div>
                          <div class="mt-2 flex items-center text-sm leading-5 text-gray-500">
                            <svg
                              class="flex-shrink-0 mr-1.5 h-5 w-5 text-green-400"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clip-rule="evenodd"
                              />
                            </svg>
                            Completed phone screening
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <svg class="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fill-rule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
              </a>
            </li>
            <li class="border-t border-gray-200">
              <a
                href="#"
                class="block hover:bg-gray-50 focus:outline-none focus:bg-gray-50 transition duration-150 ease-in-out"
              >
                <div class="flex items-center px-4 py-4 sm:px-6">
                  <div class="min-w-0 flex-1 flex items-center">
                    <div class="flex-shrink-0">
                      <img
                        class="h-12 w-12 rounded-full"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                    </div>
                    <div class="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
                      <div>
                        <div class="text-sm leading-5 font-medium text-indigo-600 truncate">
                          Ricardo Cooper
                        </div>
                        <div class="mt-2 flex items-center text-sm leading-5 text-gray-500">
                          <svg
                            class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884zM18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"
                              clip-rule="evenodd"
                            />
                          </svg>
                          <span class="truncate"
                            ><span
                              class="__cf_email__"
                              data-cfemail="b4c6ddd7d5c6d0db9ad7dbdbc4d1c6f4d1ccd5d9c4d8d19ad7dbd9"
                              >[email&#160;protected]</span
                            ></span
                          >
                        </div>
                      </div>
                      <div class="hidden md:block">
                        <div>
                          <div class="text-sm leading-5 text-gray-900">
                            Applied on
                            <time datetime="2020-01-07">January 7, 2020</time>
                          </div>
                          <div class="mt-2 flex items-center text-sm leading-5 text-gray-500">
                            <svg
                              class="flex-shrink-0 mr-1.5 h-5 w-5 text-green-400"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clip-rule="evenodd"
                              />
                            </svg>
                            Completed phone screening
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <svg class="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fill-rule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
              </a>
            </li>
            <li class="border-t border-gray-200">
              <a
                href="#"
                class="block hover:bg-gray-50 focus:outline-none focus:bg-gray-50 transition duration-150 ease-in-out"
              >
                <div class="flex items-center px-4 py-4 sm:px-6">
                  <div class="min-w-0 flex-1 flex items-center">
                    <div class="flex-shrink-0">
                      <img
                        class="h-12 w-12 rounded-full"
                        src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                    </div>
                    <div class="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
                      <div>
                        <div class="text-sm leading-5 font-medium text-indigo-600 truncate">
                          Kristen Ramos
                        </div>
                        <div class="mt-2 flex items-center text-sm leading-5 text-gray-500">
                          <svg
                            class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884zM18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"
                              clip-rule="evenodd"
                            />
                          </svg>
                          <span class="truncate"
                            ><span
                              class="__cf_email__"
                              data-cfemail="d7bca5bea4a3b2b9f9a5b6bab8a497b2afb6baa7bbb2f9b4b8ba"
                              >[email&#160;protected]</span
                            ></span
                          >
                        </div>
                      </div>
                      <div class="hidden md:block">
                        <div>
                          <div class="text-sm leading-5 text-gray-900">
                            Applied on
                            <time datetime="2020-01-07">January 7, 2020</time>
                          </div>
                          <div class="mt-2 flex items-center text-sm leading-5 text-gray-500">
                            <svg
                              class="flex-shrink-0 mr-1.5 h-5 w-5 text-green-400"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clip-rule="evenodd"
                              />
                            </svg>
                            Completed phone screening
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <svg class="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fill-rule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
              </a>
            </li>
            <li class="border-t border-gray-200">
              <a
                href="#"
                class="block hover:bg-gray-50 focus:outline-none focus:bg-gray-50 transition duration-150 ease-in-out"
              >
                <div class="flex items-center px-4 py-4 sm:px-6">
                  <div class="min-w-0 flex-1 flex items-center">
                    <div class="flex-shrink-0">
                      <img
                        class="h-12 w-12 rounded-full"
                        src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                    </div>
                    <div class="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
                      <div>
                        <div class="text-sm leading-5 font-medium text-indigo-600 truncate">
                          Ted Fox
                        </div>
                        <div class="mt-2 flex items-center text-sm leading-5 text-gray-500">
                          <svg
                            class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884zM18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"
                              clip-rule="evenodd"
                            />
                          </svg>
                          <span class="truncate"
                            ><span
                              class="__cf_email__"
                              data-cfemail="780c1d1c561e1700381d00191508141d561b1715"
                              >[email&#160;protected]</span
                            ></span
                          >
                        </div>
                      </div>
                      <div class="hidden md:block">
                        <div>
                          <div class="text-sm leading-5 text-gray-900">
                            Applied on
                            <time datetime="2020-01-07">January 7, 2020</time>
                          </div>
                          <div class="mt-2 flex items-center text-sm leading-5 text-gray-500">
                            <svg
                              class="flex-shrink-0 mr-1.5 h-5 w-5 text-green-400"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clip-rule="evenodd"
                              />
                            </svg>
                            Completed phone screening
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <svg class="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fill-rule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
              </a>
            </li>
            <li class="border-t border-gray-200">
              <a
                href="#"
                class="block hover:bg-gray-50 focus:outline-none focus:bg-gray-50 transition duration-150 ease-in-out"
              >
                <div class="flex items-center px-4 py-4 sm:px-6">
                  <div class="min-w-0 flex-1 flex items-center">
                    <div class="flex-shrink-0">
                      <img
                        class="h-12 w-12 rounded-full"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                    </div>
                    <div class="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
                      <div>
                        <div class="text-sm leading-5 font-medium text-indigo-600 truncate">
                          Ricardo Cooper
                        </div>
                        <div class="mt-2 flex items-center text-sm leading-5 text-gray-500">
                          <svg
                            class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884zM18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"
                              clip-rule="evenodd"
                            />
                          </svg>
                          <span class="truncate"
                            ><span
                              class="__cf_email__"
                              data-cfemail="bdcfd4dedccfd9d293ded2d2cdd8cffdd8c5dcd0cdd1d893ded2d0"
                              >[email&#160;protected]</span
                            ></span
                          >
                        </div>
                      </div>
                      <div class="hidden md:block">
                        <div>
                          <div class="text-sm leading-5 text-gray-900">
                            Applied on
                            <time datetime="2020-01-07">January 7, 2020</time>
                          </div>
                          <div class="mt-2 flex items-center text-sm leading-5 text-gray-500">
                            <svg
                              class="flex-shrink-0 mr-1.5 h-5 w-5 text-green-400"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clip-rule="evenodd"
                              />
                            </svg>
                            Completed phone screening
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <svg class="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fill-rule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
              </a>
            </li>
          </ul>
          <div
            class="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6"
          >
            <div class="hidden sm:block">
              <p class="text-sm leading-5 text-gray-700">
                Showing
                <span class="font-medium">1</span>
                to
                <span class="font-medium">10</span>
                of
                <span class="font-medium">20</span>
                results
              </p>
            </div>
            <div class="flex-1 flex justify-between sm:justify-end">
              <a
                href="#"
                class="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm leading-5 font-medium rounded-md text-gray-700 bg-white hover:text-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150"
              >
                Previous
              </a>
              <a
                href="#"
                class="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm leading-5 font-medium rounded-md text-gray-700 bg-white hover:text-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150"
              >
                Next
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
const getters = mapGetters({ user: 'user' });

export default {
  name: 'Home',
  data() {
    return {
      open: false,
    };
  },
  computed: {
    ...getters,

    checkMyNameLogged() {
      return this.user ? this.user.firstName + ' ' + this.user.lastName : '';
    },
  },
  methods: {
    openDialog(value) {
      this.open = value;
    },
  },
};
</script>
