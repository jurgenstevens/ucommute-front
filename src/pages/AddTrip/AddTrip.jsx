import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Origin from '../../components/Origin'

const AddTrip = () => {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        tripName: '',
        origin: '',
        destination: '',
    })

    const handleChange = e => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = async e => {
        e.preventDefault()
        try {
          // call will go here to submit to API
          navigate('/')
        } catch (err) {
          console.log(err)
        }
    }

    // deconstruct
    const { tripName, origin, destination } = formData

    // form validation; can't create trip unless fields are filled
    const isFormInvalid = () => {
        return !(tripName, origin, destination)
      }


    return (
        <>
            <Origin />
            {/* <form
                autoComplete='off'
                onSubmit={handleSubmit}
            >
                <input 
                    type="text"
                    value={tripName}
                />
            </form> */}
        </>
    )
}

export default AddTrip