import { SelectedPage, type ClassType } from "@/shared/types";
import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.png";
import image5 from "@/assets/image5.png";
import image6 from "@/assets/image6.png";
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import Class from "./Class";

const classes: Array<ClassType> = 
[ 
  { name: "Weight Training Classes", 
    description: "Build strength and endurance with expert-guided weight training routines designed to help you tone muscles and boost overall fitness.", 
    image: image1, }, 
  { name: "Yoga Classes", 
    description: "Improve flexibility, balance, and mindfulness through calming yoga sessions that restore both body and mind.", 
    image: image2, }, 
  { name: "Ab Core Classes", 
    description: "Strengthen your core with focused workouts targeting abs, obliques, and lower back for better stability and posture.", 
    image: image3, }, 
  { name: "Adventure Classes", 
    description: "Experience exciting, dynamic workouts that combine fun activities with fitness to challenge both body and mind.", 
    image: image4, }, 
  { name: "Fitness Classes", 
    description: "Stay active with versatile group workouts that mix cardio, strength, and endurance for a full-body training experience.", 
    image: image5, }, 
  { name: "Training Classes", 
    description: "Take your fitness to the next level with structured training programs led by expert coaches who keep you motivated.", 
    image: image6, } 
  ];

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const OurClasses = ({ setSelectedPage }: Props) => {
  return (
    <section id="ourclasses" className="w-full bg-red-200 py-40">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
      >
        <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="text-red-950 md:w-3/5">
            <HText>OUR CLASSES</HText>
            <p className="py-5">
              Our classes are designed to fit every lifestyle and fitness goal—from strength and conditioning to yoga and flexibility, high-intensity cardio, dance fitness, martial arts, and wellness sessions. Whether you’re looking to build muscle, burn calories, improve balance, or simply have fun while staying active, there’s a class for everyone led by expert trainers who keep you motivated every step of the way.
            </p>
          </div>
        </motion.div>
        <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
          <ul className="w-[2800px] whitespace-nowrap">
            {classes.map((item: ClassType, index) => (
              <Class
                key={`${item.name}-${index}`}
                name={item.name}
                description={item.description}
                image={item.image}
              />
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default OurClasses;