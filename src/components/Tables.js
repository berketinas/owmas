import React, { useState, useEffect } from 'react'
import './table.css'
import { actionTHead, idTHead, nameTHead, emailTHead, addressTHead, balanceTHead, customerTHead, creationTHead, productsTHead,
    statusTHead, totalTHead, categoryTHead, unitTHead, pInCategoryTHead, supplyTHead, amountTHead, requestTHead, completionTHead,
    factoryTHead, actionTBody, idTBody, nameTBody, emailTBody, addressTBody, balanceTBody, customerTBody, creationTBody, productsTBody,
    statusTBody, totalTBody, categoryTBody, unitTBody, pInCategoryTBody, supplyTBody, amountTBody, requestTBody, completionTBody,
    factoryTBody } from './TableExports'
import { icons, Modal } from './'

const Tables = ({ token, privilege, tableId, handleClose, handleShow, show, customers, orders, supplies, products, categories, table, tableFilter, setTableFilter, setDBUpdate, setClearFilter }) => {
    const [editAction, setEditAction] = useState()

    const addSupply = async (toAdd) => {
        let newSupply = {}
        await fetch('https://operational-workflow.herokuapp.com/api/supply',
        {
            method: 'POST',
            headers: { 'Content-type': 'application/json',
                        'Authorization': `Bearer ${token}`,
                     },
            body: JSON.stringify(toAdd),
        }).then(response => response.json())
            .then(data => {
                newSupply = data
                setDBUpdate(true)
            })
                .catch(error => console.log(error))

        console.log('add supply')
        handleClose()
    }

    const addOrder = async (toAdd) => {
        let newOrder = {}
        await fetch('https://operational-workflow.herokuapp.com/api/order',
        {
            method: 'POST',
            headers: { 'Content-type': 'application/json',
                        'Authorization': `Bearer ${token}`,
                     },
            body: JSON.stringify(toAdd),
        }).then(response => response.json())
            .then(data => {
                newOrder = data
                setDBUpdate(true)
            })
                .catch(error => console.log(error))

        console.log('add order')
        handleClose()
    }

    const addProduct = async (toAdd) => {
        let newProduct = {}
        await fetch('https://operational-workflow.herokuapp.com/api/product',
        {
            method: 'POST',
            headers: { 'Content-type': 'application/json',
                        'Authorization': `Bearer ${token}`,
                     },
            body: JSON.stringify(toAdd),
        }).then(response => response.json())
            .then(data => {
                newProduct = data
                setDBUpdate(true)
            })
                .catch(error => console.log(error))

        console.log('add product')
        handleClose()
    }

    const addCustomer = async (toAdd) => {
        let newCustomer = {}
        toAdd.firstName = toAdd.name[0]
        toAdd.lastName = toAdd.name[1]
        await fetch('https://operational-workflow.herokuapp.com/api/customer',
        {
            method: 'POST',
            headers: { 'Content-type': 'application/json',
                        'Authorization': `Bearer ${token}`,
                     },
            body: JSON.stringify(toAdd),
        }).then(response => response.json())
            .then(data => {
                newCustomer = data
                setDBUpdate(true)
            })
                .catch(error => console.log(error))

        console.log('add customer')
        handleClose()
    }

    const addCategory = async (toAdd) => {
        let newCategory = {}
        await fetch('https://operational-workflow.herokuapp.com/api/category',
        {
            method: 'POST',
            headers: { 'Content-type': 'application/json',
                        'Authorization': `Bearer ${token}`,
                     },
            body: JSON.stringify(toAdd),
        }).then(response => response.json())
            .then(data => {
                newCategory = data
                setDBUpdate(true)
            })
                .catch(error => console.log(error))

        console.log('add category')
        handleClose()
    }

    const patchSupplies = async (toEdit) => {
        let newSupply = {}

        await fetch('https://operational-workflow.herokuapp.com/api/supply',
        {
            method: 'PATCH',
            headers: { 'Content-type': 'application/json',
                        'Authorization': `Bearer ${token}`,
                     },
            body: JSON.stringify(toEdit),
        }).then(response => response.json())
            .then(data => {
                newSupply = data
                setDBUpdate(true)
            })
                .catch(error => console.log(error))

        console.log(table)
        handleClose()
    }

    const patchCategories = async (toEdit) => {
        let newCategory = {}

        await fetch('https://operational-workflow.herokuapp.com/api/category',
        {
            method: 'PATCH',
            headers: { 'Content-type': 'application/json',
                        'Authorization': `Bearer ${token}`,
                     },
            body: JSON.stringify(toEdit),
        }).then(response => response.json())
            .then(data => {
                newCategory = data
                setDBUpdate(true)
            })
                .catch(error => console.log(error))

        console.log('patch categories')
        handleClose()
    }
    
    const patchProducts = async (toEdit) => {
        let newProduct = {}

        await fetch('https://operational-workflow.herokuapp.com/api/product',
        {
            method: 'PATCH',
            headers: { 'Content-type': 'application/json',
                        'Authorization': `Bearer ${token}`,
                     },
            body: JSON.stringify(toEdit),
        }).then(response => response.json())
            .then(data => {
                newProduct = data
                setDBUpdate(true)
            })
                .catch(error => console.log(error))

        console.log('patch products')
        handleClose()
    }

    const patchCustomers = async (toEdit) => {
        let newCustomer = {}
        if(toEdit.name) {
            toEdit.firstName = toEdit.name[0]
            toEdit.lastName = toEdit.name[1]
        }
        await fetch('https://operational-workflow.herokuapp.com/api/customer',
        {
            method: 'PATCH',
            headers: { 'Content-type': 'application/json',
                        'Authorization': `Bearer ${token}`,
                     },
            body: JSON.stringify(toEdit),
        }).then(response => response.json())
            .then(data => {
                newCustomer = data
                setDBUpdate(true)
            })
                .catch(error => console.log(error))

        console.log('patch customers')
        handleClose()
    }

    const patchOrders = async (toEdit) => {
        let newOrder = {}

        await fetch('https://operational-workflow.herokuapp.com/api/order',
        {
            method: 'PATCH',
            headers: { 'Content-type': 'application/json',
                        'Authorization': `Bearer ${token}`,
                     },
            body: JSON.stringify(toEdit),
        }).then(response => response.json())
            .then(data => {
                newOrder = data
                setDBUpdate(true)
            })
                .catch(error => console.log(error))

        console.log('patch orders')
        handleClose()
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
		<div className='tables d-flex'>
            <div className='tableArea col-12'>
                <section className='dp-head d-flex justify-content-between align-items-center'>
                    <h1 className='display-6 d-inline px-3'>{tableId == 2 ? 'Customers' : (tableId == 3 ? 'Orders' : (tableId == 5 ? 'Supplies' : (tableId == 6 ? 'Products' : (tableId == 7 ? 'Categories' : 'Requests'))))}</h1>
                    <span className='d-flex'>
                        <button className='clear align-self-end me-1 rounded px-3' onClick={() => {setClearFilter(true)}}><h6 className='d-inline'>Clear Filter</h6></button>
                        {(privilege == 2) ? '' : 
                            ((privilege == 3) ? ((tableId == 5) ? <button onClick={() => handleShow(1)}><span className='px-3'>{ icons.biggerAdd }</span></button> : '') : 
                                <button onClick={() => handleShow(1)}><span className='px-2'>{ icons.biggerAdd }</span></button>)}
                        {<button onClick={() => handleShow(3)}><span className='pe-3'>{ icons.hamburger }</span></button>}
                    </span>
                    <Modal tableId={tableId} token={token} privilege={privilege} show={show} handleClose={handleClose} addOrder={addOrder} addSupply={addSupply} addProduct={addProduct} addCustomer={addCustomer} addCategory={addCategory} categories={categories} products={products} supplies={supplies} orders={orders} customers={customers} patchSupplies={patchSupplies} patchCategories={patchCategories} patchProducts={patchProducts} patchCustomers={patchCustomers} patchOrders={patchOrders} editAction={editAction} tableFilter={tableFilter} setTableFilter={setTableFilter} />
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
                                // console.log(table.content)
                                tableId == 7 ? table.content.map(row => {
                                    return (
                                        <tr>
                                            {(columns.action == 1) ? actionTBody(privilege, tableId, handleShow, row.id, setEditAction) : null}
                                            {(columns.id == 1) ? idTBody(row.id) : null}
                                            {(columns.name == 1) ? nameTBody(row.name) : null}
                                            {(columns.pInCategory == 1) ? pInCategoryTBody(row.pInCategory) : null}
                                        </tr>
                                    )
                                }) : (
                                        tableId == 6 ? table.content.map(row => {
                                            return (
                                                <tr>
                                                    {(columns.action == 1) ? actionTBody(privilege, tableId, handleShow, row.id, setEditAction) : null}
                                                    {(columns.id == 1) ? idTBody(row.id) : null}
                                                    {(columns.name == 1) ? nameTBody(row.name) : null}
                                                    {(columns.category == 1) ? categoryTBody(row.category) : null}
                                                    {(columns.unit == 1) ? unitTBody(row.price) : null}
                                                </tr>
                                            )
                                        }) : (
                                                tableId == 2 ? table.content.map(row => {
                                                    return (
                                                        <tr>
                                                            {(columns.action == 1) ? actionTBody(privilege, tableId, handleShow, row.customerId, setEditAction) : null}
                                                            {(columns.id == 1) ? idTBody(row.customerId) : null}
                                                            {(columns.name == 1) ? nameTBody(`${row.firstName} ${row.lastName}`) : null}
                                                            {(columns.email == 1) ? emailTBody(row.email) : null}
                                                            {(columns.address == 1) ? addressTBody(row.address) : null}
                                                            {(columns.balance == 1) ? balanceTBody(row.balance) : null}
                                                        </tr>
                                                    )
                                                }) : (
                                                        tableId == 3 ? table.content.map(row => {
                                                            return (
                                                                <tr>
                                                                    {(columns.action == 1) ? actionTBody(privilege, tableId, handleShow, row.id, setEditAction) : null}
                                                                    {(columns.id == 1) ? idTBody(row.id) : null}
                                                                    {(columns.customer == 1) ? customerTBody(row.customer) : null}
                                                                    {(columns.creation == 1) ? creationTBody(row.creationDate) : null}
                                                                    {(columns.products == 1) ? productsTBody(row.basket) : null}
                                                                    {(columns.status == 1) ? statusTBody(row.status) : null}
                                                                    {(columns.total == 1) ? totalTBody(row.totalPrice) : null}
                                                                </tr>
                                                            )
                                                        }) : (
                                                                tableId == 5 ? table.content.map(row => {
                                                                    return (
                                                                        <tr>
                                                                            {(columns.action == 1) ? actionTBody(privilege, tableId, handleShow, row.id, setEditAction) : null}
                                                                            {(columns.id == 1) ? idTBody(row.id) : null}
                                                                            {(columns.name == 1) ? nameTBody(row.name) : null}
                                                                            {(columns.category == 1) ? categoryTBody(row.category) : null}
                                                                            {(columns.amount == 1) ? amountTBody(row.amount) : null}
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
		</div>
	)
}

export default Tables
