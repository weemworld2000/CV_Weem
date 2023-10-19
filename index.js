
const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    console.log({ clientX, clientY });

    //0 - 1
    const { innerWidth, innerHeight } = window;
    const fractionX = clientX / innerWidth; //0 - 1
    const fractionY = clientY / innerHeight; //0 - 1

    console.log({ fractionX, fractionY  });

    const pupilX = -5 + fractionX * 40;
    const pupilY = -5 + fractionY * 30;

    console.log({ pupilX, pupilY });

    document.querySelectorAll('.pupil')
    .forEach(el => {
        el.style.transform = `translate(${pupilX}px, ${pupilY}px)`;
    })

}

window.addEventListener('mousemove', handleMouseMove);