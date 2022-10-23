import React, { useEffect } from 'react';
import GoogleLogin, { GoogleLogout } from  'react-google-login';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { gapi } from 'gapi-script';
import axios from 'axios';
const LoginForm = () => {

    const clientId = '1007868586139-5vt7vipqkdk8mekqel6ai4l0idal7cn4.apps.googleusercontent.com';

    useEffect(()=>{

        window.gapi.load('auth2', function() {
            window.gapi.auth2
          .init({
            client_id: clientId,
            scope: ""
          })
          .then(() => {
            let auth2 = window.gapi.auth2.getAuthInstance();
                let isSingedIn = auth2.isSignedIn.get();
          })
        });
    })

    const successGoogle = (response) =>{

        let param = response.profileObj;
        // console.log(response);
        // console.log(response.tokenId);
        
        axios.get(`/api/login?name=${param.name}&email=${param.email}&googleId=${param.googleId}&imageUrl=${param.imageUrl}`)
        .then(Response => {
            // console.log(Response.data);
        })
        .catch(error =>{
            // console.log(error);
        });
    }

    const failGoogle = (response) =>{
        alert('실패');
    }

    const onLogoutSuccess = () =>{
        console.log('logout!!');
    }

    return (
        <div>
            <GoogleOAuthProvider>
                <GoogleLogin 
                    style={{cursor : 'pointer'}}
                    clientId={clientId}
                    buttonText='구글 로그인'
                    onSuccess={successGoogle}
                    onError={failGoogle}
                    cookiePolicy={'sigle_host_origin'}
                    isSignedIn={true}
                />
                <GoogleLogout 
                    clientId={clientId}
                />
            </GoogleOAuthProvider>
        </div>
    );
};

export default LoginForm;