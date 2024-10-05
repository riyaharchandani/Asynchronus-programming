const fetchData = new Promise((resolve, reject) => {
    setTimeout(() => {
        const data = { id: 1, name: 'John Doe'};
        resolve(data);

    }, 1000);
});