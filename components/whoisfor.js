import vendor from '../public/images/vendor.png'
import Image from 'next/image'
import logo from '../public/images/logo-07.png'
export const WhoIsItFor = () => {
    return (
        <section className="flex-col mx-auto px-4">
         
          <center>
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12 relative inline-block mx-auto">
          Who is it for?
          <div className="absolute -bottom-2 left-0 w-full h-1 bg-[#FF6B6B] rounded-full"></div>
        </h2>
        </center>

        <div className="flex flex-col gap-6 sm:flex-row w-full items-start justify-evenly">
          {[
            { image:vendor,
              title: "Vendors",
              description: "Get discovered by more people especially event managers for your event services"
            },
            { image:vendor,
              title: "Event Managers",
              description: "Find the best suited vendor for your events. Get to know best prices and services"
            },
            { image:vendor,
              title: "Individual",
              description: "Want to find best services by yourself? we got you covered."
            }
          ].map((card, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-lg w-72"
            >   
             <Image src={logo} height={70} width={70} alt="Image"/>
            <div className='w-full flex flex-row item-center justify-center'>
               <Image src={card.image} height={200} width={200} alt="Image"/>
                </div>
              <h3 className="text-3xl font-semibold text-gray-800 mb-4">
                {card.title}
              </h3>
              <div className='h-[1px] w-full bg-black mt-5 mb-5'/>
              <p className="text-gray-600 text-sm">
                {card.description}
              </p>  
            </div>
          ))}
        </div>
      </section>
    )
}