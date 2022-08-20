export const userTransform = (user) => {
    return {
        _id: user._id,
        email: user.email
    }
}
