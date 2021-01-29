import Head from 'next/head';
import styles from '../styles/Home.module.css';
import {
  TextField,
  Paper,
  Box,
  Button,
  Accordion,
  AccordionDetails,
  AccordionSummary,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { create as createXMLDoc } from 'xmlbuilder2';

export default function Home() {
  const handleSubmit = (e) => {
    console.log(e);
    console.log(e.target.elements);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>DataPassports Technical Challenge</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>DataPassports Technical Challenge </h1>
        <h2>Fowad Sohail</h2>
        <Accordion style={{ width: 600 }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            Task{' '}
          </AccordionSummary>
          <AccordionDetails>
            Please make a basic React app that has 4-5 form fields that the user
            can fill in. From that, an XML file should be generated. Also, setup
            a basic unit test for your code (via Jest or anything else that you
            think makes sense). Notes: this does NOT have to be a very
            complicated endeavor. A simple single page with a few text fields is
            fine. You should put it up on GitHub and send me the link.
          </AccordionDetails>
        </Accordion>
      </main>
      <Paper elevation={5} style={{ marginTop: 60, padding: 30 }}>
        <img src='/DataPassportsLogo.svg' style={{ marginLeft: 15 }} />
        <form onSubmit={handleSubmit}>
          <Box display='flex' flexDirection='column' style={{ margin: 40 }}>
            <TextField
              id='first-name'
              label='First Name'
              variant='outlined'
              style={{ marginBottom: 15 }}
            />
            <TextField
              id='last-name'
              label='Last Name'
              variant='outlined'
              style={{ marginBottom: 15 }}
            />
            <TextField
              id='address'
              label='Address'
              variant='outlined'
              style={{ marginBottom: 15 }}
            />
            <TextField
              id='company-name'
              label='Company Name'
              variant='outlined'
              style={{ marginBottom: 15 }}
            />
          </Box>
          <Button
            // type='submit'
            color='primary'
            variant='contained'
            style={{ marginBottom: 15 }}
          >
            Generate XML
          </Button>
        </form>
      </Paper>

      <footer className={styles.footer}>
        <a
          href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
          target='_blank'
          rel='noopener noreferrer'
        >
          Powered by{' '}
          <img src='/vercel.svg' alt='Vercel Logo' className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}
