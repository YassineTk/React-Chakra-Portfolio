import React from "react";
import Mode from "./components/Mode";
import emailjs from "emailjs-com";
import { Button, useToast } from "@chakra-ui/react";

function Contact() {
  function sendEmail(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        "gmail",
        "template_c028eig",
        e.target,
        "user_nPfosYnU46kFFIUYiNVt9"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }
  const toast = useToast();
  return (
    <div class="contact">
      <Mode />

      <div class="contact__header skills__title">GET IN TOUCH</div>
      <div className="contact__form">
        <form onSubmit={sendEmail}>
          <div className="name__container">
            <label for="fname">Name</label>
            <input type="text" id="name" name="name" />
          </div>
          <div className="email__container">
            <label for="lname">Email</label>
            <input type="email" id="email" name="email" />
          </div>
          <div className="message__container">
            <label for="lname">Message</label>
            <textarea id="message" name="message" />
          </div>
          <Button 
            type="submit"
            style={{ marginTop: "15px", background: "#dadada", color: "black" }}
            onClick={() =>
              toast({
                title: "Message sent",
                description: "You have successfully sent your email",
                duration: 9000,
                status: "success",
                isClosable: true,
              })
            }
          >
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
