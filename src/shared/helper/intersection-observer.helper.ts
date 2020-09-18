import {
    useState,
    useEffect,
    SetStateAction,
    Dispatch
} from 'react';

/**
 * Intersection Observer Helper
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2020.09.17
 */
export const useInfiniteScroll = (): [
    boolean,
    Dispatch<SetStateAction<boolean>>
] => {
    const [isFetching, setIsFetching] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return (): void =>
            window.removeEventListener(
                'scroll',
                handleScroll
            );
        // eslint-disable-next-line
    }, []);

    /**
     * Handle Scroll
     * @return {void}
     */
    const handleScroll = (): void => {
        if (
            window.innerHeight +
                document.documentElement.scrollTop !==
                document.documentElement.offsetHeight ||
            isFetching
        )
            return;
        setIsFetching(true);
    };

    return [isFetching, setIsFetching];
};
