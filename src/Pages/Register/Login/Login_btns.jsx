import React from 'react'
import GoogleIcon from '@mui/icons-material/Google';
import AppleIcon from '@mui/icons-material/Apple';
import { NavLink } from 'react-router-dom';
function Login_btns() {
  return (
    <div className="login__btns">
    <button>
        <GoogleIcon/>
        continue with google
    </button>
    <button>
        <AppleIcon/>
        continue with Apple id
    </button>
    <p>
или
</p>
<NavLink to={"/flow/signup"} className={"login__sign-up"}>Sign up</NavLink>
<p>Регистрируясь, вы соглашаетесь с Условиями предоставления услуг и Политикой конфиденциальности, а также с Политикой использования файлов cookie.</p>
<h3>Уже зарегистрированы?</h3>
<NavLink>login</NavLink>

</div>
  )
}

export default Login_btns