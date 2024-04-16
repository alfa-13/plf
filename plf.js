const overlay = document.createElement('div');
overlay.style.cssText = `
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    background-image: url('https://alfa-13.github.io/plf/lg.svg');
    background-color: #fff;
    background-size: 50%;
    background-repeat: no-repeat;
    background-position: center center;
`;

document.body.appendChild(overlay);
