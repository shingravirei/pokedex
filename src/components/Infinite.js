import React from 'react';
import InfiniteScroll from 'react-infinite-scroller';

// We have an setUpper prop here to constrol the upper limite
// from the slice that's used above
const Infinite = ({ children, setUpper, pokemonSliceSize }) => {
    const [hasMore, setHasMore] = React.useState(true);

    React.useEffect(() => {
        const handleScroll = () => {
            const isAtBottomOfScreen =
                window.innerHeight + window.scrollY >=
                document.body.offsetHeight - 200;

            if (isAtBottomOfScreen) {
                setHasMore(true);
            }
        };

        window.addEventListener('scroll', handleScroll);

        // we will cleanup the scroll event here
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [setHasMore]);

    const handleLoadMore = () => {
        setUpper((prevState) => {
            if (prevState > pokemonSliceSize) return prevState;

            return prevState + 20;
        });

        setHasMore(!hasMore);
    };

    return (
        <>
            {/* this loader below is temp */}
            <InfiniteScroll
                pageStart={0}
                loadMore={handleLoadMore}
                hasMore={hasMore}
                loader={<p key={0}>...loader</p>}
            >
                {children}
            </InfiniteScroll>
        </>
    );
};

export default Infinite;
