import React from 'react'
import './Form.css'

const FormSuccessLog = ({NameofUser}) => {
    console.log(NameofUser)
    return (
        <div className="form-content-right">
        <div className="form-success">{NameofUser}
        </div>
        
        </div>
    )
}

export default FormSuccessLog
