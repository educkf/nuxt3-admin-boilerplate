import { db } from '../config/firebase';
import { defineEventHandler, getQuery, getRouterParam } from 'h3'

export default defineEventHandler(async (event) => {
    const target = event.context.params.target
    const query = getQuery(event)

    try {
        const snapshot = await db.collection(target).get()
        const data = snapshot.docs.map(doc => doc.data())

        console.log({ data })

        return {
            success: true,
            [target]: data,
            request: {
                target: target,
                query: query
            }
        }

    } catch (err) {
        console.log({ err })
        return {
            success: false,
            [target]: null,
            request: {
                target: target,
                query: query
            }
        }
    }
})
