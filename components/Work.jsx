"use client";
import Link from "next/link";
import { Button } from "./ui/button";

/**swiper react componente */

import { Swiper, SwiperSlide } from "swiper/react";

/**swiper estilos */
import "swiper/css";
import "swiper/css/pagination";

/**modulos reqeridos */
import { Pagination } from "swiper/modules";
/**components */

import ProjectCard from "@/components/ProjectCard";

const projectData = [
  {
    image: "/work/1.png",
    category: "react js",
    name: "Red Valore Web",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, nulla.",
    link: "/",
    github: "/",
  },
  {
    image: "/work/2.png",
    category: "next js",
    name: "Csnet",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, nulla.",
    link: "/",
    github: "/",
  },
  {
    image: "/work/3.png",
    category: "html - css - js",
    name: "todoconectar",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, nulla.",
    link: "/",
    github: "/",
  },
  {
    image: "/work/4.png",
    category: "next js - Tailwind CSS",
    name: "portfolio",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, nulla.",
    link: "/",
    github: "/",
  },
  {
    image: "/work/4.png",
    category: "next js",
    name: "portfolio",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, nulla.",
    link: "/",
    github: "/",
  },
  {
    image: "/work/4.png",
    category: "next js",
    name: "portfolio",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, nulla.",
    link: "/",
    github: "/",
  },
];

const Work = () => {
  return (
    <section className="relative mb-12 xl:mb-48">
      <div className="container mx-auto">
        {/* texto*/}
        <div className=" max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center items-center xl:items-start">
          <h2 className="section-title mb-4">Ultimos Proyectos</h2>
          <p className="subtitle mb-8">
            Lorem ipsum dolor sit ame adsa reger wrwe.
          </p>
          <Link href="/projects">
            <Button>Todos los proyectos</Button>
          </Link>
        </div>
        {/* slider*/}
        <div className="xl:max-w-[1000px] xl:absolute right-0 top-0">
          <Swiper
            className="h-[480px]"
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
            }}
            spaceBetween={30}
            modules={[Pagination]}
            pagination={{ clickable: true }}
          >
            {projectData.slice(0, 4).map((project, index) => {
              return (
                <SwiperSlide key={index}>
                  <ProjectCard project={project} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Work;
