import React from "react";

function Article() {
  return (
    <div>
      <div className="py-16 bg-white">
        <div className="container m-auto px-8 text-gray-600 md:px-12 xl:px-8">
          <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
            <div className="md:5/12 lg:w-5/12">
              <img
                className="lg:h-60 md:h-36 w-full object-cover object-center scale-110 transition-all duration-400 hover:scale-100"
                src="https://images.unsplash.com/photo-1574879948818-1cfda7aa5b1a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
                alt="..."
              />
            </div>
            <div className="md:7/12 lg:w-6/12">
              <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                About US!
              </h2>
              <p className="mt-6 text-gray-600">
                If you don’t like rum, don’t let that spoil your tiki fun. While
                rum is almost synonymous with tiki drinks, we feel it’s time to
                keep expanding the definition, it’s time to add some tequila.
                Let’s keep this party rolling with the Tropical Paloma!
              </p>
              <p className="mt-4 text-gray-600">
                {" "}
                Nobis minus voluptatibus pariatur dignissimos libero quaerat
                iure expedita at? Asperiores nemo possimus nesciunt dicta veniam
                aspernatur quam mollitia.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Article;
