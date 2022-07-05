import React, { useState, useEffect } from 'react'

const Table = () => {
    const [name, setName] = useState('');
    const [desc, setDesc] = useState('');
    const [items, setItems] = useState([])
    let limit = 10;
    const getData = async () => {
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_page=1&_limit=${limit}`);
        const data = await res.json();
        const total = res.headers.get("x-total-count");
        console.log(data);
        setItems(data);
        // setTableData(total);
        // setTableData(Math.ceil(total / limit));

    }
    useEffect(() => {
        getData()
    }, [])

    const submitForm = (e) => {
        e.preventDefault();
        const newEntry = [{ name: name, desc: desc }];
        setItems(newEntry)
    }
    return (
        <>
            <div className="header">
                <button className='tableBtn'>Immunisation Alerts</button>
                <button className='tableBtn'>Lab Alerts</button>
                <button className='tableBtn'>DI Alerts</button>
                <button className='tableBtn'>Procedure Alerts</button>
                <button className='tableBtn'>RX Specific Alerts</button>
                <button className='tableBtn'>DX Specific Alerts</button>
                <button className='tableBtn'>Immunisation Alerts</button>
                <button className='tableBtn'>Patient Specific Alerts</button>
            </div>
            <section className='tableData'>
                <div className="row container">
                    <div className="col-lg-7 col-md-12">
                        <h6 className='tableHead'>Immunisation Alerts</h6>
                        <div className="search">
                            <div className="childSearch">
                                <p className='find'>Find</p>
                                <input type="text" />
                            </div>
                            <button className='delete'>Delete</button>
                        </div>

                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">id</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Description</th>

                                </tr>
                            </thead>
                            {
                                items && items.map((curElem, i) => {
                                    const { id, title, body } = curElem;
                                    return (
                                        <tbody key={id}>
                                            <tr>
                                                <th scope="row">
                                                    {
                                                        id
                                                    }
                                                </th>
                                                <td>
                                                    {title.slice(0, 10)}
                                                </td>
                                                <td>{body.slice(0, 10)}</td>

                                            </tr>

                                        </tbody>

                                    )

                                })
                            }
                        </table>
                    </div>
                    <div className="col-lg-5 col-md-12">
                        <div className="formPart">
                            <form action="#" onSubmit={submitForm}>
                                <div className="mb-3 formLabel">
                                    <label htmlFor="exampleFormControlInput1" className="form-label">Name</label>
                                    <input value={name} onChange={(e) => setName(e.target.value)} type="text" className="form-control" id="exampleFormControlInput1" name="first" autoComplete='off' required />
                                </div>
                                <div className="mb-3 formLabel">
                                    <label htmlFor="exampleFormControlInput1" className="form-label">Description</label>
                                    <input value={desc} onChange={(e) => setDesc(e.target.value)} type="text" className="form-control" id="exampleFormControlInput1" name="desc" autoComplete='off' required />
                                </div>
                                <div className="addBtn">
                                    <button className='addChildBtn' type='submit'>Add</button>
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