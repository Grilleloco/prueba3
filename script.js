const sections = document.querySelectorAll('.section');

window.addEventListener('scroll', function() {
    let scrollTop = window.scrollY;

    sections.forEach((section, index) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (scrollTop >= sectionTop && scrollTop < sectionTop + sectionHeight) {
            const percentScrolled = (scrollTop - sectionTop) / sectionHeight;
            const nextSection = sections[index + 1];

            if (nextSection) {
                const nextSectionTop = nextSection.offsetTop;
                const nextSectionHeight = nextSection.offsetHeight;

                const blendedColor = blendColors(section, nextSection, percentScrolled);

                document.body.style.backgroundColor = blendedColor;
            } else {
                document.body.style.backgroundColor = section.style.backgroundColor;
            }
        }
    });
});

function blendColors(section1, section2, percent) {
    const color1 = getComputedStyle(section1).backgroundColor;
    const color2 = getComputedStyle(section2).backgroundColor;

    const r1 = parseInt(color1.slice(1, 3), 16);
    const g1 = parseInt(color1.slice(3, 5), 16);
    const b1 = parseInt(color1.slice(5, 7), 16);

    const r2 = parseInt(color2.slice(1, 3), 16);
    const g2 = parseInt(color2.slice(3, 5), 16);
    const b2 = parseInt(color2.slice(5, 7), 16);

    const r = Math.round(r1 + (r2 - r1) * percent);
    const g = Math.round(g1 + (g2 - g1) * percent);
    const b = Math.round(b1 + (b2 - b1) * percent);

    return `rgb(${r}, ${g}, ${b})`;
}
