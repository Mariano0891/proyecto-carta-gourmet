import React, { useContext, useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { CartContext } from './context/CartContext'
import { addDoc, collection, getFirestore } from 'firebase/firestore'


const CheckOut = () => {

    const {cart, totalCartAmount, emptyCart} = useContext(CartContext)

    const [confirmationAlert, setConfirmationAlert] = useState(false)

    //const [user, setUser] = useState({})

    //const [orderId, setOrderId] = useState()

    const makeOrder = (values) => {
        const order = {
            buyer: values,
            items: cart,
            total: totalCartAmount(),
        }
        console.log("Haciendo la orden", order)
        saveOrder( order )
    }

    const saveOrder = async( order ) => {
        const db =getFirestore()
        const ordersCollection = collection(db, 'orders')
        const {id} =await addDoc(ordersCollection, order)
        console.log("Nueva orden: ", id)
    }

  return (
    <div class="text-yellow-600">
        <Formik
            initialValues={{
                name: '',
                surname: '',
                telephone: '',
                mail: '',
                mailConfirmation: ''
            }}

            validate = {(values) => {
                let errors ={}
                // Name validation
                if (!values.name){
                    errors.name = 'Por favor ingresa tu nombre'
                } else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.name)){
                    errors.name = 'El campo solo puede contener letras, espacios y tildes'
                }
                // Surname Validation
                if (!values.surname){
                    errors.surname = 'Por favor ingresa tu apellido'
                } else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.surname)){
                    errors.surname = 'El campo solo puede contener letras, espacios y tildes'
                }
                // Telephone validation
                if (!values.telephone){
                    errors.telephone = 'Por favor ingresa tu numero de telefono'
                } else if(!/^\d{7,14}$/.test(values.telephone)){
                    errors.telephone = 'Ingrese su numero sin espacios, con el codigo de area sin 0 y sin el prefijo 15'
                }
                // Mail validation
                if (!values.mail){
                    errors.mail = 'Por favor ingresa tu direccion de correo'
                } else if(!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(values.mail)){
                    errors.mail = 'Ingresa una direccion de correo valida'
                }
                // Mail confirmation validation
                if (!values.mailConfirmation){
                    errors.mailConfirmation = 'Por favor repite tu direccion de correo'
                } else if (values.mail !== values.mailConfirmation){
                    errors.mailConfirmation = 'Los correos ingresados no coinciden'
                }

                return errors
            }}
            onSubmit ={(values, {resetForm}) => {
                console.log(values)
                makeOrder(values)
                setConfirmationAlert (true)
                resetForm()
                emptyCart()
                setTimeout(() => setConfirmationAlert(false), 2000)
            }}
        >
            {({errors}) => (
                <Form class="bg-yellow-300 w-2/5 m-6 mx-auto">
                    <div>
                        <Field 
                            type="text" 
                            id="name" 
                            name="name" 
                            placeholder="Nombre" 
                            class="bg-yellow-100 text-xl w-4/5 h-14 p-2 my-4"
                        />
                        <ErrorMessage name="name" component={() => (
                            <div class="text-red-500 text-xs w-4/5 mt-[-14px] mx-auto flex font-semibold">{errors.name}</div>
                        )} />
                    </div>
                    <div>
                        <Field 
                            type="text" 
                            id="surname" 
                            name="surname" 
                            placeholder="Apellido" 
                            class="bg-yellow-100 text-xl w-4/5 h-14 p-2 m-4"    
                        />
                        <ErrorMessage name="surname" component={() => (
                            <div class="text-red-500 text-xs w-4/5 mt-[-14px] mx-auto flex font-semibold">{errors.surname}</div>
                        )} />
                    </div>
                    <div>
                        <Field 
                            type="text" 
                            id="telephone" 
                            name="telephone" 
                            placeholder="Telefono celular" 
                            class="bg-yellow-100 text-xl w-4/5 h-14 p-2 m-4"
                        />
                        <ErrorMessage name="telephone" component={() => (
                            <div class="text-red-500 text-xs w-4/5 mt-[-14px] mx-auto flex font-semibold">{errors.telephone}</div>
                        )} />
                    </div>
                    
                    <div>
                        <Field 
                            type="text" 
                            id="mail" 
                            name="mail" 
                            placeholder="Mail" 
                            class="bg-yellow-100 text-xl w-4/5 h-14 p-2 m-4"
                        />
                        <ErrorMessage name="mail" component={() => (
                            <div class="text-red-500 text-xs w-4/5 mt-[-14px] mx-auto flex font-semibold">{errors.mail}</div>
                        )} />
                    </div>
                    <div>
                        <Field 
                            type="text" 
                            id="mailConfirmation" 
                            name="mailConfirmation" 
                            placeholder="Confirmar Mail" 
                            class="bg-yellow-100 text-xl w-4/5 h-14 p-2 m-4"
                        />
                        <ErrorMessage name="mailConfirmation" component={() => (
                            <div class="text-red-500 text-xs w-4/5 mt-[-14px] mx-auto flex font-semibold">{errors.mailConfirmation}</div>
                        )} />
                    </div>
                    <button type="submit" class="btn btn-warning m-4">Confirmar Pedido</button>
                    {confirmationAlert && <p class="text-xl font-semibold text-green-700">El formulario se envio con exito</p>}
                </Form>
            )}
        </Formik>
    </div>
  )
}

export default CheckOut