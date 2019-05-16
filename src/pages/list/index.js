/**
 * Routes:
 *    - ./src/routes/PrivateRoute.js
 */
import styles from './list.css';
import { connect } from "dva";
const List = (props) => {
  console.log(props);
  return (
    <div className={styles.normal}>
      <h1>Page list</h1>
    </div>
  );
}

export default connect(({ login }) => ({ login }))(List);
