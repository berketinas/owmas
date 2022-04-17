import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './main.css';
import { Header, Sidebar, Tables } from '../../components'
import { Home, Reports } from '..'
import { findAllByTestId } from '@testing-library/react';

const Main = () => {
    const { state } = useLocation()
    
    const [table, setTable] = useState({
        content: [],
        updated: false
    })
    const [tableFilter, setTableFilter] = useState({
        sort: '',
        customerId: 0,
        id: 0,
        firstName: '',
        lastName: '',
        customerName: '',
        customerEmail: '',
        name: '',
        email: '',
        start: '',
        end: '',
        status: '',
        category: '',
        submitted: false,
    })

    const initialFilter = {
        sort: '',
        customerId: 0,
        id: 0,
        firstName: '',
        lastName: '',
        customerName: '',
        customerEmail: '',
        name: '',
        email: '',
        start: '',
        end: '',
        status: '',
        category: '',
        submitted: false,
    }

    const [clearFilter, setClearFilter] = useState(false)

    const [active, setActive] = useState(1)
    const [dbUpdate, setDBUpdate] = useState(false)
    const [show, setShow] = useState(0)
    const [changed, setChanged] = useState({
        customers: false,
        orders: false,
        supplies: false,
        products: false,
        categories: false,
    })

    const initialChanged = {
        customers: false,
        orders: false,
        supplies: false,
        products: false,
        categories: false,
    }

    const handleClose = () => {
        setShow(0)
    }
    
    const handleShow = (modalId) => setShow(modalId)

    const updateTable = () => {
        if(active == 2) setTable({content: [...customers], updated: true})
        else if(active == 3) setTable({content: [...orders], updated: true})
        else if(active == 5) setTable({content: [...supplies], updated: true})
        else if(active == 6) setTable({content: [...products], updated: true})
        else if(active == 7) setTable({content: [...categories], updated: true})

        setChanged({...initialChanged})
    }

    const undoFilter = () => {
        if(active == 2) setTable({content: [...customers], updated: false})
        else if(active == 3) setTable({content: [...orders], updated: false})
        else if(active == 5) setTable({content: [...supplies], updated: false})
        else if(active == 6) setTable({content: [...products], updated: false})
        else if(active == 7) setTable({content: [...categories], updated: false})

        setTableFilter({...initialFilter})
        setClearFilter(false)
    }

    const applyFilter = () => {
        let tableCopy = table.content
        if(tableFilter.sort) tableCopy = sortContent(tableFilter.sort, table)

        console.log('filter: ', tableFilter)
        console.log('table: ', table)
        setTable({content: (tableCopy.filter(row => {
            let result = true
            if(tableFilter.customerId) return row.customerId == tableFilter.customerId
            if(tableFilter.id) return row.id == tableFilter.id
            if(tableFilter.firstName) result = (row.firstName.substr(0, tableFilter.firstName.length).toLowerCase() == tableFilter.firstName.toLowerCase())
            if(!result) return false
            if(tableFilter.lastName) result = (row.lastName.substr(0, tableFilter.lastName.length).toLowerCase() == tableFilter.lastName.toLowerCase())
            if(!result) return false
            if(tableFilter.customerName) {
                let filteredName = tableFilter.customerName.split(' ')
                if(!filteredName[1]) result = row.customer.firstName.substr(0, filteredName[0].length).toLowerCase() == filteredName[0].toLowerCase()
                else {
                    result = row.customer.firstName.toLowerCase() == filteredName[0].toLowerCase()
                    if(!result) return false
                    result = row.customer.lastName.substr(0, filteredName[1].length).toLowerCase() == filteredName[1].toLowerCase()
                }
                if(!result) return false
            }
            if(tableFilter.name) {
                let filteredName = tableFilter.name.split(' ')
                let rowName = row.name.split(' ')
                if(filteredName.length > rowName.length) return false
                for(let i = 0; i < filteredName.length && i < rowName.length; i++) {
                    if(i != filteredName.length - 1) {
                        result = (rowName[i].toLowerCase() == filteredName[i].toLowerCase())
                        if(!result) return false
                    }
                    else result = (rowName[i].substr(0, filteredName[i].length).toLowerCase() == filteredName[i].toLowerCase())
                }
                if(!result) return false
            }
            if(tableFilter.customerEmail) result = (row.customer.email.substr(0, tableFilter.customerEmail.length).toLowerCase() == tableFilter.customerEmail.toLowerCase())
            if(!result) return false

            if(tableFilter.email) result = (row.email.substr(0, tableFilter.email.length).toLowerCase() == tableFilter.email.toLowerCase())
            if(!result) return false

            if(tableFilter.status) result = (row.status == tableFilter.status)
            if(!result) return false

            if(tableFilter.category) result = (row.category.name.substr(0, tableFilter.category.length).toLowerCase() == tableFilter.category.toLowerCase())
            return result
        })), updated: false})
        
        setTableFilter({...tableFilter, submitted: false})
    }
    
    const updateActive = (value) => {
        if(value == 2) setTable({content: [...customers], updated: false})
        else if(value == 3) setTable({content: [...orders], updated: false})
        else if(value == 5) setTable({content: [...supplies], updated: false})
        else if(value == 6) setTable({content: [...products], updated: false})
        else if(value == 7) setTable({content: [...categories], updated: false})

        setClearFilter(true)
        setActive(value)
        handleClose()
    }

    const [categories, setCategories] = useState([])
    const [products, setProducts] = useState([])
    const [supplies, setSupplies] = useState([])
    const [orders, setOrders] = useState([])
    const [customers, setCustomers] = useState([])
    const [requests, setRequests] = useState([])
    
    const getCategories = async (token) => {
        let fetched = []

        await fetch('https://operational-workflow.herokuapp.com/api/category?page=0&size=100&sort=id,desc',
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

        console.log('getCategories: ', fetched)
        setCategories(fetched)
    }

    const getProducts = async (token) => {
        let fetched = []

        await fetch('https://operational-workflow.herokuapp.com/api/product?page=0&size=100&sort=id,desc',
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

        console.log('getProducts: ', fetched)
        setProducts(fetched)
    }

    const getSupplies = async (token) => {
        let fetched = []

        await fetch('https://operational-workflow.herokuapp.com/api/supply?page=0&size=100&sort=id,desc',
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

        console.log('getSupplies: ', fetched)
        setSupplies(fetched)
    }

    const getOrders = async (token) => {
        let fetched = []

        await fetch('https://operational-workflow.herokuapp.com/api/order?page=0&size=100&sort=id,desc',
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

        console.log('getOrders: ', fetched)
        setOrders(fetched)
    }

    const getCustomers = async (token) => {
        let fetched = []
        await fetch('https://operational-workflow.herokuapp.com/api/customer?page=0&size=100&sort=id,desc',
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

        console.log('getCustomers: ', fetched)
        setCustomers(fetched)
    }

    const getRequests = async (token) => {
        let fetched = []

        await fetch('https://operational-workflow.herokuapp.com/api/request?page=0&size=100&sort=id,desc',
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

        console.log('getRequests: ', fetched)
        setRequests(fetched)
    }

    useEffect(() => {
        getCustomers(state.user.token)
        getOrders(state.user.token)
        getSupplies(state.user.token)
        getProducts(state.user.token)
        getCategories(state.user.token)
    }, [state.user.token])

    useEffect(() => {
        if(tableFilter.submitted) applyFilter()
    }, [tableFilter.submitted])

    useEffect(() => {
        if(table.updated) applyFilter()
    }, [table.updated])

    useEffect(() => {
        if(changed.customers && changed.orders && changed.supplies && changed.products && changed.categories) updateTable()
    }, [changed])

    useEffect(() => {
        setChanged({...changed, customers: true})
    }, [customers])

    useEffect(() => {
        setChanged({...changed, orders: true})
    }, [orders])

    useEffect(() => {
        setChanged({...changed, supplies: true})
    }, [supplies])

    useEffect(() => {
        setChanged({...changed, products: true})
    }, [products])

    useEffect(() => {
        setChanged({...changed, categories: true})
    }, [categories])

    useEffect(() => {
        if(clearFilter) undoFilter()
    }, [clearFilter])

    useEffect(() => {
        if(dbUpdate) {
            getCustomers(state.user.token)
            getOrders(state.user.token)
            getSupplies(state.user.token)
            getProducts(state.user.token)
            getCategories(state.user.token)

            setDBUpdate(false)
        }
    }, [dbUpdate])

    const findContent = (active, privilege, user) => {
        if(privilege === 1) {
            if(active === 1) {
                return ( <Home privilege={privilege} user={user} /> )
            } else if(active === 4) {
                return ( <Reports /> )
            } else if(active === 9) {
                
            } else {
                return ( <Tables token={user.token} privilege={privilege} tableId={active} handleClose={handleClose} handleShow={handleShow} show={show} customers={customers} orders={orders} supplies={supplies} products={products} categories={categories} table={table} tableFilter={tableFilter} setTableFilter={setTableFilter} updateTable={updateTable} setDBUpdate={setDBUpdate} setClearFilter={setClearFilter} /> )
            }
        } else if(privilege === 2) {
            if(active === 1) {
                return ( <Home privilege={privilege} user={user} /> )
            } else if(active === 9) {
                
            } else {
                return ( <Tables token={user.token} privilege={privilege} tableId={active} handleClose={handleClose} handleShow={handleShow} show={show} customers={customers} orders={orders} supplies={supplies} products={products} categories={categories} table={table} tableFilter={tableFilter} setTableFilter={setTableFilter} updateTable={updateTable} setDBUpdate={setDBUpdate} setClearFilter={setClearFilter} /> )
            }
        } else if(privilege === 3) {
            if(active === 1) {
                return ( <Home privilege={privilege} user={user}/> )
            } else if(active === 9) {
                
            } else {
                return ( <Tables token={user.token} privilege={privilege} tableId={active} handleClose={handleClose} handleShow={handleShow} show={show} customers={customers} orders={orders} supplies={supplies} products={products} categories={categories} table={table} tableFilter={tableFilter} setTableFilter={setTableFilter} updateTable={updateTable} setDBUpdate={setDBUpdate} setClearFilter={setClearFilter} /> )
            }
        }
    }

    const sortContent = (key) => {
        if(key == 'Name') {
            const sorted = [...table.content].sort((a, b) => {
                return a['firstName'] > b['firstName'] ? 1 : (a['firstName'] != b['firstName'] ? -1 : (a['lastName'] > b['lastName'] ? 1 : -1))
            })
        
            return sorted
        } else if(key == 'customer') {
            const sorted = [...table.content].sort((a, b) => {
                return a.customer['firstName'] > b.customer['firstName'] ? 1 : (a.customer['firstName'] != b.customer['firstName'] ? -1 : (a.customer['lastName'] > b.customer['lastName'] ? 1 : -1))
            })

            return sorted
        } else if(key == 'Category') {
            const sorted = [...table.content].sort((a, b) => {
                return a.category['name'] > b.category['name'] ? 1 : -1
            })
        
            return sorted
        }
    
        const sorted = [...table.content].sort((a, b) => {
            return (a[key] > b[key] ? 1 : -1)
        })
    
        return sorted
    }

	return (
		<div className='main'>
			<section className='head'>
				<meta charSet='UTF-8' />
				<meta httpEquiv='X-UA-Compatible' content='IE=edge' />
				<meta name='viewport' content='width=device-width, initial-scale=1.0' />
				<link rel='preconnect' href='https://fonts.googleapis.com' />
				<link
					rel='preconnect'
					href='https://fonts.gstatic.com'
					crossOrigin='true'
				/>
				<link
					href='https://fonts.googleapis.com/css2?family=Montserrat:wght@100;400;700&display=swap'
					rel='stylesheet'
				/>
			</section>

			<section className='body d-flex flex-wrap m-0 p-0'>
				<header className='header container-fluid px-0 mx-0 d-flex justify-content-end position-absolute'>
					<Header name={`${state.user.firstName} ${state.user.lastName}`} role={`${state.user.role}`} privilege={`${state.privilege}`}/>
				</header>

				<section className='sidebar container px-0 mx-0 position-sticky'>
					<Sidebar privilege={`${state.privilege}`} active={active} updateActive={updateActive}/>
				</section>

				<section className='secondary-body container-fluid position-absolute'>
					<article className='main-content container-fluid p-0'>
						 {findContent(active, state.privilege, state.user, handleShow, show)}
					</article>
				</section>

				<script src='bootstrap/js/bootstrap.min.js'></script>
			</section>
		</div>
	)
}

export default Main
