import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { TextField, Paper, Box, Button } from '@material-ui/core';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>DataPassports Technical Challenge</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>DataPassports Technical Challenge </h1>
        <h2>Fowad Sohail</h2>
        <Paper elevation={5} style={{ marginTop: 60 }}>
          <form noValidate autoComplete='off'>
            <Box display='flex' flexDirection='column' style={{ margin: 40 }}>
              <TextField
                id='first-name'
                label='First Name'
                variant='outlined'
                style={{ margin: 10 }}
              />
              <TextField
                id='last-name'
                label='Last Name'
                variant='outlined'
                style={{ margin: 10 }}
              />
              <TextField
                id='address'
                label='Address'
                variant='outlined'
                style={{ margin: 10 }}
              />
              <TextField
                id='company-name'
                label='Company Name'
                variant='outlined'
                style={{ margin: 10 }}
              />
              <Button
                color='primary'
                variant='contained'
                style={{ marginTop: 10 }}
              >
                Generate XML
              </Button>
            </Box>
          </form>
        </Paper>
      </main>

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
