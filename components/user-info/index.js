import PropTypes from 'prop-types';
import styles from './user-info.module.css';

const PersonDetail = (props) => {
  const { type } = props.personDetails;
  return (
    <>
      <div>
        <p className={styles.userName}>{type}</p>
        <p>
          FrontEnd Developer
          <br />
        </p>
      </div>
    </>
  );
};

PersonDetail.propTypes = {
  name: PropTypes.string,
  photo: PropTypes.string,
  type: PropTypes.string,
};

export default PersonDetail;
