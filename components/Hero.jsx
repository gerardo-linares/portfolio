import Link from "next/link";
import { Button } from "./ui/button";
import { Download, Send } from "lucide-react";
import {
  RiBriefcase4Fill,
  RiTeamFill,
  RiTodoFill,
  RiArrowDownSLine,
} from "react-icons/ri";
import DevImg from "./DevImg";
import Badge from "./Badge";
import Socials from "./Socials";

const Hero = () => {
  return (
    <section className="py-12 xl:py-24 h-[84vh] xl:pt-28 bg-hero bg-no-repeat bg-bottom bg-cover dark:bg-none">
      <div className="container mx-auto">
        <div className="flex justify-between gap-x-8">
          {/*texto */}
          <div className="flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left">
            <div className="text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]">
              Desarrollador Web
            </div>
            <h1 className="h1">Hola, Soy Gerardo Linares</h1>
            <p className="subtitle max-w-[490px] mx-auto xl:mx-0">
              Un apasionado desarrollador Full Stack. Dedicado al desarrollo de
              Apps, disfruto creando soluciones creativas y funcionales para
              problemas complejos."
            </p>
            {/*botones */}
            <div className="flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12">
              <Link href="/contact">
                <Button className="gap-x-2">
                  Contactame
                  <Send size={18} />
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="secondary" className="gap-x-2">
                  Descaga mi CV
                  <Download size={18} />
                </Button>
              </Link>
            </div>
            {/*Redes */}
            <Socials
              containerStyles="flex gap-x-6 mx-auto xl:mx-0"
              iconsStyles="text-foreground text-[22px] hover:text-primary transition-all"
            />
          </div>
          {/*imagen */}
          <div className="hidden xl:flex relative">
            {/*badge 1 */}
            <Badge
              containerStyles="absolute top-[24%] -left-[5rem]"
              icon={<RiBriefcase4Fill />}
              endCountNum={2}
              badgeText="Años de Experiencia"
            />
            {/*badge 2*/}
            <Badge
              containerStyles="absolute top-[80%] -left-[1rem]"
              icon={<RiTodoFill />}
              endCountNum={11}
              badgeText="Proyectos Finalizados"
            />
            {/*badge 3 */}
            <Badge
              containerStyles="absolute top-[55%] -right-8"
              icon={<RiTeamFill />}
              endCountNum={21}
              badgeText="Clientes Felicess"
            />
            <div className="bg-hero_shape2_light dark:bg-hero_shape2_dark w-[500px] h-[500px] bg-no-repeat absolute top-8 -right-2"></div>
            <DevImg
              containerStyles="bg-hero_shape w-[510px] h-[640px] bg-no-repeat relative bg-center right-4"
              imgSrc="/hero/developer.png"
            />
          </div>
        </div>
        {/*icono*/}
        <div className="hidden md:flex absolute left-2/4 bottom-44 xl:bottom-12">
          <RiArrowDownSLine className="text-3xl text-primary" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
