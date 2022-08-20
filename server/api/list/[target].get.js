import { db } from '../config/firebase';
import { defineEventHandler, getQuery } from 'h3'

export default defineEventHandler(async (event) => {
    try {
        const target = event.context.params.content
        const query = getQuery(event);

        const content = await db.collection(target)
            .doc()
            .get();

        return {
            [target]: content.data(),
            request: {
                target: target,
                query: query
            }
        }

    } catch (err) {
        return err
    }
})
