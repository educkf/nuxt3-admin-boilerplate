import { db } from '../config/firebase';
import { defineEventHandler, readBody } from 'h3'
import jwt from 'jsonwebtoken'

import { userTransform } from '../transformations/user'

const AUTH_ERROR = {
    success: false,
    user: null,
    token: null
}

export default defineEventHandler(async (event) => {
    try {
        const body = await readBody(event)

        const snapshot = await db.collection('users')
            .where('email', '==', body.user)
            .limit(1)
            .get()

        if (!snapshot.empty) {
            let user = []

            snapshot.forEach((doc) => {
                user = doc.data()
            })

            if (user.password === body.password) {
                return {
                    success: true,
                    user: userTransform(user),
                    token: jwt.sign({ user: userTransform(user) }, process.env.HASHKEY)
                }

            } else {
                return AUTH_ERROR
            }

        } else {
            return AUTH_ERROR
        }

    } catch (err) {
        console.log({ err })
        return AUTH_ERROR
    }
})
