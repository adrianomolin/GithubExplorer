import { ListRepositories } from '../../components/ListRepositories';
import { RepositoriesSearch } from '../../components/RepositoriesSearch';
import { Container } from './styles';
import { motion } from 'framer-motion';

export function Repositories() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ ease: 'easeOut', duration: 2 }}
    >
      <RepositoriesSearch />
      <Container>
        <ListRepositories />
      </Container>
    </motion.div>
  );
}
