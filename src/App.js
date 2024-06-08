import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { useState } from 'react';
import { addData, editData, removeData } from './action/index';
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";

function App() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [query, setQuery] = useState('')
  const [editIndex, setEditIndex] = useState(null)


  const data = useSelector((state) => state.addMoreData.data);
  const dispatch = useDispatch();

  const handleSave = () => {

    if (name === "" || email === "" || password === "") {
      alert("Please fill in all the fields");
      return;
    }

    const body = {
      name,
      email,
      password
    }

    if (editIndex !== null) {
      console.log("editIndex", editIndex)
      dispatch(editData(editIndex, body));
      setEditIndex(null)
    } else {
      dispatch(addData(body));
    }

    handleClear()
  }

  const handleEdit = (index) => {
    const item = data[index];
    console.log("item", item)
    setName(item.name);
    setEmail(item.email);
    setPassword(item.password);
    setEditIndex(index);
  }

  const handleDelete = (index) => {
    console.log("index", index)

    if (window.confirm('Are you sure you want to delete data')) {
      dispatch(removeData(index))
    }

  }

  const handleClear = () => {
    setName('')
    setEmail('')
    setPassword('')
  }
  console.log("111data", data)
  return (
    <div className="App">
      <div>
        name:- <input type='text' onChange={(e) => setName(e.target.value)} value={name} required />
        email: <input type='email' onChange={(e) => setEmail(e.target.value)} value={email} required />
        password: <input type='password' onChange={(e) => setPassword(e.target.value)} value={password} required />
        {/* <button onClick={handleSave}>add</button> */}
        <button onClick={handleSave}>{editIndex === null ? 'add' : 'Save Edit'}</button>
        <span style={{ marginLeft: "20px" }}>
          search:- <input type="search" onChange={(e) => setQuery(e.target.value)} value={query} />
        </span>
      </div>

      <table width="100%" border="1px solid black" style={{ marginTop: "20px" }} >
        <tbody>
          <tr>
            <th width="25%">name</th>
            <th width="25%">email</th>
            <th width="25%">password</th>
            <th width="25%">action</th>
          </tr>
        </tbody>
        {

          data.filter((item) => item.name.toLowerCase().includes(query)).map((item, index) => {
            return (
              <>
                <tr>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.password}</td>
                  <td><span style={{ fontSize: '20px', cursor: "pointer" }}><FaEdit style={{ marginRight: "20px" }} onClick={() => handleEdit(index)}></FaEdit></span>
                    <span style={{ fontSize: '20px', cursor: "pointer" }}><MdDelete onClick={() => handleDelete(index)}></MdDelete></span>
                  </td>
                </tr>
              </>
            )
          })
        }

      </table>
    </div>
  );
}

export default App;
