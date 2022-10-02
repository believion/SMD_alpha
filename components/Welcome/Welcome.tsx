import { Title, Text, Anchor } from '@mantine/core';
import useStyles from './Welcome.styles';

export function Welcome() {
  const { classes } = useStyles();

  return(
    <div>
      <h1>this is the main page</h1>
    </div>
  )
}
