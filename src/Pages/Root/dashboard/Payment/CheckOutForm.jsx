import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { useEffect, useState } from 'react';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import useCart from '../../../../hooks/useCart';

const CheckOutForm = () => {
    const stripe = useStripe()
    const [clientSecret, setClientSecret] = useState("")
    const elements = useElements()
    const [error, setError] = useState("")
    const axiosSecure = useAxiosSecure()
    const [cart] = useCart()
    const totalPrice = cart.reduce((total, item) => total + item.price, 0)

    useEffect(() => {
        axiosSecure.post('/create-payment-intent', {price: totalPrice})
        .then(res => {
            console.log(res.data.clientSecret);
            setClientSecret(res.data.clientSecret)
        })
    }, [axiosSecure, totalPrice])

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) {
            return
        }
        const card = elements.getElement(CardElement)
        if (card === null) {
            return
        }
        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card
        })
        if(error){
            console.log('Payment Error', error)
            setError(error.message)
        }
        else{
            console.log('Payment Method', paymentMethod)
            setError("")
        }
    }
    return (
        <div className='px-[200px]'>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className='btn btn-small btn-primary my-4' type="submit" disabled={!stripe}>
                    Pay
                </button>
                <p className='text-red-500'>{error}</p>
            </form>
        </div>
    )
}

export default CheckOutForm
