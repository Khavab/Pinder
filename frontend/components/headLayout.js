import Head from 'next/head'

export default function HeadLayout({ children }) {
    return (
        <div>
            <Head>
                <title>Pinder</title>
                <meta name="description" content="A website by Shibli Nomani" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
        </div>
    )
}