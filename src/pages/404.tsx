import React from "react"
import { PageProps } from "gatsby"

import config from '../config';

import Seo from '../components/Seo';
import Placeholder from '../components/Placeholder';
import Wrapper from "../components/Wrapper";

const NotFoundPage: React.FC<PageProps<{}>> = () => (
  <Wrapper>
    <Seo title={config.meta.title} description={config.meta.description} />
    <Placeholder title={config.meta.title} description={config.meta.description} />
  </Wrapper>
)

export default NotFoundPage
