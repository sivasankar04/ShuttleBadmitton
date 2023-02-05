const getTeamDetails = async (req, res) => {
    try {
        const { body } = req

        res.status(200).send({ data: body })
    } catch(err) {
        console.log('API error', err.message)
        res.status(400).send({ error: err.message })
    }
}

module.exports = { getTeamDetails }
