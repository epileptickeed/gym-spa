import React, { useEffect, useRef } from 'react'
import partSliderImg from '../../../data/partSliderImg.json'
import { motion, useMotionValue, animate } from 'framer-motion'
import PartOfItems from './PartOfItems'

const PartOfOurFamily = () => {

    const [width, setWidth] = React.useState(0)
    const ref = useRef<HTMLDivElement>(null) 

    const xTranslation = useMotionValue(0)

    
    useEffect(() => {
        let controls 

        if(ref.current){
            setWidth(ref.current?.scrollWidth - ref.current?.offsetWidth || 0);
        }
        

        let finalPosition = -width / 1.24
        
        controls = animate(xTranslation, [0, finalPosition], {
            ease: 'linear',
            duration: 15,
            repeat: Infinity,
            repeatType: 'loop',
            repeatDelay: 0,
        });
        
        return () => {
            return controls.stop()
        }

    }, [xTranslation, width])

    const vars = {
        hidden: { opacity: 0, y: 50 },
        default: { opacity: 1, y: 0 }
    }

  return (
    <div className='partofus'>
        <motion.div className="partHeader">
            <motion.h1 variants={vars} initial='hidden' whileInView='default' transition={{ delay: 0.5}} viewport={{ once:true }}>be a part of our fit family</motion.h1>
            <motion.h2 variants={vars} initial='hidden' whileInView='default' transition={{ delay: 0.5}} viewport={{ once:true }}>PART</motion.h2>
            <motion.p variants={vars} initial='hidden' whileInView='default' transition={{ delay: 0.5}} viewport={{ once:true }}>Training helps you think and feel better. join us!</motion.p>
        </motion.div>
        <motion.div className="partSlider" ref={ref} style={{x: xTranslation}}> 
            {[...partSliderImg, ...partSliderImg].map((item, index) => {
                return (
                    <PartOfItems {...item} key={index} />
                )
            })}
        </motion.div>
    </div>
  )
}

export default PartOfOurFamily