import {gsap} from "gsap";


const SmoothScroll = (scrollerRef, scrollerContainerRef) => {
    const html = document.documentElement;
    const body = document.body;

    const scroller = {
        target: scrollerRef.current,
        ease: 0.05, // <= scroll speed
        endY: 0,
        y: 0,
        resizeRequest: 1,
        scrollRequest: 0,
    };

    let requestId = null;

    gsap.set(scroller.target, {
        rotation: 0.01,
        force3D: true
    });

    const updateScroller = () => {

        var resized = scroller.resizeRequest > 0;

        if (resized) {
            var height = scroller.target.clientHeight;
            scrollerContainerRef.current.style.height = height + "px";
            console.log('height > ', height);
            scroller.resizeRequest = 0;
        }

        var scrollY = window.pageYOffset || html.scrollTop || body.scrollTop || 0;

        scroller.endY = scrollY;
        scroller.y += (scrollY - scroller.y) * scroller.ease;

        if (Math.abs(scrollY - scroller.y) < 0.05 || resized) {
            scroller.y = scrollY;
            scroller.scrollRequest = 0;
        }

        gsap.set(scroller.target, {
            y: -scroller.y
        });

        requestId = scroller.scrollRequest > 0 ? requestAnimationFrame(updateScroller) : null;
    }

    const onScroll = () => {
        scroller.scrollRequest++;
        if (!requestId) {
            requestId = requestAnimationFrame(updateScroller);
        }
    }

    const onResize = () => {
        console.log('onResize > ', scroller);
        scroller.resizeRequest++;
        if (!requestId) {
            requestId = requestAnimationFrame(updateScroller);
        }
    }

    const onFocus = () => {
        scroller.resizeRequest++;
        if (!requestId) {
            requestId = requestAnimationFrame(updateScroller);
        }
    }

    const setupListeners = () => {
        updateScroller();
        // window.focus();
        window.addEventListener("resize", onResize);
        document.addEventListener("scroll", onScroll);

        window.addEventListener('focus', onFocus);

        window.addEventListener('load', onFocus)
    }

    return {
        init: () => {
            setupListeners();
        },
        updateScroller: () => {
            scroller.resizeRequest++;
            console.log('updateScroller', scroller)
            if (!requestId) {
                requestId = requestAnimationFrame(updateScroller);
            }
        },
        destroy: () => {
            console.log('DESTROY');
            window.removeEventListener('resize', onResize);
            window.removeEventListener('scroll', onScroll);
            window.removeEventListener('focus', onFocus);
            window.removeEventListener('load', onFocus);

            scroller.endY = 0;
            scroller.y = 0;
            scroller.resizeRequest = 1;
            scroller.scrollRequest = 0;
        }
    }

}

export default SmoothScroll;