import { useMemo, useRef, useState } from "react";

const AddProduct = () => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [products, setProducts] = useState([])

    const nameRef = useRef()

    const handleSubmit = () => {
        const product = {
            name: name,
            price: Number(price),
        }
        setProducts([...products, product])

        setName('')
        setPrice('')

        nameRef.current.focus()
    }

    const total = useMemo(() => {
        const result = products.reduce((result, product) => result + product.price, 0)
        console.log(">>Tính")
        return result
    }, [products])

    return (
        <div>
            <h1>Add Product</h1>
            <input
                type="text"
                placeholder="Enter name..."
                value={ name }
                onChange={ (event) => setName(event.target.value) }
                ref={ nameRef}
            />
            <br />
            <input
                type="text"
                placeholder="Enter price..."
                value={ price }
                onChange={ (event) => setPrice(event.target.value) }
            />
            <br />
            <button onClick={ handleSubmit }>Add</button>
            <br />
            <h3>Total: { total }</h3>
            <ul>
            { products && products.map((product, index) => (
                <li key={ index }>
                    { product.name} : { product.price }
                </li>    
            ))}
            </ul>
            
        </div>    
    )
}

export default AddProduct;