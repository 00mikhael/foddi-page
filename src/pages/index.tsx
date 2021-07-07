import React from 'react'
import Head from 'next/head'

import { appData } from '../appData.js'

import Layout from '../components/layout'
import Specials from '../sections/Specials/'
import Testimonials from '../sections/Testimonials'
import Contact from '../sections/Contact'

export default function Home() {
    return (
        <React.Fragment>
            <Head>
                <title>{`${appData.name} - ${appData.description}`}</title>
                <meta name='description' content={appData.description} />
            </Head>
            <Layout>
                <Specials />
                <Testimonials />
                <Contact />
            </Layout>
        </React.Fragment>
    )
}
