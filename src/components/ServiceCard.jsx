import React, { memo } from "react";
import Button from "./Button";
import { motion } from "framer-motion";

const ServiceCard = memo(({ url, title, description, reverse }) => {
  return (
    <>
      <motion.div
      initial={{ opacity: 0, x: -100 }} 
      whileInView={{ opacity: 1, x: 0 }} 
      transition={{ duration: 0.7 }}
      viewport={{ once: false, amount: 0.7 }}
        className="place-items-center xs:my-[60px] xs:mx-[20px]
                   md:grid md:grid-cols-3 md:mx-[20px] 
                   xl2:mt-[80px] xl2:mx-[152px]
                   xl3:mt-[80px] xl3:mx[180px]"
      >
        <div className={reverse ? "order-last " : "order-first "}>
          <img
            src={url}
            alt="image"
            className="block mx-auto 
                       xs:w-[275px] xs:h-[275px]
                       md:w-[275px] md:h-[275px] 
                       xl2:w-[346px] xl2:h-[348px]
                       xl3:w-[414px] xl3:h-[414px]"
          />
        </div>

        <div
          className={
            reverse ? "order-first col-span-2" : "order-last col-span-2"
          }
        >
          <div className="text-center md:text-left md:px-[20px]">
            <h2 className="text-[27px] font-semibold leading-[33px] text-primary font-poppins">
              {title}
            </h2>
            <p className="text-black xs:my-[20px] text-[16px] leading-[20px]">
              {description}
            </p>
            <Button name="LEARN MORE" />
          </div>
        </div>
      </motion.div>
    </>
  );
}
);
export default ServiceCard;
