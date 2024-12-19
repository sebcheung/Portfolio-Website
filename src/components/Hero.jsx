import {motion} from 'framer-motion';

import { styles } from '../styles';
import { ComputersCanvas } from './canvas';

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div className={`${styles.paddingX} absolute inset-0 
      top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]"></div>
          <div className="w-1 sm:h-80 h-40 violet-gradient"></div>
        </div>

        <div>
          <h1 className={`${styles.heroHeadText}`}>
            Hi, I'm <span className="text-[#915eff]">Sebastian
              </span></h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I'm a college student majoring in CS with<br className="sm:block hidden" />
            a concentration in AI. I hope to build projects<br className="sm:block hidden" />
            that use AI and Machine Learning techniques while<br className="sm:block hidden" />
            developing other fun projects as well!<br className="sm:block hidden" />
            Glad to have you on the journey!
          </p>
        </div>
      </div>
        
      <ComputersCanvas />
    </section>
  )
}

export default Hero