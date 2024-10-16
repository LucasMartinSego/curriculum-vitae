import React from 'react';

const HtmlLoader = () => {
    return (
      <iframe src={`${process.env.PUBLIC_URL}/chatbot/index.html`} width="100%" height="768px" title="Embedded HTML" />
    );
};

export default HtmlLoader;
