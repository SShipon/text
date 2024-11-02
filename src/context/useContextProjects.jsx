import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { onAuthStateChanged } from 'firebase/auth';  

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
    const [newsData, setNewsData] = useState([]);
    const [data, setData] = useState([]);
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);


    //firebase working start
     //firebase working start
      //firebase working start

      const signUp = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
      };
    
      const logIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
      };
    
      const googleLoginInProvider = (provider) => {
        return signInWithPopup(auth, provider);
      };
    
      const githubSignUp = (provider) => {
        return signInWithPopup(auth, provider);
      };
    
      const logOut = () => {
        return signOut(auth);
      };
    
      const verifyEmail = () => {
        sendEmailVerification(auth.currentUser).then(() => {
          alert('cheek your email please verify now');
        });
      };
    
  
      useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
          console.log('current User showed');
          setUser(currentUser);
           setLoading(false);
        });
        return () => unsubscribe();
      }, []);
  

  //login and register auth working done

    // Fetch projects
    useEffect(() => {
      const fetchData = async () => {
        try {
          const res = await fetch('https://my-protfolio-server.onrender.com/projects');
          const result = await res.json();
          setData(result);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      fetchData();
    }, []);

    // Fetch news data
    useEffect(() => {
      fetch('https://my-protfolio-server.onrender.com/projects')
        .then(res => res.json())
        .then(data => {
          setNewsData(data);
        })
        .catch(error => console.error('Error fetching data:', error));
    }, []);
    
    // Fetch blogs data from /blog API
    useEffect(() => {
      fetch('https://my-protfolio-server.onrender.com/blog')
        .then(res => res.json())
        .then(data => {
          setBlogs(data);
        })
        .catch(error => console.error('Error fetching blogs:', error));
    }, []);
  
    // Filter projects by category
    const getFilteredProjects = category => {
      return newsData.filter(item => item.category === category);
    };
   
    const authInfo = {
      getFilteredProjects,
      data,
      blogs, 
      loading,
      user,
      signUp,
      logIn,
      logOut,
      googleLoginInProvider,
      githubSignUp,
      verifyEmail,
    
       
    };

    return (
      <AuthContext.Provider value={authInfo}>
        {children}
      </AuthContext.Provider>
    );
};

export default AuthProvider;
