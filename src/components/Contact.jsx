const Contact = () => {
  return (
    <>
      <section id="contact" className="relative">
        <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
          <div className="lg:w-2/5 md:w-1/2 bg-gray-800 rounded-lg overflow-hidden sm:mr-10 p-4 flex items-end ml-[010%] justify-center">
           
            <div className="bg-gray-800 flex flex-wrap py-8 rounded shadow-md">
              <div className="lg:w-1/2 px-6">
                <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                  ADDRESS
                </h2>
                <p className="mt-1">                  Lagos
                  <br />
                  Nigeria
                </p>
              </div>
              <div className="lg:w-1/2 px-3 mt-4 lg:mt-0">
                <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                  EMAIL
                </h2>
                <a className="text-indigo-400 leading-relaxed">
                  aniyikayeolamide3@gmail.com
                </a>
                <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">
                  PHONE
                </h2>
                <p className="leading-relaxed">+234 8114147940</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Contact;
