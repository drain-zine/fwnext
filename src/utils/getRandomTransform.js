const getRandomTransform = () => {
    const max = 50;
    const min = -50;
    const x = Math.random() * (max - min) + min;
    const y= Math.random() * (max - min) + min;

    return `translate(${x}%, ${y}%)`;
};

export default getRandomTransform;