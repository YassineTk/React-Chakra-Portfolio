import React from "react";
import Mode from "../components/Mode";
import emailjs from "emailjs-com";
import { Button, useToast, Text } from "@chakra-ui/react";

function Contact() {
  function sendEmail(e) {
    // update those variables with the values you have in your emailJs account / service
    // here is a 2min read Guide https://yassinetakedd.medium.com/how-to-use-emailjs-in-your-react-app-4fe84474ed56
    let serviceId = "gmail";
    let templateId = "template_c028eig";
    let userId = "user_nPfosYnU46kFFIUYiNVt9";

    e.preventDefault();
    emailjs.sendForm(serviceId, templateId, e.target, userId).then(
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
    <div className="contact">
      <Mode />

      <div className="contact__header skills__title">
        {" "}
        <Text fontWeight="bold">GET IN TOUCH </Text>{" "}
      </div>
      <div className="contact__form">
        <form onSubmit={sendEmail}>
          <div className="name__container">
            <label htmlFor="fname">Name</label>
            <input type="text" id="name" name="name" />
          </div>
          <div className="email__container">
            <label htmlFor="lname">Email</label>
            <input type="email" id="email" name="email" />
          </div>
          <div className="message__container">
            <label htmlFor="lname">Message</label>
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
                status: "info",
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
