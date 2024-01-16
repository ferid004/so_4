import React, { useEffect, useState } from 'react'
import './index.scss'
import { Helmet } from 'react-helmet-async'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
function Add() {
  const [search, setSearch] = useState('')
  const [sort, setSort] = useState('')

  /////
  const [product, setProduct] = useState([])
  const axiosAll = async () => {
    const res = await axios.get('http://localhost:3000/')
    const data = res.data.data
    setProduct(data)
    console.log(data);
  }
  useEffect(() => {
    axiosAll()
  }, [])
  ////

  const axiosDelete = async (id) => {
    await axios.delete(`http://localhost:3000/${id}`)
    axiosAll()
  }
  const axiosPost = async (data) => {
    await axios.post('http://localhost:3000/', data)
    axiosAll()
  }

  return (


    <div>
      <Helmet>
        <title>add</title>
      </Helmet>
      <>
        <Formik
          initialValues={{ name: '', src: '', info: '' }}
          validationSchema={Yup.object({
            name: Yup.string()
              .required('Required'),
            src: Yup.string()
              .required('Required'),
            info: Yup.string().required('Required'),
          })}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            axiosPost(values)
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
              resetForm()
            }, 400);
          }}
        >
          <Form>
            <Field name="name" type="text" />
            <ErrorMessage name="name" />

            <Field name="src" type="text" />
            <ErrorMessage name="src" />

            <Field name="info" type="text" />
            <ErrorMessage name="info" />

            <button type="submit">Submit</button>
          </Form>
        </Formik>

        <br />
        <br />
        <br />
        <input type="text" onChange={(e) => setSearch(e.target.value)} />
        <br />
        <br />
        <button onClick={()=>setSort({prop:"name",asc:true})}>a-z</button>
        <button onClick={()=>setSort({prop:"name",asc:false})}>z-a</button>
        <button onClick={()=>setSort(null)}>default</button>
        <br />
        <br />
        <table border={1}>
          <thead>
            <tr>
              <th>name</th>
              <th>src</th>
              <th>info</th>
              <th>delete</th>
            </tr>
          </thead>
          <tbody>
            {product && product
            .filter(x=>x.name.toLowerCase().includes(search.toLowerCase()))
            .sort((a,b) => {
              if (sort && sort.asc===true) {
                return (a[sort.prop] > b[sort.prop]) ? 1 : ((b[sort.prop] > a[sort.prop]) ? -1 : 0)
              }else if (sort && sort.asc===false) {
                return (a[sort.prop] < b[sort.prop]) ? 1 : ((b[sort.prop] < a[sort.prop]) ? -1 : 0)
              }else{
                null  
              }
            })
            .map((item) => (
              <tr key={item._id}>
                <td>{item.name}</td>
                <td><div className="imgbox"><img src={item.src} alt="" /></div></td>
                <td>{item.info}</td>
                <td onClick={() => axiosDelete(item._id)}>
                  <button>delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    </div>
  )
}

export default Add