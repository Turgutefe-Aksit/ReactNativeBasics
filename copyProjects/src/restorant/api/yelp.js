import axios from "axios";

export default axios.create({
    baseURL:'https://api.yelp.com/v3/businesses',
    headers:{
        Authorization:'Bearer V3EUrleFAf2_4uOhcIGS5In5a0pjTOQ3XzheaGxWbQpO9fYhtDzWAsLUC83zblxu-mxWngEH46E9653oTJoyfp_CzDXQPk5mebBWRfeLpyWrHS1QNOFgYqk81gPfZnYx'
    }
})