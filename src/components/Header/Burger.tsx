import { motion } from 'framer-motion';
import { BurgerButton, BurgerPath } from './styles';

export const MenuToggle = ({ toggle, isOpen }: { toggle: () => void; isOpen: boolean }) => (
  <BurgerButton aria-label="Mobile Menu" onClick={toggle}>
    <motion.svg
      width="23"
      height="18"
      viewBox="0 0 23 18"
      initial={false}
      animate={isOpen ? 'open' : 'closed'}
    >
      <BurgerPath
        d="M 2 2.5 L 20 2.5"
        className="top"
        variants={{
          closed: { d: "M 2 2.5 L 20 2.5" },
          open: { d: "M 3 16.5 L 17 2.5" }
        }}
      />
      <BurgerPath
        d="M 2 9.423 L 20 9.423"
        opacity="1"
        className="middle"
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 }
        }}
      />
      <BurgerPath
        d="M 2 16.346 L 20 16.346"
        className="bottom"
        variants={{
          closed: { d: "M 2 16.346 L 20 16.346" },
          open: { d: "M 3 2.5 L 17 16.346" }
        }}
      />
    </motion.svg>
  </BurgerButton>
);