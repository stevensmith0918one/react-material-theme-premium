import { Container } from '@mui/material';
// hooks
import useSettings from '../../hooks/useSettings';
// components
import Page from '../../components/Page';

export default function ImportCandidate() {
  const { themeStretch } = useSettings();

  return (
    <Page title="User: List | Minimal-UI">
      <Container maxWidth={themeStretch ? false : 'lg'}></Container>
    </Page>
  );
}
