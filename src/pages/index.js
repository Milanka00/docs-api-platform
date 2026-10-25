import {Redirect} from '@docusaurus/router';
import useBaseUrl from '@docusaurus/useBaseUrl';

// The site opens on the Overview page.
export default function Home() {
  return <Redirect to={useBaseUrl('/overview')} />;
}
