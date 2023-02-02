import React from "react";
import { Form, Input, TextArea, Button } from "semantic-ui-react";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";
const Contact = () => {
  const SERVICE_ID = "service_4rp4ypx";
  const TEMPLATE_ID = "template_x00veei";
  const USER_ID = "kVUYU0lx7h-0z4W4m";

  const handleEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID).then(
      (result) => {
        console.log(result.text);
        Swal.fire({
          icon: "success",
          title: "Message Sent Successfully",
        });
      },
      (error) => {
        console.log(error.text);
        Swal.fire({
          icon: "error",
          title: "Ooops, something went wrong",
          text: error.text,
        });
      }
    );
    e.target.reset();
  };

  return (
    <div
      id="contact"
      className=" border-y-2 border-opacity-50 border-gray-400 md:mx-8 rounded-lg lg:mt-10 backdrop-blur-lg mx-2 bg-gray-700 bg-opacity-20 py-5"
    >
      <h4 className="text-center text-2xl md:text-3xl font-Head text-gray-200 my-2 md:mt-5">
        Let's discuss
      </h4>
      <div className="flex flex-col items-center">
        <div className="lg:my-10 md:w-2/3 w-full mx-2  lg:w-1/2">
          <Form onSubmit={handleEmail}>
            <div className="flex flex-col md:flex-row md:justify-between mx-2">
              <div className="flex flex-col md:my-auto gap-3 md:gap-5 md:w-2/5 w-full md:mx-5">
                <Input
                  type="text"
                  className="rounded-md shadow-sm shadow-gray-500 px-2 py-2"
                  placeholder="Name Here"
                />
                <Input
                  type="email"
                  className="rounded-md shadow-sm shadow-gray-500 px-2 py-2"
                  placeholder="Email Here"
                />
              </div>
              <div className="md:w-1/2 w-full flex flex-col gap-2">
                <TextArea
                  rows="10"
                  placeholder="Your Message"
                  className="mt-5 rounded-md shadow-md px-2 w-full py-2"
                ></TextArea>
                <Button type="submit">Send Message</Button>
              </div>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
