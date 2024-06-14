import React from 'react'
import { motion } from 'framer-motion'

const YourBmi = () => {

    const [calc, setCalc] = React.useState(0)
    const [height, setHeight] = React.useState(0)
    const [weight, setWeight] = React.useState(0)
    const [age, setAge] = React.useState(0)
    const [gender, setGender] = React.useState('')

    const handleSubmit = () => {
        let result = 0;
        if(!height || !weight || !age || (gender !== 'male' || 'female' || 'man' || 'girl')){ //TODO: сделать костыли нормальные, либо чекбокс
            console.log('one is zero')
            return false
        } else{
            result = height / (weight * 2)
            setCalc(result)
        }
            
        
    }

    const vars = {
        hidden: { opacity: 0, y: 50 },
        default: { opacity: 1, y: 0 }
    }

  return (
    <div className='your_bmi'>
        <div className="bmi_form">
            <motion.h1 variants={vars} initial='hidden' whileInView='default' transition={{ delay: 0.5}} viewport={{ once:true }}>INPUT YOUR BMI</motion.h1>
            <motion.h2 variants={vars} initial='hidden' whileInView='default' transition={{ delay: 0.5}} viewport={{ once:true }}>BMI</motion.h2>
            <motion.p variants={vars} initial='hidden' whileInView='default' transition={{ delay: 0.5}} viewport={{ once:true }}>Duo graece ponderum ne, ei mel aliquando. Pro te tamquam nonumes, nam no nemore epicurei</motion.p>
            <form action="" onSubmit={handleSubmit}>
                <motion.input 
                    type="number" placeholder='Height / cm' onChange={(e) => setHeight(Number(e.target.value))}
                     variants={vars} initial='hidden' whileInView='default' transition={{ delay: 0.5}} viewport={{ once:true }} />
                <motion.input 
                    type="number" placeholder='Weight / kg' onChange={(e) => setWeight(Number(e.target.value))}
                     variants={vars} initial='hidden' whileInView='default' transition={{ delay: 0.5}} viewport={{ once:true }} />
                <motion.input 
                    type="number" placeholder='Age' onChange={(e) => setAge(Number(e.target.value))}
                     variants={vars} initial='hidden' whileInView='default' transition={{ delay: 0.5}} viewport={{ once:true }}  />
                <motion.input 
                    type="text" placeholder='Gender' onChange={(e) => setGender(String(e.target.value))}
                     variants={vars} initial='hidden' whileInView='default' transition={{ delay: 0.5}} viewport={{ once:true }} />
            </form>
            <div>{calc}</div>
            <motion.button onClick={() => handleSubmit()}
                variants={vars} initial='hidden' whileInView='default' transition={{ delay: 0.5}} viewport={{ once:true }}
            >Calculate <img src={require('/btnArrow.png')} alt="" /> </motion.button>
        </div>
        <div className="bmi_info">
            <motion.img src={require('/bmitable.png')} alt="" 
                variants={vars} initial='hidden' whileInView='default' transition={{ delay: 0.5}} viewport={{ once:true }} 
            />
        </div>
    </div>
  )
}

export default YourBmi