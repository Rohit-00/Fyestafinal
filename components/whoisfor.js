export const WhoIsItFor = () => {
    return (
        <section className="flex-col mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12 relative inline-block mx-auto bg-green-400">
          Who is it for?
          <div className="absolute -bottom-2 left-0 w-full h-1 bg-[#FF6B6B] rounded-full"></div>
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Vendors",
              description: "Get discovered by more people especially event managers for your event services"
            },
            {
              title: "Event Managers",
              description: "Find the best suited vendor for your events. Get to know best prices and services"
            },
            {
              title: "Individual",
              description: "Want to find best services by yourself? we got you covered."
            }
          ].map((card, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                {card.title}
              </h3>
              <p className="text-gray-600">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    )
}