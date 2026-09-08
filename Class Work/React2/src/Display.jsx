function Display(props) {
    return (
        <>
            <h1>Display component</h1>
            <p>{props.count}</p>
        </>
    );
}

export default Display;

// Assignment:
// remove last name;
// Project 1 : make a react project name CounterApp with ui : counter 4 button of add, subtract , multiply by 2, divide by 2
// project 2 : create a react product ui 10 to 15 products , add filter like price or catagoryiphone,samsung galaxy, washing machine
// there will be an array named product
// {products.filter((profuct)=>product.price>=50000).map(()=>{
    // return (<p>{product.name}<p>)
    //})}