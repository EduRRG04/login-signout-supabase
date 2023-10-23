import { useEffect, useState } from "react"
import { supabase } from "./supabaseClient"
import Auth from "./Auth"


function SignOut(){
  return(
    <>
      <span>Autencticado</span>
      <button onClick={() => supabase.auth.signOut()}>
        Cierra sesi&oacute;n
      </button>

    </>
  )
}

function App() {
  const [session, setSession] = useState(null);

  useEffect(()=>{
    supabase.auth.getSession().then(({data: {session}})=>{
      setSession(session);
    });
    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  },[]);

  return (
    <>
     <h1 className="text-2x1 font-bold underline"> 
     Weather Station App
     </h1>
     <div className="container max-w-lg mx-auto">
      {!session ? <Auth/> : <span>Autenticado</span>}
     </div>
    </>
  )
}

export default App
