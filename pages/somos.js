import React from "react";

function somos() {
  return (
    <div class="relative max-w-screen-xl mt-24 px-8 md:px-12 lg:px-16 xl:px-32 py-16 mx-auto bg-gray-100 text-gray-900 sm:rounded-lg shadow-lg rounded-lg">
      <div class="absolute right-0 bottom-0 hero-pattern w-64 h-56"></div>
      <div class="relative">
        <div>
          <h2 class="text-center text-gray-800 text-4xl lg:text-5xl font-bold leading-tight">
            ¿Quiénes somos?
          </h2>
          <div class="my-4 mx-auto w-12 h-2 border-4 border-[#0d9488]"></div>
          <div class="text-center text-gray-700 font-light">
            Here are what some of our amazing customers are saying ...
          </div>
        </div>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:mx-12">
          <div class="relative mx-auto mt-8 rounded-lg shadow max-w-sm p-10 bg-gray-100 text-gray-700 leading-snug flex flex-col justify-between">
            <div class="-ml-4">
              <svg
                class="w-8 opacity-25 text-indigo-500"
                xmlns="http://www.w3.org/2000/svg"
                shape-rendering="geometricPrecision"
                text-rendering="geometricPrecision"
                image-rendering="optimizeQuality"
                fill-rule="evenodd"
                clip-rule="evenodd"
                viewBox="0 0 640 640"
                fill="currentColor"
              >
                <path d="M557.133 561.704H442.128c-44.256 0-80.458-36.19-80.458-80.446 0-165.58-42.32-347.485 160.656-399.418 91.95-23.516 115.915 77.753 18.119 84.745-59.647 4.276-71.293 42.804-73.147 101.068h92.269c44.256 0 80.458 36.201 80.458 80.458v130.702c0 45.591-37.3 82.89-82.891 82.89zm-358.032 0H84.096c-44.256 0-80.446-36.19-80.446-80.446 0-165.58-42.331-347.485 160.644-399.418 91.95-23.516 115.915 77.753 18.118 84.745-59.646 4.276-71.292 42.804-73.146 101.068h92.269c44.256 0 80.457 36.201 80.457 80.458v130.702c0 45.591-37.3 82.89-82.89 82.89z" />
              </svg>
            </div>
            <div class="mt-2">
              I felt disorganized. Pieces of paper everywhere. I was constantly
              making new lists, losing old ones, crossing off items and adding
              new ones. I was forever worried things were slipping and not
              getting done. My brain was tired
            </div>
            <div>
              <div class="mx-auto w-full border border-gray-300 my-8"></div>
              <div class="flex items-center">
                <div>
                  <img
                    class="w-12 h-12 rounded-full border-2 border-indigo-400"
                    src="https://avatars2.githubusercontent.com/u/2741?s=64&v=4"
                  />
                </div>
                <div class="ml-4">
                  <div class="font-bold">David H. Hansson</div>
                  <div class="text-sm text-gray-600 mt-1">
                    CTO,{" "}
                    <a href="https://timerse.com/7-steps-to-boost-your-metabolism/">
                      Boosting Metabolism
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="mx-auto mt-8 rounded-lg shadow max-w-sm p-10 bg-gray-100 text-gray-700 leading-snug flex flex-col justify-between">
            <div class="-ml-4">
              <svg
                class="w-8 opacity-25 text-indigo-500"
                xmlns="http://www.w3.org/2000/svg"
                shape-rendering="geometricPrecision"
                text-rendering="geometricPrecision"
                image-rendering="optimizeQuality"
                fill-rule="evenodd"
                clip-rule="evenodd"
                viewBox="0 0 640 640"
                fill="currentColor"
              >
                <path d="M557.133 561.704H442.128c-44.256 0-80.458-36.19-80.458-80.446 0-165.58-42.32-347.485 160.656-399.418 91.95-23.516 115.915 77.753 18.119 84.745-59.647 4.276-71.293 42.804-73.147 101.068h92.269c44.256 0 80.458 36.201 80.458 80.458v130.702c0 45.591-37.3 82.89-82.891 82.89zm-358.032 0H84.096c-44.256 0-80.446-36.19-80.446-80.446 0-165.58-42.331-347.485 160.644-399.418 91.95-23.516 115.915 77.753 18.118 84.745-59.646 4.276-71.292 42.804-73.146 101.068h92.269c44.256 0 80.457 36.201 80.457 80.458v130.702c0 45.591-37.3 82.89-82.89 82.89z" />
              </svg>
            </div>
            <div class="mt-2">
              I felt disorganized. Pieces of paper everywhere. I was constantly
              making new lists, losing old ones, crossing off items and adding
              new ones. I was forever worried things were slipping and not
              getting done. My brain was tired
            </div>
            <div>
              <div class="mx-auto w-full border border-gray-300 my-8"></div>
              <div class="flex items-center">
                <div>
                  <img
                    class="w-12 h-12 rounded-full border-2 border-indigo-400"
                    src="https://avatars0.githubusercontent.com/u/810438?s=100"
                  />
                </div>
                <div class="ml-4">
                  <div class="font-bold">Dan Abramov</div>
                  <div class="text-sm text-gray-600 mt-1">
                    Creator, <a href="https://swift.org/">Java</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default somos;
