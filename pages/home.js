import Button from "@/components/button";
import Container from "@/components/container";
import Favicon from "@/public/favicon";
import Head from "next/head";
import React from "react";
import style from "../styles/Home.module.css";

const Home = () => {
  return (
    <div>
      <Head>
        <Favicon />
        <title>IT Center | Home</title>
      </Head>
      <main className={style.main}>
        <Container>
          <div className={style.row}>
            <div className={style.text__content}>
              <h4>IT center xojeli rayoni</h4>
              <h1>
                Zamonavi kasiblarni <br />
                biz bilan o’rganing
              </h1>
              <p>
                To identify a font from an image, use a font finder or font{" "}
                <br />
                identifier.
              </p>
            </div>
            <Button>Kurslarni ko’rish</Button>
          </div>
        </Container>
      </main>
    </div>
  );
};

export default Home;
