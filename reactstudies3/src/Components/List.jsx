function List({itemsList}) {
    return (
        <>
            <h3>Great program languages list</h3>
            { itemsList.length > 0 ?
                (itemsList.map((item, index) => (
                    <p key={index}>{item} - {index}</p>
                ))) :
                (
                    <p>There is no items</p>
                )
            }
        </>
    );
}

export default List