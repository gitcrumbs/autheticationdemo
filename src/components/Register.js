
import { useState,useRef,useEffect } from "react";


const Register = () =>{
  
     const userRef = useRef();
     const errRef = useRef();

     const[user,setUser] = useState('');
     const[validName,setValidName] = useState(false);
     const[userFocus,setUserFocus] = useState(false);

     const[pwd,setpwd] = useState(false);
     const[validpwd,setvalidpwd] = useState(false);
     const[pwdFocus,setpwdFocus] = useState(false);


     const [matchPwd,setmatchPwd]= useState('');
     const [validMatch,setvalidMatch]= useState(false);
     const [matchFocus,setmatchFocus]= useState(false);


     const[errMsg,seterrMsg] = useState('');
     const[success,setsuccess] = useState('');

     useEffect(()=>{
        userRef.current.focus();
     },[])

     useEffect(()=>{
       setValidName(user);
     },[user])


     useEffect(()=>{
        setvalidpwd(pwd);
        const match = pwd === matchPwd;
        setvalidMatch(match)
      },[user,matchPwd])

      useEffect(()=>{
        seterrMsg('');
      },[user,pwd,matchPwd])
 

    return(

        <section>
            <p ref={errRef} className={errMsg ? "errMsg" : "offScreen"} aria-live="assertive">{errMsg}</p>
            <h1>Register</h1>
            <form>
                <label htmlFor="username">
                    UserName :
                </label>
                <input
                 type="text"
                 id="username"
                 ref={userRef}
                 autoComplete="off"
                 onChange={(e)=>setUser(e.target.value)}
                 required
                 aria-invalid={validName ? "false" :"true"}
                 aria-describedby="uidnote"
                 onFocus={()=>setUserFocus(true)}
                 onBlur={()=>setUserFocus(false)}
                />
                
            </form>
        </section>
    )
}





export default Register;