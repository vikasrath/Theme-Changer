import React, { useState } from 'react'
import themecontext from './Themecontext'

function Themestate({children}) {
    const [thememode,setthememode] = useState("light")
    
  return (
    <themecontext.Provider value={{thememode,setthememode}}>
        {children}
    </themecontext.Provider>
  );
}

export default Themestate