import { icons } from './'
import './table.css'

const actionTHead = (privilege, tableId) => {
    // OFFICE in all
    // FACTORY not in requests
    // WAREHOUSE not in supplies
    return (((privilege == 2) ? ((tableId == 8) ? '' : (<th className='text-center' scope='col'>Action</th>) )
                            : ((privilege == 3) ? ((tableId == 5) ? '' : (<th className='text-center' scope='col'>Action</th>))
                                                    : (<th className='text-center' scope='col'>Action</th>))))
}

const idTHead = () => {
    // in all
    return (<th className='text-center' scope='col'>ID</th>)
}

const nameTHead = (privilege, tableId) => {
    // OFFICE not in orders
    // FACTORY in supplies
    // WAREHOUSE in supplies
    return (((privilege == 1) ? ((tableId == 3) ? '' : (<th className='text-center' scope='col'>Name</th>)) 
                            : ((tableId == 5) ? (<th className='text-center' scope='col'>Name</th>) : '')))
}

const emailTHead = (privilege, tableId) => {
    // OFFICE in customers
    return ((privilege == 1 && tableId == 2) ? (<th className='text-center' scope='col'>Email</th>) : '')
}

const addressTHead = (privilege, tableId) => {
    // OFFICE in customers
    return ((privilege == 1 && tableId == 2) ? (<th className='text-center' scope='col'>Address</th>) : '')
}

const balanceTHead = (privilege, tableId) => {
    // OFFICE in customers
    return ((privilege == 1 && tableId == 2) ? (<th className='text-center' scope='col'>Balance</th>) : '')
}

const customerTHead = (privilege, tableId) => {
    // OFFICE in orders
    // FACTORY in orders
    // WAREHOUSE in orders
    return ((tableId == 3) ? (<th className='text-center' scope='col'>Customer</th>) : '')
}

const creationTHead = (privilege, tableId) => {
    // OFFICE in orders
    // FACTORY in orders
    // WAREHOUSE in orders
    return ((tableId == 3) ? (<th className='text-center' scope='col'>Creation Date</th>) : '')
}

const productsTHead = (privilege, tableId) => {
    // OFFICE in orders
    // FACTORY in orders
    // WAREHOUSE in orders
    return ((tableId == 3) ? (<th className='text-center' scope='col'>Products</th>) : '')
}

const statusTHead = (privilege, tableId) => {
    // OFFICE in orders
    // FACTORY in orders
    // WAREHOUSE in orders
    return ((tableId == 3) ? (<th className='text-center' scope='col'>Status</th>) : '')
}

const totalTHead = (privilege, tableId) => {
    // OFFICE in orders
    // WAREHOUSE in orders
    return ((privilege != 2 && tableId == 3) ? (<th className='text-center' scope='col'>Total Cost</th>) : '')
}

const categoryTHead = (privilege, tableId) => {
    // OFFICE in supplies, products
    // FACTORY in supplies
    // WAREHOUSE in supplies
    return ((privilege == 1) ? ((tableId == 5 || tableId == 6) ? (<th className='text-center' scope='col'>Category</th>) : '')
                            : ((tableId == 5) ? (<th className='text-center' scope='col'>Category</th>) : ''))
}

const unitTHead = (privilege, tableId) => {
    // OFFICE in products
    return ((privilege == 1 && tableId == 6) ? (<th className='text-center' scope='col'>Unit Price</th>) : '')
}

const pInCategoryTHead = (privilege, tableId) => {
    // OFFICE in categories
    return ((privilege == 1 && tableId == 7) ? (<th className='text-center' scope='col'>Products in Category</th>) : '')
}

const supplyTHead = (privilege, tableId) => {
    // FACTORY in requests
    // WAREHOUSE in requests
    return ((privilege != 1 && tableId == 8) ? (<th className='text-center' scope='col'>Supply</th>) : '')
}

const amountTHead = (privilege, tableId) => {
    // FACTORY in requests
    // WAREHOUSE in requests, supplies
    return ((privilege == 2) ? ((tableId == 8) ? (<th className='text-center' scope='col'>Amount</th>) : '')
                            : (privilege == 3) ? ((tableId == 5 || tableId == 8) ? (<th className='text-center' scope='col'>Amount</th>) : '')
                                                : '')
}

const requestTHead = (privilege, tableId) => {
    // FACTORY in requests
    // WAREHOUSE in requests
    return ((privilege != 1 && tableId == 8) ? (<th className='text-center' scope='col'>Request Date</th>) : '')
}

const completionTHead = (privilege, tableId) => {
    // FACTORY in requests
    // WAREHOUSE in requests
    return ((privilege != 1 && tableId == 8) ? (<th className='text-center' scope='col'>Completion Date</th>) : '')
}

const factoryTHead = (privilege, tableId) => {
    // FACTORY in requests
    // WAREHOUSE in requests
    return ((privilege != 1 && tableId == 8) ? (<th className='text-center' scope='col'>Factory</th>) : '')
}

const actionTBody = (privilege, tableId, handleShow, id, setEditAction) => {
    const handleButtonClick = (id, privilege, tableId, handleShow, setEditAction, buttonType) => {
        setEditAction(id)
        if(privilege == 1) {
            if(buttonType == 'edit') {
                if(tableId == 2)
                    handleShow(12)
                else if(tableId == 3)
                    handleShow(13)
                else if(tableId == 5) 
                    handleShow(15)
                else if(tableId == 6)
                    handleShow(16)
                else if(tableId == 7)
                    handleShow(17)
            }
        } else if(privilege == 2) {
            if(buttonType == 'transfer') {
                if(tableId == 3)
                    handleShow(23)
            }
        } else if(privilege == 3) {
            if(buttonType == 'transfer') {
                if(tableId == 3)
                    handleShow(330)
            } else if(buttonType == 'check') {
                if(tableId == 3)
                    handleShow(331)
            }
        }
    }

    return 	(
        // OFFICE 
        <td>
            {
                (privilege == 1) ? ((tableId == 2 || tableId == 5 || tableId == 6 || tableId == 7) ? (<span className='d-flex justify-content-center'><button className='rounded' onClick={() => handleButtonClick(id, privilege, tableId, handleShow, setEditAction, 'edit')}><span className='px-2'>{ icons.edit }</span></button><button className='rounded' onClick={() => handleShow(2)}><span className='px-2'>{ icons.delete }</span></button></span>)
                                    : ((tableId == 3) ? (<span className='d-flex justify-content-center'><button className='rounded' onClick={() => handleButtonClick(id, privilege, tableId, handleShow, setEditAction, 'edit')}><span className='px-2'>{ icons.edit }</span></button><button className='rounded' onClick={() => handleShow(2)}><span className='px-2'>{ icons.delete }</span></button><button className='rounded'><span className='px-2'>{ icons.download }</span></button></span>)
                                        : '')
                                            ) : ''
                ||  (privilege == 3) ? (((tableId == 3) ? (<span className='d-flex justify-content-center'><button className='rounded' onClick={() => handleButtonClick(id, privilege, tableId, handleShow, setEditAction, 'transfer')}><span className='px-2'>{ icons.transfer }</span></button><button className='rounded' onClick={() => handleButtonClick(id, privilege, tableId, handleShow, setEditAction, 'check')}><span className='px-2'>{ icons.check }</span></button></span>)
                                        : ((tableId == 8) ? (<span className='d-flex justify-content-center'><button className='rounded' onClick={handleShow}><span className='px-2'>{ icons.check }</span></button></span>)
                                                            : ''))
                                                                ) : ''
                ||  (privilege == 2) ? ((tableId == 3) ? (<span className='d-flex justify-content-center'><button className='rounded' onClick={() => handleButtonClick(id, privilege, tableId, handleShow, setEditAction, 'transfer')}><span className='px-2'>{ icons.transfer }</span></button></span>)
                                                            : ((tableId == 5) ? (<span className='d-flex justify-content-center'><button className='rounded'><span className='px-2'>{ icons.addSupply }</span></button></span>) : '')
                                                                ) : ''
            }
        </td>)
}

const idTBody = (id) => {
    return (<td><span>{id}</span></td>)
}

const nameTBody = (name) => {
    return (<td><span>{name}</span></td>)
}

const emailTBody = (email) => {
    return (<td><span>{email}</span></td>)
}

const addressTBody = (address) => {
    return (<td><span>{address}</span></td>)
}

const balanceTBody = (balance) => {
    return (<td><span>{`${balance.toFixed(2)}`}</span></td>)
}

const customerTBody = (customer) => {
    return (<td><span>{`${customer.firstName} ${customer.lastName}`}</span></td>)
}

const creationTBody = (creation) => {
    return (<td><span>{creation.substring(0, 10)}</span></td>)
}

const productsTBody = (products) => {
    return (
        <td>
            <ul className="list-group list-group-flush">
                {products.map(product => (<li className="list-group-item container d-flex justify-content-start align-items-center"><span className="col-5">{product.productResponse.name}</span><div className="col-6 d-flex justify-content-end"><span className="badge text-dark">{product.quantity}</span></div></li>))}
            </ul>
        </td>
    )
}

const statusTBody = (status) => {
    return (<td><span>{status}</span></td>)
}

const totalTBody = (total) => {
    return (<td><span>{`${total.toFixed(2)}`}</span></td>)
}

const categoryTBody = (category) => {
    return (<td><span>{category.name}</span></td>)
}

const unitTBody = (unit) => {
    return (<td><span>{`${unit.toFixed(2)}`}</span></td>)
}

const pInCategoryTBody = (pInCategory) => {
    return (<td><span>{pInCategory}</span></td>)
}

const supplyTBody = (supply) => {
    return (<td><span>{supply}</span></td>)
}

const amountTBody = (amount) => {
    return (<td><span>{amount}</span></td>)
}

const requestTBody = (request) => {
    return (<td><span>{request}</span></td>)
}

const completionTBody = (completion) => {
    return (<td><span>{completion}</span></td>)
}

const factoryTBody = (factory) => {
    return (<td><span>{factory}</span></td>)
}

const tableRowAdd = () => {
    return (<a href='#'><span className='px-3'>{ icons.biggerAdd }</span></a>)
}

export {
    actionTHead, idTHead, nameTHead, emailTHead, addressTHead, balanceTHead, customerTHead, creationTHead, productsTHead,
    statusTHead, totalTHead, categoryTHead, unitTHead, pInCategoryTHead, supplyTHead, amountTHead, requestTHead, completionTHead,
    factoryTHead, actionTBody, idTBody, nameTBody, emailTBody, addressTBody, balanceTBody, customerTBody, creationTBody, productsTBody,
    statusTBody, totalTBody, categoryTBody, unitTBody, pInCategoryTBody, supplyTBody, amountTBody, requestTBody, completionTBody,
    factoryTBody
}