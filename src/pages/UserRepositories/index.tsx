import { ListUserRepositories } from '../../components/ListUserRepositories';
import { Container } from './styles';
import { motion } from 'framer-motion';


export function UserRepositories() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ ease: 'easeOut', duration: 2 }}
    >
      <Container>
        <ListUserRepositories />
      </Container>
    </motion.div>
  );
}
