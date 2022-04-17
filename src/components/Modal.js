import React from 'react'
import './modal.css'
import { icons, ModalReports } from './'

const Modal = ({ tableId, token, privilege, show, handleClose, addOrder, addSupply, addProduct, addCustomer, addCategory, categories, products, supplies, orders, customers, patchSupplies, patchCategories, patchProducts, patchCustomers, patchOrders, editAction, getProducts, getCategories, getCustomers, tableFilter, setTableFilter }) => {
    return (
        <div id="modal" className='position-fixed'>
            <div>
                <div style={{width: (show == 0 ? '0' : (show == 3 ? '23vw' : '27vw'))}} className='custom-modal rounded shadow position-fixed p-0'>
                    <ModalReports tableId={tableId} token={token} privilege={privilege} show={show} handleClose={handleClose} addOrder={addOrder} addSupply={addSupply} addProduct={addProduct} addCustomer={addCustomer} addCategory={addCategory} categories={categories} products={products} supplies={supplies} orders={orders} customers={customers} patchSupplies={patchSupplies} patchCategories={patchCategories} patchProducts={patchProducts} patchCustomers={patchCustomers} patchOrders={patchOrders} editAction={editAction} getProducts={getProducts} getCategories={getCategories} getCustomers={getCustomers} tableFilter={tableFilter} setTableFilter={setTableFilter} />
                </div>
            </div>
            <div style={{width: (show ? '100vw' : '0px')}} className='custom-modal-overlay d-flex justify-content-center align-items-center position-fixed' onClick={() => handleClose()}></div>
        </div>
    )
}

export default Modal
