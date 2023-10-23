import { useState } from "react";
import { supabase } from "./supabaseClient";

export default function Auth(){
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async (e) => {
        e.preventDefault();

        setLoading(true);
        const {error} = supabase.auth.signInWithPassword({
            email,
            password,
        });
        if (error){
            alert(error.error_description || error.message);
        } else {
            alert("Redireccionando...");
        }

        setLoading(false);
    }

    return(
        <div className="container max-w-lg mx-auto">
            <h1 className="text-2x1 font-bold text-center">
                Inicio de sesi&oacute;n
            </h1>
            <form onSubmit={handleLogin}>
                <label htmlFor="email">
                    Correo electr&oacute;nico
                </label>
                <input 
                    className="" 
                    type="email" 
                    placeholder="Correo electr&oacute;nico"
                    value={email}
                    required={true}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <label htmlFor="password">
                    Contrase&ntilde;a
                </label>
                <input 
                type="password"
                placeholder="Contrase&ntilde;a"
                value={password}
                required={true}
                onChange={(e) => setPassword(e.target.value)} 
                />
                <button disabled={loading}>
                    {loading
                        ? <span>Inicioando sesi&oacute;n</span>
                        : <span>Inicia sesi&oacute;n</span>
                    }
                </button>
            </form>
        </div>
    )
}