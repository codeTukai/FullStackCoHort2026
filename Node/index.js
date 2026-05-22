const thenable ={
    then: function(onFulfilled){
        setTimeout(() =>onFulfilled(42), 10);
    }
}

async function main() {
    const v = await thenable;
    console.log("Hello world");
    
}

main()