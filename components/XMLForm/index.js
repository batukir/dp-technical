import { TextField, Paper, Box, Button } from '@material-ui/core';
import { create as createXMLDoc } from 'xmlbuilder2';
import fileDownload from 'js-file-download';

export default function XMLForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.elements);

    const { firstName, lastName, address, companyName } = e.target.elements;
    const xmlDoc = createXMLDoc({ version: '1.0' })
      .ele('user')
      .ele('firstName')
      .txt(firstName.value)
      .up()
      .ele('lastName')
      .txt(lastName.value)
      .up()
      .ele('address')
      .txt(address.value)
      .up()
      .ele('companyName')
      .txt(companyName.value)
      .up()
      .up();
    const xmlFile = xmlDoc.end({ prettyPrint: true });
    fileDownload(xmlFile, 'xml-form.xml');
  };

  return (
    <Paper elevation={5} style={{ marginTop: 60, padding: 30 }}>
      <img src='/DataPassportsLogo.svg' style={{ marginLeft: 15 }} />
      <Box display='flex' flexDirection='column' style={{ margin: 40 }}>
        <form id='xml-form' onSubmit={handleSubmit}>
          <div>
            <TextField
              id='firstName'
              label='First Name'
              style={{ marginBottom: 15 }}
            />
          </div>
          <div>
            <TextField
              id='lastName'
              label='Last Name'
              style={{ marginBottom: 15 }}
            />
          </div>{' '}
          <div>
            <TextField
              id='address'
              label='Address'
              style={{ marginBottom: 15 }}
            />
          </div>{' '}
          <div>
            <TextField
              id='companyName'
              label='Company Name'
              style={{ marginBottom: 15 }}
            />
          </div>
          <Button
            type='submit'
            form='xml-form'
            color='primary'
            variant='contained'
            style={{ marginBottom: 15 }}
          >
            Generate XML
          </Button>
        </form>{' '}
      </Box>
    </Paper>
  );
}
