
import React,{useEffect,useState} from "react";
import { useHistory } from 'react-router-dom';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "../CSS/about.css"   
import { BarChart, CartesianGrid, XAxis, YAxis, Bar} from 'recharts'

toast.configure()



function Dashboard (){
    const history = useHistory();
    const [data1,setData1]=useState(false)
    const [data2,setData2]=useState(false)

    const [data3, setData3] = useState([]);
    const [data4, setData4] = useState([]);
    const [data5, setData5] = useState([]);

    const homeevent = (e) =>{
        setData1(true)
        setData2(false)
    }

    const categoriesevent = (e) =>{
        setData1(false)
        setData2(true)
    }

    const getreportdata=(e)=>
    {
        fetch('http://rxp6013.uta.cloud/Server/reportdata.php')
            .then(res => res.json())
            .then(json => setData3(json));
          // console.log(data)
    }
    useEffect(()=>{
        toast.success('User login successfully',{autoClose:2000})
        getreportdata();
        getbusinessdata();
        getclinicdata();
    },[])
    const getbusinessdata=(e)=>
    {
        fetch('http://rxp6013.uta.cloud/Server/businessinfo.php')
            .then(res => res.json())
            .then(json => setData4(json));
          // console.log(data)
    }
    const getclinicdata=(e)=>
    {
        fetch('http://rxp6013.uta.cloud/Server/clinicinfo.php')
            .then(res => res.json())
            .then(json => setData5(json));
          // console.log(data)
    }
    const data = [
      { 
        time: "Residents",
        users: data3.TotalResidents,
      },
      {
        time: "Inspectors",
        users: data3.TotalInspectors,
      },{
        time: "Business",
        users: data3.Totalbusiness,
      },
      ,{
          time: "Counties",
          users: data3.TotalCounties,
        }
    ]
    const handlesubmit = (e) =>{
    window.localStorage.setItem('flag',null);
     history.push('/loginpage')
    }

    return(
        <div className="row">
<div className="col-md-2" style={{padding:"0px"}}>
<div className="container-fluid">
    <div className="row flex-nowrap">
        <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
            <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                    <li className="nav-item" onClick={homeevent}>
                        <a className="nav-link align-middle px-0">
                            <i className="fs-4 bi-house"></i> <span className="ms-1 d-none d-sm-inline">Home</span>
                        </a>
                    </li>
                    <li>
                        <a href="#submenu1" data-bs-toggle="collapse" className="nav-link px-0 align-middle" onClick={() => history.push('/adminpage')}>
                            <i className="fs-4 bi-speedometer2"></i> <span className="ms-1 d-none d-sm-inline">Dashboard</span> </a>
                    </li>
                    <li>
                        <a className="nav-link px-0 align-middle"  onClick={() => history.push('/serviceinformation')}>
                            <i className="fs-4 bi-table"></i> <span className="ms-1 d-none d-sm-inline">Service Information</span></a>
                    </li>
                    <li>
                        <a className="nav-link px-0 align-middle" onClick={()=>history.push('/registerpage')}>
                            <i className="fs-4 bi-people"></i> <span className="ms-1 d-none d-sm-inline">Register Services</span> </a>
                    </li>
                  
                </ul>
                <hr/>
                <br/><br/><br/><br/><br/><br/><br/><br/><br/>
                <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                <div className="dropdown pb-4">
                    <a href="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                        <img src="https://github.com/mdo.png" alt="hugenerd" width="30" height="30" class="rounded-circle"/>
                        <span className="d-none d-sm-inline mx-1">Admin</span>
                    </a>
                    <ul className="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
                        <li><a className="dropdown-item" onClick={handlesubmit}>Sign out</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>
</div>
<div className="col-md-10">
    <br></br>
    <div className="row">
        <div className="col-md-3">
        <div class="card">
        <div class="card-body">
        <h5 class="card-title">Residnets Count</h5>
        <p class="card-text">{data3.TotalResidents}</p>
        </div>
        </div>
    </div>
        <div className="col-md-3">
        <div class="card">
        <div class="card-body">
        <h5 class="card-title">Inspectors Count</h5>
        <p class="card-text">{data3.TotalInspectors}</p>
        </div>
        </div>
        </div>
        <div className="col-md-3">
        <div class="card">
        <div class="card-body">
        <h5 class="card-title">Registered Bussiness Count</h5>
        <p class="card-text">{data3.Totalbusiness}</p>
        </div>
        </div>
        </div>
        <div className="col-md-3">
        <div class="card">
        <div class="card-body">
        <h5 class="card-title">Counties in Margarita</h5>
        <p class="card-text">{data3.TotalCounties}</p>
        </div>
        </div>
        </div>
    </div>
<br></br>
<div className="row">
    <div className="col-md-12">
    <div style={{width: '70vw', height: '45vh'}}>
    <BarChart width={630} height={250} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="time" />
      <YAxis />
      <Bar label={true} dataKey="users" fill="#8884d8" />
    </BarChart>
  </div>
    </div>
</div>
<div className="row">
    
    <div className="col-md-6">
    <h3>Business Information</h3>
    <table class="table table-success table-striped">
                        <thead>
                            <tr>
                                <th scope="col">Business Name</th>
                                <th scope="col">Type</th>
                                <th scope="col">Address</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data4.map((item) => (
                                    <tr>
                                        <td>{item.Name}</td>
                                        <td>{item.Type}</td>
                                        <td>{item.Address}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>

    </div>
    <div className="col-md-6">
    <h3>Clinic Information</h3>
    <table class="table table-success table-striped">
                        <thead>
                            <tr>
                                <th scope="col">Clinic Name</th>
                                <th scope="col">Doctor</th>
                                <th scope="col">Address</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data5.map((item) => (
                                    <tr>
                                        <td>{item.Name}</td>
                                        <td>{item.Doctor}</td>
                                        <td>{item.Address}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>

    </div>
</div>

</div>
</div>
    )
}
export default Dashboard