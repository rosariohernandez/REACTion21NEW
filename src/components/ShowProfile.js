import React, {useState, useEffect} from 'react';
import '../App.css';
import Table from 'react-bootstrap/Table';


function ShowProfile() {
    useEffect(()=>{
        fetchItems();
    },[]);
const [profiles, setItems] = useState([]);

async function handleDelete(event){
    event.preventDefault();
    if (window.confirm("Are you sure you want to delete?")){
      // alert("great");
    // console.log("the link was clicked");
    const url = 'http://localhost:5000/profiles/'+event.target.value;
    // console.log(event.target.value); 
    await fetch(url, {
        method: 'delete'

      });        
      fetchItems();  
    }       
}

    const fetchItems = async ()=>{
      if(localStorage.getItem("jwtToken") == null){
        window.location.replace("/login");
      }
        const data = await fetch('http://localhost:5000/profiles');
        const profiles = await data.json();        
        setItems(profiles);
    }
  return (
    <div className="App">
      <div className="custom-table">
        <h1 id="title">Show Profile</h1>
<Table striped bordered hover variant="light">
  <thead className="thead-dark">
    <tr>
      
      <th>User</th>
      <th>Gender</th>
      <th>Age</th>
      <th>City</th>
      <th>Edit</th>
      <th>Delete</th>

    </tr>
  </thead>

  <tbody>
  {profiles.map(item =>(
    
    <tr>
      
      <td>{item.user}</td>
      <td>{item.gender}</td>
      <td>{item.age}</td>
      <td>{item.city}</td>
      <td>{item.date.toString().slice(0,10) +" at: " + item.date.toString().slice(11,19) }</td>
      <td><button className="btn btn-primary" value={item._id} onClick={handleDelete}>Delete</button></td>
      <td><button className="btn btn-primary" value={item._id} ><a id="buttonLink" href={'/editprofile/'+item._id}>Edit</a></button></td>
      </tr>
    ))} 
  </tbody>
</Table>

            </div>               
              
    </div>
  );
}

export default ShowProfile;