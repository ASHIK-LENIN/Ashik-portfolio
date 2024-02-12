import React from "react";

import styles from "./Contact.module.css";

import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_vbwl42b', 'template_xkediru', form.current, 'vceqqRDoTKDnvbXpB')
      .then((result) => {
        console.log(result.text);
        form.current.reset();
      }, (error) => {
        console.log(error.text);
      });


  };
  let notify = () => toast("Email send successfully");

  return (
    <>
        <div data-aos="fade-left" data-aos-anchor-placement="top-center">

      <h2 className={styles.title}>CONTACT</h2>

      <div className={styles.text}>
        <p>Let's connect <span>!</span> </p>
      </div>

      <div className={styles.contactContainer}>


        <footer id="contact" className={styles.container}>



          <form ref={form} onSubmit={sendEmail} >
            <label>Name</label>
            <input type="text" name="user_name" placeholder="Enter your name..." />
            <label>Email</label>
            <input type="email" name="user_email" placeholder="Enter your email..." />
            <label>Message</label>
            <textarea name="message" placeholder="What you want to share with me..." />
            <input type="submit" value="Send" onClick={notify} />

          </form>
          <ToastContainer />




        </footer>


        <span className={styles.rightSide}>

<div className={styles.sideBar}>

<div className={styles.linkBox}>
<div className={styles.links}>
<span>
<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="tabler-icon tabler-icon-mail"><path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z"></path><path d="M3 7l9 6l9 -6"></path></svg>
</span>
<div className={styles.link}>
<h3>Mail</h3>
<a href="mailto:ashikleninn@gmail.com">ashikleninn@gmail.com</a>
</div>
</div>
</div>


<div className={styles.linkBox}>
<div className={styles.links}>
<span>
<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="tabler-icon tabler-icon-brand-linkedin"><path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path><path d="M8 11l0 5"></path><path d="M8 8l0 .01"></path><path d="M12 16l0 -5"></path><path d="M16 16v-3a2 2 0 0 0 -4 0"></path></svg>

</span>
<div className={styles.link}>
<h3>Linkedin</h3>
<a href="https://www.linkedin.com/in/ashik-lenin/">Linkedin/ashik-lenin</a>
</div>
</div>
</div>


<div className={styles.linkBox}>
<div className={styles.links}>
<span>
<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="tabler-icon tabler-icon-map-search"><path d="M11 18l-2 -1l-6 3v-13l6 -3l6 3l6 -3v7.5"></path><path d="M9 4v13"></path><path d="M15 7v5"></path><path d="M18 18m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path><path d="M20.2 20.2l1.8 1.8"></path></svg>

</span>
<div className={styles.link}>
<h3>Location</h3>
<a href="https://maps.app.goo.gl/LcGPok6SkCqfWm6GA">Kakkanad, Kochi</a>
</div>
</div>
</div>

</div>
</span>




      </div>
      </div>
    </>

  );
};
