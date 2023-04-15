import Favicon from "@/public/favicon";
import Head from "next/head";
import React from "react";
import Container from "@/components/container";

const Contact = () => {
  return (
    <>
      <Head>
        <Favicon />
        <title>IT Center | Contact</title>
      </Head>
      <section>
        <Container>
          <h1>Contact Page</h1>
        </Container>
      </section>
    </>
  );
};

export default Contact;
