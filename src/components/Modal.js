import React from 'react'
import './modal.css'
import { icons, ModalReports } from './'

const Modal = ({ tableId, token, privilege, show, handleClose, addOrder, addSupply, addProduct, addCustomer, addCategory, categories, products, supplies, orders, customers, patchSupplies, patchCategories, patchProducts, patchCustomers, patchOrders, editAction, getProducts, getCategories, getCustomers }) => {
    return (
        <div id="modal" className='position-fixed'>
            <ModalReports tableId={tableId} token={token} privilege={privilege} show={show} handleClose={handleClose} addOrder={addOrder} addSupply={addSupply} addProduct={addProduct} addCustomer={addCustomer} addCategory={addCategory} categories={categories} products={products} supplies={supplies} orders={orders} customers={customers} patchSupplies={patchSupplies} patchCategories={patchCategories} patchProducts={patchProducts} patchCustomers={patchCustomers} patchOrders={patchOrders} editAction={editAction} getProducts={getProducts} getCategories={getCategories} getCustomers={getCustomers}/>
            <div className='custom-modal-overlay d-flex justify-content-center align-items-center position-fixed'></div>
        </div>
    )
}

export default Modal
