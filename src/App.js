import React from 'react'

import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton, Slider } from '@mui/material';
import ButtonGroup from '@mui/material/ButtonGroup';

import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import FavoriteIcon from '@mui/icons-material/Favorite';
import NavigationIcon from '@mui/icons-material/Navigation';

import Checkbox from '@mui/material/Checkbox';
import { DeleteForeverOutlined } from '@mui/icons-material';
import FormControlLabel from '@mui/material/FormControlLabel';

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';

import Rating from '@mui/material/Rating';
function App() {
  const [state, setstate] = React.useState(0)
  const incr = () => {
    setstate(state + 10);
  }
  const decr = () => {
    setstate(state - 10);
  }
  return (
    <>
      <h1> Text Button </h1>
      <Button variant="contained" color="success">Click Me</Button>
      <Button variant="text" color="error" href="https://akshdesai1.github.io/fetch2/">Link</Button>
      <Button variant="contained" color="secondary">Click Me</Button>
      <Button variant="contained" color="warning" className='mx-2'>Click Me</Button>
      <Button variant="contained" color="info">Click Me</Button>
      <Button variant="contained" color="primary">Click Me</Button>

      <hr />
      <Stack spacing={5} direction="row">
        <Button variant="text">Text</Button>
        <Button variant="contained" size='large' >Contained</Button>
        <Button variant="outlined">Outlined</Button>
      </Stack>

      <hr />
      <h1>Button with Icons</h1>
      <Button variant="contained" color="secondary" size="large"> <DeleteIcon /> Delete <DeleteIcon /></Button>
      <Button variant="contained" color="secondary" size="large" endIcon={<DeleteIcon />}> Delete </Button>

      <hr />
      <h1>Icon Buttons</h1>
      <IconButton color="warning" >
        <DeleteIcon />
      </IconButton>

      <hr />
      <h1>Custom Button</h1>
      <Button style={{ backgroundColor: "red" }} variant="contained" >Custom</Button>
      <Button sx={{ backgroundColor: "red" }} variant="contained" >Custom</Button>

      <hr />
      <h1>Button Click Event</h1>
      <Button variant='contained' onClick={() => { console.log('Button Clicked') }}>Custom1</Button>

      <hr />
      <h1>Button Group</h1>
      <ButtonGroup variant="contained" color='secondary' aria-label="outlined primary button group">
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>

      <hr />
      <h1>Vertical Button Group</h1>
      <ButtonGroup variant="contained" color='secondary' aria-label="outlined primary button group" orientation='vertical'>
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>

      <hr />
      <h1>Floating Action Button</h1>
      <Fab color="primary" aria-label="add">
        <AddIcon />
      </Fab>
      <Fab color="secondary" aria-label="edit" >
        <EditIcon />
      </Fab>
      <Fab color="warning" variant="extended">
        <NavigationIcon sx={{ mr: 1 }} />
        AKSH
      </Fab>
      <Fab disabled aria-label="like" size='small'>
        <FavoriteIcon />
      </Fab>

      <hr />
      <h1>Checkbox</h1>
      <Checkbox checked />
      <Checkbox disabled />
      <Checkbox color="secondary" />
      <Checkbox color="warning" defaultChecked />
      <Checkbox color="warning" indeterminate />
      <Checkbox color="success" icon={<DeleteIcon />} checkedIcon={<DeleteForeverOutlined />} />
      <Checkbox onChange={(e) => { console.log("checked done", e) }} />

      {/* <FormGroup> */}
      <FormControlLabel control={<Checkbox defaultChecked color='secondary' />} labelPlacement='top' label="Label" />
      <FormControlLabel control={<Checkbox defaultChecked color='secondary' />} labelPlacement='end' label="Label" />
      <FormControlLabel disabled control={<Checkbox />} label="Disabled" labelPlacement='bottom' />
      <FormControlLabel disabled control={<Checkbox />} label="Disabled" labelPlacement='start' />
      {/* </FormGroup> */}

      <hr />
      <h1>Radio Button</h1>
      <Radio value="a" name="aksh" />
      <Radio value="b" name="aksh" />
      <FormControlLabel control={<Radio />} label="male" labelPlacement='start' />

      <RadioGroup
        defaultValue="female" row
      >
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
        <FormControlLabel value="other" control={<Radio />} label="Other" />
      </RadioGroup>

      <hr />
      <h1>Rating </h1>
      <Rating />
      <Rating value={4} />
      <br />
      <Rating precision={0.1} />

      <hr />
      <h1>Slider</h1>
      <Slider />
      <Slider value={state} defaultValue="50" />
      <Button variant="contained" color="warning" disabled={state === 100} onClick={incr}>Increase By 10</Button>
      <Button variant="contained" color="secondary" disabled={state === 0} onClick={decr}>Decrease By 10</Button> {state}
    </>
  );
}

export default App;
