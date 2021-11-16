import Head from 'next/head';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import XMLForm from '../components/XMLForm';

export default function Home() {
  return (
    <Box
      style={{
        minHeight: '100vh',
        padding: '0 0.5rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Head>
        <title>DataPassports Technical Challenge</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <h1 style={{ color: '#0070f3', textDecoration: 'none' }}>
        DataPassports Technical Challenge{' '}
      </h1>
      <h2>Batuhan Kir</h2>
      <Accordion style={{ width: 600 }}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          Task{' '}
        </AccordionSummary>
        <AccordionDetails>
          Please make a basic React app that has 4-5 form fields that the user
          can fill in. From that, an XML file should be generated. Also, setup a
          basic unit test for your code (via Jest or anything else that you
          think makes sense). Notes: this does NOT have to be a very complicated
          endeavor. A simple single page with a few text fields is fine. You
          should put it up on GitHub and send me the link.
        </AccordionDetails>
      </Accordion>
      <XMLForm />
    </Box>
  );
}
