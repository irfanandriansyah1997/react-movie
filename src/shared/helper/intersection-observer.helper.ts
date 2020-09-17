import {
    useRef,
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
export const IntersectionObserverHelper = ({
    root = null,
    rootMargin,
    threshold = 0
}: IntersectionObserverInit): [
    Dispatch<SetStateAction<HTMLDivElement | null>>,
    boolean
] => {
    const [intersect, setIntersect] = useState<boolean>(
        false
    );
    const [node, setNode] = useState<HTMLDivElement | null>(
        null
    );
    const observer = useRef(
        new window.IntersectionObserver(
            ([entry]) => {
                setIntersect(entry.isIntersecting);
            },
            {
                root,
                rootMargin,
                threshold
            }
        )
    );

    useEffect(() => {
        const { current: currentObserver } = observer;
        currentObserver.disconnect();

        if (node) currentObserver.observe(node);

        return (): void => currentObserver.disconnect();
    }, [node]);

    return [setNode, intersect];
};
