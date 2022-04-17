import './modal.css'
import { icons, TableMenu } from '.'
import { useState, useEffect } from 'react'

const ModalReports = ({ tableId, token, privilege, show, handleClose, addOrder, addSupply, addProduct, addCustomer, addCategory, categories, products, supplies, orders, customers, patchSupplies, patchCategories, patchProducts, patchCustomers, patchOrders, editAction, tableFilter, setTableFilter }) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [customerId, setCustomerId] = useState(0)
    const [status, setStatus] = useState('')
    const [productId, setProductId] = useState(0)
    const [quantity, setQuantity] = useState('')
    const [categoryId, setCategoryId] = useState(0)
    const [designFile, setDesignFile] = useState(null);
    const [price, setPrice] = useState(0)
    const [balance, setBalance] = useState(0)
    const [address, setAddress] = useState('')

    const [basket, setBasket] = useState([])

    useEffect(() => {
        setName('')
        setEmail('')
        setCustomerId(0)
        setStatus('')
        setProductId(0)
        setQuantity('')
        setCategoryId(0)
        setPrice(0)
        setBalance(0)
        setAddress('')
        setBasket([])
    }, [show])
    
    const addToBasket = (pId, pAmount) => {
        let amountInt = parseInt(pAmount)
        console.log(basket.length)
        if(basket.length > 0) {
            if(basket.filter(item => item.productId != pId).length == basket.length) {
                setBasket([...basket, {productId: pId, quantity: amountInt}])
                return
            } else {
                setBasket(basket.map(item => item.productId == pId ? {...item, quantity: item.quantity + amountInt} : item))
                return
            }
        } else {
            setBasket([{productId: pId, quantity: amountInt}])
            return
        }
    }

    if(show == 0) {
        return <div className='modal-form'></div>
    } else if(show == 1) {
        if(privilege == 1) {
            if(tableId == 2) {
                return (
                    <div className='modal-form'>
                        <div className='d-flex justify-content-end pt-3 px-3'>
                            <button className='close px-0' onClick={handleClose}><span>{ icons.x }</span></button>
                        </div>
                        <form className="row px-4 py-1">
                            <div className="row input-group mx-auto my-2 py-3">
                                <label className="list-attr" for="name">Name</label>
                                <div className="form-row">
                                    <input className="form-control" type="text" id="name" onChange={(e) => setName(e.target.value.split(' '))} placeholder='Name Surname'/>
                                </div>
                            </div>
                            <div className="row input-group mx-auto my-2 py-3">
                                <label className="list-attr" for="email">Email</label>
                                <div className="form-row">
                                    <input className="form-control" type="text" id="email" onChange={(e) => setEmail(e.target.value)} placeholder='example@owmas.com'/>
                                </div>
                            </div>
                            <div className="row input-group mx-auto my-2 py-3">
                                <label className="list-attr" for="balance">Balance</label>
                                <div className="form-row d-flex">
                                    <div className="input-group-prepend d-flex">
                                        <div className="input-group-text">$</div>
                                    </div>
                                    <input className="form-control" type="text" id="balance" onChange={(e) => setBalance(parseFloat(e.target.value))} placeholder='2,000.00'/>
                                </div>
                            </div>
                            <div className="row input-group mx-auto my-2 py-3">
                                <label className="list-attr" for="address">Address</label>
                                <div className="form-row">
                                    <textarea className="form-control" id="address" onChange={(e) => setAddress(e.target.value)} placeholder='109 Hollywood Avenue, Birmingham, B35 4HE' rows="4"/>
                                </div>
                            </div>
                            <div className="row input-group py-4 d-flex justify-content-end">
                                <button type='button' className='btn btn-info col-2 text-dark submit' onClick={() => addCustomer({address, balance, customerId, email, name}, token)}>Submit</button>
                            </div>
                        </form>
                    </div>
                )
            } else if(tableId == 3) {
                return (
                    <div className='modal-form'>
                        <div className='d-flex justify-content-end pt-3 px-3'>
                            <button className='close px-0' onClick={handleClose}><span>{ icons.x }</span></button>
                        </div>
                        <form className="row px-4 py-1">
                            <div className="row input-group mx-auto my-2 py-3">
                                <label className="list-attr" for="customer">Customer</label>
                                <div className="form-row">
                                    <select className="form-control" id="customers" onChange={(e) => setCustomerId(parseInt(e.target.value))}>
                                        <option selected disabled hidden>Choose customer</option>
                                        {
                                            customers.map((customer) => (<option value={`${customer.customerId}`}>{`${customer.firstName} ${customer.lastName}`}</option>))
                                        }
                                    </select>
                                </div>
                            </div>
                            <div className="row input-group mx-auto my-2 py-3">
                                <label className="list-attr" for="products">Products</label>
                                <div className="form-row d-flex">
                                    <div className="col-9">
                                        <select className="form-control" id="products" onChange={(e) => setProductId(parseInt(e.target.value))}>
                                            <option selected disabled hidden>Choose product</option>
                                            {
                                                products.map((product) => (<option value={`${product.id}`}>{`${product.name}`}</option>))
                                            }
                                        </select>
                                    </div>
                                    <div className="col-2">
                                        <input className="form-control" type="text" id="amnt" placeholder='0' onChange={(e) => setQuantity(e.target.value)}/>
                                    </div>
                                    <div className="col-1 d-flex align-items-end">
                                        <button className="form-buttons" type="button" onClick={() => addToBasket(productId, quantity)}><span>{ icons.arrowDown }</span></button>
                                    </div>
                                </div>
                            
                                <ul className="list-group pt-2 px-3 mx-auto">
                                {
                                    basket.map((product) => (<li className="list-group-item container d-flex justify-content-start align-items-center"><button className="form-buttons col-1" type="button" onClick={() => setBasket(basket.filter((item) => product.productId != item.productId))}><span>{ icons.delete }</span></button><span className="col-5">{products.find(element => element.id == product.productId).name}</span><div className="col-6 d-flex justify-content-end"><span className="badge badge-primary badge-pill">{product.quantity}</span></div></li>))
                                }
                                </ul>
                            </div>
                            {/* <div className="row input-group mx-auto my-2 py-3">
                                <label className="list-attr" for="design">Design File</label>
                                <div className="form-row">
                                    <input type="file" className="form-control-file py-1" onChange={(e) => setDesignFile(e.target.files[0])} id="design"/>
                                </div>
                            </div> */}
                            <div className="row input-group mx-auto my-2 py-3">
                                <label className="list-attr" for="order-status">Order Status</label>
                                <div className="form-row">
                                    <select className="form-control" id="order-status" onChange={(e) => setStatus(e.target.value)}>
                                        <option selected disabled hidden>Select order status</option>
                                        <option>Waiting for Production</option>
                                        <option>Waiting for Graphics Designer</option>
                                        <option>Shipping to Warehouse</option>
                                        <option>Waiting for Deliver</option>
                                        <option>Delivered</option>
                                    </select>
                                </div>
                            </div>
                            <div className="row input-group py-4 d-flex justify-content-end">
                                <button type='button' className='btn btn-info col-2 text-dark submit' onClick={() => addOrder({customerId, status, basket}, token)}>Submit</button>
                            </div>
                        </form>
                    </div>
                )
            } else if(tableId == 5) {
                return (
                    <div className='modal-form'>
                        <div className='d-flex justify-content-end pt-3 px-3'>
                            <button className='close px-0' onClick={handleClose}><span>{ icons.x }</span></button>
                        </div>
                        <form className="row px-4 py-1">
                            <div className="row input-group mx-auto my-2 py-3">
                                <label className="list-attr" for="name">Name</label>
                                <div className="form-row">
                                    <input className="form-control" type="text" id="name" onChange={(e) => setName(e.target.value)} placeholder='HP 712A White Ink'/>
                                </div>
                            </div>
                            <div className="row input-group mx-auto my-2 py-3">
                                <label className="list-attr" for="category">Category</label>
                                <div className="form-row">
                                    <select className="form-control" id="products" onChange={(e) => setCategoryId(parseInt(e.target.value))}>
                                            <option selected disabled hidden>Choose category</option>
                                            {
                                                categories.map((category) => (<option value={`${category.id}`}>{`${category.name}`}</option>))
                                            }
                                        </select>
                                </div>
                            </div>
                            <div className="row input-group py-4 d-flex justify-content-end">
                                <button type='button' onClick={() => console.log(addSupply({name, categoryId}, token))} className='btn btn-info col-2 text-dark submit'>Add</button>
                            </div>
                        </form>
                    </div>
                )
            } else if(tableId == 6) {
                return (
                    <div className='modal-form'>
                        <div className='d-flex justify-content-end pt-3 px-3'>
                            <button className='close px-0' onClick={handleClose}><span>{ icons.x }</span></button>
                        </div>
                        <form className="row px-4 py-1">
                            <div className="row input-group mx-auto my-2 py-3">
                                <label className="list-attr" for="category">Category</label>
                                <div className="form-row">
                                    <select className="form-control" id="category" onChange={(e) => setCategoryId(parseInt(e.target.value))}>
                                        <option selected disabled hidden>Choose category</option>
                                        {
                                            categories.map((category) => (<option value={`${category.id}`}>{`${category.name}`}</option>))
                                        }
                                    </select>
                                </div>
                            </div>
                            <div className="row input-group mx-auto my-2 py-3">
                                <label className="list-attr" for="name">Name</label>
                                <div className="form-row">
                                    <input className="form-control" type="text" id="name" onChange={(e) => setName(e.target.value)} placeholder='Cake (Covered with Cellophane)'/>
                                </div>
                            </div>
                            <div className="row input-group mx-auto my-2 py-3">
                                <label className="list-attr" for="price">Unit Price</label>
                                <div className="form-row d-flex">
                                    <div className="input-group-prepend d-flex">
                                        <div className="input-group-text">$</div>
                                    </div>
                                    <input className="form-control" type="text" id="price" onChange={(e) => setPrice(parseFloat(e.target.value))} placeholder='5.00'/>
                                </div>
                            </div>
                            <div className="row input-group py-4 d-flex justify-content-end">
                                <button type='button' onClick={() => addProduct({categoryId, name, price}, token)} className='btn btn-info col-2 text-dark submit'>Add</button>
                            </div>
                        </form>
                    </div>
                )
            } else if(tableId == 7) {
                return (
                    <div className='modal-form'>
                        <div className='d-flex justify-content-end pt-3 px-3'>
                            <button className='close px-0' onClick={handleClose}><span>{ icons.x }</span></button>
                        </div>
                        <form className="row px-4 py-1">
                            <div className="row input-group mx-auto my-2 py-3">
                                <label className="list-attr" for="name">Name</label>
                                <div className="form-row">
                                    <input className="form-control" type="text" id="name" onChange={(e) => setName(e.target.value)} placeholder='Sticker'/>
                                </div>
                            </div>
                            <div className="row input-group py-4 d-flex justify-content-end">
                                <button type='button' onClick={() => addCategory({name}, token)} className='btn btn-info col-2 text-dark submit'>Add</button>
                            </div>
                        </form>
                    </div>
                )
            }
        } else if(privilege == 3) {
            if(tableId == 5) {
                return (
                    <div className='modal-form'>
                        <div className='d-flex justify-content-end pt-3 px-3'>
                            <button className='close px-0' onClick={handleClose}><span>{ icons.x }</span></button>
                        </div>
                        <form className="row px-4 py-1">
                            <div className="row input-group mx-auto my-2 py-3">
                                <label className="list-attr" for="product">Product</label>
                                <div className="form-row">
                                    <select className="form-control" id="product">
                                        <option selected disabled hidden>Choose product</option>
                                        {
                                            products.map((product) => (<option value={`${product.id}`}>{`${product.name}`}</option>))
                                        }
                                    </select>
                                </div>
                            </div>
                            <div className="row input-group mx-auto my-2 py-3">
                                <label className="list-attr" for="amnt">Amount</label>
                                <div className="form-row">
                                    <input className="form-control" type="text" id="amnt" placeholder='0'/>
                                </div>
                            </div>
                            <div className="row input-group py-4 d-flex justify-content-end">
                                <button type='submit' className='btn btn-info col-2 text-dark submit'>Add</button>
                            </div>
                        </form>
                    </div>
                )
            }

        }
    } else if(show == 2) {
        return (
            <div className='modal-form'>
                <div className='d-flex justify-content-end pt-3 px-3'>
                    <button className='close px-0' onClick={handleClose}><span>{ icons.x }</span></button>
                </div>
                <form className="row px-4 py-3 rounded">
                    <p className="py-2">Are you sure you want to <span className="list-attr">delete</span> this entry?</p>
                    <div className="row input-group py-2 d-flex justify-content-end">
                        <button type='submit' className='btn btn-info col-2 text-dark submit'>Delete</button>
                    </div>
                </form>
            </div>
        )
    } else if(show == 3) {
        return (
            <TableMenu privilege={privilege} tableId={tableId} handleClose={handleClose} tableFilter={tableFilter} setTableFilter={setTableFilter} />
        )
    } else if(show == 12) {
        return (
            <div className='modal-form'>
                <div className='d-flex justify-content-end pt-3 px-3'>
                    <button className='close px-0' onClick={handleClose}><span>{ icons.x }</span></button>
                </div>
                <form className="row px-4 py-1">
                    <div className="row input-group mx-auto my-2 py-3">
                        <label className="list-attr" for="name">New Name</label>
                        <div className="form-row">
                            <input className="form-control" type="text" id="name" onChange={(e) => setName(e.target.value.split(' '))} placeholder={`Current: ${customers.find(customer => editAction == customer.customerId).firstName} ${customers.find(customer => editAction == customer.customerId).lastName}`}/>
                        </div>
                    </div>
                    <div className="row input-group mx-auto my-2 py-3">
                        <label className="list-attr" for="email">New Email</label>
                        <div className="form-row">
                            <input className="form-control" type="text" id="email" onChange={(e) => setEmail(e.target.value)} placeholder={`Current: ${customers.find(customer => editAction == customer.customerId).email}`}/>
                        </div>
                    </div>
                    <div className="row input-group mx-auto my-2 py-3">
                        <label className="list-attr" for="balance">New Balance</label>
                        <div className="form-row d-flex">
                            <div className="input-group-prepend d-flex">
                                <div className="input-group-text">$</div>
                            </div>
                            <input className="form-control" type="text" id="balance" onChange={(e) => setBalance(parseFloat(e.target.value))} placeholder={`Current: ${customers.find(customer => editAction == customer.customerId).balance}`}/>
                        </div>
                    </div>
                    <div className="row input-group mx-auto my-2 py-3">
                        <label className="list-attr" for="address">New Address</label>
                        <div className="form-row">
                            <textarea className="form-control" id="address" onChange={(e) => setAddress(e.target.value)} placeholder={`Current: ${customers.find(customer => editAction == customer.customerId).address}`} rows="4"/>
                        </div>
                    </div>
                    <div className="row input-group py-4 d-flex justify-content-end">
                        <button type='button' className='btn btn-info col-2 text-dark submit' onClick={() => patchCustomers({address: (address ? address : customers.find(customer => editAction == customer.customerId).address), balance: (balance ? balance : customers.find(customer => editAction == customer.customerId).balance), customerId: editAction, email: (email ? email : customers.find(customer => editAction == customer.customerId).email), name: (name ? name : customers.find(customer => editAction == customer.customerId).name)}, token)}>Edit</button>
                    </div>
                </form>
            </div>
        )
    } else if(show == 13) {
        return (
            <div className='modal-form'>
                <div className='d-flex justify-content-end pt-3 px-3'>
                    <button className='close px-0' onClick={handleClose}><span>{ icons.x }</span></button>
                </div>
                <form className="row px-4 py-1">
                    <div className="row input-group mx-auto my-2 py-3">
                        <label className="list-attr" for="order-status">New Order Status</label>
                        <div className="form-row">
                            <select className="form-control" id="order-status" onChange={(e) => setStatus(e.target.value)}>
                                <option selected disabled hidden>{`Current: ${orders.find(order => editAction == order.id).status}`}</option>
                                <option value='Waiting for Production'>Waiting for Production</option>
                                <option value='Waiting for Graphics Designer'>Waiting for Graphics Designer</option>
                                <option value='Shipping to Warehouse'>Shipping to Warehouse</option>
                                <option value='Waiting for Deliver'>Waiting for Deliver</option>
                                <option value='Delivered'>Delivered</option>
                            </select>
                        </div>
                    </div>
                    <div className="row input-group py-4 d-flex justify-content-end">
                        <button type='button' className='btn btn-info col-2 text-dark submit' onClick={() => patchOrders({orderId: editAction, status: (status ? status : orders.find(order => editAction == order.id).status)}, token)}>Edit</button>
                    </div>
                </form>
            </div>
        )
    } else if(show == 15) {
        return (
            <div className='modal-form'>
                <div className='d-flex justify-content-end pt-3 px-3'>
                    <button className='close px-0' onClick={handleClose}><span>{ icons.x }</span></button>
                </div>
                <form className="row px-4 py-1">
                    <div className="row input-group mx-auto my-2 py-3">
                        <label className="list-attr" for="name">New Name</label>
                        <div className="form-row">
                            <input className="form-control" type="text" id="name" onChange={(e) => setName(e.target.value)} placeholder={`Current: ${supplies.find(supply => editAction == supply.id).name}`}/>
                        </div>
                    </div>
                    <div className="row input-group mx-auto my-2 py-3">
                        <label className="list-attr" for="category">New Category</label>
                        <div className="form-row">
                            <select className="form-control" id="category" onChange={(e) => setCategoryId(parseInt(e.target.value))}>
                                    <option selected disabled hidden>{`Current: ${supplies.find(supply => editAction == supply.id).category.name}`}</option>
                                    {
                                        categories.map((category) => (<option value={`${category.id}`}>{`${category.name}`}</option>))
                                    }
                                </select>
                        </div>
                    </div>
                    <div className="row input-group py-4 d-flex justify-content-end">
                        <button type='button' onClick={() => console.log(patchSupplies({categoryId: (categoryId ? categoryId : supplies.find(supply => editAction == supply.id).category.id), id: editAction, name: (name ? name : supplies.find(supply => editAction == supply.id).name)}, token))} className='btn btn-info col-2 text-dark submit'>Edit</button>
                    </div>
                </form>
            </div>
        )
    } else if(show == 16) {
        return (
            <div className='modal-form'>
                <div className='d-flex justify-content-end pt-3 px-3'>
                    <button className='close px-0' onClick={handleClose}><span>{ icons.x }</span></button>
                </div>
                <form className="row px-4 py-1">
                    <div className="row input-group mx-auto my-2 py-3">
                        <label className="list-attr" for="category">New Category</label>
                        <div className="form-row">
                            <select className="form-control" id="category" onChange={(e) => setCategoryId(parseInt(e.target.value))}>
                                <option selected disabled hidden>{`Current: ${products.find(product => editAction == product.id).category.name}`}</option>
                                {
                                    categories.map((category) => (<option value={`${category.id}`}>{`${category.name}`}</option>))
                                }
                            </select>
                        </div>
                    </div>
                    <div className="row input-group mx-auto my-2 py-3">
                        <label className="list-attr" for="name">New Name</label>
                        <div className="form-row">
                            <input className="form-control" type="text" id="name" onChange={(e) => setName(e.target.value)} placeholder={`Current: ${products.find(product => editAction == product.id).name}`}/>
                        </div>
                    </div>
                    <div className="row input-group mx-auto my-2 py-3">
                        <label className="list-attr" for="price">New Unit Price</label>
                        <div className="form-row d-flex">
                            <div className="input-group-prepend d-flex">
                                <div className="input-group-text">$</div>
                            </div>
                            <input className="form-control" type="text" id="price" onChange={(e) => setPrice(parseFloat(e.target.value))} placeholder={`Current: $${products.find(product => editAction == product.id).price.toFixed(2)}`}/>
                        </div>
                    </div>
                    <div className="row input-group py-4 d-flex justify-content-end">
                        <button type='button' onClick={() => patchProducts({categoryId: (categoryId ? categoryId : products.find(product => editAction == product.id).category.id), id: editAction, name: (name ? name : products.find(product => editAction == product.id).name), price: (price ? price : products.find(product => editAction == product.id).price)}, token)} className='btn btn-info col-2 text-dark submit'>Edit</button>
                    </div>
                </form>
            </div>
        )
    } else if(show == 17) {
        return (
            <div className='modal-form'>
                <div className='d-flex justify-content-end pt-3 px-3'>
                    <button className='close px-0' onClick={handleClose}><span>{ icons.x }</span></button>
                </div>
                <form className="row px-4 py-1">
                    <div className="row input-group mx-auto my-2 py-3">
                        <label className="list-attr" for="name">New Name</label>
                        <div className="form-row">
                            <input className="form-control" type="text" id="name" onChange={(e) => setName(e.target.value)} placeholder={`Current: ${categories.find(category => editAction == category.id).name}`}/>
                        </div>
                    </div>
                    <div className="row input-group py-4 d-flex justify-content-end">
                        <button type='button' onClick={() => console.log(patchCategories({id: editAction, name: (name ? name : categories.find(category => editAction == category.id).name)}, token))} className='btn btn-info col-2 text-dark submit'>Edit</button>
                    </div>
                </form>
            </div>
        )
    } else if(show == 23) {
        return (
            <div className='modal-form'>
                <div className='d-flex justify-content-end pt-3 px-3'>
                    <button className='close px-0' onClick={handleClose}><span>{ icons.x }</span></button>
                </div>
                <form className="row px-4 py-3 rounded">
                    <p className="py-2">Are you sure you want to set status as <span className="list-attr">Shipping to Warehouse</span>?</p>
                    <div className="row input-group py-2 d-flex justify-content-end">
                        <button type='button' className='btn btn-info col-2 text-dark submit' onClick={() => patchOrders({orderId: editAction, status: 'Shipping to Warehouse'}, token)}>Update</button>
                    </div>
                </form>
            </div>
        )
    } else if(show == 330) {
        return (
            <div className='modal-form'>
                <div className='d-flex justify-content-end pt-3 px-3'>
                    <button className='close px-0' onClick={handleClose}><span>{ icons.x }</span></button>
                </div>
                <form className="row px-4 py-3 rounded">
                    <p className="py-2">Are you sure you want to set status as <span className="list-attr">Waiting for Deliver</span>?</p>
                    <div className="row input-group py-2 d-flex justify-content-end">
                        <button type='button' className='btn btn-info col-2 text-dark submit' onClick={() => patchOrders({orderId: editAction, status: 'Waiting for Deliver'}, token)}>Update</button>
                    </div>
                </form>
            </div>
        )
    } else if(show == 331) {
        return (
            <div className='modal-form'>
                <div className='d-flex justify-content-end pt-3 px-3'>
                    <button className='close px-0' onClick={handleClose}><span>{ icons.x }</span></button>
                </div>
                <form className="row px-4 py-3 rounded">
                    <p className="py-2">Are you sure you want to set status as <span className="list-attr">Delivered</span>?</p>
                    <div className="row input-group py-2 d-flex justify-content-end">
                        <button type='button' className='btn btn-info col-2 text-dark submit' onClick={() => patchOrders({orderId: editAction, status: 'Delivered'}, token)}>Update</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default ModalReports