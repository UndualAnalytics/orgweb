
import ContactForm from '../ContactUs/ContactForm';
import Accordion from './Accordion';

const Contact = () => {


  return (
    <div className="bg-black text-white py-16">
      <div className="container mx-auto px-4 max-w-6xl md:flex">
        <div className='md:w-[50%] md:mr-10'>
             {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-6 h-0.5 bg-primaryColor"></div>
            <span className="text-primaryColor font-medium">What we do</span>
          </div>
          
          <p className="text-lg text-gray-300 max-w-3xl">
            As a website designer we provide affordable website design services to our clients all over the world with best services. Our services include; small business website design services
          </p>
        </div>

        {/* Accordion Steps List */}
        <Accordion />
        </div>
       <div className='md:w-[50%]'>
       <ContactForm />
       </div>
       
        
      </div>
    </div>
  );
};

export default Contact;