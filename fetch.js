const options = {
    method: 'POST',
    headers: {
        'content-type': 'application/x-www-form-urlencoded',
    },
};

const encodedParams = new URLSearchParams();

encodedParams.append("key1", "value1");
encodedParams.append("key2", "value2");
encodedParams.append("key3", "value3");


options.body = encodedParams;
    
fetch(url, options)
.then(response => response.json())
.then(data => console.log(data))
.catch(err => console.error(err));      