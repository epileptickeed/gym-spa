import React from 'react'
import { motion } from 'framer-motion'


type PartItemsProps = {
    img: string,
    id: number
}

const PartOfItems = ({ img, id }: PartItemsProps) => {


    const vars = {
        hidden: { opacity: 0, y: 50},
        show: (id: number) => ({ 
            opacity: 1,
            y: 0,
            transition: {
                delay: 0.10 * id
            }
        })
    }

  return (
    <motion.div
        variants={vars} custom={id} initial='hidden' whileInView='show' transition={{ delay: 0.5}} viewport={{ once:true }}
    >
        <img src={img} alt="" />
    </motion.div>
  )
}

export default PartOfItems