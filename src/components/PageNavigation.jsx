import React, { useEffect, useState } from 'react'

function PageNavigation({page, pages, setPage}) {

    // THIS IS WHY YOU CAN CHANGE NUMBER OF PAGE BY SIMPLY TYPING NUMBER
const SelectPage=(e)=>{

  if(Math.sign(e.target.value)===-1){ // EXAMINING SIGN WHEREVER IS NEGATIVE OR POSITIVE
    
    
    window.location.reload(false)

  }
  else{
    setPage(e.target.value);
  }

  }
  

  // IF TYPED PAGE IS TOO BIG
  // IT is TRIGERRED WHEN TYPING NEW NUMBER OR CHANGING PAGES WITH ARROWS 
  useEffect(()=>{
    if(page>pages){
      setPage(pages)
    }
  },[page])

  
  
  const PreviousPage=()=>{
    if(page>1){
      setPage(prevPage=> Number(prevPage)-1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    else{
      setPage(1)
    }
  }
  
  
  const NextPage=()=>{

    if(page<pages){

      setPage(prevPage=> Number(prevPage)+1)
      window.scrollTo({ top: 0, behavior: 'smooth' });

    }
    else{
      setPage(pages)
    }


  }

  return (
        
    <div className='flex flex-row justify-center items center m-6 my-12 h-fit'>
                {console.log("PAGE: ", page)}
                <div className={`arrow-left ${page!==1?"border-black":null}`} onClick={PreviousPage}></div>
                <span>
                  <span>Page </span>
                <input type="number" min="1" className='w-12 mx-2 text-center focus:outline-none' value={page} onChange={SelectPage}/>
                / {pages}
                </span>
                <div className={` arrow-right ${page<pages?"border-black":null}`} onClick={NextPage}></div>
         </div>
  )
}

export default PageNavigation