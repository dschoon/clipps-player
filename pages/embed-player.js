import Head from 'next/head';
import { withRouter } from 'next/router';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';

const Index = withRouter(props => (
    <div className="embed-player">
        <Head>
            <title>Embedded Player</title>
            <meta property="og:description"
                  content='testing!'/>
        </Head>
        <div>
            <h1>{props.router && props.router.query && props.router.query.episodeId}</h1>
            <ul>
                {props.shows.map(show => (
                    <li key={show.id}>
                        <Link as={`/p/${show.id}`} href={`/post?id=${show.id}`}>
                            <a>{show.name}</a>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    </div>
));

Index.getInitialProps = async function() {
    const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
    const data = await res.json();

    console.log(`Show data fetched. Count: ${data.length}`);

    return {
        shows: data.map(entry => entry.show)
    };
};

export default Index;