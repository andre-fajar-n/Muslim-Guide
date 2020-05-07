import dotenv from 'dotenv'



const INFO = dotenv.config().parsed;
// const env = dotenv.config().parsed;

const env = {
    street : {
        baseUrl : INFO.STREET_API_URL,
        key : INFO.STREET_API_KEY
    }
}

export default env