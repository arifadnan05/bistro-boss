import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';

const CheckOutForm = () => {
    const stripe = useStripe()
    const elements = useElements()
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
        }
        else{
            console.log('Payment Method', paymentMethod)
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
            </form>
        </div>
    )
}

export default CheckOutForm
