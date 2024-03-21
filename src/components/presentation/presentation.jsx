import PropTypes from 'prop-types';
import style from './presentation.module.scss';

const Presentation = ({name, age}) => (
    <>
        <p className={style['welcome-msg']}>
            Bienvenue <span className={style['target']}>{name}</span> sur l'application React !
        </p>
        <p className={style['age-msg']}>
            Vous avez <span className={style['target']}>{age} ans</span>
        </p>
    </>
);

Presentation.defaultProps = {
    age: 18
};

Presentation.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number
}

export default Presentation;