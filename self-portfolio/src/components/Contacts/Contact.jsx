import React from "react";

function Contact() {
  const submitForm = (e) => {
    e.preventDefault();
  };
  return (
    <div className="container min-w-full bg-gray-100">
      <div className="flex justify-center items-center min-h-screen">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-4xl font-bold text-black">
            Let's{" "}
            <span className="bg-clip-text bg-gradient-to-br from-[#FF8660] to-[#8000FF] text-transparent">
              talk
            </span>
          </h1>
          <p className="text-lg font-light text-black mb-5 mt-5 w-[90%]">
            I am available for freelance work. Connect with me via email:
          </p>
          <form class="w-[90%] max-w-lg " handleSubmit={submitForm}>
            <div class="flex flex-wrap -mx-3 mb-6">
              <div class="w-full px-3">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-password"
                >
                  Nickname
                </label>
                <input
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="nick"
                  type="text"
                />
              </div>
            </div>
            <div class="flex flex-wrap -mx-3 mb-6">
              <div class="w-full px-3">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-password"
                >
                  E-mail
                </label>
                <input
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="email"
                  type="email"
                />
              </div>
            </div>
            <div class="flex flex-wrap mb-6">
              <div class="w-full">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-password"
                >
                  Message
                </label>
                <textarea
                  class=" p-3 appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-[100px] sm:h-48 resize-none "
                  id="message"
                ></textarea>
              </div>
            </div>
            <div class="md:flex md:items-center">
              <div class="md:w-1/3">
                <button
                  class="shadow bg-teal-400 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                  type="submit"
                >
                  Send
                </button>
              </div>
              <div class="md:w-2/3"></div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
