import { defineEventHandler, getHeaders } from 'h3'

export default defineEventHandler((event) => {
    console.log('entrou isAuth middleware')
    const headers = getHeaders(event)
    console.log({ cookie: headers.cookie })
})
