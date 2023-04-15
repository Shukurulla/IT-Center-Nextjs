import Favicon from "@/public/favicon";
import Head from "next/head";
import React from "react";
import Container from "@/components/container";

const Courses = () => {
  return (
    <>
      <Head>
        <Favicon />
        <title>IT Center | Courses</title>
      </Head>
      <section>
        <Container>
          <h1>Courses Page</h1>
        </Container>
      </section>
    </>
  );
};

export default Courses;
