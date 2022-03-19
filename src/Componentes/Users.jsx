import React, { useState, useEffect } from 'react';
const Users = ({titulo, classN}) => {
    const [user, setUser] = useState([])
    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch("https://randomuser.me/api/")
        .then(response => {
            return response.json()
        })
        .then(res => {
            setUser(res.results[0])
            setLoading(false)
        })
    },[])
    useEffect(() => {
        fetch('https://api.mercadolibre.com/items/MLA841413632')
        .then(response => {
            return response.json()
        })
        .then(res => {
            setProduct(res)
            setLoading(false)
        })
    }, [])
    if(loading){
        return (
            <>
                <p className='text-danger'><i className='bi bi-asterisk'></i>Buscando Información...</p>
            </>
        )
    }
    if(user.gender){
        if(product.id){
            return (
                <div className={classN}>
                    <h2>{titulo}</h2>
                    <img className='rounded-circle border border-light border-3' alt={`Imagen de usuario de ${user.name.first}`}  src={user.picture.large}></img>
                    <p className='mb-4'>{`${user.name.title} ${user.name.first}`}</p>
                    <p><i className='fs-3 bi bi-envelope'> </i>{`${user.email} `}</p>
                    <p className='mb-5'><i className='bi bi-key f-3'> </i>{user.login.password}</p>
                    <h2>Producto</h2>
                    <img className='border border-light border-3' alt={`Imagen del product ${product.title}`}  src={product.pictures[0].url}></img>
                    <p className='mb-4'>{`${product.title}`}</p>
                    <p className='mb-4'>{`$${product.base_price}`}</p>
                </div>
            )   
        }else{
            return (
                <div className={classN}>
                    <h2>User</h2>
                    <img className='rounded-circle border border-light border-3' alt={`Imagen de usuario de ${user.name.first}`}  src={user.picture.large}></img>
                    <p className='mb-4'>{`${user.name.title} ${user.name.first}`}</p>
                    <p><i className='fs-3 bi bi-envelope'> </i>{`${user.email} `}</p>
                    <p className='mb-5'><i className='bi bi-key f-3'> </i>{user.login.password}</p>
                    <h2>Producto</h2>
                    <p className='text-danger'><i className='bi bi-asterisk'></i>No se encontró el producto.</p>
                </div>
            )
        }
    }else{
        return (
            <div className={classN}>
                <h2>Users</h2>
                <p className='text-danger'><i className='bi bi-asterisk'></i>No se encontró el usuario.</p>
            </div>
        )
    }
}

export default Users