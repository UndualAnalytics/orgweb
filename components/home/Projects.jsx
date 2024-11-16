// components/ProjectGallery.js
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

const ProjectGallery = () => {
  const projects = [
    {
      id: 1,
      name: "Audium",
      image: "/images/home/project-1.png", // replace with the actual image path
    },
    {
      id: 2,
      name: "Next",
      image: "/images/home/project-2.png", // replace with the actual image path
    },
    // Add more projects as needed
  ];

  return (
    <section className="bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <header className="md:flex justify-between items-center mb-12">
          <div>
            <p className="text-primaryColor font-semibold mb-2">Recent Works Gallery</p>
            <h2 className="primary-heading font-bold">Let’s Look Our Recent Project Gallery</h2>
          </div>
          <button className="flex items-center px-4 py-2 border border-white rounded-full hover:bg-white hover:text-black transition">
            View More Projects
            <ArrowUpRight className="ml-2" />
          </button>
        </header>

        <div className="space-y-16">
          {projects.map((project, index) => (
            <div key={project.id} className="flex items-center justify-between space-x-12">
              <div className="flex flex-col items-start ">
                <span className="text-6xl font-bold">{String(index + 1).padStart(2, '0')}</span>
                <p className="text-xl font-medium mt-2">{project.name}</p>
              </div>
              <div className="bg-yellow-50 ">
              <Image
                src={project.image}
                alt={project.name}
                width={400}
                height={400}
                className=" rounded-lg shadow-lg"
              />
                </div>
              <div>
              <button className="flex items-center justify-center w-12 h-12 rounded-full border border-white hover:bg-white hover:text-black transition">
                <ArrowUpRight />
              </button>
                </div>
              
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectGallery;
