import axios from 'axios';

export const fetchData = () =>
    axios
        .get('http://localhost:3000/')
        .then((res) => {
            return res;
        })
        .catch(function (error) {
            throw new Error(error);
            return error;
        });
