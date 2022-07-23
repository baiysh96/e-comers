export const totalRating = (rating) => {
    const total = rating.reduce((acc, rec) => (acc + rec) / rating.length, 0)
    return total.toFixed(2)
}