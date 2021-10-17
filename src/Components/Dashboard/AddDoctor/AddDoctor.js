import React,{ useState } from 'react';
import SideBar from '../SideBar/SideBar';


const AddDoctor = () => {
    const [info, setInfo] = useState({});
    const [file, setFile] = useState(null);

    const handleBlur = e => {
        const newInfo = {...info};
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
    }

    const handleFileChange = (e) => {
        const newFile = e.target.files[0];
        setFile(newFile);
    }

    const handleSubmit = (e) => {
        // const files = event.target.files
        const formData = new FormData()
        formData.append('file', file);
        formData.append('name', info.name);
        formData.append('email', info.email);
      
        fetch('https://guarded-oasis-04933.herokuapp.com/AddADoctors', {
          method: 'POST',
          body: formData
        })
        .then(response => response.json())
        .then(data => {
          console.log(data)
        })
        .catch(error => {
          console.error(error)
        })
    }

    return (
        <section className="container-fluid row">
            <SideBar></SideBar>
            <div className="col-md-10 p-4 ps-5" style={{ backgroundColor: "#F4FDFB" }}>
                <form onSubmit={handleSubmit}>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input onBlur={handleBlur} className="form-control"type="email" class="form-control" name="email" placeholder="Enter email"/>                       
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Name</label>
                        <input  onBlur={handleBlur} type="text" class="form-control" name="name" placeholder="Enter Name"/>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Upload file</label>
                        <input onChange={handleFileChange} type="file" class="form-control" placeholder="file"/>
                    </div>
                    
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
        </section>
    );
};

export default AddDoctor;