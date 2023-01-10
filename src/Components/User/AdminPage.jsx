import React, {useEffect, useState, useRef} from 'react';
import axios from 'axios';
import "../../Styles/AdminPage.css";
import $ from "jquery";


const AdminPage = () => {
    const [users, updateUsers] = useState([]);
    const [selected, updateSelected] = useState({});

    let newName = useRef();
    let newEmail = useRef();
    let newImage = useRef();
    
    useEffect(() => {
        
        try{
            axios.get("https://rubixe-backend-production.up.railway.app/admin/validate", {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('jwt')}`
                }
            }).then((res) => {
                const str = res.data;
                console.log(res.data);
                if(str != "Incorrect Email or Password" && str != "error occured" && str != "invalid token" && str != "token expired"){
                    updateUsers(res.data);
                }
            }).catch((e) => {console.log(e);})
        } catch(e) {
            console.error(e);
        }

        $(function() {
            $('#download-pdf-btn').click(function() {
                var element = document.getElementById("user-table");
                var printWindow = window.open('', '', 'height=400,width=800');
                printWindow.document.write('<html><head><title>Print</title>');
                printWindow.document.write('</head><body >');
                printWindow.document.write(element.outerHTML);
                printWindow.document.write('</body></html>');
                printWindow.document.close();
                printWindow.print();

            })
        });

    }, []);


    const saveChanges = (id) => {
        let n = newName.current.value;
        let e = newEmail.current.value;
        let i = newImage.current.value;

        if(n || e || i) {
           let obj = {
                    _id: id,
                    name: n || "", 
                    email: e || "",
                    img_url: i || "",
                }

            try{
                axios.post("https://rubixe-backend-production.up.railway.app/edit/update", obj, {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("jwt")}`
                    }
                }).then((res) => {
                    let dt = res.data;
                    if((typeof dt == "object") && (dt.length != 0)) {
                        updateUsers(res.data);
                        alert("Changes Saved");
                    } else {
                        alert(res.data);
                    }
                }).catch((err) => {
                    alert("error occured");
                })
            }catch(e) {
                alert("error occured, try Login again");
            }
        }

    }

    const deleteUser = (id)  => {
        if(!id) {
            return;
        }
        try{
            let obj = {
                _id: id
            }
            axios.post("https://rubixe-backend-production.up.railway.app/edit/delete", obj, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("jwt")}`
                }
            }).then((res) => {
                let dt = res.data;
                if((typeof dt == "object") && (dt.length != 0)) {
                    updateUsers(res.data);
                    alert("Changes Saved");
                } else {
                    alert(res.data);
                }
            }).catch((err) => {
                alert("error occured");
            })
        }catch(e) {
            alert("error occured, try Login again");
        }
    }


  return (
    <div style={{padding: "100px 2%"}}>

        <h1>ADMIN ACCESS</h1>

        <br /><br /><br /><br />

        {
            (Object.keys(selected).length != 0) ? <div>

                <label htmlFor="">Name</label><br />
                <input style={{border: "1px solid black"}} type="text" placeholder={selected.name} ref={newName}/> <br /><br />

                <label htmlFor="">Email</label><br />
                <input style={{border: "1px solid black", padding: "8px 30px", borderRadius: "10px"}} type="email" placeholder={selected.email} ref={newEmail}/> <br /><br />

                <label htmlFor="">Image URL</label><br />
                <input style={{border: "1px solid black"}} type="text" placeholder={selected.img_url} ref={newImage}/> <br /><br />

                <button style={{border: "1px solid black",padding: "8px 30px",  backgroundColor: "black"}} onClick={() => saveChanges(selected._id)}>Save Changes</button>

                <button style={{border: "1px solid black",padding: "8px 30px",  backgroundColor: "black"}} onClick={() => {
                    updateSelected({});
                }}>Back</button>

            </div> : <h3>Select the users from the list below</h3>
        }


        <br /><br /><br />

        <button id="download-pdf-btn" style={{color: "blue"}}>Download PDF</button>
        <br /> <br />

        <table id="user-table" border="1px">
            <thead>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Image</th>
                <th>Action</th>
            </thead>

            {
                users.map((ele) => {
                    return(
                        <tr>
                            <td>{ele._id}</td>
                            <td>{ele.name}</td>
                            <td>{ele.email}</td>
                            <td>{ele.img_url}</td>
                            <td><span id={ele._id} className='edit' onClick={(e) => {
                                let size = users.length;
                                for(let i=0; i<size; i++) {
                                    if(users[i]._id == e.target.id) {
                                        updateSelected(users[i]);
                                        break;
                                    }
                                }
                                return;
                            }}>Edit</span> | <span id={ele._id}  className='delete' onClick={(e) => deleteUser(e.target.id)}>Delete</span></td>
                        </tr>
                    );
                })
            }


        </table>


    </div>
  )
}

export default AdminPage;