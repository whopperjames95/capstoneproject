let userInfo = require('./db.json')

globalId = 1

module.exports = {
    createLead: (req,res) => {
        let {name, email, make, model} = req.body;

        let newLead = {
            id: globalId,
            name,
            email,
            make,
            model
        }
        userInfo.push(newLead);
        res.status(200).send(userInfo);
        globalId++;

    },
    
    getDetailPrice: (req,res) =>  {
        let statement = ''
        const {button} = req.params
        if (button === 'exterior'){
            statement = 'Starting At: $150'
        } else if (button === 'interior'){
            statement = 'Starting At: $185'
        } else if (button === 'full') {
            statement = 'Starting At: $250'
        } else if (button === 'ceramic') {
            statement = 'Starting At: $850'
        } else if (button === 'paint') {
            statement = 'Starting At: $550'
        }
        res.status(200).send(statement)
    }
    
}

