import React, { useState } from 'react'
import './modal.css'
import { icons } from './'

const TableMenu = ({ privilege, tableId, handleClose, tableFilter, setTableFilter }) => {
    const [id, setId] = useState(0)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [start, setStart] = useState('')
    const [end, setEnd] = useState('')
    const [status, setStatus] = useState('')
    const [category, setCategory] = useState('')

    const customerSort = () => {
        return (
            <select className="form-control col-12" id="sortBy" onChange={e => setTableFilter({...tableFilter, sort: e.target.value})}>
                <option selected disabled hidden>Choose attribute</option>
                <option value='customerId'>ID</option>
                <option value='Name'>Name</option>
                <option value='balance'>Balance</option>
            </select>
        )
    }
    
    const orderSort = () => {
        if(privilege == 1 || privilege == 3) {
            return (
                <select className="form-control col-12" id="sortBy" onChange={e => setTableFilter({...tableFilter, sort: e.target.value})}>
                    <option selected disabled hidden>Choose attribute</option>
                    <option value='id'>ID</option>
                    <option value='customer'>Customer</option>
                    <option value='creationDate'>Creation Date</option>
                    <option value='status'>Status</option>
                    <option value='totalPrice'>Total Cost</option>
                </select>
            )
        } else if(privilege == 2) {
            return (
                <select className="form-control col-12" id="sortBy" onChange={e => setTableFilter({...tableFilter, sort: e.target.value})}>
                    <option selected disabled hidden>Choose attribute</option>
                    <option value='id'>ID</option>
                    <option value='customer'>Customer</option>
                    <option value='creationDate'>Creation Date</option>
                    <option value='status'>Status</option>
                </select>
            )
        }
    }
    
    const supplySort = () => {
        if(privilege == 1 || privilege == 2) {
            return (
                <select className="form-control col-12" id="sortBy" onChange={e => setTableFilter({...tableFilter, sort: e.target.value})}>
                    <option selected disabled hidden>Choose attribute</option>
                    <option value='id'>ID</option>
                    <option value='name'>Name</option>
                    <option value='Category'>Category</option>
                </select>
            )
        } else if(privilege == 3) {
            return (
                <select className="form-control col-12" id="sortBy" onChange={e => setTableFilter({...tableFilter, sort: e.target.value})}>
                    <option selected disabled hidden>Choose attribute</option>
                    <option value='id'>ID</option>
                    <option value='name'>Name</option>
                    <option value='Category'>Category</option>
                    <option value='amount' disabled>Amount</option>
                </select>
            )
        }
    }
    
    const productSort = () => {
        return (
            <select className="form-control col-12" id="sortBy" onChange={e => setTableFilter({...tableFilter, sort: e.target.value})}>
                <option selected disabled hidden>Choose attribute</option>
                <option value='id'>ID</option>
                <option value='name'>Name</option>
                <option value='Category'>Category</option>
                <option value='price'>Unit Price</option>
            </select>
        )
    }
    
    const categorySort = () => {
        return (
            <select className="form-control col-12" id="sortBy" onChange={e => setTableFilter({...tableFilter, sort: e.target.value})}>
                <option selected disabled hidden>Choose attribute</option>
                <option value='id'>ID</option>
                <option value='name'>Name</option>
                <option value='amount' disabled>Products In Category</option>
            </select>
        )
    }
    
    const customerFilter = () => {
        const handleCustomerFilter = () => {
            setTableFilter({...tableFilter, customerId: (id ? id : tableFilter.id), firstName: (name ? name.split(' ')[0] : tableFilter.firstName), lastName: (name.split(' ')[1] ? name.split(' ')[1] : tableFilter.lastName), email: (email ? email : tableFilter.email), submitted: true})
            handleClose(0)
        }

        return (
            <div className="row input-group mx-0">
                <label className="col-12 p-0 list-attr" for="filterBy">Filter By</label>
                <div className="form-row px-0 py-1">
                    <input type="text" className="form-control col-12" placeholder="ID" onChange={e => setId(parseInt(e.target.value))}/>
                </div>
                <div className="form-row px-0 py-1">
                    <input type="text" className="form-control col-12" placeholder="Name" onChange={e => setName(e.target.value)}/>
                </div>
                <div className="form-row px-0 py-1">
                    <input type="text" className="form-control col-12" placeholder="Email" onChange={e => setEmail(e.target.value)}/>
                </div>
                <div className="form-row px-0 py-1">
                    <input type="text" className="form-control col-12" placeholder="Start Date" onChange={e => setStart(e.target.value)}/>
                </div>
                <div className="form-row px-0 py-1">
                    <input type="text" className="form-control col-12" placeholder="End Date" onChange={e => setEnd(e.target.value)}/>
                </div>
                <div className="form-row px-0 py-1 d-flex justify-content-end">
                    <button type="button" className="btn btn-info col-2 text-dark submit" onClick={handleCustomerFilter}>Apply</button>
                </div>
            </div>
        )
    }
    
    const orderFilter = () => {
        const handleOrderFilter = () => {
            setTableFilter({...tableFilter, id: (id ? id : tableFilter.id), customerName: (name ? name : tableFilter.name), customerEmail: (email ? email : tableFilter.customerEmail), status: (status ? status : tableFilter.status), submitted: true})
            handleClose(0)
        }

        return (
            <div className="row input-group mx-0">
                <label className="col-12 p-0 list-attr" for="filterBy">Filter By</label>
                <div className="form-row px-0 py-1">
                    <input type="text" className="form-control col-12" placeholder="ID" onChange={e => setId(parseInt(e.target.value))}/>
                </div>
                <div className="form-row px-0 py-1">
                    <input type="text" className="form-control col-12" placeholder="Name" onChange={e => setName(e.target.value)}/>
                </div>
                <div className="form-row px-0 py-1">
                    <input type="text" className="form-control col-12" placeholder="Email" onChange={e => setEmail(e.target.value)}/>
                </div>
                <div className="form-row px-0 py-1">
                    <input type="text" className="form-control col-12" placeholder="Start Date" onChange={e => setStart(e.target.value)}/>
                </div>
                <div className="form-row px-0 py-1">
                    <input type="text" className="form-control col-12" placeholder="End Date" onChange={e => setEnd(e.target.value)}/>
                </div>
                <div className="form-row px-0 py-1">
                    <select className="form-control col-12" onChange={e => setStatus(e.target.value)}>
                        <option selected disabled hidden>Select status</option>
                        <option value='Waiting for Production'>Waiting for Production</option>
                        <option value='Waiting for Graphics Designer'>Waiting for Graphics Designer</option>
                        <option value='Shipping to Warehouse'>Shipping to Warehouse</option>
                        <option value='Waiting for Deliver'>Waiting for Deliver</option>
                        <option value='Delivered'>Delivered</option>
                    </select>
                </div>
                <div className="form-row px-0 py-1 d-flex justify-content-end">
                    <button type="button" className="btn btn-info col-2 text-dark submit" onClick={handleOrderFilter}>Apply</button>
                </div>
            </div>
        )
    }
    
    const supplyFilter = () => {
        const handleSupplyFilter = () => {
            setTableFilter({...tableFilter, id: (id ? id : tableFilter.id), name: (name ? name: tableFilter.name), category: (category ? category : tableFilter.category), submitted: true})
            handleClose(0)
        }

        return (
            <div className="row input-group mx-0">
                <label className="col-12 p-0 list-attr" for="filterBy">Filter By</label>
                <div className="form-row px-0 py-1">
                    <input type="text" className="form-control col-12" placeholder="ID" onChange={e => setId(parseInt(e.target.value))}/>
                </div>
                <div className="form-row px-0 py-1">
                    <input type="text" className="form-control col-12" placeholder="Name" onChange={e => setName(e.target.value)}/>
                </div>
                <div className="form-row px-0 py-1">
                    <input type="text" className="form-control col-12" placeholder="Category" onChange={e => setCategory(e.target.value)}/>
                </div>
                <div className="form-row px-0 py-1 d-flex justify-content-end">
                    <button type="button" className="btn btn-info col-2 text-dark submit" onClick={handleSupplyFilter}>Apply</button>
                </div>
            </div>
        )
    }
    
    const productFilter = () => {
        const handleProductFilter = () => {
            setTableFilter({...tableFilter, id: (id ? id : tableFilter.id), name: (name ? name : tableFilter.name), category: (category ? category : tableFilter.category), submitted: true})
            handleClose(0)
        }

        return (
            <div className="row input-group mx-0">
                <label className="col-12 p-0 list-attr" for="filterBy">Filter By</label>
                <div className="form-row px-0 py-1">
                    <input type="text" className="form-control col-12" placeholder="ID" onChange={e => setId(parseInt(e.target.value))}/>
                </div>
                <div className="form-row px-0 py-1">
                    <input type="text" className="form-control col-12" placeholder="Name" onChange={e => setName(e.target.value)}/>
                </div>
                <div className="form-row px-0 py-1">
                    <input type="text" className="form-control col-12" placeholder="Category" onChange={e => setCategory(e.target.value)}/>
                </div>
                <div className="form-row px-0 py-1 d-flex justify-content-end">
                    <button type="button" className="btn btn-info col-2 text-dark submit" onClick={handleProductFilter}>Apply</button>
                </div>
            </div>
        )
    }
    
    const categoryFilter = () => {
        const handleCategoryFilter = () => {
            setTableFilter({...tableFilter, id: (id ? id : tableFilter.id), name: (name ? name : tableFilter.name), submitted: true})
            handleClose(0)
        }

        return (
            <div className="row input-group mx-0">
                <label className="col-12 p-0 list-attr" for="filterBy">Filter By</label>
                <div className="form-row px-0 py-1">
                    <input type="text" className="form-control col-12" placeholder="ID" onChange={e => setId(parseInt(e.target.value))}/>
                </div>
                <div className="form-row px-0 py-1">
                    <input type="text" className="form-control col-12" placeholder="Name" onChange={e => setName(e.target.value)}/>
                </div>
                <div className="form-row px-0 py-1 d-flex justify-content-end">
                    <button type="button" className="btn btn-info col-2 text-dark submit" onClick={handleCategoryFilter}>Apply</button>
                </div>
            </div>
        )
    }

	return (
        <div className='modal-menu'>
            <div className='d-flex justify-content-end pt-3 pe-3'>
                <button className='close px-0' onClick={() => handleClose(0)}><span>{ icons.x }</span></button>
            </div>
            <form className="pb-4 px-5">
                <div className="row input-group mx-0 mb-5">
                    <label className="col-12 p-0 list-attr" for="sortBy">Sort By</label>
                    {tableId == 2 ? customerSort() : (tableId == 3 ? orderSort() : (tableId == 5 ? supplySort() : (tableId == 6 ? productSort() : (tableId == 7 ? categorySort() : ''))))}
                </div>

                {tableId == 2 ? customerFilter() : (tableId == 3 ? orderFilter() : (tableId == 5 ? supplyFilter() : (tableId == 6 ? productFilter() : (tableId == 7 ? categoryFilter() : ''))))}
            </form>
        </div>
	)
}

export default TableMenu
