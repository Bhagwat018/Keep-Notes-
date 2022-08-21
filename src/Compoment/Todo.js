import React from 'react'
import { useState, useEffect} from 'react'
import './style.css'


// get the local storage 
const getLocalData=()=> {

  const lists = localStorage.getItem("mytodolist")
  if(lists){
    return  JSON.parse(lists)
  }
  else{
    return [];
  }
}

const Todo = () => {
  const[inputdata,setinputdata]=useState()
  const[items,setitems]=useState(getLocalData());
  // all the items funtion 
  const additem=()=>{
if(!inputdata){
  alert('plz fill the data')
}
else{
  const mynweinputdata= {
    id: new Date().getTime().toString(),
    name:inputdata
  }
  setitems([...items,mynweinputdata])
  setinputdata((""))
}

  }

  // how to delet item 
  // const deleteItem =( indx)=>{
  //    const updatedItem= items.filter((curElm)=>{
  //     return
  //     curElm.id !=== indx;
  //    })
  //    setitems(updatedItem)
     
  // }

  // remove all the wlments 
  const removeAll= () => {
    setitems([]);
  }
  //  adding local storage 
  useEffect(()=>{
     localStorage.setItem("mytodolist", JSON.stringify(items))
  },[items])
  return (
    <>
      <div className="main-div">
        <div className='child-div '>
          <figure>
            <img src="" alt="Todo Logo" />
            <figcaption>Add your List here</figcaption>
            <div className='addItems'>
               <input type="text"  placeholder='✍️ Add Items' className='form-control' 
                     value={inputdata}
                     onChange={((event)=>setinputdata(event.target.value))
                     }/>
               <i className=" fa fa-solid fa-plus" onClick={additem}></i>
            </div>
          </figure>
          {/* Show over items  */}

                <div className='showItems'>
                  {
                    items.map((curElm,index)=>{

                      return(
                        <div className="eachItem" key={curElm.id}>
                        <h3>{curElm.name}</h3>
                        
                        {/* <div className="todo-btn">
                        <i className=" far fa-edit add-btn"></i>
                        <i className=" far fa-trash-alt add-btn" 
                                  ></i>
                        </div> */}
    
                      </div>
    
                      )
                    })
                  }
                 

                </div>


                       {/* remove all button  */}

          <div className='showItems'>
            <button className='btn effect04' data-sm-link-text="Remove All" onClick={removeAll}> <span>CHECK LIST</span></button>


          </div>

        </div>
      </div>




    </>
  )
}

export default Todo
