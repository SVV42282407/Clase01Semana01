const throwdice = () => {
    return new Promise((resolve, reject) => {
       setTimeout(()=>{
            resolve(Math.floor(Math.random() * 6) + 1)
        },1000);
    });
}

//var counter = 0;

async function doTask(counter=0){
    let rolldice = await throwdice();
    console.log(rolldice);
    if (rolldice === 6 || counter === 9){
        return;
    } else {
        counter = counter + 1;
        doTask(counter);
    }
}

doTask();