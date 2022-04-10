import React, { useState, useEffect } from 'react'
import './table.css'
import { actionTHead, idTHead, nameTHead, emailTHead, addressTHead, balanceTHead, customerTHead, creationTHead, productsTHead,
    statusTHead, totalTHead, categoryTHead, unitTHead, pInCategoryTHead, supplyTHead, amountTHead, requestTHead, completionTHead,
    factoryTHead, actionTBody, idTBody, nameTBody, emailTBody, addressTBody, balanceTBody, customerTBody, creationTBody, productsTBody,
    statusTBody, totalTBody, categoryTBody, unitTBody, pInCategoryTBody, supplyTBody, amountTBody, requestTBody, completionTBody,
    factoryTBody } from './TableExports'
import { icons, Modal } from './'

const Tables = ({ token, privilege, tableId, handleClose, handleShow, show }) => {
    const [ categories, setCategories ] = useState([])
    const [ products, setProducts ] = useState([])
    const [ supplies, setSupplies ] = useState([])
    const [ orders, setOrders ] = useState([])
    const [ customers, setCustomers ] = useState([])
    const [ requests, setRequests ] = useState([])
    const [ editAction, setEditAction ] = useState()

    const getCategories = async (token) => {
        let fetched = []

        const response = await fetch('https://operational-workflow.herokuapp.com/api/category?page=0&size=100&sort=id,desc',
        {
            method: 'GET',
            headers: { 'Content-type': 'application/json',
                        "accepts":"application/json",
                        'Authorization': `Bearer ${token}`,
                     },
        }).then(response => response.json())
            .then(data => {
                data.content.forEach(content => {
                    fetched.push(content)                    
                });
            })
                .catch(error => console.log(error))

        setCategories(fetched)
    }

    const getProducts = async (token) => {
        let fetched = []

        const response = await fetch('https://operational-workflow.herokuapp.com/api/product?page=0&size=100&sort=id,desc',
        {
            method: 'GET',
            headers: { 'Content-type': 'application/json',
                        "accepts":"application/json",
                        'Authorization': `Bearer ${token}`,
                     },
        }).then(response => response.json())
            .then(data => {
                data.content.forEach(content => {
                    fetched.push(content)                    
                });
            })
                .catch(error => console.log(error))

        setProducts(fetched)
    }

    const getSupplies = async (token) => {
        let fetched = []

        const response = await fetch('https://operational-workflow.herokuapp.com/api/supply?page=0&size=100&sort=id,desc',
        {
            method: 'GET',
            headers: { 'Content-type': 'application/json',
                        "accepts":"application/json",
                        'Authorization': `Bearer ${token}`,
                     },
        }).then(response => response.json())
            .then(data => {
                data.content.forEach(content => {
                    fetched.push(content)                    
                });
            })
                .catch(error => console.log(error))

        setSupplies(fetched)
    }

    const getOrders = async (token) => {
        let fetched = []

        const response = await fetch('https://operational-workflow.herokuapp.com/api/order?page=0&size=100&sort=id,desc',
        {
            method: 'GET',
            headers: { 'Content-type': 'application/json',
                        "accepts":"application/json",
                        'Authorization': `Bearer ${token}`,
                     },
        }).then(response => response.json())
            .then(data => {
                data.content.forEach(content => {
                    fetched.push(content)                    
                });
            })
                .catch(error => console.log(error))

        setOrders(fetched)
    }

    const getCustomers = async (token) => {
        let fetched = []
        const response = await fetch('https://operational-workflow.herokuapp.com/api/customer?page=0&size=100&sort=id,desc',
        {
            method: 'GET',
            headers: { 'Content-type': 'application/json',
                        "accepts":"application/json",
                        'Authorization': `Bearer ${token}`,
                     },
        }).then(response => response.json())
            .then(data => {
                data.content.forEach(content => {
                    fetched.push(content)                    
                });
            })
                .catch(error => console.log(error))

        setCustomers(fetched)
    }

    const getRequests = async (token) => {
        let fetched = []

        const response = await fetch('https://operational-workflow.herokuapp.com/api/request?page=0&size=100&sort=id,desc',
        {
            method: 'GET',
            headers: { 'Content-type': 'application/json',
                        "accepts":"application/json",
                        'Authorization': `Bearer ${token}`,
                     },
        }).then(response => response.json())
            .then(data => {
                data.content.forEach(content => {
                    fetched.push(content)                    
                });
            })
                .catch(error => console.log(error))

        setRequests(fetched)
    }

    useEffect(() => {
        if(tableId == 7)
            getCategories(token)
        else if(tableId == 6)
            getProducts(token)
        else if(tableId == 5)
            getSupplies(token)
        else if(tableId == 3)
            getOrders(token)
        else if(tableId == 2)
            getCustomers(token)
        // else if(tableId == 8)
        //     getRequests(token)
    }, [tableId, show]);

    const addSupply = async (toAdd, token) => {
        var newSupply = {}
        const response = await fetch('https://operational-workflow.herokuapp.com/api/supply',
        {
            method: 'POST',
            headers: { 'Content-type': 'application/json',
                        'Authorization': `Bearer ${token}`,
                     },
            body: JSON.stringify(toAdd),
        }).then(response => response.json())
            .then(data => {
                newSupply = data})
                .catch(error => console.log(error))

        setSupplies([...supplies, newSupply])
        console.log('add supply')
        handleClose(0)
    }

    const addOrder = async (toAdd, token) => {
        var newOrder = {}
        const response = await fetch('https://operational-workflow.herokuapp.com/api/order',
        {
            method: 'POST',
            headers: { 'Content-type': 'application/json',
                        'Authorization': `Bearer ${token}`,
                     },
            body: JSON.stringify(toAdd),
        }).then(response => response.json())
            .then(data => {
                newOrder = data})
                .catch(error => console.log(error))

        setOrders([...orders, newOrder])
        console.log('add order')
        handleClose(0)
    }

    const addProduct = async (toAdd, token) => {
        var newProduct = {}
        const response = await fetch('https://operational-workflow.herokuapp.com/api/product',
        {
            method: 'POST',
            headers: { 'Content-type': 'application/json',
                        'Authorization': `Bearer ${token}`,
                     },
            body: JSON.stringify(toAdd),
        }).then(response => response.json())
            .then(data => {
                newProduct = data})
                .catch(error => console.log(error))

        setProducts([...products, newProduct])
        console.log('add product')
        handleClose(0)
    }

    const addCustomer = async (toAdd, token) => {
        var newCustomer = {}
        toAdd.firstName = toAdd.name[0]
        toAdd.lastName = toAdd.name[1]
        const response = await fetch('https://operational-workflow.herokuapp.com/api/customer',
        {
            method: 'POST',
            headers: { 'Content-type': 'application/json',
                        'Authorization': `Bearer ${token}`,
                     },
            body: JSON.stringify(toAdd),
        }).then(response => response.json())
            .then(data => {
                newCustomer = data})
                .catch(error => console.log(error))

        setCustomers([...customers, newCustomer])
        console.log('add customer')
        handleClose(0)
    }

    const addCategory = async (toAdd, token) => {
        var newCategory = {}
        const response = await fetch('https://operational-workflow.herokuapp.com/api/category',
        {
            method: 'POST',
            headers: { 'Content-type': 'application/json',
                        'Authorization': `Bearer ${token}`,
                     },
            body: JSON.stringify(toAdd),
        }).then(response => response.json())
            .then(data => {
                newCategory = data})
                .catch(error => console.log(error))

        setCategories([...categories, newCategory])
        console.log('add category')
        handleClose(0)
    }

    const patchSupplies = async (toEdit, token) => {
        var newSupply = {}

        const response = await fetch('https://operational-workflow.herokuapp.com/api/supply',
        {
            method: 'PATCH',
            headers: { 'Content-type': 'application/json',
                        'Authorization': `Bearer ${token}`,
                     },
            body: JSON.stringify(toEdit),
        }).then(response => response.json())
            .then(data => {
                newSupply = data})
                .catch(error => console.log(error))

        setSupplies(supplies.map(supply => supply.id == toEdit.id ? {...supply, name: toEdit.name, categoryId: toEdit.categoryId} : supply))
        console.log('patch supplies')
        handleClose(0)
    }

    const patchCategories = async (toEdit, token) => {
        var newCategory = {}

        const response = await fetch('https://operational-workflow.herokuapp.com/api/category',
        {
            method: 'PATCH',
            headers: { 'Content-type': 'application/json',
                        'Authorization': `Bearer ${token}`,
                     },
            body: JSON.stringify(toEdit),
        }).then(response => response.json())
            .then(data => {
                newCategory = data})
                .catch(error => console.log(error))

        setCategories(categories.map(category => category.id == toEdit.id ? {...category, name: toEdit.name} : category))
        console.log('patch categories')
        handleClose(0)
    }
    
    const patchProducts = async (toEdit, token) => {
        var newProduct = {}

        const response = await fetch('https://operational-workflow.herokuapp.com/api/product',
        {
            method: 'PATCH',
            headers: { 'Content-type': 'application/json',
                        'Authorization': `Bearer ${token}`,
                     },
            body: JSON.stringify(toEdit),
        }).then(response => response.json())
            .then(data => {
                newProduct = data})
                .catch(error => console.log(error))

        setProducts(products.map(product => product.id == toEdit.id ? {...product, name: toEdit.name, categoryId: toEdit.categoryId, price: toEdit.price} : product))
        console.log('patch products')
        handleClose(0)
    }

    const patchCustomers = async (toEdit, token) => {
        var newCustomer = {}
        toEdit.firstName = toEdit.name[0]
        toEdit.lastName = toEdit.name[1]
        const response = await fetch('https://operational-workflow.herokuapp.com/api/customer',
        {
            method: 'PATCH',
            headers: { 'Content-type': 'application/json',
                        'Authorization': `Bearer ${token}`,
                     },
            body: JSON.stringify(toEdit),
        }).then(response => response.json())
            .then(data => {
                newCustomer = data})
                .catch(error => console.log(error))

        setCustomers(customers.map(customer => customer.customerId == toEdit.customerId ? {address: toEdit.address, balance: toEdit.balance, customerId: toEdit.customerId, email: toEdit.email, firstName: toEdit.firstName, lastName: toEdit.lastName} : customer))
        console.log('patch customers')
        handleClose(0)
    }

    const patchOrders = async (toEdit, token) => {
        var newOrder = {}

        const response = await fetch('https://operational-workflow.herokuapp.com/api/order',
        {
            method: 'PATCH',
            headers: { 'Content-type': 'application/json',
                        'Authorization': `Bearer ${token}`,
                     },
            body: JSON.stringify(toEdit),
        }).then(response => response.json())
            .then(data => {
                newOrder = data})
                .catch(error => console.log(error))

        setOrders(orders.map(order => order.id == toEdit.id ? {...order, orderId: toEdit.orderId, status: toEdit.status} : order))
        console.log('patch orders')
        handleClose(0)
    }

    var columns = {
        action: 1,
        id: 1,
        name: 1,
        email: 1,
        address: 1,
        balance: 1,
        customer: 1,
        creation: 1,
        products: 1,
        status: 1,
        total: 1,
        category: 1,
        unit: 1,
        pInCategory: 1,
        supply: 1,
        amount: 1,
        request: 1,
        completion: 1,
        factory: 1,
    }

    const setColumn = (column) => { columns[column] = 0 }

    var temp

	return (
		<div className='tables'>
			<section className='dp-head d-flex justify-content-between align-items-center'>
				<h1 className='display-6 d-inline px-3'>{tableId == 2 ? 'Customers' : (tableId == 3 ? 'Orders' : (tableId == 5 ? 'Supplies' : (tableId == 6 ? 'Products' : (tableId == 7 ? 'Categories' : 'Requests'))))}</h1>
				{(privilege == 2) ? '' : 
                    ((privilege == 3) ? ((tableId == 5) ? <button onClick={() => handleShow(1)}><span className='px-3'>{ icons.biggerAdd }</span></button> : '') : 
                        <button onClick={() => handleShow(1)}><span className='px-3'>{ icons.biggerAdd }</span></button>)}
                {(show != 0) ? <Modal tableId={tableId} token={token} privilege={privilege} show={show} handleClose={handleClose} addOrder={addOrder} addSupply={addSupply} addProduct={addProduct} addCustomer={addCustomer} addCategory={addCategory} categories={categories} products={products} supplies={supplies} orders={orders} customers={customers} patchSupplies={patchSupplies} patchCategories={patchCategories} patchProducts={patchProducts} patchCustomers={patchCustomers} patchOrders={patchOrders} editAction={editAction} getProducts={getProducts} getCategories={getCategories} getCustomers={getCustomers}/> : ''}
			</section>

			<section className='dp-table table-responsive mx-3 border border-dark rounded'>
				<table className='table table-borderless m-0'>
					<thead>
						<tr>
							{(((temp = actionTHead(privilege, tableId)) == '') ? setColumn('action') : temp)}
							{(((temp = idTHead(privilege, tableId)) == '') ? setColumn('id') : temp)}
							{(((temp = nameTHead(privilege, tableId)) == '') ? setColumn('name') : temp)}
							{(((temp = emailTHead(privilege, tableId)) == '') ? setColumn('email') : temp)}
							{(((temp = addressTHead(privilege, tableId)) == '') ? setColumn('address') : temp)}
							{(((temp = balanceTHead(privilege, tableId)) == '') ? setColumn('balance') : temp)}
							{(((temp = customerTHead(privilege, tableId)) == '') ? setColumn('customer') : temp)}
							{(((temp = creationTHead(privilege, tableId)) == '') ? setColumn('creation') : temp)}
							{(((temp = productsTHead(privilege, tableId)) == '') ? setColumn('products') : temp)}
							{(((temp = statusTHead(privilege, tableId)) == '') ? setColumn('status') : temp)}
							{(((temp = totalTHead(privilege, tableId)) == '') ? setColumn('total') : temp)}
							{(((temp = categoryTHead(privilege, tableId)) == '') ? setColumn('category') : temp)}
							{(((temp = unitTHead(privilege, tableId)) == '') ? setColumn('unit') : temp)}
							{(((temp = pInCategoryTHead(privilege, tableId)) == '') ? setColumn('pInCategory') : temp)}
							{(((temp = supplyTHead(privilege, tableId)) == '') ? setColumn('supply') : temp)}
							{(((temp = amountTHead(privilege, tableId)) == '') ? setColumn('amount') : temp)}
							{(((temp = requestTHead(privilege, tableId)) == '') ? setColumn('request') : temp)}
							{(((temp = completionTHead(privilege, tableId)) == '') ? setColumn('completion') : temp)}
							{(((temp = factoryTHead(privilege, tableId)) == '') ? setColumn('factory') : temp)}
						</tr>
					</thead>
					<tbody>
                        {
                            tableId == 7 ? categories.map(category => {
                                return (
                                    <tr>
                                        {(columns.action == 1) ? actionTBody(privilege, tableId, handleShow, category.id, setEditAction) : null}
                                        {(columns.id == 1) ? idTBody(category.id) : null}
                                        {(columns.name == 1) ? nameTBody(category.name) : null}
                                        {(columns.pInCategory == 1) ? pInCategoryTBody(category.pInCategory) : null}
                                    </tr>
                                )
                            }) : (
                                    tableId == 6 ? products.map(product => {
                                        return (
                                            <tr>
                                                {(columns.action == 1) ? actionTBody(privilege, tableId, handleShow, product.id, setEditAction) : null}
                                                {(columns.id == 1) ? idTBody(product.id) : null}
                                                {(columns.name == 1) ? nameTBody(product.name) : null}
                                                {(columns.category == 1) ? categoryTBody(product.category) : null}
                                                {(columns.unit == 1) ? unitTBody(product.price) : null}
                                            </tr>
                                        )
                                    }) : (
                                            tableId == 2 ? customers.map(customer => {
                                                return (
                                                    <tr>
                                                        {(columns.action == 1) ? actionTBody(privilege, tableId, handleShow, customer.customerId, setEditAction) : null}
                                                        {(columns.id == 1) ? idTBody(customer.customerId) : null}
                                                        {(columns.name == 1) ? nameTBody(`${customer.firstName} ${customer.lastName}`) : null}
                                                        {(columns.email == 1) ? emailTBody(customer.email) : null}
                                                        {(columns.address == 1) ? addressTBody(customer.address) : null}
                                                        {(columns.balance == 1) ? balanceTBody(customer.balance) : null}
                                                    </tr>
                                                )
                                            }) : (
                                                    tableId == 3 ? orders.map(order => {
                                                        return (
                                                            <tr>
                                                                {(columns.action == 1) ? actionTBody(privilege, tableId, handleShow, order.id, setEditAction) : null}
                                                                {(columns.id == 1) ? idTBody(order.id) : null}
                                                                {(columns.customer == 1) ? customerTBody(order.customer) : null}
                                                                {(columns.creation == 1) ? creationTBody(order.creationDate) : null}
                                                                {(columns.products == 1) ? productsTBody(order.basket) : null}
                                                                {(columns.status == 1) ? statusTBody(order.status) : null}
                                                                {(columns.total == 1) ? totalTBody(order.totalPrice) : null}
                                                            </tr>
                                                        )
                                                    }) : (
                                                            tableId == 5 ? supplies.map(supply => {
                                                                return (
                                                                    <tr>
                                                                        {(columns.action == 1) ? actionTBody(privilege, tableId, handleShow, supply.id, setEditAction) : null}
                                                                        {(columns.id == 1) ? idTBody(supply.id) : null}
                                                                        {(columns.name == 1) ? nameTBody(supply.name) : null}
                                                                        {(columns.category == 1) ? categoryTBody(supply.category) : null}
                                                                        {(columns.amount == 1) ? amountTBody(supply.amount) : null}
                                                                    </tr>
                                                                )
                                                            }) : ''
                                                    )
                                            )
                                        )
                                )
                            // }) : (
                            //     tableId == 8 ? requests.map(request => {
                            //         return (
                            //             <tr>
                            //                 {(columns.action == 1) ? actionTBody(privilege, tableId, handleShow) : null}
                            //                 {(columns.id == 1) ? idTBody(customer.id) : null}
                            //                 {(columns.supply == 1) ? supplyTBody(content.supply) : null}
                            //                 {(columns.amount == 1) ? amountTBody(supply.amount) : null}
                            //                 {((columns.request == 1) ? requestTBody(content.request) : null)}
                            //                 {((columns.completion == 1) ? completionTBody(content.completion) : null)}
                            //                 {((columns.factory == 1) ? factoryTBody(content.factory) : null)}
                            //             </tr>
                            //         )
                            //     }) : ''
                            // )
                            // }) : (
                        }
					</tbody>
				</table>
			</section>
		</div>
	)
}

export default Tables
