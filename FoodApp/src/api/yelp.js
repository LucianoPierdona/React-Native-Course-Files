import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer Va9UPByZhtuWGw7J-qLdq1r6fpGFE2W_iy85lHDNxXPRArs3szWlIAA72xiM3AyJaOp707dZ06OnRJG0J1AsLsCxSS1Yydbo8BtQpvnr-kKr2rYw-TbClD4Rgt9OX3Yx',
    }
});