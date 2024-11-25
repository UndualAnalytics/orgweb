
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
            <span className="text-primaryColor font-medium">Our Expertise</span>
          </div>
          
          <p className="text-lg text-gray-300 max-w-3xl">
          At Undual Analytics, we specialize in delivering cost-effective, cutting-edge solutions in software development, data analytics, and artificial intelligence to clients worldwide. Our services are designed to empower businesses with innovative tools and actionable insights tailored to their unique needs. Here's how we achieve this:
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