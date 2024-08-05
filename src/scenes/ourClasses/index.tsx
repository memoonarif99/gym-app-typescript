import { SelectedPage, ClassType } from "@/shared/types";
import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.png";
import image5 from "@/assets/image5.png";
import image6 from "@/assets/image6.png";
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import Class from "./Class";
import AnchorLink from "react-anchor-link-smooth-scroll";

const classes: Array<ClassType> = [
  {
    name: "Weight Training Classes",
    description:
      "Join our weight training classes to build strength and tone your muscles. Our experienced trainers will guide you through effective workout routines.",
    image: image1,
  },
  {
    name: "Yoga Classes",
    description:
      "Experience the physical and mental benefits of yoga in our relaxing and rejuvenating yoga classes. Improve flexibility, balance, and mindfulness.",
    image: image2,
  },
  {
    name: "Ab Core Classes",
    description:
      "Get a strong core and sculpted abs with our dynamic ab core classes. Our trainers will help you target and strengthen your core muscles.",
    image: image3,
  },
  {
    name: "Adventure Classes",
    description:
      "Embark on thrilling adventure classes that will challenge your limits and provide a unique fitness experience. Push your boundaries and have fun!",
    image: image4,
  },
  {
    name: "Fitness Classes",
    description:
      "Join our fitness classes to improve your overall fitness level and achieve your health goals. Our diverse workouts cater to all fitness levels.",
    image: image5,
  },
  {
    name: "Training Classes",
    description:
      "Take your training to the next level with our specialized training classes. Whether you're an athlete or fitness enthusiast, our classes will help you reach your peak performance.",
    image: image6,
  },
];

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const OurClasses = ({ setSelectedPage }: Props) => {
  return (
    <section id="classes" className="w-full bg-primary-100 py-20">
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
          <div className="md:w-3/5">
            <HText>OUR CLASSES</HText>
            <p className="py-5">
              Fringilla a sed at suspendisse ut enim volutpat. Rhoncus vel est
              tellus quam porttitor. Mauris velit euismod elementum arcu neque
              facilisi. Amet semper tortor facilisis metus nibh. Rhoncus sit
              enim mattis odio in risus nunc.
            </p>
          </div>
        </motion.div>
        <div className="mt-10 h-[350px] w-full overflow-x-auto overflow-y-hidden">
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
