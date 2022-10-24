import Item from "./Items";

function ListOfCars (props) {
    const {carBrand, yearOfCar} = props;
    return (
        <>
            <ul>
                <Item carBrand={carBrand} yearOfCar={yearOfCar}/>
            </ul>
        </>
    );
}

export default ListOfCars