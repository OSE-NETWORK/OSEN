import Layout from '../Components/layout';
import React, { useState, useEffect } from 'react';

function MyApp({ Component, pageProps }) {
return (
<Layout>
<Component {...pageProps}/>
</Layout>

);
}

export default MyApp;