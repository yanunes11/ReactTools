import PropTypes from 'prop-types';

function Item (props) {
    const {carBrand, yearOfCar} = props;
    return (
        <>
            <li>My car is a {carBrand} - year: {yearOfCar}</li>
        </>
    );
}

Item.propTypes = {
    carBrand: PropTypes.string.isRequired,
    yearOfCar: PropTypes.number
}

Item.defaultProps = {
    carBrand: "Sem Marca",
    yearOfCar: 0
}

export default Item;