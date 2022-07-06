import React, { useState, useEffect } from 'react'
import { BsArrowRight, BsArrowLeft } from 'react-icons/bs';
import { AiFillDelete } from 'react-icons/ai'
const Table = () => {
    const [items, setItems] = useState([{}]);
    const [search, setSearch] = useState('');
    const [filteredResults, setFilteredResults] = useState([]);
    const [totalData, setTotalData] = useState();
    const [errorMessage, setErrorMessage] = useState(false);


    // Fetching data
    let limit = 10;
    const getData = async () => {
        const res = await fetch(`https://jsonplaceholder.typicode.com/users?_limit=${limit}`);
        const data = await res.json();
        const total = res.headers.get("x-total-count");
        setTotalData(total)
        console.log(data);
        setItems(data);

    }
    useEffect(() => {
        getData()
    }, [])


    // form onSubmit function
    const submitForm = (e) => {
        e.preventDefault();
        addData(e.target.name.value, e.target.email.value);
        e.target.name.value = "";
        e.target.email.value = "";

    }

    // adding data with form
    const addData = async (name, email) => {
        await fetch('https://jsonplaceholder.typicode.com/users', {
            method: 'POST',
            body: JSON.stringify({
                name: name,
                email: email
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            }
        })
            .then((res) => {
                if (res.status !== 201) {
                    return
                } else {
                    return res.json()
                }
            })
            .then((data) => {
                alert('Data added successfully')
                setItems((items) => [...items, data])
            })
            .catch((err) => {
                console.log(err);
            })

    }

    // Search data
    const searchItems = (searchValue) => {
        setSearch(searchValue)
        if (search !== '') {
            const filteredData = items.filter((item) => {
                return Object.values(item).join('').toLowerCase().includes(search.toLowerCase())
            })
            setFilteredResults(filteredData)
        }
        else {
            setFilteredResults(items)
        }
    }

    // Delete individual row data
    const handleDelete = async (id) => {
        await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
            method: 'DELETE'
        })
            .then((res) => {
                if (res.status !== 200) {
                    return
                } else {
                    alert('Are you sure you want to delte')
                    setItems(items.filter((item) => {
                        return item.id !== id;
                    }))
                }
            })
            .catch((err) => {
                console.log(err);
            })

    }

    // Delete all row data
    const deleteAll = (e) => {
        e.preventDefault();
        alert('This will delete all data')
        setItems([]);
        setErrorMessage(true)

    }
    return (
        <>
            <div className="header">
                <button id='firstBtn'>Immunisation Alerts</button>
                <button className='tableBtn'>Lab Alerts</button>
                <button className='tableBtn'>DI Alerts</button>
                <button className='tableBtn'>Procedure Alerts</button>
                <button className='tableBtn'>RX Specific Alerts</button>
                <button className='tableBtn'>DX Specific Alerts</button>
                <button className='tableBtn'>Immunisation Alerts</button>
                <button id='lastBtn'>Patient Specific Alerts</button>
            </div>
            <section className='tableData'>
                <div className="row container">
                    <div className="col-lg-7 col-md-12">
                        <h6 className='tableHead'>Immunisation Alerts</h6>
                        <div className="search">
                            <div className="childSearch">
                                <p className='find'>Find</p>
                                <input type="text" onChange={(e) => searchItems(e.target.value)} />
                            </div>
                            <button className='delete' onClick={deleteAll}>Delete</button>
                        </div>

                        <table className="table">
                            <thead>
                                <tr>
                                    <th>
                                        <button onClick={deleteAll} className='deleteRow'> <AiFillDelete /></button>
                                    </th>
                                    <th scope="col">id</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Email</th>

                                </tr>
                            </thead>
                            {search.length > 1 ? (
                                filteredResults.map((curElem) => {
                                    const { id, name, email } = curElem;
                                    return (
                                        <tbody key={id}>
                                            <tr>
                                                <button onClick={() => handleDelete(id)} className='deleteRow'> <AiFillDelete /></button>
                                                <th scope="row">
                                                    {
                                                        id
                                                    }
                                                </th>
                                                <td>
                                                    {name}
                                                </td>
                                                <td>{email}</td>

                                            </tr>

                                        </tbody>
                                    )
                                })
                            ) : (
                                items && items.map((curElem, i) => {
                                    const { id, name, email } = curElem;
                                    return (
                                        <tbody key={id}>
                                            <tr>

                                                <button onClick={() => handleDelete(id)} className='deleteRow'> <AiFillDelete /></button>


                                                <th scope="row">
                                                    {
                                                        id
                                                    }
                                                </th>
                                                <td>
                                                    {name}
                                                </td>
                                                <td>{email}</td>

                                            </tr>

                                        </tbody>

                                    )
                                })

                            )}
                            {
                                errorMessage ?
                                    <h4 className='errorMessage'>No Data to show</h4>
                                    : null
                            }

                        </table>
                        <div className="pagination">
                            <p> Total Results: {totalData}</p>
                            <p>Page <span>
                                {limit}</span> of {totalData}</p>
                            <div className="paginateBtn">
                                <button className='btns'>
                                    <BsArrowLeft />

                                </button>
                                <button className='btns'>

                                    <BsArrowRight />

                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-12">
                        <div className="formPart">
                            <form action="#" onSubmit={submitForm}>
                                <div className="mb-3 formLabel">
                                    <label htmlFor="exampleFormControlInput1" className="form-label">Name</label>
                                    <input type="text" className="form-control inputBox" id="exampleFormControlInput1" name="name" autoComplete='off' required />
                                </div>
                                <div className="mb-3 formLabel">
                                    <label htmlFor="exampleFormControlInput1" className="form-label">Email</label>
                                    <input type="text" className="form-control inputBox" id="exampleFormControlInput1" name="email" autoComplete='off' required />
                                </div>
                                <div className="addBtn">
                                    <button className='addChildBtn' onSubmit={submitForm}>Add</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Table