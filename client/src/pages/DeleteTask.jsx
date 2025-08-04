// import Navigation from '../components/Navigation';

// function DeleteTask({state}) {
//   const {contract,account} = state
//   const deleteTask = async (e)=>{
//     e.preventDefault();
//     const taskId = document.querySelector('#Id').value;
//     try{
//       const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/delete-task/${taskId}`,{
//         method: "delete",
//         headers:{
//           "content-type":"application/json"
//         },
//         // body: JSON.stringify({taskDate:taskDate})
//     })
//     const data = await res.json()
//     console.log(data)
//     if(data.status == 200){
//         await contract.method.deleteTask(id).send({from:account})
//   }}
//     catch(err){
//       console.log(err)
//     }
//   }

//   return (
//     <div>
//       <Navigation />
//       <form action="" onSubmit={deleteTask}>
//         <label htmlFor="Id">ID:</label>
//         <input type="text" id='Id'/>
//         <button>Delete</button>
//       </form>
      
//       </div>
//   )
// }

// export default DeleteTask
import Navigation from '../components/Navigation';

function DeleteTask({state}) {



  const {contract,account} = state
  const deleteTask = async (e)=>{

    e.preventDefault();
    const taskId = document.querySelector('#Id').value;
    try {
      const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/delete-task/${taskId}`,{
        method: "delete",
        headers:{
          "content-type":"application/json"
        }
        // body: JSON.stringify({taskId:taskId})
    })
    console.log(res)
    const data = await res.json()
    console.log(data)
    if(data.status == 200){
        await contract.methods.deleteTask(taskId).send({from:account})

    }
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <div>
      <Navigation />
      <form action="" onSubmit={deleteTask}>
        <label>ID:</label>
        <input type="text" id='Id'/>
        <button>Delete</button>
      </form>
      
      </div>
  )
}

export default DeleteTask