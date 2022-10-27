import React from 'react'
import SuperAdminNavBar from '../navbars/SuperAdminNavBar'
import Reports from '../Reports'

const SuperAdminBusiness = () => {
    return (
        <div >
            <SuperAdminNavBar/>
            <div className="right">
            <Reports/>
            </div>
        </div>
    )
}

export default SuperAdminBusiness