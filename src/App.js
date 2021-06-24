
import { useDispatch, useSelector } from 'react-redux';
import React, {  useEffect } from 'react'
import Feed from './Components/Feed';
import Header from './Components/Header';
import Login from './Components/Login';
import Sidebar from './Components/Sidebar';
import { login, logout, selectUser } from './features/userSlice';
import { auth } from './Components/firebase';
import Widgets from './Components/Widgets';




function App() {
 

  const user = useSelector(selectUser)
  
  const dispatch = useDispatch()
    const logoutOfApp = () => {
        dispatch(logout())
        auth.signOut()

    }

  useEffect(() => {
    auth.onAuthStateChanged(userAuth => {
      if (userAuth) {
        //user is logged in 
        dispatch(login({
          email: userAuth.email, 
          uid: userAuth.uid, 
          displayName: userAuth.displayName, 
          photoURL: userAuth.photoURL, 
        }))

      } else {

        //user is logged out 
        dispatch(logout())
      }


    })


  }, [dispatch] )


  return (
    <>
    
    <Header onClick={logoutOfApp}/> 

{!user ? (<Login/>) : (
  <div className="flex justify-center gap-x-9 mt-6 ">
  <Sidebar/> 
  <Feed/> 
  <Widgets/>
  </div>



) }

    
    

    
      
    </>
  );
}

export default App;
