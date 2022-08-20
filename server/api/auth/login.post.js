import { db } from '../config/firebase';
import { defineEventHandler, readBody } from 'h3'

import cryptojs from 'crypto-js'

export default defineEventHandler(async (event) => {
    try {
        const body = await readBody(event)

        console.log({ body })

        console.log(cryptojs.AES.decrypt(body.password, process.env.HASHKEY).toString(cryptojs.enc.Utf8))

        return {
            success: true,
            body: body
        }

    } catch (err) {
        return err
    }
})
