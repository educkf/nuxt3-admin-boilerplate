import { db } from '../config/firebase';
import { defineEventHandler } from 'h3'

export default defineEventHandler((event) => {
    try {
        return {
            success: true
        }

    } catch (err) {
        return err
    }
})
