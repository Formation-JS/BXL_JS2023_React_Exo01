import PropTypes from 'prop-types';

const Presentation = ({name, age}) => (
    <>
        <p>Bienvenue {name} sur l'application React !</p>
        <p>Vous avez {age} ans</p>
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