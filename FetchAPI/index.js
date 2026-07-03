// fetch
async function main() {
   const response = await fetch("https://sum-server.100xdevs.com/todos")

   const jsonFile =await response.json()

   console.log(jsonFile.todos.length);
   
}

//axios

async function main() {
   const response = await axios.get("https://sum-server.100xdevs.com/todos")

   const jsonFile = response.body

   console.log(jsonFile);
   
}


main()