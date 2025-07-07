const getUser = (id, cb)  =>{
    const time = id === 1 ? 1000 : 2000;
    setTimeout(() => {
        const nama = id === 1 ? 'Joko' : 'koa';
        cb({id, nama});
    }, time);
};

const userSatu = getUser (1, (hasil) => {
    console.log(hasil);
});
const userDua = getUser (2, (hasil) => {
    console.log(hasil);
});

const halo = 'hello world!';
console.log('selesai');